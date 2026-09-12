> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct/texture/depthplane](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/texture/depthplane)

# depthPlane

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The depth plane of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.depthPlane`.

## Declaration

```swift
var depthPlane: Int { get set }
```

## See Also

### Addressing the texture

- [level](level.md): The mipmap level of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.level`.
- [slice](slice.md): The slice of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.slice`.
