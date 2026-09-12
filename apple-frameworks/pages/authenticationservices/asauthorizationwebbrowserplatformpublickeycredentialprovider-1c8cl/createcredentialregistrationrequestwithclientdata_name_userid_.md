> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-1c8cl/createcredentialregistrationrequestwithclientdata:name:userid:](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-1c8cl/createcredentialregistrationrequestwithclientdata:name:userid:)

# createCredentialRegistrationRequestWithClientData:name:userID:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.6+ · macOS 13.5+

## Declaration

```objectivec
- (ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest *) createCredentialRegistrationRequestWithClientData:(ASPublicKeyCredentialClientData *) clientData name:(NSString *) name userID:(NSData *) userID;
```

## See Also

### Creating passkey assertion requests

- [createCredentialAssertionRequestWithClientData:](createcredentialassertionrequestwithclientdata_.md)
