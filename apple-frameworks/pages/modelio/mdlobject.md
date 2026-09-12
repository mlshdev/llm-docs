> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject](https://developer.apple.com/documentation/modelio/mdlobject)

# MDLObject (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.

## Declaration

```swift
class MDLObject
```

<a id="overview"></a>

## Overview

When you load content from an asset file using the [MDLAsset](mdlasset.md) class, Model I/O creates instances of the [MDLObject](mdlobject.md) subclasses [MDLMesh](mdlmesh.md), [MDLCamera](mdlcamera.md), and [MDLLight](mdllight.md). For asset formats that describe a collection of meshes, cameras, and lights organized in a hierarchy of spatial transforms, Model I/O also creates instances of the [MDLObject](mdlobject.md) class itself to describe the transform nodes that organize the asset’s visual content. Similarly, you use the [MDLObject](mdlobject.md) class and its subclasses when creating an object graph to be exported as an asset file using  the [MDLAsset](mdlasset.md) class.

<a id="Extending-Model-IO-with-Components"></a>

### Extending Model I/O with Components

Model I/O allows you to customize the content and relationships in an object graph with *components*. For each aspect of an object’s functionality, you use a component protocol (extending the [MDLComponent](mdlcomponent.md) protocol) to define functionality and a class adopting that protocol to implement it. Then, you can use the [componentConforming(to:)](mdlobject/componentconforming%28to_%29.md) and [setComponent(\_:for:)](mdlobject/setcomponent%28__for_%29.md) methods to associate those objects with any instance of the [MDLObject](mdlobject.md) class or of one of its subclasses. For example, you might define a protocol to add gameplay-related information such as scripting triggers to certain meshes, lights, or cameras in a scene.

Model I/O itself uses this mechanism to handle object hierarchies and spatial transforms: The methods listed in [Working with Object Hierarchies](mdlobject.md#Working-with-Object-Hierarchies) use the [MDLObjectContainerComponent](mdlobjectcontainercomponent.md) protocol to model hierarchic relationships between objects in an asset, and the methods listed in [Working with Objects in Space](mdlobject.md#Working-with-Objects-in-Space) use the [MDLTransformComponent](mdltransformcomponent.md) protocol to model coordinate space relationships. To add support for an asset file format or object graph that uses other ways to store or compute these relationships, you can use your own classes that adopt these protocols.

## Topics

### Customizing Objects with Components

- [componentConforming(to:)](mdlobject/componentconforming%28to_%29.md): Returns the object’s component for the specified protocol.
- [setComponent(\_:for:)](mdlobject/setcomponent%28__for_%29.md): Associates a component with the object for the specified protocol.

### Working with Object Hierarchies

- [parent](mdlobject/parent.md): The parent object that contains this object.
- [children](mdlobject/children.md): A component that manages this object’s collection of children.
- [addChild(\_:)](mdlobject/addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjects(of:root:using:stopPointer:)](mdlobject/enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [path](mdlobject/path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [atPath(\_:)](mdlobject/atpath%28__%29.md): Returns the child object at the specified path.

### Working with Objects in Space

- [boundingBox(atTime:)](mdlobject/boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the object’s contents at the specified time sample.
- [transform](mdlobject/transform.md): A component that manages this object’s spatial transform and its changes over time.

### Managing Rendering Intent

- [hidden](mdlobject/hidden.md): A Boolean value indicating whether this object should be used in rendering.
- [instance](mdlobject/instance.md): The primary object, if applicable, of which this object is an instance.
- [path](mdlobject/path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [components](mdlobject/components.md)

### Object Instancing

- [atPath(\_:)](mdlobject/atpath%28__%29.md): Returns the child object at the specified path.
- [enumerateChildObjects(of:root:using:stopPointer:)](mdlobject/enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [subscript(\_:)](mdlobject/subscript%28__%29.md)

### Constants

- [MDLAxisAlignedBoundingBox](mdlaxisalignedboundingbox.md): The minimal volume containing an object, used by the [boundingBox(atTime:)](mdlobject/boundingbox%28attime_%29.md) method.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MDLCamera](mdlcamera.md)
- [MDLLight](mdllight.md)
- [MDLMesh](mdlmesh.md)
- [MDLPackedJointAnimation](mdlpackedjointanimation.md)
- [MDLSkeleton](mdlskeleton.md)
- [MDLVoxelArray](mdlvoxelarray.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### 3D Asset Basics

- [MDLAsset](mdlasset.md): An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.
- [MDLTransform](mdltransform.md): A description of the local coordinate space transformations for a 3D object.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.

# MDLObject (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.

## Declaration

```objectivec
@interface MDLObject : NSObject
```

<a id="overview"></a>

## Overview

When you load content from an asset file using the [MDLAsset](mdlasset.md) class, Model I/O creates instances of the [MDLObject](mdlobject.md) subclasses [MDLMesh](mdlmesh.md), [MDLCamera](mdlcamera.md), and [MDLLight](mdllight.md). For asset formats that describe a collection of meshes, cameras, and lights organized in a hierarchy of spatial transforms, Model I/O also creates instances of the [MDLObject](mdlobject.md) class itself to describe the transform nodes that organize the asset’s visual content. Similarly, you use the [MDLObject](mdlobject.md) class and its subclasses when creating an object graph to be exported as an asset file using  the [MDLAsset](mdlasset.md) class.

<a id="Extending-Model-IO-with-Components"></a>

### Extending Model I/O with Components

Model I/O allows you to customize the content and relationships in an object graph with *components*. For each aspect of an object’s functionality, you use a component protocol (extending the [MDLComponent](mdlcomponent.md) protocol) to define functionality and a class adopting that protocol to implement it. Then, you can use the [componentConformingToProtocol:](mdlobject/componentconforming%28to_%29.md) and [setComponent:forProtocol:](mdlobject/setcomponent%28__for_%29.md) methods to associate those objects with any instance of the [MDLObject](mdlobject.md) class or of one of its subclasses. For example, you might define a protocol to add gameplay-related information such as scripting triggers to certain meshes, lights, or cameras in a scene.

Model I/O itself uses this mechanism to handle object hierarchies and spatial transforms: The methods listed in [Working with Object Hierarchies](mdlobject.md#Working-with-Object-Hierarchies) use the [MDLObjectContainerComponent](mdlobjectcontainercomponent.md) protocol to model hierarchic relationships between objects in an asset, and the methods listed in [Working with Objects in Space](mdlobject.md#Working-with-Objects-in-Space) use the [MDLTransformComponent](mdltransformcomponent.md) protocol to model coordinate space relationships. To add support for an asset file format or object graph that uses other ways to store or compute these relationships, you can use your own classes that adopt these protocols.

## Topics

### Customizing Objects with Components

- [componentConformingToProtocol:](mdlobject/componentconforming%28to_%29.md): Returns the object’s component for the specified protocol.
- [setComponent:forProtocol:](mdlobject/setcomponent%28__for_%29.md): Associates a component with the object for the specified protocol.

### Working with Object Hierarchies

- [parent](mdlobject/parent.md): The parent object that contains this object.
- [children](mdlobject/children.md): A component that manages this object’s collection of children.
- [addChild:](mdlobject/addchild%28__%29.md): Adds a child object to this object, creating a container for the object’s children if necessary.
- [enumerateChildObjectsOfClass:root:usingBlock:stopPointer:](mdlobject/enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [path](mdlobject/path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [objectAtPath:](mdlobject/atpath%28__%29.md): Returns the child object at the specified path.

### Working with Objects in Space

- [boundingBoxAtTime:](mdlobject/boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the object’s contents at the specified time sample.
- [transform](mdlobject/transform.md): A component that manages this object’s spatial transform and its changes over time.

### Managing Rendering Intent

- [hidden](mdlobject/hidden.md): A Boolean value indicating whether this object should be used in rendering.
- [instance](mdlobject/instance.md): The primary object, if applicable, of which this object is an instance.
- [path](mdlobject/path.md): A path that identifies the object in an asset’s object hierarchy using object names.
- [components](mdlobject/components.md)

### Object Instancing

- [objectAtPath:](mdlobject/atpath%28__%29.md): Returns the child object at the specified path.
- [enumerateChildObjectsOfClass:root:usingBlock:stopPointer:](mdlobject/enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [objectForKeyedSubscript:](mdlobject/subscript%28__%29.md)
- [setObject:forKeyedSubscript:](mdlobject/setobject_forkeyedsubscript_.md)

### Constants

- [MDLAxisAlignedBoundingBox](mdlaxisalignedboundingbox.md): The minimal volume containing an object, used by the [boundingBoxAtTime:](mdlobject/boundingbox%28attime_%29.md) method.

### Type Methods

- [objectWithSCNNode:](mdlobject/objectwithscnnode_.md)
- [objectWithSCNNode:bufferAllocator:](mdlobject/objectwithscnnode_bufferallocator_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MDLCamera](mdlcamera.md)
- [MDLLight](mdllight.md)
- [MDLMesh](mdlmesh.md)
- [MDLPackedJointAnimation](mdlpackedjointanimation.md)
- [MDLSkeleton](mdlskeleton.md)
- [MDLVoxelArray](mdlvoxelarray.md)

### Conforms To

- [MDLNamed](mdlnamed.md)

## See Also

### 3D Asset Basics

- [MDLAsset](mdlasset.md): An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.
- [MDLTransform](mdltransform.md): A description of the local coordinate space transformations for a 3D object.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.
