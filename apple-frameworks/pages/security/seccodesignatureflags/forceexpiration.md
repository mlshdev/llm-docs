> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodesignatureflags/forceexpiration](https://developer.apple.com/documentation/security/seccodesignatureflags/forceexpiration)

# forceExpiration (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Always set the [considerExpiration](../seccsflags/considerexpiration.md) flag when validating the code.

## Declaration

```swift
static var forceExpiration: SecCodeSignatureFlags { get }
```

<a id="Discussion"></a>

## Discussion

When passed to a function that performs code validation, the `kSecCSConsiderExpiration` flag requests that code signatures made by expired certificates be rejected. By default, expiration of participating certificates is not automatic grounds for rejection.

# kSecCodeSignatureForceExpiration (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Always set the [kSecCSConsiderExpiration](../seccsflags/considerexpiration.md) flag when validating the code.

## Declaration

```objectivec
kSecCodeSignatureForceExpiration
```

<a id="Discussion"></a>

## Discussion

When passed to a function that performs code validation, the `kSecCSConsiderExpiration` flag requests that code signatures made by expired certificates be rejected. By default, expiration of participating certificates is not automatic grounds for rejection.
