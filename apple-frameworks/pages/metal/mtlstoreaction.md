> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoreaction](https://developer.apple.com/documentation/metal/mtlstoreaction)

# MTLStoreAction (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Types of actions performed for an attachment at the end of a rendering pass.

## Declaration

```swift
enum MTLStoreAction
```

## Mentioned In

- [Setting load and store actions](setting-load-and-store-actions.md)

## Topics

### Store actions

- [MTLStoreAction.dontCare](mtlstoreaction/dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreAction.store](mtlstoreaction/store.md): The GPU stores the rendered contents to the texture.
- [MTLStoreAction.multisampleResolve](mtlstoreaction/multisampleresolve.md): The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.
- [MTLStoreAction.storeAndMultisampleResolve](mtlstoreaction/storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreAction.unknown](mtlstoreaction/unknown.md): The system selects a store action when it encodes the render pass.
- [MTLStoreAction.customSampleDepthStore](mtlstoreaction/customsampledepthstore.md): The GPU stores depth data in a sample-position–agnostic representation.

### Initializers

- [init(rawValue:)](mtlstoreaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Encoding a render pass in parallel

- [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md): An instance that splits up a single render pass so that it can be simultaneously encoded from multiple threads.
- [MTLLoadAction](mtlloadaction.md): Types of actions performed for an attachment at the start of a rendering pass.
- [MTLStoreActionOptions](mtlstoreactionoptions.md): Deprecated. Options that modify a store action.

# MTLStoreAction (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Types of actions performed for an attachment at the end of a rendering pass.

## Declaration

```objectivec
enum MTLStoreAction : NSUInteger;
```

## Mentioned In

- [Setting load and store actions](setting-load-and-store-actions.md)

## Topics

### Store actions

- [MTLStoreActionDontCare](mtlstoreaction/dontcare.md): The GPU has permission to discard the rendered contents of the attachment at the end of the render pass, replacing them with arbitrary data.
- [MTLStoreActionStore](mtlstoreaction/store.md): The GPU stores the rendered contents to the texture.
- [MTLStoreActionMultisampleResolve](mtlstoreaction/multisampleresolve.md): The GPU resolves the multisampled data to one sample per pixel and stores the data to the resolve texture, discarding the multisample data afterwards.
- [MTLStoreActionStoreAndMultisampleResolve](mtlstoreaction/storeandmultisampleresolve.md): The GPU stores the multisample data to the multisample texture, resolves the data to a sample per pixel, and stores the data to the resolve texture.
- [MTLStoreActionUnknown](mtlstoreaction/unknown.md): The system selects a store action when it encodes the render pass.
- [MTLStoreActionCustomSampleDepthStore](mtlstoreaction/customsampledepthstore.md): The GPU stores depth data in a sample-position–agnostic representation.

## See Also

### Encoding a render pass in parallel

- [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md): An instance that splits up a single render pass so that it can be simultaneously encoded from multiple threads.
- [MTLLoadAction](mtlloadaction.md): Types of actions performed for an attachment at the start of a rendering pass.
- [MTLStoreActionOptions](mtlstoreactionoptions.md): Deprecated. Options that modify a store action.
