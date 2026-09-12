> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktransformnode](https://developer.apple.com/documentation/spritekit/sktransformnode)

# SKTransformNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A node that allows its children to rotate in 3D.

## Declaration

```swift
class SKTransformNode
```

<a id="overview"></a>

## Overview

`SKTranformNode` adds the ability to rotate nodes across the x and y axes. When combined with `SKNode`’s [zRotation](sknode/zrotation.md) property, nodes added as children to a transform node have the ability to rotate in 3D.

## Topics

### Rotating Child Nodes

- [xRotation](sktransformnode/xrotation.md)
- [yRotation](sktransformnode/yrotation.md)
- [setEulerAngles(\_:)](sktransformnode/seteulerangles%28__%29.md)
- [setQuaternion(\_:)](sktransformnode/setquaternion%28__%29.md)
- [setRotationMatrix(\_:)](sktransformnode/setrotationmatrix%28__%29.md)

### Reading the Current Rotation

- [eulerAngles()](sktransformnode/eulerangles%28%29.md)
- [quaternion()](sktransformnode/quaternion%28%29.md)
- [rotationMatrix()](sktransformnode/rotationmatrix%28%29.md)

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
- [SKCropNode](skcropnode.md): A node that masks pixels drawn by its children so that only some pixels are seen.

# SKTransformNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A node that allows its children to rotate in 3D.

## Declaration

```objectivec
@interface SKTransformNode : SKNode
```

<a id="overview"></a>

## Overview

`SKTranformNode` adds the ability to rotate nodes across the x and y axes. When combined with `SKNode`’s [zRotation](sknode/zrotation.md) property, nodes added as children to a transform node have the ability to rotate in 3D.

## Topics

### Rotating Child Nodes

- [xRotation](sktransformnode/xrotation.md)
- [yRotation](sktransformnode/yrotation.md)
- [setEulerAngles:](sktransformnode/seteulerangles%28__%29.md)
- [setQuaternion:](sktransformnode/setquaternion%28__%29.md)
- [setRotationMatrix:](sktransformnode/setrotationmatrix%28__%29.md)

### Reading the Current Rotation

- [eulerAngles](sktransformnode/eulerangles%28%29.md)
- [quaternion](sktransformnode/quaternion%28%29.md)
- [rotationMatrix](sktransformnode/rotationmatrix%28%29.md)

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Nodes that Modify Drawing

- [SKEffectNode](skeffectnode.md): A node that renders its children into a separate buffer, optionally applying an effect, before drawing the final result.
- [SKCropNode](skcropnode.md): A node that masks pixels drawn by its children so that only some pixels are seen.
