> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sectrustsettingskeyusage/usesignrevocation

# useSignRevocation (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key can be used to sign an OCSP (online certificate status protocol) message or CRL (certificate verification list), or to verify a signature.

## Declaration

```swift
static var useSignRevocation: SecTrustSettingsKeyUsage { get }
```

<a id="Discussion"></a>

## Discussion

OCSP messages and CRLs are used to revoke certificates.

# kSecTrustSettingsKeyUseSignRevocation (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key can be used to sign an OCSP (online certificate status protocol) message or CRL (certificate verification list), or to verify a signature.

## Declaration

```objectivec
kSecTrustSettingsKeyUseSignRevocation
```

<a id="Discussion"></a>

## Discussion

OCSP messages and CRLs are used to revoke certificates.
