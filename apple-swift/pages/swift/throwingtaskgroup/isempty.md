> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/isempty](https://developer.apple.com/documentation/swift/throwingtaskgroup/isempty)

# isEmpty

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the group has any remaining tasks.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="return-value"></a>

## Return Value

`true` if the group has no pending tasks; otherwise `false`.

<a id="discussion"></a>

## Discussion

At the start of the body of a `withThrowingTaskGroup(of:returning:body:)` call, the task group is always empty.

It’s guaranteed to be empty when returning from that body because a task group waits for all child tasks to complete before returning.

## See Also

### Accessing Individual Results

- [next()](next%28%29.md)
- [nextResult()](nextresult%28%29.md): Wait for the next child task to complete, and return a result containing either the value that the child task returned or the error that it threw.
- [next(isolation:)](next%28isolation_%29.md): Wait for the next child task to complete, and return the value it returned or rethrow the error it threw.
- [waitForAll()](waitforall%28%29.md): Wait for all of the group’s remaining tasks to complete.
