> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlparallelrendercommandencoder/setstencilstoreaction(_:)](https://developer.apple.com/documentation/metal/mtlparallelrendercommandencoder/setstencilstoreaction(_:))

# setStencilStoreAction(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Specifies a known store action to replace the initial [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) value specified for a given stencil attachment.

## Declaration

```swift
func setStencilStoreAction(_ storeAction: MTLStoreAction)
```

## Parameters

- `storeAction`: The desired store action for the stencil attachment. This value can’t be [MTLStoreAction.unknown](../mtlstoreaction/unknown.md).

<a id="discussion"></a>

## Discussion

If the store action for the given stencil attachment was set to [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) when the parallel render command encoder was created, you need to call this method to specify another store action before you call the [endEncoding()](../mtlcommandencoder/endencoding%28%29.md) method.

## See Also

### Setting render pass state

- [setColorStoreAction(\_:index:)](setcolorstoreaction%28__index_%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) value specified for a given color attachment.
- [setColorStoreActionOptions(\_:index:)](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Specifies known store action options for a given color attachment.
- [setDepthStoreAction(\_:)](setdepthstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) value specified for a given depth attachment.
- [setDepthStoreActionOptions(\_:)](setdepthstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given depth attachment.
- [setStencilStoreActionOptions(\_:)](setstencilstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given stencil attachment.

# setStencilStoreAction: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Specifies a known store action to replace the initial [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) value specified for a given stencil attachment.

## Declaration

```objectivec
- (void) setStencilStoreAction:(MTLStoreAction) storeAction;
```

## Parameters

- `storeAction`: The desired store action for the stencil attachment. This value can’t be [MTLStoreActionUnknown](../mtlstoreaction/unknown.md).

<a id="discussion"></a>

## Discussion

If the store action for the given stencil attachment was set to [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) when the parallel render command encoder was created, you need to call this method to specify another store action before you call the [endEncoding](../mtlcommandencoder/endencoding%28%29.md) method.

## See Also

### Setting render pass state

- [setColorStoreAction:atIndex:](setcolorstoreaction%28__index_%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) value specified for a given color attachment.
- [setColorStoreActionOptions:atIndex:](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Specifies known store action options for a given color attachment.
- [setDepthStoreAction:](setdepthstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) value specified for a given depth attachment.
- [setDepthStoreActionOptions:](setdepthstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given depth attachment.
- [setStencilStoreActionOptions:](setstencilstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given stencil attachment.
