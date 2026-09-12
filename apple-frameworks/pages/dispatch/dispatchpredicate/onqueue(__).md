> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchpredicate/onqueue(_:)](https://developer.apple.com/documentation/dispatch/dispatchpredicate/onqueue(_:))

# DispatchPredicate.onQueue(\_:)

**Framework:** Dispatch  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

A predicate that indicates the evaluated context is the associated dispatch queue.

## Declaration

```swift
case onQueue(DispatchQueue)
```

## See Also

### Predicates

- [DispatchPredicate.onQueueAsBarrier(\_:)](onqueueasbarrier%28__%29.md): A predicate that indicates the evaluated context is the associated dispatch queue as part of a barrier operation.
- [DispatchPredicate.notOnQueue(\_:)](notonqueue%28__%29.md): A predicate that indicates the evaluated context is not the associated dispatch queue.
