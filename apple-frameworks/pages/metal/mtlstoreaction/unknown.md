> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoreaction/unknown](https://developer.apple.com/documentation/metal/mtlstoreaction/unknown)

# MTLStoreAction.unknown (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The system selects a store action when it encodes the render pass.

## Declaration

```swift
case unknown
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

<a id="discussion"></a>

## Discussion

Only apply this action if you can’t determine the store action when you create the render pass descriptor. You need to specify a store action before you finish encoding commands into the render command encoder. Refer to the [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) and [MTLParallelRenderCommandEncoder](../mtlparallelrendercommandencoder.md) protocol references for further information.

## See Also

### Store actions

- [MTLStoreAction.dontCare](dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreAction.store](store.md): The GPU stores the rendered contents to the texture.
- [MTLStoreAction.multisampleResolve](multisampleresolve.md): The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.
- [MTLStoreAction.storeAndMultisampleResolve](storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreAction.customSampleDepthStore](customsampledepthstore.md): The GPU stores depth data in a sample-position–agnostic representation.

# MTLStoreActionUnknown (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The system selects a store action when it encodes the render pass.

## Declaration

```objectivec
MTLStoreActionUnknown
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

<a id="discussion"></a>

## Discussion

Only apply this action if you can’t determine the store action when you create the render pass descriptor. You need to specify a store action before you finish encoding commands into the render command encoder. Refer to the [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) and [MTLParallelRenderCommandEncoder](../mtlparallelrendercommandencoder.md) protocol references for further information.

## See Also

### Store actions

- [MTLStoreActionDontCare](dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreActionStore](store.md): The GPU stores the rendered contents to the texture.
- [MTLStoreActionMultisampleResolve](multisampleresolve.md): The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.
- [MTLStoreActionStoreAndMultisampleResolve](storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreActionCustomSampleDepthStore](customsampledepthstore.md): The GPU stores depth data in a sample-position–agnostic representation.
