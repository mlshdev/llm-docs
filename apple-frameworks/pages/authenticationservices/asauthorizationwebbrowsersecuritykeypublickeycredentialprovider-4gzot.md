> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-4gzot](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-4gzot)

# ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialProvider

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+

A protocol for creating security key requests.

## Declaration

```objectivec
@protocol ASAuthorizationWebBrowserSecurityKeyPublicKeyCredentialProvider
```

## Topics

### Creating credential assertion requests

- [createCredentialAssertionRequestWithClientData:](asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-4gzot/createcredentialassertionrequestwithclientdata_.md): Creates a credential assertion request for authenticating to the relying party.
- [createCredentialRegistrationRequestWithClientData:displayName:name:userID:](asauthorizationwebbrowsersecuritykeypublickeycredentialprovider-4gzot/createcredentialregistrationrequestwithclientdata_displayname_name_userid_.md): Creates a credential registration request for registering a new password with the relying party.

## Relationships

### Conforming Types

- [ASAuthorizationSecurityKeyPublicKeyCredentialProvider](asauthorizationsecuritykeypublickeycredentialprovider.md)
