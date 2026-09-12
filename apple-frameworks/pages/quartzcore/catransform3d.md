> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3d](https://developer.apple.com/documentation/quartzcore/catransform3d)

# CATransform3D (Swift)

**Framework:** Core Animation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The standard transform matrix used throughout Core Animation.

## Declaration

```swift
struct CATransform3D
```

<a id="overview"></a>

## Overview

The transform matrix is used to rotate, scale, translate, skew, and project the layer content. Functions are provided for creating, concatenating, and modifying CATransform3D data.

## Topics

### Initializers

- [init()](catransform3d/init%28%29.md)
- [init(m11:m12:m13:m14:m21:m22:m23:m24:m31:m32:m33:m34:m41:m42:m43:m44:)](catransform3d/init%28m11_m12_m13_m14_m21_m22_m23_m24_m31_m32_m33_m34_m41_m42_m43_m44_%29.md)
- [init(\_:)](catransform3d/init%28__%29-6awvy.md)
- [init(\_:)](catransform3d/init%28__%29-6euzs.md)

### Instance Properties

- [m11](catransform3d/m11.md): The entry at position 1,1 in the matrix.
- [m12](catransform3d/m12.md): The entry at position 1,2 in the matrix.
- [m13](catransform3d/m13.md): The entry at position 1,3 in the matrix.
- [m14](catransform3d/m14.md): The entry at position 1,4 in the matrix.
- [m21](catransform3d/m21.md): The entry at position 2,1 in the matrix.
- [m22](catransform3d/m22.md): The entry at position 2,2 in the matrix.
- [m23](catransform3d/m23.md): The entry at position 2,3 in the matrix.
- [m24](catransform3d/m24.md): The entry at position 2,4 in the matrix.
- [m31](catransform3d/m31.md): The entry at position 3,1 in the matrix.
- [m32](catransform3d/m32.md): The entry at position 3,2 in the matrix.
- [m33](catransform3d/m33.md): The entry at position 3,3 in the matrix.
- [m34](catransform3d/m34.md): The entry at position 3,4 in the matrix.
- [m41](catransform3d/m41.md): The entry at position 4,1 in the matrix.
- [m42](catransform3d/m42.md): The entry at position 4,2 in the matrix.
- [m43](catransform3d/m43.md): The entry at position 4,3 in the matrix.
- [m44](catransform3d/m44.md): The entry at position 4,4 in the matrix.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Constants

- [CAAutoresizingMask](caautoresizingmask.md): These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.
- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [action(forKey:)](calayer/action%28forkey_%29.md), [add(\_:forKey:)](calayer/add%28__forkey_%29.md), [defaultAction(forKey:)](calayer/defaultaction%28forkey_%29.md), [removeAnimation(forKey:)](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [run(forKey:object:arguments:)](caaction/run%28forkey_object_arguments_%29.md).
- [CAEdgeAntialiasingMask](caedgeantialiasingmask.md): This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [Scaling Filters](scaling-filters.md): These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).
- [CALayer.DynamicRange](calayer/dynamicrange.md)

# CATransform3D (Objective-C)

**Framework:** Core Animation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The standard transform matrix used throughout Core Animation.

## Declaration

```objectivec
struct CATransform3D;
```

<a id="overview"></a>

## Overview

The transform matrix is used to rotate, scale, translate, skew, and project the layer content. Functions are provided for creating, concatenating, and modifying CATransform3D data.

## Topics

### Instance Properties

- [m11](catransform3d/m11.md): The entry at position 1,1 in the matrix.
- [m12](catransform3d/m12.md): The entry at position 1,2 in the matrix.
- [m13](catransform3d/m13.md): The entry at position 1,3 in the matrix.
- [m14](catransform3d/m14.md): The entry at position 1,4 in the matrix.
- [m21](catransform3d/m21.md): The entry at position 2,1 in the matrix.
- [m22](catransform3d/m22.md): The entry at position 2,2 in the matrix.
- [m23](catransform3d/m23.md): The entry at position 2,3 in the matrix.
- [m24](catransform3d/m24.md): The entry at position 2,4 in the matrix.
- [m31](catransform3d/m31.md): The entry at position 3,1 in the matrix.
- [m32](catransform3d/m32.md): The entry at position 3,2 in the matrix.
- [m33](catransform3d/m33.md): The entry at position 3,3 in the matrix.
- [m34](catransform3d/m34.md): The entry at position 3,4 in the matrix.
- [m41](catransform3d/m41.md): The entry at position 4,1 in the matrix.
- [m42](catransform3d/m42.md): The entry at position 4,2 in the matrix.
- [m43](catransform3d/m43.md): The entry at position 4,3 in the matrix.
- [m44](catransform3d/m44.md): The entry at position 4,4 in the matrix.

## See Also

### Constants

- [CAAutoresizingMask](caautoresizingmask.md): These constants are used by the [autoresizingMask](calayer/autoresizingmask.md) property.
- [Action Identifiers](action-identifiers.md): These constants are the predefined action identifiers used by [actionForKey:](calayer/action%28forkey_%29.md), [addAnimation:forKey:](calayer/add%28__forkey_%29.md), [defaultActionForKey:](calayer/defaultaction%28forkey_%29.md), [removeAnimationForKey:](calayer/removeanimation%28forkey_%29.md), Layer Filters, and the [CAAction](caaction.md) protocol method [runActionForKey:object:arguments:](caaction/run%28forkey_object_arguments_%29.md).
- [CAEdgeAntialiasingMask](caedgeantialiasingmask.md): This mask is used by the [edgeAntialiasingMask](calayer/edgeantialiasingmask.md) property.
- [Identity Transform](identity-transform.md): Defines the identity transform matrix used by Core Animation.
- [Scaling Filters](scaling-filters.md): These constants specify the scaling filters used by [magnificationFilter](calayer/magnificationfilter.md) and [minificationFilter](calayer/minificationfilter.md).
- [CADynamicRange](calayer/dynamicrange.md)
