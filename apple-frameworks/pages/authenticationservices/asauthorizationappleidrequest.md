> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidrequest)

# ASAuthorizationAppleIDRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An OpenID authorization request that relies on the user’s Apple ID.

## Declaration

```swift
class ASAuthorizationAppleIDRequest
```

## Topics

### Setting the User

- [user](asauthorizationappleidrequest/user.md): An identifier associated with the user’s Apple ID.

## Relationships

### Inherits From

- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md)

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
- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md): An OpenID authorization request.

# ASAuthorizationAppleIDRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An OpenID authorization request that relies on the user’s Apple ID.

## Declaration

```objectivec
@interface ASAuthorizationAppleIDRequest : ASAuthorizationOpenIDRequest
```

## Topics

### Setting the User

- [user](asauthorizationappleidrequest/user.md): An identifier associated with the user’s Apple ID.

## Relationships

### Inherits From

- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md)

## See Also

### Creating Requests

- [createRequest](asauthorizationappleidprovider/createrequest%28%29.md): Creates a new Apple ID authorization request.
- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md): An OpenID authorization request.
