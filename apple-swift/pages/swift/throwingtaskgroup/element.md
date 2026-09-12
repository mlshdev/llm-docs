> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/element](https://developer.apple.com/documentation/swift/throwingtaskgroup/element)

# ThrowingTaskGroup.Element

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of element produced by this asynchronous sequence.

## Declaration

```swift
typealias Element = ChildTaskResult
```

## See Also

### Supporting Types

- [ThrowingTaskGroup.Iterator](iterator.md): Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`. A type that provides an iteration interface over the results of tasks added to the group.
- [ThrowingTaskGroup.AsyncIterator](asynciterator.md): Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`. The type of asynchronous iterator that produces elements of this asynchronous sequence.
