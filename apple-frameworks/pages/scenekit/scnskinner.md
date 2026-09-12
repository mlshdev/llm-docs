> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnskinner](https://developer.apple.com/documentation/scenekit/scnskinner)

# SCNSkinner (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that manages the relationship between skeletal animations and the nodes and geometries they animate.

## Declaration

```swift
class SCNSkinner
```

<a id="overview"></a>

## Overview

Skeletal animation is a technique for simplifying the animation of complex geometries, such as humanoid characters in a game. An animation skeleton is a simple hierarchy of control nodes, which themselves have no visible geometry. Associating the skeleton with a geometry (also called “skinning” the skeleton or creating a skinned model) allows SceneKit to automatically deform the geometry when you move the skeleton’s control nodes, as shown below.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929790@2x.png)

<a id="Working-with-an-Animation-Skeleton"></a>

### Working with an Animation Skeleton

Typically, an artist creates a skinned model using external 3D authoring tools and saves it, along with animations that use the skeleton, in a scene file. You load the model from the scene file and pose or animate it in your app, either by using animation objects also loaded from the scene file or by directly manipulating the nodes in the skeleton.

You can also create a skinned model from separately defined geometry and skeleton data using the [init(baseGeometry:bones:boneInverseBindTransforms:boneWeights:boneIndices:)](scnskinner/init%28basegeometry_bones_boneinversebindtransforms_boneweights_boneindices_%29.md) method.

<a id="Sharing-a-Skinner-Object"></a>

### Sharing a Skinner Object

To work with a skinned model’s skeleton, use the [skinner](scnnode/skinner.md) property of the model’s root node. For example, one file might contain an animated game character, and other files might contain accessories (such as hats or backpacks) for the character to wear. An artist using 3D authoring tools can specify that the character and the accessories be animated using identical skeletons. To attach a hat to the character so that they animate together, you link the skinner object responsible for animating the hat to the skeleton associated with the animated character, as in the following example:

```objc
SCNNode *hero = [SCNScene sceneNamed:@"Hero"].rootNode;
SCNNode *hat = [SCNScene sceneNamed:@"FancyFedora"].rootNode;
hat.skinner.skeleton = hero.skinner.skeleton;
```

## Topics

### Creating a Skinner Object

- [init(baseGeometry:bones:boneInverseBindTransforms:boneWeights:boneIndices:)](scnskinner/init%28basegeometry_bones_boneinversebindtransforms_boneweights_boneindices_%29.md): Creates a skinner object with the specified visible geometry and skeleton information.

### Working with a Skinned Geometry

- [baseGeometry](scnskinner/basegeometry.md): The geometry whose surface the skinner’s animation skeleton deforms.
- [baseGeometryBindTransform](scnskinner/basegeometrybindtransform.md): The coordinate transformation for the skinner’s geometry in its default state.

### Working with an Animation Skeleton

- [skeleton](scnskinner/skeleton.md): The root node of the skinner object’s animation skeleton.
- [bones](scnskinner/bones.md): The control nodes of the animation skeleton.
- [boneInverseBindTransforms](scnskinner/boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneWeights](scnskinner/boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.
- [boneIndices](scnskinner/boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.

### Initializers

- [init(coder:)](scnskinner/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Animation and Constraints

- [Animation](animation.md): Create declarative animations that move elements of a scene in predetermined ways, or manage animations imported with external authoring tools.
- [Constraints](constraints.md): Automatically adjust the position or orientation of a node based on specified rules.
- [SCNMorpher](scnmorpher.md): An object that manages smooth transitions between a node’s base geometry and one or more target geometries.

# SCNSkinner (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

An object that manages the relationship between skeletal animations and the nodes and geometries they animate.

## Declaration

```objectivec
@interface SCNSkinner : NSObject
```

<a id="overview"></a>

## Overview

Skeletal animation is a technique for simplifying the animation of complex geometries, such as humanoid characters in a game. An animation skeleton is a simple hierarchy of control nodes, which themselves have no visible geometry. Associating the skeleton with a geometry (also called “skinning” the skeleton or creating a skinned model) allows SceneKit to automatically deform the geometry when you move the skeleton’s control nodes, as shown below.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929790@2x.png)

<a id="Working-with-an-Animation-Skeleton"></a>

### Working with an Animation Skeleton

Typically, an artist creates a skinned model using external 3D authoring tools and saves it, along with animations that use the skeleton, in a scene file. You load the model from the scene file and pose or animate it in your app, either by using animation objects also loaded from the scene file or by directly manipulating the nodes in the skeleton.

You can also create a skinned model from separately defined geometry and skeleton data using the [skinnerWithBaseGeometry:bones:boneInverseBindTransforms:boneWeights:boneIndices:](scnskinner/init%28basegeometry_bones_boneinversebindtransforms_boneweights_boneindices_%29.md) method.

<a id="Sharing-a-Skinner-Object"></a>

### Sharing a Skinner Object

To work with a skinned model’s skeleton, use the [skinner](scnnode/skinner.md) property of the model’s root node. For example, one file might contain an animated game character, and other files might contain accessories (such as hats or backpacks) for the character to wear. An artist using 3D authoring tools can specify that the character and the accessories be animated using identical skeletons. To attach a hat to the character so that they animate together, you link the skinner object responsible for animating the hat to the skeleton associated with the animated character, as in the following example:

```objc
SCNNode *hero = [SCNScene sceneNamed:@"Hero"].rootNode;
SCNNode *hat = [SCNScene sceneNamed:@"FancyFedora"].rootNode;
hat.skinner.skeleton = hero.skinner.skeleton;
```

## Topics

### Creating a Skinner Object

- [skinnerWithBaseGeometry:bones:boneInverseBindTransforms:boneWeights:boneIndices:](scnskinner/init%28basegeometry_bones_boneinversebindtransforms_boneweights_boneindices_%29.md): Creates a skinner object with the specified visible geometry and skeleton information.

### Working with a Skinned Geometry

- [baseGeometry](scnskinner/basegeometry.md): The geometry whose surface the skinner’s animation skeleton deforms.
- [baseGeometryBindTransform](scnskinner/basegeometrybindtransform.md): The coordinate transformation for the skinner’s geometry in its default state.

### Working with an Animation Skeleton

- [skeleton](scnskinner/skeleton.md): The root node of the skinner object’s animation skeleton.
- [bones](scnskinner/bones.md): The control nodes of the animation skeleton.
- [boneInverseBindTransforms](scnskinner/boneinversebindtransforms.md): The default transforms for the animation skeleton’s bone nodes.
- [boneWeights](scnskinner/boneweights.md): The geometry source that defines the influence of each bone on the positions the geometry’s vertices.
- [boneIndices](scnskinner/boneindices.md): The geometry source defining the mapping from bone indices in skeleton data to the skinner’s bones array.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Animation and Constraints

- [Animation](animation.md): Create declarative animations that move elements of a scene in predetermined ways, or manage animations imported with external authoring tools.
- [Constraints](constraints.md): Automatically adjust the position or orientation of a node based on specified rules.
- [SCNMorpher](scnmorpher.md): An object that manages smooth transitions between a node’s base geometry and one or more target geometries.
