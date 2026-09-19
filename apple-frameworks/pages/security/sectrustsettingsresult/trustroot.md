> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sectrustsettingsresult/trustroot

# SecTrustSettingsResult.trustRoot (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

This root certificate is explicitly trusted.

## Declaration

```swift
case trustRoot
```

<a id="Discussion"></a>

## Discussion

If the certificate is not a root (self-signed) certificate, the usage constraints dictionary is invalid.

# kSecTrustSettingsResultTrustRoot (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

This root certificate is explicitly trusted.

## Declaration

```objectivec
kSecTrustSettingsResultTrustRoot
```

<a id="Discussion"></a>

## Discussion

If the certificate is not a root (self-signed) certificate, the usage constraints dictionary is invalid.
