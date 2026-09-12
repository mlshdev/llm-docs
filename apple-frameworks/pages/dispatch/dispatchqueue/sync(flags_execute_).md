> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/sync(flags:execute:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/sync(flags:execute:))

# sync(flags:execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Submits a work item for execution using the specified attributes and returns the results from that item after it finishes executing.

## Declaration

```swift
func sync<T>(flags: DispatchWorkItemFlags, execute work: () throws -> T) rethrows -> T
```

## Parameters

- `flags`: Additional attributes to apply when executing the block. For a list of possible values, see DispatchWorkItemFlags.
- `work`: The work item containing the work to perform. The block encapsulated by the work item should return a result, which is then returned by this method. For information on how to create this work item, see [DispatchWorkItem](../dispatchworkitem.md).

<a id="return-value"></a>

## Return Value

The return value of the item in the `work` parameter.

## See Also

### Executing Tasks Synchronously

- [sync(execute:)](sync%28execute_%29-2fzvo.md): Submits a work item for execution on the current queue and returns after that block finishes executing.
- [sync(execute:)](sync%28execute_%29-3segw.md): Submits a block object for execution and returns after that block finishes executing.
- [sync(execute:)](sync%28execute_%29-20xby.md): Submits a work item for execution and returns the results from that item after it finishes executing.
- [asyncAndWait(execute:)](asyncandwait%28execute_%29-1udeu.md): Submits a work item for execution and returns only after it finishes executing.
