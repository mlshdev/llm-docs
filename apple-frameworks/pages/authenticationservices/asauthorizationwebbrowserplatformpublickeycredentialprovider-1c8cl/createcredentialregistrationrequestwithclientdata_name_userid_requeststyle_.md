> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-1c8cl/createcredentialregistrationrequestwithclientdata:name:userid:requeststyle:

# createCredentialRegistrationRequestWithClientData:name:userID:requestStyle:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

## Declaration

```objectivec
- (ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest *) createCredentialRegistrationRequestWithClientData:(ASPublicKeyCredentialClientData *) clientData name:(NSString *) name userID:(NSData *) userID requestStyle:(ASAuthorizationPlatformPublicKeyCredentialRegistrationRequestStyle) requestStyle;
```
