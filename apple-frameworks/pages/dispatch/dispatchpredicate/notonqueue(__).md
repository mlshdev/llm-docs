> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchpredicate/notonqueue(_:)](https://developer.apple.com/documentation/dispatch/dispatchpredicate/notonqueue(_:))

# DispatchPredicate.notOnQueue(\_:)

**Framework:** Dispatch  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

A predicate that indicates the evaluated context is not the associated dispatch queue.

## Declaration

```swift
case notOnQueue(DispatchQueue)
```

## See Also

### Predicates

- [DispatchPredicate.onQueue(\_:)](onqueue%28__%29.md): A predicate that indicates the evaluated context is the associated dispatch queue.
- [DispatchPredicate.onQueueAsBarrier(\_:)](onqueueasbarrier%28__%29.md): A predicate that indicates the evaluated context is the associated dispatch queue as part of a barrier operation.
