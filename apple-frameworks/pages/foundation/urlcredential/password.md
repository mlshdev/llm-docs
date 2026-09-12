> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/password](https://developer.apple.com/documentation/foundation/urlcredential/password)

# password (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential’s password.

## Declaration

```swift
var password: String? { get }
```

<a id="Discussion"></a>

## Discussion

You should only access this property if you need the actual password value. If you only need to know if there is a password, use [hasPassword](haspassword.md). Accessing this property may result in prompting the user for access—for example, if the password is stored in the user’s keychain.

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [URLCredential.Persistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.

# password (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential’s password.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * password;
```

<a id="Discussion"></a>

## Discussion

You should only access this property if you need the actual password value. If you only need to know if there is a password, use [hasPassword](haspassword.md). Accessing this property may result in prompting the user for access—for example, if the password is stored in the user’s keychain.

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [certificates](certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [NSURLCredentialPersistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.
