> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/taskgroup/iterator/next(isolation:)](https://developer.apple.com/documentation/swift/taskgroup/iterator/next(isolation:))

# next(isolation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Advances to and returns the result of the next child task.

## Declaration

```swift
mutating func next(isolation actor: isolated (any Actor)?) async -> TaskGroup<ChildTaskResult>.Iterator.Element?
```

<a id="return-value"></a>

## Return Value

The value returned by the next child task that completes, or `nil` if there are no remaining child tasks,

<a id="discussion"></a>

## Discussion

The elements returned from this method appear in the order that the tasks *completed*, not in the order that those tasks were added to the task group. After this method returns `nil`, this iterator is guaranteed to never produce more values.

For more information about the iteration order and semantics, see `TaskGroup.next()`.
