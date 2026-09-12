> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setstencilstoreaction(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setstencilstoreaction(_:))

# setStencilStoreAction(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the store action for the stencil attachment.

## Declaration

```swift
func setStencilStoreAction(_ storeAction: MTLStoreAction)
```

## Parameters

- `storeAction`: A store action for the stencil attachment that can’t be [MTLStoreAction.unknown](../mtlstoreaction/unknown.md).

## See Also

### Configuring the actions for attachments

- [setColorStoreAction(\_:index:)](setcolorstoreaction%28__index_%29.md): Configures the store action for a color attachment.
- [setDepthStoreAction(\_:)](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.

# setStencilStoreAction: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the store action for the stencil attachment.

## Declaration

```objectivec
- (void) setStencilStoreAction:(MTLStoreAction) storeAction;
```

## Parameters

- `storeAction`: A store action for the stencil attachment that can’t be [MTLStoreActionUnknown](../mtlstoreaction/unknown.md).

## See Also

### Configuring the actions for attachments

- [setColorStoreAction:atIndex:](setcolorstoreaction%28__index_%29.md): Configures the store action for a color attachment.
- [setDepthStoreAction:](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
