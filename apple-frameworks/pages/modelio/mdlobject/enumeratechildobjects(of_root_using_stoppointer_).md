> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/enumeratechildobjects(of:root:using:stoppointer:)](https://developer.apple.com/documentation/modelio/mdlobject/enumeratechildobjects(of:root:using:stoppointer:))

# enumerateChildObjects(of:root:using:stopPointer:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Executes the specified block using each object in this object’s child hierarchy.

## Declaration

```swift
func enumerateChildObjects(of objectClass: AnyClass, root: MDLObject, using block: @escaping (MDLObject, UnsafeMutablePointer<ObjCBool>) -> Void, stopPointer: UnsafeMutablePointer<ObjCBool>)
```

## Parameters

- `objectClass`: A Model I/O class representing a type of child objects to evaluate. For example, pass the [MDLMesh](../mdlmesh.md) class to evaluate all 3D objects stored in the asset. Pass the [MDLObject](../mdlobject.md) class to evaluate all child objects regardless of type.
- `root`: The root object at which to begin traversing the child object hierarchy.
- `block`: The block to apply to child objects. This block takes two parameters: the `object` to be evaluated by the block, and a `stop` pointer that you can set to [true](https://developer.apple.com/documentation/swift/true) to stop further evaluation of the object hierarchy.
- `stopPointer`: Set this pointer’s value to [true](https://developer.apple.com/documentation/swift/true) during enumeration to stop further enumeration of the object hierarchy.

## See Also

### Working with Object Hierarchies

- [parent](parent.md): The parent object that contains this object.
- [children](children.md): A component that manages this object’s collection of children.
- [addChild(\_:)](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [atPath(\_:)](atpath%28__%29.md): Returns the child object at the specified path.

# enumerateChildObjectsOfClass:root:usingBlock:stopPointer: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Executes the specified block using each object in this object’s child hierarchy.

## Declaration

```objectivec
- (void) enumerateChildObjectsOfClass:(Class) objectClass root:(MDLObject *) root usingBlock:(void (^)(MDLObject *object, BOOL *stop)) block stopPointer:(BOOL *) stopPointer;
```

## Parameters

- `objectClass`: A Model I/O class representing a type of child objects to evaluate. For example, pass the [MDLMesh](../mdlmesh.md) class to evaluate all 3D objects stored in the asset. Pass the [MDLObject](../mdlobject.md) class to evaluate all child objects regardless of type.
- `root`: The root object at which to begin traversing the child object hierarchy.
- `block`: The block to apply to child objects. This block takes two parameters: the `object` to be evaluated by the block, and a `stop` pointer that you can set to [true](https://developer.apple.com/documentation/swift/true) to stop further evaluation of the object hierarchy.
- `stopPointer`: Set this pointer’s value to [true](https://developer.apple.com/documentation/swift/true) during enumeration to stop further enumeration of the object hierarchy.

## See Also

### Working with Object Hierarchies

- [parent](parent.md): The parent object that contains this object.
- [children](children.md): A component that manages this object’s collection of children.
- [addChild:](addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [path](path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [objectAtPath:](atpath%28__%29.md): Returns the child object at the specified path.
