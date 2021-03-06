/* @author Priya
*/

//(function(){
	 dwrScript = {			  
			  errorHandler : function(message, ex) {
			     dwr.util.setValue("error", "Cannot connect to server. Initializing retry logic.", {escapeHtml:false});
			     setTimeout(function() { dwr.util.setValue("error", ""); }, 5000);
			  },
			  updatePollStatus : function(pollStatus) {
				    dwr.util.setValue("pollStatus", pollStatus ? "Online" : "Offline", {escapeHtml:false});
			  },
			  load : function(){
					
					
					// Initiate reverse ajax polling
				       dwr.engine.setActiveReverseAjax(true); 
				       // Called when a call and all retry attempts fail
				    // dwr.engine.setErrorHandler(errorHandler); 
				     // Optional function to call when the reverse ajax status changes (e.g. online to offline)
				     dwr.engine.setPollStatusHandler(dwrScript.updatePollStatus);
				     // Optional - We are online right now!  Until DWR determines we are not!
				     dwrScript.updatePollStatus(true); 
				      // Optional - When the page is unloaded, remove this ScriptSession.
				     dwr.engine.setNotifyServerOnPageUnload(true);
				      // Make a call to the server to begin updating the table!
				     DataReader.setIsDownloaded(true);
				     DataReader.updateValue();
				     
				     // Make a remote call to the server to add an attribute onto the ScriptSession which will be used in determining what pages receive updates!
				     dwrScript.addAttributeToScriptSession();
					
			  },
			  startPolling : function() {
				  
				  
//				  console.log("called");
//			      var json;
//			     $('#temp tr').each(function() {
//			      //  $("#temp").find("td:first").html();
//			         json = JSON.parse( $("#temp").find("td:first").html());   
//			         console.log(json)
////			      if(json.length != 0) {
////			       for(var i=0;i<json.data.length;i++)        
////			         PLCSpace.PLCEditorSpace.showdata(json.data[i] );       
////			       
////			      }
////			      else alert("circuit cannot be downloaded");
//			      });
				  
				  
				  
				  
				  
				  
				  //console.log("called");
				  var json=$('#UpdateBlockValueinDiv').val();
//				  //console.log(json);
				 // console.log(JSON.parse());
				   json=JSON.parse(json);
				   //console.log(json);
				  DCSSPACE.valueUpdator(json);
				  
			  },
			 
			  updatePollStatus : function(pollStatus) {
					dwr.util.setValue("pollStatus", pollStatus ? "Online" : "Offline", {
						escapeHtml : false
					});
			  },
			  errorHandler : function(message, ex) {
					dwr.util.setValue("error",
							"Cannot connect to server. Initializing retry logic.", {
								escapeHtml : false
							});
					/*setTimeout(function() {
						dwr.util.setValue("error", "");
					}, 5000);*/
				},
			  addAttributeToScriptSession : function() {
				   DataReader.addAttributeToScriptSession();
				
			  },
			StopDownload : function(){
				DataReader.setIsDownloaded(false);
			}
	 };
	 
	
//})();