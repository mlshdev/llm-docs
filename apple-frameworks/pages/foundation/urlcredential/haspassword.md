> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/haspassword](https://developer.apple.com/documentation/foundation/urlcredential/haspassword)

# hasPassword (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the credential has a password.

## Declaration

```swift
var hasPassword: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the receiver has a password, [false](https://developer.apple.com/documentation/swift/false) otherwise.

This method does not attempt to retrieve the password.

If this credential’s password is stored in the user’s keychain, [password](password.md) may return `nil` even if this method returns [true](https://developer.apple.com/documentation/swift/true)—getting the password may fail, or the user may refuse access.

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [password](password.md): The credential’s password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [URLCredential.Persistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.

# hasPassword (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the credential has a password.

## Declaration

```objectivec
@property (readonly) BOOL hasPassword;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the receiver has a password, [false](https://developer.apple.com/documentation/swift/false) otherwise.

This method does not attempt to retrieve the password.

If this credential’s password is stored in the user’s keychain, [password](password.md) may return `nil` even if this method returns [true](https://developer.apple.com/documentation/swift/true)—getting the password may fail, or the user may refuse access.

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [password](password.md): The credential’s password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [NSURLCredentialPersistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.
