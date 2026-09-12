> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secauthenticationtype](https://developer.apple.com/documentation/security/secauthenticationtype)

# SecAuthenticationType (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The authentication type to use for an Internet password.

## Declaration

```swift
enum SecAuthenticationType
```

## Topics

### Constants

- [SecAuthenticationType.NTLM](secauthenticationtype/ntlm.md): Specifies Windows NT LAN Manager authentication.
- [SecAuthenticationType.MSN](secauthenticationtype/msn.md): Specifies Microsoft Network default authentication.
- [SecAuthenticationType.DPA](secauthenticationtype/dpa.md): Specifies Distributed Password authentication.
- [SecAuthenticationType.RPA](secauthenticationtype/rpa.md): Specifies Remote Password authentication.
- [SecAuthenticationType.httpBasic](secauthenticationtype/httpbasic.md): Specifies HTTP Basic authentication.
- [SecAuthenticationType.httpDigest](secauthenticationtype/httpdigest.md): Specifies HTTP Digest Access authentication.
- [SecAuthenticationType.htmlForm](secauthenticationtype/htmlform.md): Specifies HTML form based authentication.
- [SecAuthenticationType.default](secauthenticationtype/default.md): Specifies the default authentication type.
- [SecAuthenticationType.any](secauthenticationtype/any.md): Specifies that any authentication type is acceptable.

### Initializers

- [init(rawValue:)](secauthenticationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecAuthenticationType (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The authentication type to use for an Internet password.

## Declaration

```objectivec
enum SecAuthenticationType : FourCharCode;
```

## Topics

### Constants

- [kSecAuthenticationTypeNTLM](secauthenticationtype/ntlm.md): Specifies Windows NT LAN Manager authentication.
- [kSecAuthenticationTypeMSN](secauthenticationtype/msn.md): Specifies Microsoft Network default authentication.
- [kSecAuthenticationTypeDPA](secauthenticationtype/dpa.md): Specifies Distributed Password authentication.
- [kSecAuthenticationTypeRPA](secauthenticationtype/rpa.md): Specifies Remote Password authentication.
- [kSecAuthenticationTypeHTTPBasic](secauthenticationtype/httpbasic.md): Specifies HTTP Basic authentication.
- [kSecAuthenticationTypeHTTPDigest](secauthenticationtype/httpdigest.md): Specifies HTTP Digest Access authentication.
- [kSecAuthenticationTypeHTMLForm](secauthenticationtype/htmlform.md): Specifies HTML form based authentication.
- [kSecAuthenticationTypeDefault](secauthenticationtype/default.md): Specifies the default authentication type.
- [kSecAuthenticationTypeAny](secauthenticationtype/any.md): Specifies that any authentication type is acceptable.
