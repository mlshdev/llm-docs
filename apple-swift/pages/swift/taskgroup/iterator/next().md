> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/taskgroup/iterator/next()](https://developer.apple.com/documentation/swift/taskgroup/iterator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Advances to and returns the result of the next child task.

## Declaration

```swift
mutating func next() async -> TaskGroup<ChildTaskResult>.Iterator.Element?
```

<a id="return-value"></a>

## Return Value

The value returned by the next child task that completes, or `nil` if there are no remaining child tasks,

<a id="discussion"></a>

## Discussion

The elements returned from this method appear in the order that the tasks *completed*, not in the order that those tasks were added to the task group. After this method returns `nil`, this iterator is guaranteed to never produce more values.

For more information about the iteration order and semantics, see `TaskGroup.next()`.
