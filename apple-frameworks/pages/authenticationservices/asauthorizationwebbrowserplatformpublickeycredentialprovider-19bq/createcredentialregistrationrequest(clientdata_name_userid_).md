> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq/createcredentialregistrationrequest(clientdata:name:userid:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq/createcredentialregistrationrequest(clientdata:name:userid:))

# createCredentialRegistrationRequest(clientData:name:userID:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.6+ · macOS 13.5+

Create a credential registration request, for registering a new passkey with the relying party.

## Declaration

```swift
func createCredentialRegistrationRequest(clientData: ASPublicKeyCredentialClientData, name: String, userID: Data) -> ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest
```

## Parameters

- `clientData`: The client data that contains the reply to the relying party’s challenge.
- `name`: The person’s user name for their account with the relying party.
- `userID`: A unique identifier for the person’s account with the relying party.

<a id="return-value"></a>

## Return Value

The credential registration request, that you pass to [ASAuthorizationController](../asauthorizationcontroller.md).

## See Also

### Creating requests

- [createCredentialAssertionRequest(clientData:)](createcredentialassertionrequest%28clientdata_%29.md): Create a credential assertion request, for authenticating to the relying party.
- [createCredentialRegistrationRequest(clientData:name:userID:requestStyle:)](createcredentialregistrationrequest%28clientdata_name_userid_requeststyle_%29.md)
