> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsinglesignonprovider](https://developer.apple.com/documentation/authenticationservices/asauthorizationsinglesignonprovider)

# ASAuthorizationSingleSignOnProvider (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A mechanism for generating requests to authenticate users with third-party providers.

## Declaration

```swift
class ASAuthorizationSingleSignOnProvider
```

## Topics

### Creating an Authorization Provider

- [init(identityProvider:)](asauthorizationsinglesignonprovider/init%28identityprovider_%29.md): Creates a single sign-on (SSO) authorization provider.

### Creating Authorization Requests

- [canPerformAuthorization](asauthorizationsinglesignonprovider/canperformauthorization.md): A Boolean value that indicates if the provider is capable of performing authorization within a given configuration.
- [createRequest()](asauthorizationsinglesignonprovider/createrequest%28%29.md): Creates a single sign-on (SSO) authorization request.
- [ASAuthorizationSingleSignOnRequest](asauthorizationsinglesignonrequest.md): An OpenID authorization request that provides single sign-on (SSO) functionality.
- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md): An OpenID authorization request.

### Identifying the Identity Provider

- [url](asauthorizationsinglesignonprovider/url.md): The URL of the identity provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationProvider](asauthorizationprovider.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing enterprise single sign-on

- [ASAuthorizationSingleSignOnCredential](asauthorizationsinglesignoncredential.md): A credential that results from a successful single sign-on (SSO) authentication.
- [ASAuthorizationProviderExtensionAuthorizationRequestHandler](asauthorizationproviderextensionauthorizationrequesthandler.md): An interface through which a single sign-on (SSO) authentication provider extension handles authentication requests.
- [ASAuthorizationProviderExtensionAuthorizationResult](asauthorizationproviderextensionauthorizationresult.md): The result of an authorization request.
- [ASAuthorizationController.RequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.

# ASAuthorizationSingleSignOnProvider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A mechanism for generating requests to authenticate users with third-party providers.

## Declaration

```objectivec
@interface ASAuthorizationSingleSignOnProvider : NSObject
```

## Topics

### Creating an Authorization Provider

- [authorizationProviderWithIdentityProviderURL:](asauthorizationsinglesignonprovider/init%28identityprovider_%29.md): Creates a single sign-on (SSO) authorization provider.

### Creating Authorization Requests

- [canPerformAuthorization](asauthorizationsinglesignonprovider/canperformauthorization.md): A Boolean value that indicates if the provider is capable of performing authorization within a given configuration.
- [createRequest](asauthorizationsinglesignonprovider/createrequest%28%29.md): Creates a single sign-on (SSO) authorization request.
- [ASAuthorizationSingleSignOnRequest](asauthorizationsinglesignonrequest.md): An OpenID authorization request that provides single sign-on (SSO) functionality.
- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md): An OpenID authorization request.

### Identifying the Identity Provider

- [url](asauthorizationsinglesignonprovider/url.md): The URL of the identity provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationProvider](asauthorizationprovider.md)

## See Also

### Performing enterprise single sign-on

- [ASAuthorizationSingleSignOnCredential](asauthorizationsinglesignoncredential.md): A credential that results from a successful single sign-on (SSO) authentication.
- [ASAuthorizationProviderExtensionAuthorizationRequestHandler](asauthorizationproviderextensionauthorizationrequesthandler.md): An interface through which a single sign-on (SSO) authentication provider extension handles authentication requests.
- [ASAuthorizationProviderExtensionAuthorizationResult](asauthorizationproviderextensionauthorizationresult.md): The result of an authorization request.
- [ASAuthorizationControllerRequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.
