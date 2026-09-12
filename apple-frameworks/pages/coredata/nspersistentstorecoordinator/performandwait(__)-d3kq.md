> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/performandwait(_:)-d3kq](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/performandwait(_:)-d3kq)

# performAndWait(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes the provided closure on the coordinator’s queue and waits for it to finish.

> Use [performAndWait(\_:)](performandwait%28__%29-15ude.md) instead.

## Declaration

```swift
func performAndWait(_ block: @Sendable () -> Void)
```

## Parameters

- `block`: The closure to execute.

## See Also

### Performing tasks

- [perform(\_:)](perform%28__%29-74udx.md): Executes the provided closure asynchronously on the coordinator’s queue and awaits the result.
- [performAndWait(\_:)](performandwait%28__%29-15ude.md): Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [perform(\_:)](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [execute(\_:with:)](execute%28__with_%29.md): Executes the specified request on each of the coordinator’s persistent stores.

# performBlockAndWait: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes the provided closure on the coordinator’s queue and waits for it to finish.

> Use [performAndWait(\_:)](performandwait%28__%29-15ude.md) instead.

## Declaration

```objectivec
- (void) performBlockAndWait:(void (^)()) block;
```

## Parameters

- `block`: The closure to execute.

## See Also

### Performing tasks

- [performBlock:](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [executeRequest:withContext:error:](execute%28__with_%29.md): Executes the specified request on each of the coordinator’s persistent stores.
