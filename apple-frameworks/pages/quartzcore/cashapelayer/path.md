> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cashapelayer/path](https://developer.apple.com/documentation/quartzcore/cashapelayer/path)

# path (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The path defining the shape to be rendered. Animatable.

## Declaration

```swift
var path: CGPath? { get set }
```

<a id="Discussion"></a>

## Discussion

Unlike most animatable properties, [path](path.md) (as with all [CGPath](../../coregraphics/cgpath.md) animatable properties) does not support implicit animation.

The path object may be animated using any of the concrete subclasses of [CAPropertyAnimation](../capropertyanimation.md). Paths will interpolate as a linear blend of  the “on-line” points; “off-line” points may be interpolated non-linearly (e.g. to preserve continuity of the curve’s derivative). If the two paths have a different number of control points or segments the results are undefined. If the path extends outside the layer bounds it will not automatically be clipped to the layer, only if the normal layer masking rules cause that.

The default value of this property is `nil`.

# path (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The path defining the shape to be rendered. Animatable.

## Declaration

```objectivec
@property (nullable) CGPathRef path;
```

<a id="Discussion"></a>

## Discussion

Unlike most animatable properties, [path](path.md) (as with all [CGPathRef](../../coregraphics/cgpath.md) animatable properties) does not support implicit animation.

The path object may be animated using any of the concrete subclasses of [CAPropertyAnimation](../capropertyanimation.md). Paths will interpolate as a linear blend of  the “on-line” points; “off-line” points may be interpolated non-linearly (e.g. to preserve continuity of the curve’s derivative). If the two paths have a different number of control points or segments the results are undefined. If the path extends outside the layer bounds it will not automatically be clipped to the layer, only if the normal layer masking rules cause that.

The default value of this property is `nil`.
