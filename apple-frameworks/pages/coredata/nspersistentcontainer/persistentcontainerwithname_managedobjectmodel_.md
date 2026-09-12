> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/persistentcontainerwithname:managedobjectmodel:](https://developer.apple.com/documentation/coredata/nspersistentcontainer/persistentcontainerwithname:managedobjectmodel:)

# persistentContainerWithName:managedObjectModel:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new persistent container using the provided name and managed object model.

## Declaration

```objectivec
+ (instancetype) persistentContainerWithName:(NSString *) name managedObjectModel:(NSManagedObjectModel *) model;
```

## Parameters

- `name`: Name of the persistent container.
- `model`: The [NSManagedObjectModel](../nsmanagedobjectmodel.md) object to be used by the persistent container.

<a id="return-value"></a>

## Return Value

An initialized persistent container using the passed in name and model; or `nil` if the container could not be initialized.

<a id="Discussion"></a>

## Discussion

This method invokes [initWithName:managedObjectModel:](init%28name_managedobjectmodel_%29.md) and returns the initialized persistent container. This method uses the provided [NSManagedObjectModel](../nsmanagedobjectmodel.md) object, whereas [persistentContainerWithName:](persistentcontainerwithname_.md) searches the application bundle for a model with the passed in name.

## See Also

### Creating a Container

- [initWithName:](init%28name_%29.md): Creates a container with the specified name.
- [initWithName:managedObjectModel:](init%28name_managedobjectmodel_%29.md): Create a container with the specified name and managed object model.
- [persistentContainerWithName:](persistentcontainerwithname_.md): Initializes a new persistent container using the provided name for the container.
