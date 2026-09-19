> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/kseccscheckallarchitectures

# kSecCSCheckAllArchitectures (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

For multi-architecture (universal) Mach-O programs, validate all architectures included.

## Declaration

```swift
var kSecCSCheckAllArchitectures: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

By default, only the native architecture is validated.

# kSecCSCheckAllArchitectures (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

For multi-architecture (universal) Mach-O programs, validate all architectures included.

## Declaration

```objectivec
kSecCSCheckAllArchitectures
```

<a id="Discussion"></a>

## Discussion

By default, only the native architecture is validated.
