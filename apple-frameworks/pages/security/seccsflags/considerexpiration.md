> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seccsflags/considerexpiration

# considerExpiration (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Consider expired certificates invalid.

## Declaration

```swift
static var considerExpiration: SecCSFlags { get }
```

<a id="Discussion"></a>

## Discussion

When passed to a function that performs code validation, this flag requests that code signatures made by expired certificates be rejected. By default, expiration of participating certificates is not automatic grounds for rejection.

# kSecCSConsiderExpiration (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Consider expired certificates invalid.

## Declaration

```objectivec
kSecCSConsiderExpiration
```

<a id="Discussion"></a>

## Discussion

When passed to a function that performs code validation, this flag requests that code signatures made by expired certificates be rejected. By default, expiration of participating certificates is not automatic grounds for rejection.
