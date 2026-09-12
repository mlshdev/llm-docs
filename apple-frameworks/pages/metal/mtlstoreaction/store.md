> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoreaction/store](https://developer.apple.com/documentation/metal/mtlstoreaction/store)

# MTLStoreAction.store (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU stores the rendered contents to the texture.

## Declaration

```swift
case store
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)
- [Storing data a pass makes with custom sample positions for a subsequent pass](../storing-data-a-pass-makes-with-custom-sample-positions-for-a-subsequent-pass.md)

## See Also

### Store actions

- [MTLStoreAction.dontCare](dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreAction.multisampleResolve](multisampleresolve.md): The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.
- [MTLStoreAction.storeAndMultisampleResolve](storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreAction.unknown](unknown.md): The system selects a store action when it encodes the render pass.
- [MTLStoreAction.customSampleDepthStore](customsampledepthstore.md): The GPU stores depth data in a sample-position–agnostic representation.

# MTLStoreActionStore (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The GPU stores the rendered contents to the texture.

## Declaration

```objectivec
MTLStoreActionStore
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)
- [Storing data a pass makes with custom sample positions for a subsequent pass](../storing-data-a-pass-makes-with-custom-sample-positions-for-a-subsequent-pass.md)

## See Also

### Store actions

- [MTLStoreActionDontCare](dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreActionMultisampleResolve](multisampleresolve.md): The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.
- [MTLStoreActionStoreAndMultisampleResolve](storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreActionUnknown](unknown.md): The system selects a store action when it encodes the render pass.
- [MTLStoreActionCustomSampleDepthStore](customsampledepthstore.md): The GPU stores depth data in a sample-position–agnostic representation.
