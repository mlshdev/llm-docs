> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/init(name:)](https://developer.apple.com/documentation/coredata/nspersistentcontainer/init(name:))

# init(name:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a container with the specified name.

## Declaration

```swift
convenience init(name: String)
```

## Parameters

- `name`: The name of the [NSPersistentContainer](../nspersistentcontainer.md) object.

<a id="return-value"></a>

## Return Value

A persistent container initialized with the given name.

<a id="Discussion"></a>

## Discussion

By default, the provided name value is used to name the persistent store and is used to look up the name of the [NSManagedObjectModel](../nsmanagedobjectmodel.md) object to be used with the [NSPersistentContainer](../nspersistentcontainer.md) object.

## See Also

### Creating a Container

- [init(name:managedObjectModel:)](init%28name_managedobjectmodel_%29.md): Create a container with the specified name and managed object model.

# initWithName: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a container with the specified name.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the [NSPersistentContainer](../nspersistentcontainer.md) object.

<a id="return-value"></a>

## Return Value

A persistent container initialized with the given name.

<a id="Discussion"></a>

## Discussion

By default, the provided name value is used to name the persistent store and is used to look up the name of the [NSManagedObjectModel](../nsmanagedobjectmodel.md) object to be used with the [NSPersistentContainer](../nspersistentcontainer.md) object.

## See Also

### Creating a Container

- [initWithName:managedObjectModel:](init%28name_managedobjectmodel_%29.md): Create a container with the specified name and managed object model.
- [persistentContainerWithName:](persistentcontainerwithname_.md): Initializes a new persistent container using the provided name for the container.
- [persistentContainerWithName:managedObjectModel:](persistentcontainerwithname_managedobjectmodel_.md): Initializes a new persistent container using the provided name and managed object model.
