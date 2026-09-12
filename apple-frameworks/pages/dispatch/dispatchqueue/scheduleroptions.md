> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/scheduleroptions](https://developer.apple.com/documentation/dispatch/dispatchqueue/scheduleroptions)

# DispatchQueue.SchedulerOptions

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A set of options that affect the operation of the dispatch queue scheduler.

## Declaration

```swift
struct SchedulerOptions
```

## Topics

### Creating Dispatch Queue Scheduler Options

- [init(qos:flags:group:)](scheduleroptions/init%28qos_flags_group_%29.md): Creates a dispatch queue scheduler options instance with the given options.

### Inspecting Scheduler Options

- [qos](scheduleroptions/qos.md): The dispatch queue quality of service.
- [flags](scheduleroptions/flags.md): The dispatch queue work item flags.
- [group](scheduleroptions/group.md): The dispatch group, if any, to use when performing actions.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scheduling Combine Publishers

- [DispatchQueue.SchedulerTimeType](schedulertimetype.md): The scheduler time type used by the dispatch queue.
