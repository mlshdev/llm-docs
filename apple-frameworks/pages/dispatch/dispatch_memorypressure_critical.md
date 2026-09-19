> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatch_memorypressure_critical

# DISPATCH_MEMORYPRESSURE_CRITICAL (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The system memory pressure condition is at the critical stage.

## Declaration

```swift
var DISPATCH_MEMORYPRESSURE_CRITICAL: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Apps should release as much memory as possible.

## See Also

### Memory Pressure Event Flags

- [DISPATCH_MEMORYPRESSURE_WARN](dispatch_memorypressure_warn.md): The system memory pressure condition is at the warning stage.
- [DISPATCH_MEMORYPRESSURE_NORMAL](dispatch_memorypressure_normal.md): The system memory pressure condition has returned to normal.

# DISPATCH_MEMORYPRESSURE_CRITICAL (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The system memory pressure condition is at the critical stage.

## Declaration

```objectivec
#define DISPATCH_MEMORYPRESSURE_CRITICAL
```

<a id="Discussion"></a>

## Discussion

Apps should release as much memory as possible.

## See Also

### Memory Pressure Event Flags

- [DISPATCH_MEMORYPRESSURE_WARN](dispatch_memorypressure_warn.md): The system memory pressure condition is at the warning stage.
- [DISPATCH_MEMORYPRESSURE_NORMAL](dispatch_memorypressure_normal.md): The system memory pressure condition has returned to normal.
