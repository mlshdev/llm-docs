> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/os_dispatch_workloop](https://developer.apple.com/documentation/dispatch/os_dispatch_workloop)

# OS_dispatch_workloop

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.

## Declaration

```objectivec
@protocol OS_dispatch_workloop <OS_dispatch_queue>
```

## Relationships

### Inherits From

- [OS_dispatch_queue](os_dispatch_queue.md)

## See Also

### Creating a Dispatch Workloop

- [dispatch_workloop_create](dispatch_workloop_create.md): Creates a new workloop with the specified label.
- [dispatch_workloop_create_inactive](dispatch_workloop_create_inactive.md): Creates a new inactive workloop with the specified label.
- [dispatch_workloop_t](dispatch_workloop_t.md): A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.
