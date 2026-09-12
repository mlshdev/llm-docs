> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingskeyusage/useendecryptkey](https://developer.apple.com/documentation/security/sectrustsettingskeyusage/useendecryptkey)

# useEnDecryptKey (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key can be used to encrypt or decrypt (wrap or unwrap) a key.

## Declaration

```swift
static var useEnDecryptKey: SecTrustSettingsKeyUsage { get }
```

<a id="Discussion"></a>

## Discussion

Private keys must be wrapped before they can be exported from a keychain.

# kSecTrustSettingsKeyUseEnDecryptKey (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key can be used to encrypt or decrypt (wrap or unwrap) a key.

## Declaration

```objectivec
kSecTrustSettingsKeyUseEnDecryptKey
```

<a id="Discussion"></a>

## Discussion

Private keys must be wrapped before they can be exported from a keychain.
