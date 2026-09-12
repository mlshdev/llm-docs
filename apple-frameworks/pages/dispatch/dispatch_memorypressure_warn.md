> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_memorypressure_warn](https://developer.apple.com/documentation/dispatch/dispatch_memorypressure_warn)

# DISPATCH_MEMORYPRESSURE_WARN (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The system memory pressure condition is at the warning stage.

## Declaration

```swift
var DISPATCH_MEMORYPRESSURE_WARN: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Apps should release memory that they do not need right now.

## See Also

### Memory Pressure Event Flags

- [DISPATCH_MEMORYPRESSURE_NORMAL](dispatch_memorypressure_normal.md): The system memory pressure condition has returned to normal.
- [DISPATCH_MEMORYPRESSURE_CRITICAL](dispatch_memorypressure_critical.md): The system memory pressure condition is at the critical stage.

# DISPATCH_MEMORYPRESSURE_WARN (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The system memory pressure condition is at the warning stage.

## Declaration

```objectivec
#define DISPATCH_MEMORYPRESSURE_WARN
```

<a id="Discussion"></a>

## Discussion

Apps should release memory that they do not need right now.

## See Also

### Memory Pressure Event Flags

- [DISPATCH_MEMORYPRESSURE_NORMAL](dispatch_memorypressure_normal.md): The system memory pressure condition has returned to normal.
- [DISPATCH_MEMORYPRESSURE_CRITICAL](dispatch_memorypressure_critical.md): The system memory pressure condition is at the critical stage.
