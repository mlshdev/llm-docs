> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoreaction/customsampledepthstore](https://developer.apple.com/documentation/metal/mtlstoreaction/customsampledepthstore)

# MTLStoreAction.customSampleDepthStore (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The GPU stores depth data in a sample-position–agnostic representation.

## Declaration

```swift
case customSampleDepthStore
```

<a id="discussion"></a>

## Discussion

You can only set this action on an [MTLRenderPassDepthAttachmentDescriptor](../mtlrenderpassdepthattachmentdescriptor.md) instance.

Set this action when you need to read the depth data in a subsequent render pass or blit operation that is unaware of the programmable sample positions used to generate the data.

If you specify this action, Metal may decompress the depth render target and store the resulting data in its decompressed form. If you don’t change programmable sample positions in a subsequent render pass, use [MTLStoreAction.store](store.md) instead to improve performance.

## See Also

### Store actions

- [MTLStoreAction.dontCare](dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreAction.store](store.md): The GPU stores the rendered contents to the texture.
- [MTLStoreAction.multisampleResolve](multisampleresolve.md): The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.
- [MTLStoreAction.storeAndMultisampleResolve](storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreAction.unknown](unknown.md): The system selects a store action when it encodes the render pass.

# MTLStoreActionCustomSampleDepthStore (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The GPU stores depth data in a sample-position–agnostic representation.

## Declaration

```objectivec
MTLStoreActionCustomSampleDepthStore
```

<a id="discussion"></a>

## Discussion

You can only set this action on an [MTLRenderPassDepthAttachmentDescriptor](../mtlrenderpassdepthattachmentdescriptor.md) instance.

Set this action when you need to read the depth data in a subsequent render pass or blit operation that is unaware of the programmable sample positions used to generate the data.

If you specify this action, Metal may decompress the depth render target and store the resulting data in its decompressed form. If you don’t change programmable sample positions in a subsequent render pass, use [MTLStoreActionStore](store.md) instead to improve performance.

## See Also

### Store actions

- [MTLStoreActionDontCare](dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreActionStore](store.md): The GPU stores the rendered contents to the texture.
- [MTLStoreActionMultisampleResolve](multisampleresolve.md): The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.
- [MTLStoreActionStoreAndMultisampleResolve](storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreActionUnknown](unknown.md): The system selects a store action when it encodes the render pass.
