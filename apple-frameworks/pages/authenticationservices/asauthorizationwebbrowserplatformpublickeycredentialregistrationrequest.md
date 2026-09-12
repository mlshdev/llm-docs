> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest)

# ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.6+ · macOS 13.5+

An interface you use to respond to passkey-creation challenges in a web browser.

## Declaration

```swift
protocol ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest
```

## Topics

### Information about the assertion

- [clientData](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/clientdata-5dk66.md): The client data to supply to the relying party.
- [excludedCredentials](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/excludedcredentials.md): A list of passkeys that the relying party doesn’t accept for resolving the challenge.
- [shouldShowHybridTransport](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/shouldshowhybridtransport.md): Whether a remote authenticator that communicates with the operating system using Bluetooth can resolve the challenge.

## Relationships

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md)

## See Also

### Website authentication requests

- [ASAuthorizationWebBrowserExternallyAuthenticatableRequest](asauthorizationwebbrowserexternallyauthenticatablerequest.md): An authorization request for which a web browser can retrieve credentials.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialAssertionRequest](asauthorizationwebbrowserplatformpublickeycredentialassertionrequest.md): An interface you use to respond to authentication challenges in a web browser.

# ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.6+ · macOS 13.5+

An interface you use to respond to passkey-creation challenges in a web browser.

## Declaration

```objectivec
@protocol ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest
```

## Topics

### Information about the assertion

- [clientData](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/clientdata-7scep.md): The client data to supply to the relying party.
- [excludedCredentials](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/excludedcredentials.md): A list of passkeys that the relying party doesn’t accept for resolving the challenge.
- [shouldShowHybridTransport](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest/shouldshowhybridtransport.md): Whether a remote authenticator that communicates with the operating system using Bluetooth can resolve the challenge.

## Relationships

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest](asauthorizationplatformpublickeycredentialregistrationrequest.md)

## See Also

### Website authentication requests

- [ASAuthorizationWebBrowserExternallyAuthenticatableRequest](asauthorizationwebbrowserexternallyauthenticatablerequest.md): An authorization request for which a web browser can retrieve credentials.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialAssertionRequest](asauthorizationwebbrowserplatformpublickeycredentialassertionrequest.md): An interface you use to respond to authentication challenges in a web browser.
