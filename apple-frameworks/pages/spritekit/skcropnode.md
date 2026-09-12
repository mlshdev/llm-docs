> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skcropnode](https://developer.apple.com/documentation/spritekit/skcropnode)

# SKCropNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A node that masks pixels drawn by its children so that only some pixels are seen.

## Declaration

```swift
class SKCropNode
```

## Mentioned In

- [About Node Drawing Order](about-node-drawing-order.md)

<a id="overview"></a>

## Overview

`SKCropNode` is a container node that you use to crop other nodes in the scene. You add other nodes to a crop node and set the crop node’s [maskNode](skcropnode/masknode.md) property. For example, here are some ways you might specify a mask:

- An untextured sprite that limits content to a rectangular portion of the scene.
- A textured sprite that works as a precise per-pixel mask.
- A collection of child nodes that form a unique shape.

You can animate the shape or contents of the mask to implement interesting effects such as hiding or revealing.

> **Tip**

>  Use crop nodes sparingly. Because they require an additional offscreen memory buffer to perform the crop and add a rendering operation into the offscreen buffer, they add notably more overhead to the app.

## Topics

### First Steps

Crop other nodes in the scene by adding them as child nodes to a crop node.

- [Cropping Nodes](cropping-nodes.md): Use a texture or a shape to mask pixels out of a crop node’s children.

### Setting the Mask Filter

- [maskNode](skcropnode/masknode.md): The node used to determine the crop node’s mask.

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

### Nodes that Modify Drawing

- [SKEffectNode](skeffectnode.md): A node that renders its children into a separate buffer, optionally applying an effect, before drawing the final result.
- [SKTransformNode](sktransformnode.md): A node that allows its children to rotate in 3D.

# SKCropNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A node that masks pixels drawn by its children so that only some pixels are seen.

## Declaration

```objectivec
@interface SKCropNode : SKNode
```

## Mentioned In

- [About Node Drawing Order](about-node-drawing-order.md)

<a id="overview"></a>

## Overview

`SKCropNode` is a container node that you use to crop other nodes in the scene. You add other nodes to a crop node and set the crop node’s [maskNode](skcropnode/masknode.md) property. For example, here are some ways you might specify a mask:

- An untextured sprite that limits content to a rectangular portion of the scene.
- A textured sprite that works as a precise per-pixel mask.
- A collection of child nodes that form a unique shape.

You can animate the shape or contents of the mask to implement interesting effects such as hiding or revealing.

> **Tip**

>  Use crop nodes sparingly. Because they require an additional offscreen memory buffer to perform the crop and add a rendering operation into the offscreen buffer, they add notably more overhead to the app.

## Topics

### First Steps

Crop other nodes in the scene by adding them as child nodes to a crop node.

- [Cropping Nodes](cropping-nodes.md): Use a texture or a shape to mask pixels out of a crop node’s children.

### Setting the Mask Filter

- [maskNode](skcropnode/masknode.md): The node used to determine the crop node’s mask.

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Nodes that Modify Drawing

- [SKEffectNode](skeffectnode.md): A node that renders its children into a separate buffer, optionally applying an effect, before drawing the final result.
- [SKTransformNode](sktransformnode.md): A node that allows its children to rotate in 3D.
