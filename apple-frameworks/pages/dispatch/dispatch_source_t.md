> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatch_source_t

# dispatch_source_t (Swift)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.

## Declaration

```swift
typealias dispatch_source_t = DispatchSource
```

# dispatch_source_t (Objective-C)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.

## Declaration

```objectivec
typedef NSObject<OS_dispatch_source> * dispatch_source_t;
```

## See Also

### Creating a Dispatch Source

- [dispatch_source_create](dispatch_source_create.md): Creates a new dispatch source to monitor low-level system events.
- [dispatch_source_type_t](dispatch_source_type_t.md): An identifier for the type of system object being monitored by a dispatch source.
