> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasswordcredential](https://developer.apple.com/documentation/authenticationservices/aspasswordcredential)

# ASPasswordCredential (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 6.0+

A password credential.

## Declaration

```swift
class ASPasswordCredential
```

## Topics

### Creating a credential

- [init(user:password:)](aspasswordcredential/init%28user_password_%29.md): Initializes a password credential.

### Accessing the username and password

- [user](aspasswordcredential/user.md): The user for a password credential object.
- [password](aspasswordcredential/password.md): The password for a password credential object.

### Initializers

- [init(coder:)](aspasswordcredential/init%28coder_%29.md)

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

### Passwords

- [Password AutoFill](../security/password-autofill.md): Streamline your app’s login and onboarding procedures.
- [ASAuthorizationPasswordProvider](asauthorizationpasswordprovider.md): A mechanism for generating requests to perform keychain credential sharing.
- [Password use in web browsers](password-use-in-web-browsers.md): Register and authenticate website users by using passwords.

# ASPasswordCredential (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 6.0+

A password credential.

## Declaration

```objectivec
@interface ASPasswordCredential : NSObject
```

## Topics

### Creating a credential

- [credentialWithUser:password:](aspasswordcredential/credentialwithuser_password_.md): Creates a password credential instance with a given user name and password.
- [initWithUser:password:](aspasswordcredential/init%28user_password_%29.md): Initializes a password credential.

### Accessing the username and password

- [user](aspasswordcredential/user.md): The user for a password credential object.
- [password](aspasswordcredential/password.md): The password for a password credential object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationCredential](asauthorizationcredential.md)

## See Also

### Passwords

- [Password AutoFill](../security/password-autofill.md): Streamline your app’s login and onboarding procedures.
- [ASAuthorizationPasswordProvider](asauthorizationpasswordprovider.md): A mechanism for generating requests to perform keychain credential sharing.
- [Password use in web browsers](password-use-in-web-browsers.md): Register and authenticate website users by using passwords.
