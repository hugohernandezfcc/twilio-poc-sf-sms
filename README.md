# POC Twilio Lightning component

Lightning component POC to use in lightning record page connected to Twilio SMS service.

## Installation

On you root path SFDX project clone the twilio-poc-sf-sms.

```bash
git clone https://github.com/hugohernandezfcc/twilio-poc-sf-sms.git
```
After you clone it, is necessary create a custom settings:

```bash
Name 
SmsPocTwilio


Fields:

AccountSID__c
Token__c
TwilioNumber__c
URL__c
```
**Important:**
The custom settings must be hierarchy type.

After you create the custom settings verify that controller have the same custom settings fields and instance. 


## Author
Linkdin: [Hugo Hernández](https://www.linkedin.com/in/hugo-hern%C3%A1ndez-65921080/)
