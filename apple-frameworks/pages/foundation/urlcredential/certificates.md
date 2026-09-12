> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/certificates](https://developer.apple.com/documentation/foundation/urlcredential/certificates)

# certificates (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The intermediate certificates of the credential, if it is a client certificate credential.

## Declaration

```swift
var certificates: [Any] { get }
```

<a id="Discussion"></a>

## Discussion

The certificates are [SecCertificate](../../security/seccertificate.md) objects representing the intermediate certificates of the credential. This value is `nil` if this is not a client certificate credential or if the credential was created with no intermediate certificates.

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](password.md): The credential’s password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [URLCredential.Persistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.

# certificates (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The intermediate certificates of the credential, if it is a client certificate credential.

## Declaration

```objectivec
@property (copy, readonly) NSArray * certificates;
```

<a id="Discussion"></a>

## Discussion

The certificates are [SecCertificateRef](../../security/seccertificate.md) objects representing the intermediate certificates of the credential. This value is `nil` if this is not a client certificate credential or if the credential was created with no intermediate certificates.

## See Also

### Getting credential properties

- [user](user.md): The credential’s user name.
- [hasPassword](haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](password.md): The credential’s password.
- [identity](identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](persistence-swift.property.md): The credential’s persistence setting.
- [NSURLCredentialPersistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.
