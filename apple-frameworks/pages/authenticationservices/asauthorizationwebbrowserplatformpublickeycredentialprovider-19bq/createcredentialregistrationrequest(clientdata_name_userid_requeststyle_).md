> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq/createcredentialregistrationrequest(clientdata:name:userid:requeststyle:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq/createcredentialregistrationrequest(clientdata:name:userid:requeststyle:))

# createCredentialRegistrationRequest(clientData:name:userID:requestStyle:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 16.6+ · macOS 15.0+

## Declaration

```swift
func createCredentialRegistrationRequest(clientData: ASPublicKeyCredentialClientData, name: String, userID: Data, requestStyle: ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest.RequestStyle) -> ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest
```

## See Also

### Creating requests

- [createCredentialAssertionRequest(clientData:)](createcredentialassertionrequest%28clientdata_%29.md): Create a credential assertion request, for authenticating to the relying party.
- [createCredentialRegistrationRequest(clientData:name:userID:)](createcredentialregistrationrequest%28clientdata_name_userid_%29.md): Create a credential registration request, for registering a new passkey with the relying party.
