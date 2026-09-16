> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/throwingdiscardingtaskgroup/isempty

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

At the start of the body of a `withThrowingDiscardingTaskGroup(returning:isolation:body:)` call, the task group is always empty.

It’s guaranteed to be empty when returning from that body because a task group waits for all child tasks to complete before returning.
