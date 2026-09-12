> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstroke-swift.struct/maskedpathranges](https://developer.apple.com/documentation/pencilkit/pkstroke-swift.struct/maskedpathranges)

# maskedPathRanges

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The range of points in the stroke path reference that intersect the stroke’s mask.

## Declaration

```swift
var maskedPathRanges: [ClosedRange<CGFloat>] { get }
```

## See Also

### Getting the stroke properties

- [ink](ink.md): The Ink, which is a combination of a tool used to render this stroke.
- [mask](mask-8g6sx.md): The pretransform mask used to clip the rendering of the stroke.
- [mask](mask-16kkz.md): The pretransform mask used to clip the rendering of the stroke.
- [path](path.md): The B-spline path that describes this stroke.
- [renderBounds](renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [transform](transform.md): The affine transform of the stroke after rendering.
- [randomSeed](randomseed.md)
