> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationopenidrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationopenidrequest)

# ASAuthorizationOpenIDRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An OpenID authorization request.

## Declaration

```swift
class ASAuthorizationOpenIDRequest
```

## Topics

### Setting the Operation

- [requestedOperation](asauthorizationopenidrequest/requestedoperation.md): The OpenID authentication operation you want this request to perform.
- [ASAuthorization.OpenIDOperation](asauthorization/openidoperation.md): The kinds of operations that you can perform with OpenID authentication.

### Setting the Scope

- [requestedScopes](asauthorizationopenidrequest/requestedscopes.md): The contact information to be requested from the user during authentication.
- [ASAuthorization.Scope](asauthorization/scope.md): The kinds of contact information that can be requested from the user.

### Setting the State

- [state](asauthorizationopenidrequest/state.md): Data that’s returned to you unmodified in the corresponding credential after a successful authentication.

### Setting the Nonce

- [nonce](asauthorizationopenidrequest/nonce.md): A string value to pass to the identity provider.

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Inherited By

- [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md)
- [ASAuthorizationSingleSignOnRequest](asauthorizationsinglesignonrequest.md)

### Conforms To

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

### Creating Requests

- [createRequest()](asauthorizationappleidprovider/createrequest%28%29.md): Creates a new Apple ID authorization request.
- [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md): An OpenID authorization request that relies on the user’s Apple ID.

# ASAuthorizationOpenIDRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An OpenID authorization request.

## Declaration

```objectivec
@interface ASAuthorizationOpenIDRequest : ASAuthorizationRequest
```

## Topics

### Setting the Operation

- [requestedOperation](asauthorizationopenidrequest/requestedoperation.md): The OpenID authentication operation you want this request to perform.
- [ASAuthorizationOpenIDOperation](asauthorization/openidoperation.md): The kinds of operations that you can perform with OpenID authentication.

### Setting the Scope

- [requestedScopes](asauthorizationopenidrequest/requestedscopes.md): The contact information to be requested from the user during authentication.
- [ASAuthorizationScope](asauthorization/scope.md): The kinds of contact information that can be requested from the user.

### Setting the State

- [state](asauthorizationopenidrequest/state.md): Data that’s returned to you unmodified in the corresponding credential after a successful authentication.

### Setting the Nonce

- [nonce](asauthorizationopenidrequest/nonce.md): A string value to pass to the identity provider.

## Relationships

### Inherits From

- [ASAuthorizationRequest](asauthorizationrequest.md)

### Inherited By

- [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md)
- [ASAuthorizationSingleSignOnRequest](asauthorizationsinglesignonrequest.md)

## See Also

### Creating Requests

- [createRequest](asauthorizationappleidprovider/createrequest%28%29.md): Creates a new Apple ID authorization request.
- [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md): An OpenID authorization request that relies on the user’s Apple ID.
