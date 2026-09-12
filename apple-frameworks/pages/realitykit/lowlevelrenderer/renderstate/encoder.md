> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/renderstate/encoder](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/renderstate/encoder)

# encoder

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The underlying Metal render command encoder for this render pass.

## Declaration

```swift
var encoder: any MTLRenderCommandEncoder { get }
```

<a id="discussion"></a>

## Discussion

You can use this encoder to set additional render state or issue custom draw calls between calls to `render(meshInstancesArrayIndex:meshInstanceIndex:)`.
