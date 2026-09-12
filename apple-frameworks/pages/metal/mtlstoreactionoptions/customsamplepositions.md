> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoreactionoptions/customsamplepositions](https://developer.apple.com/documentation/metal/mtlstoreactionoptions/customsamplepositions)

# customSamplePositions (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An option that stores data in a sample-position–agnostic representation.

> Store action options have no effect on Apple Silicon

## Declaration

```swift
static var customSamplePositions: MTLStoreActionOptions { get }
```

## Mentioned In

- [Storing data a pass makes with custom sample positions for a subsequent pass](../storing-data-a-pass-makes-with-custom-sample-positions-for-a-subsequent-pass.md)

<a id="discussion"></a>

## Discussion

Set this option only on an [MTLRenderPassColorAttachmentDescriptor](../mtlrenderpasscolorattachmentdescriptor.md) or [MTLRenderPassDepthAttachmentDescriptor](../mtlrenderpassdepthattachmentdescriptor.md) instance. Setting this option on an [MTLRenderPassStencilAttachmentDescriptor](../mtlrenderpassstencilattachmentdescriptor.md) instance or combining it with a nonstore [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) value results in a runtime error.

Set this action when you need to read the data in a subsequent render pass or blit operation that is unaware of the programmable sample positions used to generate the data. You should set this option when, for example, reading per-sample data within a fragment function that uses different programmable sample positions.

If you specify this action, Metal may decompress the depth render target and store the resulting data in its decompressed form. If you don’t change programmable sample positions in a subsequent render pass, use [MTLStoreAction.store](../mtlstoreaction/store.md) instead to improve performance.

# MTLStoreActionOptionCustomSamplePositions (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An option that stores data in a sample-position–agnostic representation.

> Store action options have no effect on Apple Silicon

## Declaration

```objectivec
MTLStoreActionOptionCustomSamplePositions
```

## Mentioned In

- [Storing data a pass makes with custom sample positions for a subsequent pass](../storing-data-a-pass-makes-with-custom-sample-positions-for-a-subsequent-pass.md)

<a id="discussion"></a>

## Discussion

Set this option only on an [MTLRenderPassColorAttachmentDescriptor](../mtlrenderpasscolorattachmentdescriptor.md) or [MTLRenderPassDepthAttachmentDescriptor](../mtlrenderpassdepthattachmentdescriptor.md) instance. Setting this option on an [MTLRenderPassStencilAttachmentDescriptor](../mtlrenderpassstencilattachmentdescriptor.md) instance or combining it with a nonstore [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) value results in a runtime error.

Set this action when you need to read the data in a subsequent render pass or blit operation that is unaware of the programmable sample positions used to generate the data. You should set this option when, for example, reading per-sample data within a fragment function that uses different programmable sample positions.

If you specify this action, Metal may decompress the depth render target and store the resulting data in its decompressed form. If you don’t change programmable sample positions in a subsequent render pass, use [MTLStoreActionStore](../mtlstoreaction/store.md) instead to improve performance.
