> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct/clearcolor](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/clearcolor)

# clearColor

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The color to use when clearing the color attachment at the start of a render pass.

## Declaration

```swift
var clearColor: MTLClearColor { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLRenderPassColorAttachmentDescriptor.clearColor`.

## See Also

### Clearing and resolving

- [clearDepth](cleardepth.md): The depth value to use when clearing the depth attachment at the start of a render pass.
- [depthResolveFilter](depthresolvefilter.md): The filter to use when resolving the depth attachment at the end of a multisampled render pass.
