> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsinglesignonrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationsinglesignonrequest)

# ASAuthorizationSingleSignOnRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

An OpenID authorization request that provides single sign-on (SSO) functionality.

## Declaration

```swift
class ASAuthorizationSingleSignOnRequest
```

## Topics

### Setting Options

- [isUserInterfaceEnabled](asauthorizationsinglesignonrequest/isuserinterfaceenabled.md)
- [authorizationOptions](asauthorizationsinglesignonrequest/authorizationoptions.md): Options that control the authorization process.

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

### Creating Authorization Requests

- [canPerformAuthorization](asauthorizationsinglesignonprovider/canperformauthorization.md): A Boolean value that indicates if the provider is capable of performing authorization within a given configuration.
- [createRequest()](asauthorizationsinglesignonprovider/createrequest%28%29.md): Creates a single sign-on (SSO) authorization request.
- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md): An OpenID authorization request.

# ASAuthorizationSingleSignOnRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

An OpenID authorization request that provides single sign-on (SSO) functionality.

## Declaration

```objectivec
@interface ASAuthorizationSingleSignOnRequest : ASAuthorizationOpenIDRequest
```

## Topics

### Setting Options

- [userInterfaceEnabled](asauthorizationsinglesignonrequest/isuserinterfaceenabled.md)
- [authorizationOptions](asauthorizationsinglesignonrequest/authorizationoptions.md): Options that control the authorization process.

## Relationships

### Inherits From

- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md)

## See Also

### Creating Authorization Requests

- [canPerformAuthorization](asauthorizationsinglesignonprovider/canperformauthorization.md): A Boolean value that indicates if the provider is capable of performing authorization within a given configuration.
- [createRequest](asauthorizationsinglesignonprovider/createrequest%28%29.md): Creates a single sign-on (SSO) authorization request.
- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md): An OpenID authorization request.
