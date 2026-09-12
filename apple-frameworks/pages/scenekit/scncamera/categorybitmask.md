> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/categorybitmask](https://developer.apple.com/documentation/scenekit/scncamera/categorybitmask)

# categoryBitMask (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A mask that defines which categories this camera belongs to.

## Declaration

```swift
var categoryBitMask: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Each camera and each node in a scene can be assigned to one or more categories, each corresponding to a bit in the bit mask. You define the mask values used in your app. When SceneKit renders a scene, it compares the [categoryBitMask](../scnnode/categorybitmask.md) property of each node with that of the [pointOfView](../scnscenerenderer/pointofview.md) camera using a bitwise AND operation. If the result is a nonzero value, SceneKit renders the node’s contents. Use this property to make some nodes in your scene visible only to certain cameras.

The default mask has all bits set, meaning that nodes of all categories are visible to the camera.

# categoryBitMask (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A mask that defines which categories this camera belongs to.

## Declaration

```objectivec
@property (nonatomic) NSUInteger categoryBitMask;
```

<a id="Discussion"></a>

## Discussion

Each camera and each node in a scene can be assigned to one or more categories, each corresponding to a bit in the bit mask. You define the mask values used in your app. When SceneKit renders a scene, it compares the [categoryBitMask](../scnnode/categorybitmask.md) property of each node with that of the [pointOfView](../scnscenerenderer/pointofview.md) camera using a bitwise AND operation. If the result is a nonzero value, SceneKit renders the node’s contents. Use this property to make some nodes in your scene visible only to certain cameras.

The default mask has all bits set, meaning that nodes of all categories are visible to the camera.
