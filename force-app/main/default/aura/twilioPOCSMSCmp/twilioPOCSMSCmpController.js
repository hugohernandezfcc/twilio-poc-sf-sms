({
    
    sendit : function(component, helper) {

        

        var action = component.get("c.senderMessages");
        action.setParams({
            "toNumber": component.get("v.toPhone"),
            "body": component.get("v.toBody")
        });

        action.setCallback(this, function(response){

            var parser = JSON.parse(response.getReturnValue());

            if(response.getState() == 'SUCCESS'){
                component.set('v.result', response.getReturnValue());

                var toastEvent = $A.get("e.force:showToast");

                if(parser.status != 'queued'){
                    
                    toastEvent.setParams({
                        title : 'Not verified phone',
                        message: parser.message,
                        messageTemplate: '',
                        duration:' 5000',
                        key: 'info_alt',
                        type: 'Warning',
                        mode: 'dismissible'
                    });
                    
                }else {
                    toastEvent.setParams({
                        title : 'Sent.',
                        message: 'Your message right now is on server twilio!!!',
                        messageTemplate: '',
                        duration:' 5000',
                        key: 'info_alt',
                        type: 'Success',
                        mode: 'dismissible'
                    });

                    component.set("v.toPhone", "");
                    component.set("v.toBody", "");
                }
                toastEvent.fire();


                
            }

        });


        $A.enqueueAction(action);

    }
})
