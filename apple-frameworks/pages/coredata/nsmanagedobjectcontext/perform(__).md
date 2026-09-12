> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/perform(_:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/perform(_:))

# perform(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Asynchronously performs the specified closure on the context’s queue.

## Declaration

```swift
func perform(_ block: @escaping @Sendable () -> Void)
```

## Parameters

- `block`: The closure to perform.

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

This method encapsulates an autorelease pool and a call to [processPendingChanges()](processpendingchanges%28%29.md).

## See Also

### Performing block operations

- [perform(schedule:\_:)](perform%28schedule___%29.md): Submits a closure to the context’s queue for asynchronous execution.
- [performAndWait(\_:)](performandwait%28__%29-ypye.md): Synchronously performs the specified closure on the context’s queue.
- [performAndWait(\_:)](performandwait%28__%29-6aaf1.md): Submits a closure to the context’s queue for synchronous execution.
- [NSManagedObjectContext.ScheduledTaskType](scheduledtasktype.md): The different types of scheduled tasks.

# performBlock: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Asynchronously performs the specified closure on the context’s queue.

## Declaration

```objectivec
- (void) performBlock:(void (^)()) block;
```

## Parameters

- `block`: The closure to perform.

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

This method encapsulates an autorelease pool and a call to [processPendingChanges](processpendingchanges%28%29.md).

## See Also

### Performing block operations

- [performBlockAndWait:](performandwait%28__%29-ypye.md): Synchronously performs the specified closure on the context’s queue.
