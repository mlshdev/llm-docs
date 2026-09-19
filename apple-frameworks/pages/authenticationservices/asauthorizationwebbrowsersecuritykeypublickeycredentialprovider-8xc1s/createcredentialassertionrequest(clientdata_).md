> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-8xc1s/createcredentialassertionrequest(clientdata:)

# createCredentialAssertionRequest(clientData:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+

Creates a credential assertion request for authenticating to the relying party.

## Declaration

```swift
func createCredentialAssertionRequest(clientData: ASPublicKeyCredentialClientData) -> ASAuthorizationSecurityKeyPublicKeyCredentialAssertionRequest
```

## Parameters

- `clientData`: The client data that contains the reply to the relying party’s challenge.

## See Also

### Creating credential assertion requests

- [createCredentialRegistrationRequest(clientData:displayName:name:userID:)](createcredentialregistrationrequest%28clientdata_displayname_name_userid_%29.md): Creates a credential registration request for registering a new password with the relying party.
