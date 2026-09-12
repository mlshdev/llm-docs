> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct/texture/level](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/texture/level)

# level

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The mipmap level of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.level`.

## Declaration

```swift
var level: Int { get set }
```

## See Also

### Addressing the texture

- [slice](slice.md): The slice of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.slice`.
- [depthPlane](depthplane.md): The depth plane of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.depthPlane`.
