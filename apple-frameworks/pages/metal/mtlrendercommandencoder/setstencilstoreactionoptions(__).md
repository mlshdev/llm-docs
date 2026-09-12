> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setstencilstoreactionoptions(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setstencilstoreactionoptions(_:))

# setStencilStoreActionOptions(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Configures the store action options for the stencil attachment.

> Store action options have no effect on Apple Silicon

## Declaration

```swift
func setStencilStoreActionOptions(_ storeActionOptions: MTLStoreActionOptions)
```

## Parameters

- `storeActionOptions`: Additional options for the store action of the stencil attachment.

## See Also

### Configuring the actions for attachments

- [setColorStoreAction(\_:index:)](setcolorstoreaction%28__index_%29.md): Configures the store action for a color attachment.
- [setColorStoreActionOptions(\_:index:)](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Configures the store action options for a color attachment.
- [setDepthStoreAction(\_:)](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setDepthStoreActionOptions(\_:)](setdepthstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the depth attachment.
- [setStencilStoreAction(\_:)](setstencilstoreaction%28__%29.md): Configures the store action for the stencil attachment.

# setStencilStoreActionOptions: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Configures the store action options for the stencil attachment.

> Store action options have no effect on Apple Silicon

## Declaration

```objectivec
- (void) setStencilStoreActionOptions:(MTLStoreActionOptions) storeActionOptions;
```

## Parameters

- `storeActionOptions`: Additional options for the store action of the stencil attachment.

## See Also

### Configuring the actions for attachments

- [setColorStoreAction:atIndex:](setcolorstoreaction%28__index_%29.md): Configures the store action for a color attachment.
- [setColorStoreActionOptions:atIndex:](setcolorstoreactionoptions%28__index_%29.md): Deprecated. Configures the store action options for a color attachment.
- [setDepthStoreAction:](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setDepthStoreActionOptions:](setdepthstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the depth attachment.
- [setStencilStoreAction:](setstencilstoreaction%28__%29.md): Configures the store action for the stencil attachment.
