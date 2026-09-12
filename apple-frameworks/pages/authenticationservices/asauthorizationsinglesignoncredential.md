> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsinglesignoncredential](https://developer.apple.com/documentation/authenticationservices/asauthorizationsinglesignoncredential)

# ASAuthorizationSingleSignOnCredential (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A credential that results from a successful single sign-on (SSO) authentication.

## Declaration

```swift
class ASAuthorizationSingleSignOnCredential
```

## Topics

### Identifying a User

- [identityToken](asauthorizationsinglesignoncredential/identitytoken.md): A JSON Web Token (JWT) that securely communicates information about the user to your app.
- [accessToken](asauthorizationsinglesignoncredential/accesstoken.md): An access token used to get an identity token.
- [state](asauthorizationsinglesignoncredential/state.md): An arbitrary string that your app provided to the request that generated this credential.
- [authorizedScopes](asauthorizationsinglesignoncredential/authorizedscopes.md): The contact information the user authorized your app to access.

### Parsing the Response

- [authenticatedResponse](asauthorizationsinglesignoncredential/authenticatedresponse.md): The complete response authentication, including technology-specific values.

### Initializers

- [init(coder:)](asauthorizationsinglesignoncredential/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationCredential](asauthorizationcredential.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing enterprise single sign-on

- [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md): A mechanism for generating requests to authenticate users with third-party providers.
- [ASAuthorizationProviderExtensionAuthorizationRequestHandler](asauthorizationproviderextensionauthorizationrequesthandler.md): An interface through which a single sign-on (SSO) authentication provider extension handles authentication requests.
- [ASAuthorizationProviderExtensionAuthorizationResult](asauthorizationproviderextensionauthorizationresult.md): The result of an authorization request.
- [ASAuthorizationController.RequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.

# ASAuthorizationSingleSignOnCredential (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A credential that results from a successful single sign-on (SSO) authentication.

## Declaration

```objectivec
@interface ASAuthorizationSingleSignOnCredential : NSObject
```

## Topics

### Obtaining Keys

- [privateKeys](asauthorizationsinglesignoncredential/privatekeys.md): An array of private keys.

### Identifying a User

- [identityToken](asauthorizationsinglesignoncredential/identitytoken.md): A JSON Web Token (JWT) that securely communicates information about the user to your app.
- [accessToken](asauthorizationsinglesignoncredential/accesstoken.md): An access token used to get an identity token.
- [state](asauthorizationsinglesignoncredential/state.md): An arbitrary string that your app provided to the request that generated this credential.
- [authorizedScopes](asauthorizationsinglesignoncredential/authorizedscopes.md): The contact information the user authorized your app to access.

### Parsing the Response

- [authenticatedResponse](asauthorizationsinglesignoncredential/authenticatedresponse.md): The complete response authentication, including technology-specific values.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationCredential](asauthorizationcredential.md)

## See Also

### Performing enterprise single sign-on

- [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md): A mechanism for generating requests to authenticate users with third-party providers.
- [ASAuthorizationProviderExtensionAuthorizationRequestHandler](asauthorizationproviderextensionauthorizationrequesthandler.md): An interface through which a single sign-on (SSO) authentication provider extension handles authentication requests.
- [ASAuthorizationProviderExtensionAuthorizationResult](asauthorizationproviderextensionauthorizationresult.md): The result of an authorization request.
- [ASAuthorizationControllerRequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.
