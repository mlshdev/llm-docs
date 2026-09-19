> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq/createcredentialassertionrequest(clientdata:)

# createCredentialAssertionRequest(clientData:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.6+ · macOS 13.5+

Create a credential assertion request, for authenticating to the relying party.

## Declaration

```swift
func createCredentialAssertionRequest(clientData: ASPublicKeyCredentialClientData) -> ASAuthorizationPlatformPublicKeyCredentialAssertionRequest
```

## Parameters

- `clientData`: The client data that contains the reply to the relying party’s challenge.

<a id="return-value"></a>

## Return Value

The credential assertion request, that you pass to [ASAuthorizationController](../asauthorizationcontroller.md).

## See Also

### Creating requests

- [createCredentialRegistrationRequest(clientData:name:userID:)](createcredentialregistrationrequest%28clientdata_name_userid_%29.md): Create a credential registration request, for registering a new passkey with the relying party.
- [createCredentialRegistrationRequest(clientData:name:userID:requestStyle:)](createcredentialregistrationrequest%28clientdata_name_userid_requeststyle_%29.md)
