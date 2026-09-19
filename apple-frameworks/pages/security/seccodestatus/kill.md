> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seccodestatus/kill

# kill (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The code wants to be terminated if it ever loses its validity.

## Declaration

```swift
static var kill: SecCodeStatus { get }
```

<a id="Discussion"></a>

## Discussion

This bit can not be cleared on running code; it can only be set. Running code that has this flag set is guaranteed to be valid, because if it were invalid it would have been terminated.

# kSecCodeStatusKill (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The code wants to be terminated if it ever loses its validity.

## Declaration

```objectivec
kSecCodeStatusKill
```

<a id="Discussion"></a>

## Discussion

This bit can not be cleared on running code; it can only be set. Running code that has this flag set is guaranteed to be valid, because if it were invalid it would have been terminated.
