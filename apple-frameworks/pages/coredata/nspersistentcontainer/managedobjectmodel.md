> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/managedobjectmodel](https://developer.apple.com/documentation/coredata/nspersistentcontainer/managedobjectmodel)

# managedObjectModel (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The container’s managed object model.

## Declaration

```swift
var managedObjectModel: NSManagedObjectModel { get }
```

## Mentioned In

- [Setting up a Core Data stack](../setting-up-a-core-data-stack.md)

<a id="Discussion"></a>

## Discussion

This property contains a reference to the [NSManagedObjectModel](../nsmanagedobjectmodel.md) object associated with this persistent container.

## See Also

### Getting the Container’s Configuration

- [name](name.md): The container’s name.
- [persistentStoreCoordinator](persistentstorecoordinator.md): The container’s persistent store coordinator.

# managedObjectModel (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The container’s managed object model.

## Declaration

```objectivec
@property (strong, readonly) NSManagedObjectModel * managedObjectModel;
```

## Mentioned In

- [Setting up a Core Data stack](../setting-up-a-core-data-stack.md)

<a id="Discussion"></a>

## Discussion

This property contains a reference to the [NSManagedObjectModel](../nsmanagedobjectmodel.md) object associated with this persistent container.

## See Also

### Getting the Container’s Configuration

- [name](name.md): The container’s name.
- [persistentStoreCoordinator](persistentstorecoordinator.md): The container’s persistent store coordinator.
