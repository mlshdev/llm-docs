> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sectrustsettingsdomain/system

# SecTrustSettingsDomain.system (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

System trust settings.

## Declaration

```swift
case system
```

<a id="Discussion"></a>

## Discussion

These trust settings are immutable and comprise the set of trusted root certificates supplied in macOS. These settings are read-only, even by root.

# kSecTrustSettingsDomainSystem (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

System trust settings.

## Declaration

```objectivec
kSecTrustSettingsDomainSystem
```

<a id="Discussion"></a>

## Discussion

These trust settings are immutable and comprise the set of trusted root certificates supplied in macOS. These settings are read-only, even by root.
