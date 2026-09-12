> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-8xc1s](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-8xc1s)

# ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialProvider

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+

A protocol for creating passkey requests.

## Declaration

```swift
protocol ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialProvider
```

## Topics

### Creating credential assertion requests

- [createCredentialAssertionRequest(clientData:)](asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-8xc1s/createcredentialassertionrequest%28clientdata_%29.md): Creates a credential assertion request for authenticating to the relying party.
- [createCredentialRegistrationRequest(clientData:displayName:name:userID:)](asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-8xc1s/createcredentialregistrationrequest%28clientdata_displayname_name_userid_%29.md): Creates a credential registration request for registering a new password with the relying party.

## Relationships

### Conforming Types

- [ASAuthorizationSecurityKeyPublicKeyCredentialProvider](asauthorizationsecuritykeypublickeycredentialprovider.md)
