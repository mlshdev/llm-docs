> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setstencilstoreaction(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setstencilstoreaction(_:))

# setStencilStoreAction(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Configures the store action for the stencil attachment.

## Declaration

```swift
func setStencilStoreAction(_ storeAction: MTLStoreAction)
```

## Parameters

- `storeAction`: A store action for the stencil attachment that can’t be [MTLStoreAction.unknown](../mtlstoreaction/unknown.md).

<a id="discussion"></a>

## Discussion

This method changes the render command encoder’s store action for the stencil attachment. You can assign the default store action for the stencil attachment by configuring the [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) property of its [MTLRenderPassStencilAttachmentDescriptor](../mtlrenderpassstencilattachmentdescriptor.md) (see [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) and its [stencilAttachment](../mtlrenderpassdescriptor/stencilattachment.md) property).

> **Important**

>  You need to call this method before calling the encoder’s [endEncoding()](../mtlcommandencoder/endencoding%28%29.md) method, but only if the stencil attachment’s [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) property is equal to [MTLStoreAction.unknown](../mtlstoreaction/unknown.md).

## See Also

### Configuring the actions for attachments

- [setColorStoreAction(\_:index:)](setcolorstoreaction%28__index_%29.md): Configures the store action for a color attachment.
- [setColorStoreActionOptions(\_:index:)](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Configures the store action options for a color attachment.
- [setDepthStoreAction(\_:)](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setDepthStoreActionOptions(\_:)](setdepthstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the depth attachment.
- [setStencilStoreActionOptions(\_:)](setstencilstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the stencil attachment.

# setStencilStoreAction: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Configures the store action for the stencil attachment.

## Declaration

```objectivec
- (void) setStencilStoreAction:(MTLStoreAction) storeAction;
```

## Parameters

- `storeAction`: A store action for the stencil attachment that can’t be [MTLStoreActionUnknown](../mtlstoreaction/unknown.md).

<a id="discussion"></a>

## Discussion

This method changes the render command encoder’s store action for the stencil attachment. You can assign the default store action for the stencil attachment by configuring the [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) property of its [MTLRenderPassStencilAttachmentDescriptor](../mtlrenderpassstencilattachmentdescriptor.md) (see [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) and its [stencilAttachment](../mtlrenderpassdescriptor/stencilattachment.md) property).

> **Important**

>  You need to call this method before calling the encoder’s [endEncoding](../mtlcommandencoder/endencoding%28%29.md) method, but only if the stencil attachment’s [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) property is equal to [MTLStoreActionUnknown](../mtlstoreaction/unknown.md).

## See Also

### Configuring the actions for attachments

- [setColorStoreAction:atIndex:](setcolorstoreaction%28__index_%29.md): Configures the store action for a color attachment.
- [setColorStoreActionOptions:atIndex:](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Configures the store action options for a color attachment.
- [setDepthStoreAction:](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setDepthStoreActionOptions:](setdepthstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the depth attachment.
- [setStencilStoreActionOptions:](setstencilstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the stencil attachment.
