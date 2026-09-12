> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/children](https://developer.apple.com/documentation/modelio/mdlobject/children)

# children (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A component that manages this object’s collection of children.

## Declaration

```swift
var children: any MDLObjectContainerComponent { get set }
```

<a id="Discussion"></a>

## Discussion

Many asset formats describe a hierarchy of transforms that model the spatial relationships between meshes, lights, and cameras in the asset. In such formats, hierarchic transforms are [MDLObject](../mdlobject.md) instances whose [children](children.md) property references the objects affected by the transform, and those objects can be other [MDLObject](../mdlobject.md) instances with children of their own.

This property’s value is a component object—either a [MDLObjectContainer](../mdlobjectcontainer.md) instance, or a custom class that adopts the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) protocol. By default, an object has no container component (that is, this property’s value is `nil`). To add a container component, either write to this property an instance of a container component class or call the [addChild(\_:)](addchild%28__%29.md) method to create a default [MDLObjectContainer](../mdlobjectcontainer.md) instance and add a child object to that container.

> **Note**

>  Reading or writing this property is equivalent to calling the [componentConforming(to:)](componentconforming%28to_%29.md) or [setComponent(\_:for:)](setcomponent%28__for_%29.md) method with the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) protocol.

Container components support fast enumeration and subscripting, so you can treat an object’s children property similarly to an array.

## See Also

### Working with Object Hierarchies

- [parent](parent.md): The parent object that contains this object.
- [addChild(\_:)](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjects(of:root:using:stopPointer:)](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [atPath(\_:)](atpath%28__%29.md): Returns the child object at the specified path.

# children (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A component that manages this object’s collection of children.

## Declaration

```objectivec
@property (nonatomic, retain) id<MDLObjectContainerComponent> children;
```

<a id="Discussion"></a>

## Discussion

Many asset formats describe a hierarchy of transforms that model the spatial relationships between meshes, lights, and cameras in the asset. In such formats, hierarchic transforms are [MDLObject](../mdlobject.md) instances whose [children](children.md) property references the objects affected by the transform, and those objects can be other [MDLObject](../mdlobject.md) instances with children of their own.

This property’s value is a component object—either a [MDLObjectContainer](../mdlobjectcontainer.md) instance, or a custom class that adopts the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) protocol. By default, an object has no container component (that is, this property’s value is `nil`). To add a container component, either write to this property an instance of a container component class or call the [addChild:](addchild%28__%29.md) method to create a default [MDLObjectContainer](../mdlobjectcontainer.md) instance and add a child object to that container.

> **Note**

>  Reading or writing this property is equivalent to calling the [componentConformingToProtocol:](componentconforming%28to_%29.md) or [setComponent:forProtocol:](setcomponent%28__for_%29.md) method with the [MDLObjectContainerComponent](../mdlobjectcontainercomponent.md) protocol.

Container components support fast enumeration and subscripting, so you can treat an object’s children property similarly to an array.

## See Also

### Working with Object Hierarchies

- [parent](parent.md): The parent object that contains this object.
- [addChild:](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjectsOfClass:root:usingBlock:stopPointer:](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [objectAtPath:](atpath%28__%29.md): Returns the child object at the specified path.
