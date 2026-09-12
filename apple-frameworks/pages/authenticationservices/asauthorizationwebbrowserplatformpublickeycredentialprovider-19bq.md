> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq)

# ASAuthorizationWebBrowserPlatformPublicKeyCredentialProvider

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.6+ · macOS 13.5+

A mechanism you use to provide public key credential requests to a browser app.

## Declaration

```swift
protocol ASAuthorizationWebBrowserPlatformPublicKeyCredentialProvider
```

## Topics

### Creating requests

- [createCredentialAssertionRequest(clientData:)](asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq/createcredentialassertionrequest%28clientdata_%29.md): Create a credential assertion request, for authenticating to the relying party.
- [createCredentialRegistrationRequest(clientData:name:userID:)](asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq/createcredentialregistrationrequest%28clientdata_name_userid_%29.md): Create a credential registration request, for registering a new passkey with the relying party.
- [createCredentialRegistrationRequest(clientData:name:userID:requestStyle:)](asauthorizationwebbrowserplatformpublickeycredentialprovider-19bq/createcredentialregistrationrequest%28clientdata_name_userid_requeststyle_%29.md)

## Relationships

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialProvider](asauthorizationplatformpublickeycredentialprovider.md)
