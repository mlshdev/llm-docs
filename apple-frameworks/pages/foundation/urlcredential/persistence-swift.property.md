> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/persistence-swift.property](https://developer.apple.com/documentation/foundation/urlcredential/persistence-swift.property)

# persistence (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential’s persistence setting.

## Declaration

```swift
var persistence: URLCredential.Persistence { get }
```

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](password.md): The credential’s password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [URLCredential.Persistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.

# persistence (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential’s persistence setting.

## Declaration

```objectivec
@property (readonly) NSURLCredentialPersistence persistence;
```

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](password.md): The credential’s password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [NSURLCredentialPersistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.
