> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discardingtaskgroup/isempty](https://developer.apple.com/documentation/swift/discardingtaskgroup/isempty)

# isEmpty

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

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

At the start of the body of a `withDiscardingTaskGroup(returning:isolation:body:)` call, the task group is always empty.

It’s guaranteed to be empty when returning from that body because a task group waits for all child tasks to complete before returning.
