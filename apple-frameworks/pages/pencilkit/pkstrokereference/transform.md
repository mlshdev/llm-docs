> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference/transform](https://developer.apple.com/documentation/pencilkit/pkstrokereference/transform)

# transform (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The affine transform of the stroke after rendering.

## Declaration

```swift
var transform: CGAffineTransform { get }
```

## See Also

### Getting the stroke properties

- [ink](ink.md): The line properties used to render this stroke.
- [mask](mask.md): The pretransform mask used to clip the rendering of the stroke.
- [maskedPathRanges](maskedpathranges.md): The range of points in the stroke path reference that intersect the stroke’s mask.
- [path](path.md): The B-spline path that describes this stroke.
- [renderBounds](renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [randomSeed](randomseed.md): An unsigned 32-bit integer to use as a random seed for drawing strokes that use randomized effects.

# transform (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The affine transform of the stroke after rendering.

## Declaration

```objectivec
@property (nonatomic, readonly) CGAffineTransform transform;
```

## See Also

### Getting the stroke properties

- [ink](ink.md): The line properties used to render this stroke.
- [mask](mask.md): The pretransform mask used to clip the rendering of the stroke.
- [maskedPathRanges](maskedpathranges.md): The range of points in the stroke path reference that intersect the stroke’s mask.
- [path](path.md): The B-spline path that describes this stroke.
- [renderBounds](renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [randomSeed](randomseed.md): An unsigned 32-bit integer to use as a random seed for drawing strokes that use randomized effects.
