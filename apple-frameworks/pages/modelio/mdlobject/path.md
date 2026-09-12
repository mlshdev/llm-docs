> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/path](https://developer.apple.com/documentation/modelio/mdlobject/path)

# path (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A path that identifies the object in an asset’s object hierarchy using object names.

## Declaration

```swift
var path: String { get }
```

<a id="Discussion"></a>

## Discussion

Model I/O forms a path for each object in an asset’s object hierarchy by concatenating the [name](../mdlnamed/name.md) properties of objects in the hierarchy, separated by slashes and preceded by an initial slash.

> **Note**

>  When using an object’s name in a path, Model I/O converts all characters not in the set `[A-Z][a-z][0-9][:-_.]` to underscores.

For example, a mesh in an asset modeling a dining room scene might have the path `/meshes/table_anchor/chair1`, where “meshes” is one of the top-level children of the asset, “table anchor” is a [MDLObject](../mdlobject.md) instance providing a transform inherited by several meshes, and “chair1” is the name of a [MDLMesh](../mdlmesh.md) object.

## See Also

### Working with Object Hierarchies

- [parent](parent.md): The parent object that contains this object.
- [children](children.md): A component that manages this object’s collection of children.
- [addChild(\_:)](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjects(of:root:using:stopPointer:)](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [atPath(\_:)](atpath%28__%29.md): Returns the child object at the specified path.

# path (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A path that identifies the object in an asset’s object hierarchy using object names.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * path;
```

<a id="Discussion"></a>

## Discussion

Model I/O forms a path for each object in an asset’s object hierarchy by concatenating the [name](../mdlnamed/name.md) properties of objects in the hierarchy, separated by slashes and preceded by an initial slash.

> **Note**

>  When using an object’s name in a path, Model I/O converts all characters not in the set `[A-Z][a-z][0-9][:-_.]` to underscores.

For example, a mesh in an asset modeling a dining room scene might have the path `/meshes/table_anchor/chair1`, where “meshes” is one of the top-level children of the asset, “table anchor” is a [MDLObject](../mdlobject.md) instance providing a transform inherited by several meshes, and “chair1” is the name of a [MDLMesh](../mdlmesh.md) object.

## See Also

### Working with Object Hierarchies

- [parent](parent.md): The parent object that contains this object.
- [children](children.md): A component that manages this object’s collection of children.
- [addChild:](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjectsOfClass:root:usingBlock:stopPointer:](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [objectAtPath:](atpath%28__%29.md): Returns the child object at the specified path.
