> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpasswordprovider](https://developer.apple.com/documentation/authenticationservices/asauthorizationpasswordprovider)

# ASAuthorizationPasswordProvider (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism for generating requests to perform keychain credential sharing.

## Declaration

```swift
class ASAuthorizationPasswordProvider
```

## Topics

### Creating Requests

- [createRequest()](asauthorizationpasswordprovider/createrequest%28%29.md): Creates a new password authorization request.
- [ASAuthorizationPasswordRequest](asauthorizationpasswordrequest.md): An authorization request that uses credentials stored in the keychain.

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

### Passwords

- [Password AutoFill](../security/password-autofill.md): Streamline your app’s login and onboarding procedures.
- [ASPasswordCredential](aspasswordcredential.md): A password credential.
- [Password use in web browsers](password-use-in-web-browsers.md): Register and authenticate website users by using passwords.

# ASAuthorizationPasswordProvider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism for generating requests to perform keychain credential sharing.

## Declaration

```objectivec
@interface ASAuthorizationPasswordProvider : NSObject
```

## Topics

### Creating Requests

- [createRequest](asauthorizationpasswordprovider/createrequest%28%29.md): Creates a new password authorization request.
- [ASAuthorizationPasswordRequest](asauthorizationpasswordrequest.md): An authorization request that uses credentials stored in the keychain.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationProvider](asauthorizationprovider.md)

## See Also

### Passwords

- [Password AutoFill](../security/password-autofill.md): Streamline your app’s login and onboarding procedures.
- [ASPasswordCredential](aspasswordcredential.md): A password credential.
- [Password use in web browsers](password-use-in-web-browsers.md): Register and authenticate website users by using passwords.
