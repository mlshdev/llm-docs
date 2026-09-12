> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/waitforall()](https://developer.apple.com/documentation/swift/throwingtaskgroup/waitforall())

# waitForAll()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Wait for all of the group’s remaining tasks to complete.

## Declaration

```swift
nonisolated(nonsending) mutating func waitForAll() async throws
```

<a id="discussion"></a>

## Discussion

If any of the tasks throw, the *first* error thrown is captured and re-thrown by this method although the task group is *not* canceled when this happens.

<a id="Cancelling-the-task-group-on-first-error"></a>

### Cancelling the task group on first error

If you want to cancel the task group, and all “sibling” tasks, whenever any of child tasks throws an error, use the following pattern instead:

```swift
while !group.isEmpty {
    do {
        try await group.next()
    } catch is CancellationError {
        // we decide that cancellation errors thrown by children,
        // should not cause cancellation of the entire group.
        continue;
    } catch {
        // other errors though we print and cancel the group,
        // and all of the remaining child tasks within it.
        print("Error: \(error)")
        group.cancelAll()
    }
}
assert(group.isEmpty())
```

> **Throws**

> The *first* error that was thrown by a child task during draining all the tasks. This first error is stored until all other tasks have completed, and is re-thrown afterwards.

## See Also

### Accessing Individual Results

- [next()](next%28%29.md)
- [nextResult()](nextresult%28%29.md): Wait for the next child task to complete, and return a result containing either the value that the child task returned or the error that it threw.
- [next(isolation:)](next%28isolation_%29.md): Wait for the next child task to complete, and return the value it returned or rethrow the error it threw.
- [isEmpty](isempty.md): A Boolean value that indicates whether the group has any remaining tasks.
