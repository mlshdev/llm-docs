> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/scenereconstruction](https://developer.apple.com/documentation/arkit/arconfiguration/scenereconstruction)

# ARConfiguration.SceneReconstruction (Swift)

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Options that enable ARKit to detect the shape of the physical environment.

## Declaration

```swift
struct SceneReconstruction
```

<a id="overview"></a>

## Overview

When you set one of the these values onto a world-tracking configuration’s [sceneReconstruction](../arworldtrackingconfiguration/scenereconstruction.md) property, ARKit provides you with a mesh that models the real-world surrounding the user.

## Topics

### Modeling the Environment

- [init(rawValue:)](scenereconstruction/init%28rawvalue_%29.md): Initializes a scene-reconstruction object.
- [mesh](scenereconstruction/mesh.md): A polygonal mesh approximation of the physical environment.
- [meshWithClassification](scenereconstruction/meshwithclassification.md): An approximate shape of the physical environment, including classification of the real-world objects within it.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# ARSceneReconstruction (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Options that enable ARKit to detect the shape of the physical environment.

## Declaration

```objectivec
enum ARSceneReconstruction : NSUInteger;
```

<a id="overview"></a>

## Overview

When you set one of the these values onto a world-tracking configuration’s [sceneReconstruction](../arworldtrackingconfiguration/scenereconstruction.md) property, ARKit provides you with a mesh that models the real-world surrounding the user.

## Topics

### Modeling the Environment

- [ARSceneReconstructionMesh](scenereconstruction/mesh.md): A polygonal mesh approximation of the physical environment.
- [ARSceneReconstructionMeshWithClassification](scenereconstruction/meshwithclassification.md): An approximate shape of the physical environment, including classification of the real-world objects within it.
- [ARSceneReconstructionNone](../arscenereconstruction/arscenereconstructionnone.md): Disables the scene reconstruction feature.
