> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/taskgroup/asynciterator](https://developer.apple.com/documentation/swift/taskgroup/asynciterator)

# TaskGroup.AsyncIterator

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
typealias AsyncIterator = TaskGroup<ChildTaskResult>.Iterator
```

## See Also

### Supporting Types

- [TaskGroup.Element](element.md): Conforms when `ChildTaskResult` conforms to `Sendable`. The type of element produced by this asynchronous sequence.
- [TaskGroup.Iterator](iterator.md): Conforms when `ChildTaskResult` conforms to `Sendable`. A type that provides an iteration interface over the results of tasks added to the group.
