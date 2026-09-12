> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorization](https://developer.apple.com/documentation/authenticationservices/asauthorization)

# ASAuthorization (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The encapsulation of a successful authorization by a controller.

## Declaration

```swift
class ASAuthorization
```

## Topics

### Getting the Provider

- [provider](asauthorization/provider.md): The provider that created the request that resulted in the successful authorization.

### Getting the Credential

- [credential](asauthorization/credential.md): Information provided about a user after successful authentication.
- [ASAuthorizationCredential](asauthorizationcredential.md): An interface that all credentials share.

### Characterizing an Authorization

- [ASAuthorization.Scope](asauthorization/scope.md): The kinds of contact information that can be requested from the user.
- [ASAuthorization.OpenIDOperation](asauthorization/openidoperation.md): The kinds of operations that you can perform with OpenID authentication.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Successful Authorization

- [authorizationController(\_:didCompleteWithCustomMethod:)](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [authorizationController(controller:didCompleteWithAuthorization:)](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md): Tells the delegate when authorization completes successfully.

# ASAuthorization (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The encapsulation of a successful authorization by a controller.

## Declaration

```objectivec
@interface ASAuthorization : NSObject
```

## Topics

### Getting the Provider

- [provider](asauthorization/provider.md): The provider that created the request that resulted in the successful authorization.

### Getting the Credential

- [credential](asauthorization/credential.md): Information provided about a user after successful authentication.
- [ASAuthorizationCredential](asauthorizationcredential.md): An interface that all credentials share.

### Characterizing an Authorization

- [ASAuthorizationScope](asauthorization/scope.md): The kinds of contact information that can be requested from the user.
- [ASAuthorizationOpenIDOperation](asauthorization/openidoperation.md): The kinds of operations that you can perform with OpenID authentication.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Handling Successful Authorization

- [authorizationController:didCompleteWithCustomMethod:](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [authorizationController:didCompleteWithAuthorization:](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md): Tells the delegate when authorization completes successfully.
