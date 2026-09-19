> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchpredicate/onqueueasbarrier(_:)

# DispatchPredicate.onQueueAsBarrier(\_:)

**Framework:** Dispatch  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

A predicate that indicates the evaluated context is the associated dispatch queue as part of a barrier operation.

## Declaration

```swift
case onQueueAsBarrier(DispatchQueue)
```

<a id="Discussion"></a>

## Discussion

For more information about barrier operations, see \`[barrier](../dispatchworkitemflags/barrier.md)\`.

## See Also

### Predicates

- [DispatchPredicate.onQueue(\_:)](onqueue%28__%29.md): A predicate that indicates the evaluated context is the associated dispatch queue.
- [DispatchPredicate.notOnQueue(\_:)](notonqueue%28__%29.md): A predicate that indicates the evaluated context is not the associated dispatch queue.
