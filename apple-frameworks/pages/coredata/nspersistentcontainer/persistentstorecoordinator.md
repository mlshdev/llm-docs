> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/persistentstorecoordinator](https://developer.apple.com/documentation/coredata/nspersistentcontainer/persistentstorecoordinator)

# persistentStoreCoordinator (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The container’s persistent store coordinator.

## Declaration

```swift
var persistentStoreCoordinator: NSPersistentStoreCoordinator { get }
```

## Mentioned In

- [Setting up a Core Data stack](../setting-up-a-core-data-stack.md)

<a id="Discussion"></a>

## Discussion

When the persistent container is initialized, it creates a persistent store coordinator as part of that initialization. That persistent store coordinator is referenced in this property.

## See Also

### Getting the Container’s Configuration

- [managedObjectModel](managedobjectmodel.md): The container’s managed object model.
- [name](name.md): The container’s name.

# persistentStoreCoordinator (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The container’s persistent store coordinator.

## Declaration

```objectivec
@property (strong, readonly) NSPersistentStoreCoordinator * persistentStoreCoordinator;
```

## Mentioned In

- [Setting up a Core Data stack](../setting-up-a-core-data-stack.md)

<a id="Discussion"></a>

## Discussion

When the persistent container is initialized, it creates a persistent store coordinator as part of that initialization. That persistent store coordinator is referenced in this property.

## See Also

### Getting the Container’s Configuration

- [managedObjectModel](managedobjectmodel.md): The container’s managed object model.
- [name](name.md): The container’s name.
