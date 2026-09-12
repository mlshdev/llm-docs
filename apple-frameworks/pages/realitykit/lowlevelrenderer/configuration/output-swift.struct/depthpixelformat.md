> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/configuration/output-swift.struct/depthpixelformat](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/configuration/output-swift.struct/depthpixelformat)

# depthPixelFormat

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The pixel format of the depth attachment, or `nil` to omit depth.

## Declaration

```swift
var depthPixelFormat: MTLPixelFormat? { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderPassDepthAttachmentDescriptor.texture.pixelFormat`.

## See Also

### Specifying pixel formats

- [colorPixelFormat](colorpixelformat.md): The pixel format of the color attachment, or `nil` for depth-only passes.
