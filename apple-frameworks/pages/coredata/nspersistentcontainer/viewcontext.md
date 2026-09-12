> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/viewcontext](https://developer.apple.com/documentation/coredata/nspersistentcontainer/viewcontext)

# viewContext (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The main queue’s managed object context.

## Declaration

```swift
var viewContext: NSManagedObjectContext { get }
```

## Mentioned In

- [Setting up a Core Data stack](../setting-up-a-core-data-stack.md)
- [Syncing a Core Data Store with CloudKit](../syncing-a-core-data-store-with-cloudkit.md)
- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

This property contains a reference to the [NSManagedObjectContext](../nsmanagedobjectcontext.md) that is created and owned by the persistent container which is associated with the main queue of the application. This context is created automatically as part of the initialization of the persistent container.

This context is associated directly with the [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) and is non-generational by default.

## See Also

### Acquiring Contexts

- [newBackgroundContext()](newbackgroundcontext%28%29.md): Returns a new managed object context that executes on a private queue.

# viewContext (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The main queue’s managed object context.

## Declaration

```objectivec
@property (strong, readonly) NSManagedObjectContext * viewContext;
```

## Mentioned In

- [Setting up a Core Data stack](../setting-up-a-core-data-stack.md)
- [Syncing a Core Data Store with CloudKit](../syncing-a-core-data-store-with-cloudkit.md)
- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

This property contains a reference to the [NSManagedObjectContext](../nsmanagedobjectcontext.md) that is created and owned by the persistent container which is associated with the main queue of the application. This context is created automatically as part of the initialization of the persistent container.

This context is associated directly with the [NSPersistentStoreCoordinator](../nspersistentstorecoordinator.md) and is non-generational by default.

## See Also

### Acquiring Contexts

- [newBackgroundContext](newbackgroundcontext%28%29.md): Returns a new managed object context that executes on a private queue.
