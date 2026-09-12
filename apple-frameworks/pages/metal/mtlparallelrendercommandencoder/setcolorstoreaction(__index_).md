> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlparallelrendercommandencoder/setcolorstoreaction(_:index:)](https://developer.apple.com/documentation/metal/mtlparallelrendercommandencoder/setcolorstoreaction(_:index:))

# setColorStoreAction(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Specifies a known store action to replace the initial [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) value specified for a given color attachment.

## Declaration

```swift
func setColorStoreAction(_ storeAction: MTLStoreAction, index colorAttachmentIndex: Int)
```

## Parameters

- `storeAction`: The desired store action for the color attachment. This value can’t be [MTLStoreAction.unknown](../mtlstoreaction/unknown.md).
- `colorAttachmentIndex`: The index of the color attachment.

<a id="discussion"></a>

## Discussion

If the store action for the given color attachment was set to [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) when the parallel render command encoder was created, you need to call this method to specify another store action before you call the [endEncoding()](../mtlcommandencoder/endencoding%28%29.md) method.

## See Also

### Setting render pass state

- [setColorStoreActionOptions(\_:index:)](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Specifies known store action options for a given color attachment.
- [setDepthStoreAction(\_:)](setdepthstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) value specified for a given depth attachment.
- [setDepthStoreActionOptions(\_:)](setdepthstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given depth attachment.
- [setStencilStoreAction(\_:)](setstencilstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) value specified for a given stencil attachment.
- [setStencilStoreActionOptions(\_:)](setstencilstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given stencil attachment.

# setColorStoreAction:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Specifies a known store action to replace the initial [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) value specified for a given color attachment.

## Declaration

```objectivec
- (void) setColorStoreAction:(MTLStoreAction) storeAction atIndex:(NSUInteger) colorAttachmentIndex;
```

## Parameters

- `storeAction`: The desired store action for the color attachment. This value can’t be [MTLStoreActionUnknown](../mtlstoreaction/unknown.md).
- `colorAttachmentIndex`: The index of the color attachment.

<a id="discussion"></a>

## Discussion

If the store action for the given color attachment was set to [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) when the parallel render command encoder was created, you need to call this method to specify another store action before you call the [endEncoding](../mtlcommandencoder/endencoding%28%29.md) method.

## See Also

### Setting render pass state

- [setColorStoreActionOptions:atIndex:](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Specifies known store action options for a given color attachment.
- [setDepthStoreAction:](setdepthstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) value specified for a given depth attachment.
- [setDepthStoreActionOptions:](setdepthstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given depth attachment.
- [setStencilStoreAction:](setstencilstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) value specified for a given stencil attachment.
- [setStencilStoreActionOptions:](setstencilstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given stencil attachment.
