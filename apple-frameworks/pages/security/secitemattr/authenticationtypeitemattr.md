> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/authenticationtypeitemattr

# SecItemAttr.authenticationTypeItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the authentication type attribute.

## Declaration

```swift
case authenticationTypeItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type `SecAuthenticationType` that represents the Internet authentication scheme. For possible authentication values, see [SecAuthenticationType](../secauthenticationtype.md). This is unique to Internet password attributes.

# kSecAuthenticationTypeItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the authentication type attribute.

## Declaration

```objectivec
kSecAuthenticationTypeItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type `SecAuthenticationType` that represents the Internet authentication scheme. For possible authentication values, see [SecAuthenticationType](../secauthenticationtype.md). This is unique to Internet password attributes.
