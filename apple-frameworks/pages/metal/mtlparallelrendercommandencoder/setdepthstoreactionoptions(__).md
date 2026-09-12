> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlparallelrendercommandencoder/setdepthstoreactionoptions(_:)](https://developer.apple.com/documentation/metal/mtlparallelrendercommandencoder/setdepthstoreactionoptions(_:))

# setDepthStoreActionOptions(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Specifies known store action options for a given depth attachment.

> Store action options have no effect on Apple Silicon

## Declaration

```swift
func setDepthStoreActionOptions(_ storeActionOptions: MTLStoreActionOptions)
```

## Parameters

- `storeActionOptions`: The additional store action options for the depth attachment.

## See Also

### Setting render pass state

- [setColorStoreAction(\_:index:)](setcolorstoreaction%28__index_%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) value specified for a given color attachment.
- [setColorStoreActionOptions(\_:index:)](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Specifies known store action options for a given color attachment.
- [setDepthStoreAction(\_:)](setdepthstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) value specified for a given depth attachment.
- [setStencilStoreAction(\_:)](setstencilstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](../mtlstoreaction/unknown.md) value specified for a given stencil attachment.
- [setStencilStoreActionOptions(\_:)](setstencilstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given stencil attachment.

# setDepthStoreActionOptions: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Specifies known store action options for a given depth attachment.

> Store action options have no effect on Apple Silicon

## Declaration

```objectivec
- (void) setDepthStoreActionOptions:(MTLStoreActionOptions) storeActionOptions;
```

## Parameters

- `storeActionOptions`: The additional store action options for the depth attachment.

## See Also

### Setting render pass state

- [setColorStoreAction:atIndex:](setcolorstoreaction%28__index_%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) value specified for a given color attachment.
- [setColorStoreActionOptions:atIndex:](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Specifies known store action options for a given color attachment.
- [setDepthStoreAction:](setdepthstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) value specified for a given depth attachment.
- [setStencilStoreAction:](setstencilstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](../mtlstoreaction/unknown.md) value specified for a given stencil attachment.
- [setStencilStoreActionOptions:](setstencilstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given stencil attachment.
