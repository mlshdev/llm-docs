> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbuseridentity/certificate](https://developer.apple.com/documentation/collaboration/cbuseridentity/certificate)

# certificate (Swift)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the public authentication certificate associated with a user identity.

## Declaration

```swift
var certificate: SecCertificate? { get }
```

<a id="return-value"></a>

## Return Value

The public authentication certificate, or `nil` if none exists.

<a id="Discussion"></a>

## Discussion

The Collaboration framework supports certificate-based authentication in addition to passwords. If a certificate is stored for a user identity, it will be the default method of authentication.

When a .Mac account is associated with a user identity, the authentication certificate is automatically downloaded from the .Mac servers.

## See Also

### Password Authentication

- [authenticate(withPassword:)](authenticate%28withpassword_%29.md): Returns a Boolean value indicating whether the given password is correct for the identity.
- [isEnabled](isenabled.md): Returns a Boolean value indicating whether the identity is allowed to authenticate.

# certificate (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the public authentication certificate associated with a user identity.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SecCertificateRef certificate;
```

<a id="return-value"></a>

## Return Value

The public authentication certificate, or `nil` if none exists.

<a id="Discussion"></a>

## Discussion

The Collaboration framework supports certificate-based authentication in addition to passwords. If a certificate is stored for a user identity, it will be the default method of authentication.

When a .Mac account is associated with a user identity, the authentication certificate is automatically downloaded from the .Mac servers.

## See Also

### Password Authentication

- [authenticateWithPassword:](authenticate%28withpassword_%29.md): Returns a Boolean value indicating whether the given password is correct for the identity.
- [enabled](isenabled.md): Returns a Boolean value indicating whether the identity is allowed to authenticate.
