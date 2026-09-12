> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/identity](https://developer.apple.com/documentation/foundation/urlcredential/identity)

# identity (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identity of this credential if it is a client certificate credential.

## Declaration

```swift
var identity: SecIdentity? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the credential is not a client certificate credential.

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](password.md): The credential’s password.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [URLCredential.Persistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.

# identity (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identity of this credential if it is a client certificate credential.

## Declaration

```objectivec
@property (readonly, nullable) SecIdentityRef identity;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the credential is not a client certificate credential.

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](password.md): The credential’s password.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [NSURLCredentialPersistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.
