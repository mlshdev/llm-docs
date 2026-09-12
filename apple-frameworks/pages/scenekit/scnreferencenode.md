> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnreferencenode](https://developer.apple.com/documentation/scenekit/scnreferencenode)

# SCNReferenceNode (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A scene graph node that serves as a placeholder for content to be loaded from a separate scene file.

## Declaration

```swift
@MainActor class SCNReferenceNode
```

```swift
class SCNReferenceNode
```

<a id="overview"></a>

## Overview

When you tell a reference node to load its content, SceneKit loads the referenced scene file and makes children of the scene file’s root node become children of the reference node.

## Topics

### Creating a Reference Node

- [init(url:)](scnreferencenode/init%28url_%29-9dkfj.md): Initializes a node whose content is to be loaded from the referenced URL.

### Loading and Unloading a Reference Node’s Content

- [referenceURL](scnreferencenode/referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [loadingPolicy](scnreferencenode/loadingpolicy.md): An option for whether to load the node’s content automatically.
- [load()](scnreferencenode/load%28%29.md): Loads content into the node from its referenced external scene file.
- [isLoaded](scnreferencenode/isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.
- [unload()](scnreferencenode/unload%28%29.md): Removes the node’s children and marks the node as not loaded.

### Constants

- [SCNReferenceLoadingPolicy](scnreferenceloadingpolicy.md): Options for when to load the reference node’s content, used by the [loadingPolicy](scnreferencenode/loadingpolicy.md) property.

### Initializers

- [init(URL:)](scnreferencenode/init%28url_%29-9w131.md)
- [init(URL:)](scnreferencenode/init%28url_%29-w5vu.md)
- [init(coder:)](scnreferencenode/init%28coder_%29.md)

## Relationships

### Inherits From

- [SCNNode](scnnode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNActionable](scnactionable.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNBoundingVolume](scnboundingvolume.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)

## See Also

### Scene Structure

- [Organizing a Scene with Nodes](organizing-a-scene-with-nodes.md): Use nodes to define the structure of a scene.
- [SCNNode](scnnode.md): A structural element of a scene graph, representing a position and transform in a 3D coordinate space, to which you can attach geometry, lights, cameras, or other displayable content.

# SCNReferenceNode (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A scene graph node that serves as a placeholder for content to be loaded from a separate scene file.

## Declaration

```objectivec
@interface SCNReferenceNode : SCNNode
```

<a id="overview"></a>

## Overview

When you tell a reference node to load its content, SceneKit loads the referenced scene file and makes children of the scene file’s root node become children of the reference node.

## Topics

### Creating a Reference Node

- [initWithURL:](scnreferencenode/init%28url_%29-9dkfj.md): Initializes a node whose content is to be loaded from the referenced URL.
- [referenceNodeWithURL:](scnreferencenode/referencenodewithurl_.md): Deprecated. Creates a node whose content is to be loaded from the referenced URL.

### Loading and Unloading a Reference Node’s Content

- [referenceURL](scnreferencenode/referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [loadingPolicy](scnreferencenode/loadingpolicy.md): An option for whether to load the node’s content automatically.
- [load](scnreferencenode/load%28%29.md): Loads content into the node from its referenced external scene file.
- [loaded](scnreferencenode/isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.
- [unload](scnreferencenode/unload%28%29.md): Removes the node’s children and marks the node as not loaded.

### Constants

- [SCNReferenceLoadingPolicy](scnreferenceloadingpolicy.md): Options for when to load the reference node’s content, used by the [loadingPolicy](scnreferencenode/loadingpolicy.md) property.

### Instance Methods

- [initWithCoder:](scnreferencenode/init%28coder_%29.md)

## Relationships

### Inherits From

- [SCNNode](scnnode.md)

## See Also

### Scene Structure

- [Organizing a Scene with Nodes](organizing-a-scene-with-nodes.md): Use nodes to define the structure of a scene.
- [SCNNode](scnnode.md): A structural element of a scene graph, representing a position and transform in a 3D coordinate space, to which you can attach geometry, lights, cameras, or other displayable content.
