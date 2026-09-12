> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_workloop_t](https://developer.apple.com/documentation/dispatch/dispatch_workloop_t)

# dispatch_workloop_t (Swift)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.

## Declaration

```swift
typealias dispatch_workloop_t = DispatchWorkloop
```

# dispatch_workloop_t (Objective-C)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.

## Declaration

```objectivec
typedef NSObject<OS_dispatch_workloop> * dispatch_workloop_t;
```

## See Also

### Creating a Dispatch Workloop

- [dispatch_workloop_create](dispatch_workloop_create.md): Creates a new workloop with the specified label.
- [dispatch_workloop_create_inactive](dispatch_workloop_create_inactive.md): Creates a new inactive workloop with the specified label.
- [OS_dispatch_workloop](os_dispatch_workloop.md): A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.
