> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference/randomseed](https://developer.apple.com/documentation/pencilkit/pkstrokereference/randomseed)

# randomSeed (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An unsigned 32-bit integer to use as a random seed for drawing strokes that use randomized effects.

## Declaration

```swift
var randomSeed: UInt32 { get }
```

## See Also

### Getting the stroke properties

- [ink](ink.md): The line properties used to render this stroke.
- [mask](mask.md): The pretransform mask used to clip the rendering of the stroke.
- [maskedPathRanges](maskedpathranges.md): The range of points in the stroke path reference that intersect the stroke’s mask.
- [path](path.md): The B-spline path that describes this stroke.
- [renderBounds](renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [transform](transform.md): The affine transform of the stroke after rendering.

# randomSeed (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An unsigned 32-bit integer to use as a random seed for drawing strokes that use randomized effects.

## Declaration

```objectivec
@property (nonatomic, readonly) uint32_t randomSeed;
```

## See Also

### Getting the stroke properties

- [ink](ink.md): The line properties used to render this stroke.
- [mask](mask.md): The pretransform mask used to clip the rendering of the stroke.
- [maskedPathRanges](maskedpathranges.md): The range of points in the stroke path reference that intersect the stroke’s mask.
- [path](path.md): The B-spline path that describes this stroke.
- [renderBounds](renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [transform](transform.md): The affine transform of the stroke after rendering.
