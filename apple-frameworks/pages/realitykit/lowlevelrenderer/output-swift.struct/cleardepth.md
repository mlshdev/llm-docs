> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct/cleardepth](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/cleardepth)

# clearDepth

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The depth value to use when clearing the depth attachment at the start of a render pass.

## Declaration

```swift
var clearDepth: Double { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderPassDepthAttachmentDescriptor.clearDepth`.

## See Also

### Clearing and resolving

- [clearColor](clearcolor.md): The color to use when clearing the color attachment at the start of a render pass.
- [depthResolveFilter](depthresolvefilter.md): The filter to use when resolving the depth attachment at the end of a multisampled render pass.
