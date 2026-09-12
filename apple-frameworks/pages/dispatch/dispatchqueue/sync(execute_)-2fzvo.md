> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/sync(execute:)-2fzvo](https://developer.apple.com/documentation/dispatch/dispatchqueue/sync(execute:)-2fzvo)

# sync(execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Submits a work item for execution on the current queue and returns after that block finishes executing.

## Declaration

```swift
func sync(execute workItem: DispatchWorkItem)
```

## Parameters

- `workItem`: The dispatch work item containing the task to execute. For information on how to create this work item, see [DispatchWorkItem](../dispatchworkitem.md).

## See Also

### Executing Tasks Synchronously

- [sync(execute:)](sync%28execute_%29-3segw.md): Submits a block object for execution and returns after that block finishes executing.
- [sync(execute:)](sync%28execute_%29-20xby.md): Submits a work item for execution and returns the results from that item after it finishes executing.
- [sync(flags:execute:)](sync%28flags_execute_%29.md): Submits a work item for execution using the specified attributes and returns the results from that item after it finishes executing.
- [asyncAndWait(execute:)](asyncandwait%28execute_%29-1udeu.md): Submits a work item for execution and returns only after it finishes executing.
