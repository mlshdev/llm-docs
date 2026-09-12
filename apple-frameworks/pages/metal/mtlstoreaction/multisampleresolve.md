> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoreaction/multisampleresolve](https://developer.apple.com/documentation/metal/mtlstoreaction/multisampleresolve)

# MTLStoreAction.multisampleResolve (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.

## Declaration

```swift
case multisampleResolve
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

<a id="discussion"></a>

## Discussion

Use this option when you need to resolve the multisample attachment’s contents at the end of the render pass but don’t need the multisample data afterwards. Some GPUs may still store the multisample data back to the texture, but you can’t rely on that behavior. You need to assume that GPU discarded the multisample texture’s contents.

## See Also

### Store actions

- [MTLStoreAction.dontCare](dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreAction.store](store.md): The GPU stores the rendered contents to the texture.
- [MTLStoreAction.storeAndMultisampleResolve](storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreAction.unknown](unknown.md): The system selects a store action when it encodes the render pass.
- [MTLStoreAction.customSampleDepthStore](customsampledepthstore.md): The GPU stores depth data in a sample-position–agnostic representation.

# MTLStoreActionMultisampleResolve (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.

## Declaration

```objectivec
MTLStoreActionMultisampleResolve
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

<a id="discussion"></a>

## Discussion

Use this option when you need to resolve the multisample attachment’s contents at the end of the render pass but don’t need the multisample data afterwards. Some GPUs may still store the multisample data back to the texture, but you can’t rely on that behavior. You need to assume that GPU discarded the multisample texture’s contents.

## See Also

### Store actions

- [MTLStoreActionDontCare](dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreActionStore](store.md): The GPU stores the rendered contents to the texture.
- [MTLStoreActionStoreAndMultisampleResolve](storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreActionUnknown](unknown.md): The system selects a store action when it encodes the render pass.
- [MTLStoreActionCustomSampleDepthStore](customsampledepthstore.md): The GPU stores depth data in a sample-position–agnostic representation.
