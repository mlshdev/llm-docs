> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchpredicate](https://developer.apple.com/documentation/dispatch/dispatchpredicate)

# DispatchPredicate

**Framework:** Dispatch  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

Logical conditions to evaluate within a given execution context.

## Declaration

```swift
enum DispatchPredicate
```

<a id="overview"></a>

## Overview

You use dispatch predicates with the [dispatchPrecondition(condition:)](dispatchprecondition%28condition_%29.md) method.

## Topics

### Predicates

- [DispatchPredicate.onQueue(\_:)](dispatchpredicate/onqueue%28__%29.md): A predicate that indicates the evaluated context is the associated dispatch queue.
- [DispatchPredicate.onQueueAsBarrier(\_:)](dispatchpredicate/onqueueasbarrier%28__%29.md): A predicate that indicates the evaluated context is the associated dispatch queue as part of a barrier operation.
- [DispatchPredicate.notOnQueue(\_:)](dispatchpredicate/notonqueue%28__%29.md): A predicate that indicates the evaluated context is not the associated dispatch queue.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dispatch Objects

- [DispatchObject](dispatchobject.md): The base class for most dispatch types.
- [dispatchPrecondition(condition:)](dispatchprecondition%28condition_%29.md): Checks a dispatch condition necessary for further execution.
- [Dispatch Objects](dispatch-objects.md): The basic behaviors supported by all dispatch types.
