> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setcolorstoreaction(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setcolorstoreaction(_:index:))

# setColorStoreAction(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Configures the store action for a color attachment.

## Declaration

```swift
func setColorStoreAction(_ storeAction: MTLStoreAction, index colorAttachmentIndex: Int)
```

## Parameters

- `storeAction`: A store action for the color attachment that can’t be [MTLStoreAction.unknown](../mtlstoreaction/unknown.md).
- `colorAttachmentIndex`: The index of a color attachment.

<a id="discussion"></a>

## Discussion

This method changes the render command encoder’s store action for a color attachment. You can assign the default store action for a color attachment by configuring the [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) property of its [MTLRenderPassColorAttachmentDescriptor](../mtlrenderpasscolorattachmentdescriptor.md) (see [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) and its [colorAttachments](../mtlrenderpassdescriptor/colorattachments.md) property).

> **Important**

>  You need to call this method before calling the encoder’s [endEncoding()](../mtlcommandencoder/endencoding%28%29.md) method, but only for color attachments with a [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) property equal to [MTLStoreAction.unknown](../mtlstoreaction/unknown.md).

## See Also

### Configuring the actions for attachments

- [setColorStoreActionOptions(\_:index:)](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Configures the store action options for a color attachment.
- [setDepthStoreAction(\_:)](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setDepthStoreActionOptions(\_:)](setdepthstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the depth attachment.
- [setStencilStoreAction(\_:)](setstencilstoreaction%28__%29.md): Configures the store action for the stencil attachment.
- [setStencilStoreActionOptions(\_:)](setstencilstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the stencil attachment.

# setColorStoreAction:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Configures the store action for a color attachment.

## Declaration

```objectivec
- (void) setColorStoreAction:(MTLStoreAction) storeAction atIndex:(NSUInteger) colorAttachmentIndex;
```

## Parameters

- `storeAction`: A store action for the color attachment that can’t be [MTLStoreActionUnknown](../mtlstoreaction/unknown.md).
- `colorAttachmentIndex`: The index of a color attachment.

<a id="discussion"></a>

## Discussion

This method changes the render command encoder’s store action for a color attachment. You can assign the default store action for a color attachment by configuring the [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) property of its [MTLRenderPassColorAttachmentDescriptor](../mtlrenderpasscolorattachmentdescriptor.md) (see [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) and its [colorAttachments](../mtlrenderpassdescriptor/colorattachments.md) property).

> **Important**

>  You need to call this method before calling the encoder’s [endEncoding](../mtlcommandencoder/endencoding%28%29.md) method, but only for color attachments with a [storeAction](../mtlrenderpassattachmentdescriptor/storeaction.md) property equal to [MTLStoreActionUnknown](../mtlstoreaction/unknown.md).

## See Also

### Configuring the actions for attachments

- [setColorStoreActionOptions:atIndex:](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Configures the store action options for a color attachment.
- [setDepthStoreAction:](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setDepthStoreActionOptions:](setdepthstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the depth attachment.
- [setStencilStoreAction:](setstencilstoreaction%28__%29.md): Configures the store action for the stencil attachment.
- [setStencilStoreActionOptions:](setstencilstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the stencil attachment.
