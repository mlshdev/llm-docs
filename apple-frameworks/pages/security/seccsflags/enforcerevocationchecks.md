> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccsflags/enforcerevocationchecks](https://developer.apple.com/documentation/security/seccsflags/enforcerevocationchecks)

# enforceRevocationChecks (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
static var enforceRevocationChecks: SecCSFlags { get }
```

<a id="Discussion"></a>

## Discussion

Forces checking of certificates against revocation lists or OCSP (online certificate status protocol) regardless of preference settings.

# kSecCSEnforceRevocationChecks (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kSecCSEnforceRevocationChecks
```

<a id="Discussion"></a>

## Discussion

Forces checking of certificates against revocation lists or OCSP (online certificate status protocol) regardless of preference settings.
