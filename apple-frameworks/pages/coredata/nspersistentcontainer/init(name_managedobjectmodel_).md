> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/init(name:managedobjectmodel:)](https://developer.apple.com/documentation/coredata/nspersistentcontainer/init(name:managedobjectmodel:))

# init(name:managedObjectModel:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Create a container with the specified name and managed object model.

## Declaration

```swift
init(name: String, managedObjectModel model: NSManagedObjectModel)
```

## Parameters

- `name`: The name used by the persistent container.
- `model`: The managed object model to be used by the persistent container.

<a id="return-value"></a>

## Return Value

A persistent container initialized with the given name and model.

<a id="Discussion"></a>

## Discussion

By default, the provided name value of the container is used as the name of the persisent store associated with the container. Passing in the [NSManagedObjectModel](../nsmanagedobjectmodel.md) object overrides the lookup of the model by the provided name value.

## See Also

### Creating a Container

- [init(name:)](init%28name_%29.md): Creates a container with the specified name.

# initWithName:managedObjectModel: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Create a container with the specified name and managed object model.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name managedObjectModel:(NSManagedObjectModel *) model;
```

## Parameters

- `name`: The name used by the persistent container.
- `model`: The managed object model to be used by the persistent container.

<a id="return-value"></a>

## Return Value

A persistent container initialized with the given name and model.

<a id="Discussion"></a>

## Discussion

By default, the provided name value of the container is used as the name of the persisent store associated with the container. Passing in the [NSManagedObjectModel](../nsmanagedobjectmodel.md) object overrides the lookup of the model by the provided name value.

## See Also

### Creating a Container

- [initWithName:](init%28name_%29.md): Creates a container with the specified name.
- [persistentContainerWithName:](persistentcontainerwithname_.md): Initializes a new persistent container using the provided name for the container.
- [persistentContainerWithName:managedObjectModel:](persistentcontainerwithname_managedobjectmodel_.md): Initializes a new persistent container using the provided name and managed object model.
