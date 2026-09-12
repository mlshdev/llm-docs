> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skcameranode](https://developer.apple.com/documentation/spritekit/skcameranode)

# SKCameraNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A node that determines which parts of the scene are visible within a view.

## Declaration

```swift
class SKCameraNode
```

## Mentioned In

- [Positioning a Scene’s Origin Within its View](positioning-a-scene-s-origin-within-its-view.md)
- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md)

<a id="overview"></a>

## Overview

If you don’t use a camera in your scene, you control the visible portion of a scene using its [anchorPoint](skscene/anchorpoint.md) property.

## Topics

### First Steps

- [Getting Started with a Camera](getting-started-with-a-camera.md): Learn the semantics of using a camera in your scene.

### Node Visibility

Check whether a particular node is onscreen.

- [containedNodeSet()](skcameranode/containednodeset%28%29.md): Finds nodes that are visible in the camera’s viewport.
- [contains(\_:)](skcameranode/contains%28__%29.md): Checks to see if a node is visible in the camera’s viewport.

## Relationships

### Inherits From

- [SKNode](sknode.md)

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
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Base Nodes

- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md): Use nonvisual nodes to define the layout of a scene.
- [SKNode](sknode.md): The base class of all SpriteKit nodes.
- [SKReferenceNode](skreferencenode.md): A node that’s defined in an archived `.sks` file.

# SKCameraNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A node that determines which parts of the scene are visible within a view.

## Declaration

```objectivec
@interface SKCameraNode : SKNode
```

## Mentioned In

- [Positioning a Scene’s Origin Within its View](positioning-a-scene-s-origin-within-its-view.md)
- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md)

<a id="overview"></a>

## Overview

If you don’t use a camera in your scene, you control the visible portion of a scene using its [anchorPoint](skscene/anchorpoint.md) property.

## Topics

### First Steps

- [Getting Started with a Camera](getting-started-with-a-camera.md): Learn the semantics of using a camera in your scene.

### Node Visibility

Check whether a particular node is onscreen.

- [containedNodeSet](skcameranode/containednodeset%28%29.md): Finds nodes that are visible in the camera’s viewport.
- [containsNode:](skcameranode/contains%28__%29.md): Checks to see if a node is visible in the camera’s viewport.

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Base Nodes

- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md): Use nonvisual nodes to define the layout of a scene.
- [SKNode](sknode.md): The base class of all SpriteKit nodes.
- [SKReferenceNode](skreferencenode.md): A node that’s defined in an archived `.sks` file.
