> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/newbackgroundcontext()](https://developer.apple.com/documentation/coredata/nspersistentcontainer/newbackgroundcontext())

# newBackgroundContext() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a new managed object context that executes on a private queue.

## Declaration

```swift
func newBackgroundContext() -> NSManagedObjectContext
```

<a id="return-value"></a>

## Return Value

A newly created private managed object context.

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

Invoking this method causes the persistent container to create and return a new [NSManagedObjectContext](../nsmanagedobjectcontext.md) with the [concurrencyType](../nsmanagedobjectcontext/concurrencytype-swift.property.md) set to [NSManagedObjectContextConcurrencyType.privateQueueConcurrencyType](../nsmanagedobjectcontextconcurrencytype/privatequeueconcurrencytype.md). This new context will be associated with the [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) directly and is set to consume [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) broadcasts automatically.

## See Also

### Acquiring Contexts

- [viewContext](viewcontext.md): The main queue’s managed object context.

# newBackgroundContext (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a new managed object context that executes on a private queue.

## Declaration

```objectivec
- (NSManagedObjectContext *) newBackgroundContext;
```

<a id="return-value"></a>

## Return Value

A newly created private managed object context.

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

Invoking this method causes the persistent container to create and return a new [NSManagedObjectContext](../nsmanagedobjectcontext.md) with the [concurrencyType](../nsmanagedobjectcontext/concurrencytype-swift.property.md) set to [NSPrivateQueueConcurrencyType](../nsmanagedobjectcontextconcurrencytype/privatequeueconcurrencytype.md). This new context will be associated with the [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) directly and is set to consume [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) broadcasts automatically.

## See Also

### Acquiring Contexts

- [viewContext](viewcontext.md): The main queue’s managed object context.
