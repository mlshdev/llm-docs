> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/configuration/output-swift.struct/colorpixelformat](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/configuration/output-swift.struct/colorpixelformat)

# colorPixelFormat

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The pixel format of the color attachment, or `nil` for depth-only passes.

## Declaration

```swift
var colorPixelFormat: MTLPixelFormat? { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderPassColorAttachmentDescriptor.texture.pixelFormat`.

## See Also

### Specifying pixel formats

- [depthPixelFormat](depthpixelformat.md): The pixel format of the depth attachment, or `nil` to omit depth.
