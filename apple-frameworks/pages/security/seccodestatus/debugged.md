> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seccodestatus/debugged

# debugged (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The code has been debugged by another process that was allowed to do so.

## Declaration

```swift
static var debugged: SecCodeStatus { get }
```

<a id="Discussion"></a>

## Discussion

The debugger sets this flag when it attaches.

# kSecCodeStatusDebugged (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The code has been debugged by another process that was allowed to do so.

## Declaration

```objectivec
kSecCodeStatusDebugged
```

<a id="Discussion"></a>

## Discussion

The debugger sets this flag when it attaches.
