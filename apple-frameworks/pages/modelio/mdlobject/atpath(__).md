> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/atpath(_:)](https://developer.apple.com/documentation/modelio/mdlobject/atpath(_:))

# atPath(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the child object at the specified path.

## Declaration

```swift
func atPath(_ path: String) -> MDLObject
```

## Parameters

- `path`: A path that identifies the object to be found using object names.

<a id="return-value"></a>

## Return Value

The requested object, or `nil` if no object matching the path can be found.

<a id="Discussion"></a>

## Discussion

See the [path](path.md) property for examples of how to construct object paths for searching.

## See Also

### Working with Object Hierarchies

- [parent](parent.md): The parent object that contains this object.
- [children](children.md): A component that manages this object’s collection of children.
- [addChild(\_:)](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjects(of:root:using:stopPointer:)](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.

# objectAtPath: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the child object at the specified path.

## Declaration

```objectivec
- (MDLObject *) objectAtPath:(NSString *) path;
```

## Parameters

- `path`: A path that identifies the object to be found using object names.

<a id="return-value"></a>

## Return Value

The requested object, or `nil` if no object matching the path can be found.

<a id="Discussion"></a>

## Discussion

See the [path](path.md) property for examples of how to construct object paths for searching.

## See Also

### Working with Object Hierarchies

- [parent](parent.md): The parent object that contains this object.
- [children](children.md): A component that manages this object’s collection of children.
- [addChild:](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjectsOfClass:root:usingBlock:stopPointer:](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
