> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchworkitem/notify(queue:execute:)](https://developer.apple.com/documentation/dispatch/dispatchworkitem/notify(queue:execute:))

# notify(queue:execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Schedules the execution of the specified work item after the completion of the current work item.

## Declaration

```swift
func notify(queue: DispatchQueue, execute: DispatchWorkItem)
```

## Parameters

- `queue`: The queue on which to execute the work item in the `execute` parameter.
- `execute`: The work item to execute after the completion of the current work item.

## See Also

### Adding a Completion Handler

- [notify(qos:flags:queue:execute:)](notify%28qos_flags_queue_execute_%29.md): Schedules the execution of the specified work item, with the specified quality-of-service, after the completion of the current work item.
