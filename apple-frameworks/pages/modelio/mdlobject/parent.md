> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/parent](https://developer.apple.com/documentation/modelio/mdlobject/parent)

# parent (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parent object that contains this object.

## Declaration

```swift
weak var parent: MDLObject? { get set }
```

<a id="Discussion"></a>

## Discussion

Many asset formats describe a hierarchy of transforms that model the spatial relationships between meshes, lights, and cameras in the asset. In such formats, hierarchic transforms are [MDLObject](../mdlobject.md) instances whose [children](children.md) property references the objects affected by the transform, and those objects can be other [MDLObject](../mdlobject.md) instances with children of their own.

This property’s value is `nil` for the top-level objects in a [MDLAsset](../mdlasset.md) instance.

## See Also

### Working with Object Hierarchies

- [children](children.md): A component that manages this object’s collection of children.
- [addChild(\_:)](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjects(of:root:using:stopPointer:)](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [atPath(\_:)](atpath%28__%29.md): Returns the child object at the specified path.

# parent (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parent object that contains this object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) MDLObject * parent;
```

<a id="Discussion"></a>

## Discussion

Many asset formats describe a hierarchy of transforms that model the spatial relationships between meshes, lights, and cameras in the asset. In such formats, hierarchic transforms are [MDLObject](../mdlobject.md) instances whose [children](children.md) property references the objects affected by the transform, and those objects can be other [MDLObject](../mdlobject.md) instances with children of their own.

This property’s value is `nil` for the top-level objects in a [MDLAsset](../mdlasset.md) instance.

## See Also

### Working with Object Hierarchies

- [children](children.md): A component that manages this object’s collection of children.
- [addChild:](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjectsOfClass:root:usingBlock:stopPointer:](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [objectAtPath:](atpath%28__%29.md): Returns the child object at the specified path.
