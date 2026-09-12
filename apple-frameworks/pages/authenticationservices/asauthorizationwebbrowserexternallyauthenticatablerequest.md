> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserexternallyauthenticatablerequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserexternallyauthenticatablerequest)

# ASAuthorizationWebBrowserExternallyAuthenticatableRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** macOS 13.3+

An authorization request for which a web browser can retrieve credentials.

## Declaration

```swift
protocol ASAuthorizationWebBrowserExternallyAuthenticatableRequest : NSObjectProtocol
```

## Topics

### Local authentication

- [authenticatedContext](asauthorizationwebbrowserexternallyauthenticatablerequest/authenticatedcontext.md): The local authentication context for the authorization.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md)

## See Also

### Website authentication requests

- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialAssertionRequest](asauthorizationwebbrowserplatformpublickeycredentialassertionrequest.md): An interface you use to respond to authentication challenges in a web browser.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest.md): An interface you use to respond to passkey-creation challenges in a web browser.

# ASAuthorizationWebBrowserExternallyAuthenticatableRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** macOS 13.3+

An authorization request for which a web browser can retrieve credentials.

## Declaration

```objectivec
@protocol ASAuthorizationWebBrowserExternallyAuthenticatableRequest <NSObject>
```

## Topics

### Local authentication

- [authenticatedContext](asauthorizationwebbrowserexternallyauthenticatablerequest/authenticatedcontext.md): The local authentication context for the authorization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ASAuthorizationPlatformPublicKeyCredentialAssertionRequest](asauthorizationplatformpublickeycredentialassertionrequest.md)

## See Also

### Website authentication requests

- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialAssertionRequest](asauthorizationwebbrowserplatformpublickeycredentialassertionrequest.md): An interface you use to respond to authentication challenges in a web browser.
- [ASAuthorizationWebBrowserPlatformPublicKeyCredentialRegistrationRequest](asauthorizationwebbrowserplatformpublickeycredentialregistrationrequest.md): An interface you use to respond to passkey-creation challenges in a web browser.
