> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference/mask](https://developer.apple.com/documentation/pencilkit/pkstrokereference/mask)

# mask (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The pretransform mask used to clip the rendering of the stroke.

## Declaration

```swift
var mask: UIBezierPath? { get }
```

```swift
var mask: NSBezierPath? { get }
```

## See Also

### Getting the stroke properties

- [ink](ink.md): The line properties used to render this stroke.
- [maskedPathRanges](maskedpathranges.md): The range of points in the stroke path reference that intersect the stroke’s mask.
- [path](path.md): The B-spline path that describes this stroke.
- [renderBounds](renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [transform](transform.md): The affine transform of the stroke after rendering.
- [randomSeed](randomseed.md): An unsigned 32-bit integer to use as a random seed for drawing strokes that use randomized effects.

# mask (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The pretransform mask used to clip the rendering of the stroke.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIBezierPath * mask;
```

```objectivec
@property (nonatomic, readonly, nullable) NSBezierPath * mask;
```

## See Also

### Getting the stroke properties

- [ink](ink.md): The line properties used to render this stroke.
- [maskedPathRanges](maskedpathranges.md): The range of points in the stroke path reference that intersect the stroke’s mask.
- [path](path.md): The B-spline path that describes this stroke.
- [renderBounds](renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [transform](transform.md): The affine transform of the stroke after rendering.
- [randomSeed](randomseed.md): An unsigned 32-bit integer to use as a random seed for drawing strokes that use randomized effects.
