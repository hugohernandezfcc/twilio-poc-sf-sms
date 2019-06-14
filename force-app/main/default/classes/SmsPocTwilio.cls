public with sharing class SmsPocTwilio {
    


    @AuraEnabled
	public static String senderMessages(String toNumber, String body){

		DoITConsulting__SmsPocTwilio__c customSettingPOC = DoITConsulting__SmsPocTwilio__c.getInstance();

		Http http = new Http();
		HttpRequest request = new HttpRequest();

		request.setEndpoint(customSettingPOC.DoITConsulting__URL__c+customSettingPOC.DoITConsulting__AccountSID__c+'/Messages.json');

		request.setMethod('POST');
		request.setHeader('Content-Type','application/x-www-form-urlencoded');
		request.setHeader('Authorization', 'Basic '+ EncodingUtil.base64Encode(Blob.valueOf(customSettingPOC.DoITConsulting__AccountSID__c+':'+customSettingPOC.DoITConsulting__Token__c)));
		request.setBody('From=+'+customSettingPOC.DoITConsulting__TwilioNumber__c+'&Body='+body+'&To=+'+toNumber);

		System.HttpResponse response = new System.Http().send(request);

		System.debug('::::::::: '+response.getBody());

		return response.getBody();
	}

}
