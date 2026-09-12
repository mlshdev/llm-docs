> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/name](https://developer.apple.com/documentation/coredata/nspersistentcontainer/name)

# name (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The container’s name.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

This property is passed in as part of the initialization of the persistent container. This name is used to locate the [NSManagedObjectModel](../nsmanagedobjectmodel.md) (if the [NSManagedObjectModel](../nsmanagedobjectmodel.md) object is not passed in as part of the initialization) and is used to name the persistent store.

## See Also

### Getting the Container’s Configuration

- [managedObjectModel](managedobjectmodel.md): The container’s managed object model.
- [persistentStoreCoordinator](persistentstorecoordinator.md): The container’s persistent store coordinator.

# name (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The container’s name.

## Declaration

```objectivec
@property (copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This property is passed in as part of the initialization of the persistent container. This name is used to locate the [NSManagedObjectModel](../nsmanagedobjectmodel.md) (if the [NSManagedObjectModel](../nsmanagedobjectmodel.md) object is not passed in as part of the initialization) and is used to name the persistent store.

## See Also

### Getting the Container’s Configuration

- [managedObjectModel](managedobjectmodel.md): The container’s managed object model.
- [persistentStoreCoordinator](persistentstorecoordinator.md): The container’s persistent store coordinator.
