> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/nextresult()](https://developer.apple.com/documentation/swift/throwingtaskgroup/nextresult())

# nextResult()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Wait for the next child task to complete, and return a result containing either the value that the child task returned or the error that it threw.

## Declaration

```swift
nonisolated(nonsending) mutating func nextResult() async -> Result<ChildTaskResult, Failure>?
```

<a id="return-value"></a>

## Return Value

A `Result.success` value containing the value that the child task returned, or a `Result.failure` value containing the error that the child task threw.

<a id="discussion"></a>

## Discussion

The values returned by successive calls to this method appear in the order that the tasks *completed*, not in the order that those tasks were added to the task group. For example:

```swift
group.addTask { 1 }
group.addTask { 2 }

guard let result = await group.nextResult() else {
    return  // No task to wait on, which won't happen in this example.
}

switch result {
case .success(let value): print(value)
case .failure(let error): print("Failure: \(error)")
}
// Prints either "2" or "1".
```

If the next child task throws an error and you propagate that error from this method out of the body of a call to the `ThrowingTaskGroup.withThrowingTaskGroup(of:returning:body:)` method, then all remaining child tasks in that group are implicitly canceled.

> **See Also**

> `next()`

## See Also

### Accessing Individual Results

- [next()](next%28%29.md)
- [next(isolation:)](next%28isolation_%29.md): Wait for the next child task to complete, and return the value it returned or rethrow the error it threw.
- [isEmpty](isempty.md): A Boolean value that indicates whether the group has any remaining tasks.
- [waitForAll()](waitforall%28%29.md): Wait for all of the group’s remaining tasks to complete.
