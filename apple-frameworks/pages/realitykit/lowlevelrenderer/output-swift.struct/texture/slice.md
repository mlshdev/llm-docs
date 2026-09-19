> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/texture/slice

# slice

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The slice of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.slice`.

## Declaration

```swift
var slice: Int { get set }
```

## See Also

### Addressing the texture

- [level](level.md): The mipmap level of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.level`.
- [depthPlane](depthplane.md): The depth plane of the texture to use. Corresponds to `MTLRenderPassAttachmentDescriptor.depthPlane`.
