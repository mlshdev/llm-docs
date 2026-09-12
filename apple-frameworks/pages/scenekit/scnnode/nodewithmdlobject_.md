> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/nodewithmdlobject:](https://developer.apple.com/documentation/scenekit/scnnode/nodewithmdlobject:)

# nodeWithMDLObject:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a node from the specified Model I/O object.

## Declaration

```objectivec
+ (instancetype) nodeWithMDLObject:(MDLObject *) mdlObject;
```

## Parameters

- `mdlObject`: A Model I/O object.

<a id="return-value"></a>

## Return Value

A new node object.

<a id="Discussion"></a>

## Discussion

The Model I/O framework provides universal support for import, export, description, and processing of several 3D asset file formats and related resources. (For details, see [Model I/O](../../modelio.md).)

The [MDLObject](../../modelio/mdlobject.md) class is the most general class in ModelIO, representing any object that can be contained in a scene file, along with the object’s position in the scene and its relationships to other objects. Use this method to import any Model I/O object, creating an equivalent [SCNNode](../scnnode.md) object. If the Model I/O object is of a more specific class, SceneKit imports that object as an attachment to the node—for example, using this method to import a [MDLMesh](../../modelio/mdlmesh.md) object creates a SceneKit node with an attached geometry, and importing a [MDLLight](../../modelio/mdllight.md) object creates a node with an attached light.

## See Also

### Creating a Node

- [node](node.md): Deprecated. Creates and returns a node object.
- [nodeWithGeometry:](init%28geometry_%29.md): Creates and returns a node object with the specified geometry attached.
