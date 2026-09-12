> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat/inverse](https://developer.apple.com/documentation/spatial/affinetransform3dfloat/inverse)

# inverse

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The affine transform’s inverse.

## Declaration

```swift
var inverse: AffineTransform3DFloat? { get }
```

<a id="discussion"></a>

## Discussion

If the source transform isn’t invertible, this value is `nil`.
