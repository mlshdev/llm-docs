> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/persistentcontainerwithname:](https://developer.apple.com/documentation/coredata/nspersistentcontainer/persistentcontainerwithname:)

# persistentContainerWithName:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new persistent container using the provided name for the container.

## Declaration

```objectivec
+ (instancetype) persistentContainerWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the persistent container.

<a id="return-value"></a>

## Return Value

An initialized persistent container using the passed in name, or `nil` if the container could not be initialized.

<a id="Discussion"></a>

## Discussion

This convenience method will invoke [initWithName:](init%28name_%29.md) and returns the initialized persistent container.

## See Also

### Creating a Container

- [initWithName:](init%28name_%29.md): Creates a container with the specified name.
- [initWithName:managedObjectModel:](init%28name_managedobjectmodel_%29.md): Create a container with the specified name and managed object model.
- [persistentContainerWithName:managedObjectModel:](persistentcontainerwithname_managedobjectmodel_.md): Initializes a new persistent container using the provided name and managed object model.
