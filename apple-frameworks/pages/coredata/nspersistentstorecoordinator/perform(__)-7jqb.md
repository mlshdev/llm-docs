> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/perform(_:)-7jqb](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/perform(_:)-7jqb)

# perform(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes the provided closure asynchronously on the coordinator’s queue.

> Use [perform(\_:)](perform%28__%29-74udx.md) instead.

## Declaration

```swift
func perform(_ block: @escaping @Sendable () -> Void)
```

## Parameters

- `block`: The closure to execute.

## See Also

### Performing tasks

- [perform(\_:)](perform%28__%29-74udx.md): Executes the provided closure asynchronously on the coordinator’s queue and awaits the result.
- [performAndWait(\_:)](performandwait%28__%29-15ude.md): Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [performAndWait(\_:)](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [execute(\_:with:)](execute%28__with_%29.md): Executes the specified request on each of the coordinator’s persistent stores.

# performBlock: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes the provided closure asynchronously on the coordinator’s queue.

> Use [perform(\_:)](perform%28__%29-74udx.md) instead.

## Declaration

```objectivec
- (void) performBlock:(void (^)()) block;
```

## Parameters

- `block`: The closure to execute.

## See Also

### Performing tasks

- [performBlockAndWait:](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [executeRequest:withContext:error:](execute%28__with_%29.md): Executes the specified request on each of the coordinator’s persistent stores.
