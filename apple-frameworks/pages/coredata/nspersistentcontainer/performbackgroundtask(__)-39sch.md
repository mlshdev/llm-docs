> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/performbackgroundtask(_:)-39sch](https://developer.apple.com/documentation/coredata/nspersistentcontainer/performbackgroundtask(_:)-39sch)

# performBackgroundTask(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Executes a closure on a private queue using an ephemeral managed object context.

## Declaration

```swift
func performBackgroundTask(_ block: @escaping @Sendable (NSManagedObjectContext) -> Void)
```

## Parameters

- `block`: A closure that is executed by the persistent container against a newly created private context. The private context is passed into the block as part of the execution of the block.

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

Each time this method is invoked, the persistent container creates a new [NSManagedObjectContext](../nsmanagedobjectcontext.md) with the [concurrencyType](../nsmanagedobjectcontext/concurrencytype-swift.property.md) set to [NSManagedObjectContextConcurrencyType.privateQueueConcurrencyType](../nsmanagedobjectcontextconcurrencytype/privatequeueconcurrencytype.md). The persistent container then executes the passed in block against that newly created context on the context’s private queue.

## See Also

### Performing Background Tasks

- [performBackgroundTask(\_:)](performbackgroundtask%28__%29-25nok.md)

# performBackgroundTask: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Executes a closure on a private queue using an ephemeral managed object context.

## Declaration

```objectivec
- (void) performBackgroundTask:(void (^)(NSManagedObjectContext *)) block;
```

## Parameters

- `block`: A closure that is executed by the persistent container against a newly created private context. The private context is passed into the block as part of the execution of the block.

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

Each time this method is invoked, the persistent container creates a new [NSManagedObjectContext](../nsmanagedobjectcontext.md) with the [concurrencyType](../nsmanagedobjectcontext/concurrencytype-swift.property.md) set to [NSPrivateQueueConcurrencyType](../nsmanagedobjectcontextconcurrencytype/privatequeueconcurrencytype.md). The persistent container then executes the passed in block against that newly created context on the context’s private queue.
