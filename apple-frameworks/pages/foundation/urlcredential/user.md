> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/user](https://developer.apple.com/documentation/foundation/urlcredential/user)

# user (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential’s user name.

## Declaration

```swift
var user: String? { get }
```

## See Also

### Getting credential properties

- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](password.md): The credential’s password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [URLCredential.Persistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.

# user (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential’s user name.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * user;
```

## See Also

### Getting credential properties

- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](password.md): The credential’s password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [NSURLCredentialPersistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.
