> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setcolorstoreaction(_:index:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setcolorstoreaction(_:index:))

# setColorStoreAction(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the store action for a color attachment.

## Declaration

```swift
func setColorStoreAction(_ storeAction: MTLStoreAction, index colorAttachmentIndex: Int)
```

## Parameters

- `storeAction`: A store action for the color attachment that can’t be [MTLStoreAction.unknown](../mtlstoreaction/unknown.md).
- `colorAttachmentIndex`: The index of a color attachment.

## See Also

### Configuring the actions for attachments

- [setDepthStoreAction(\_:)](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setStencilStoreAction(\_:)](setstencilstoreaction%28__%29.md): Configures the store action for the stencil attachment.

# setColorStoreAction:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the store action for a color attachment.

## Declaration

```objectivec
- (void) setColorStoreAction:(MTLStoreAction) storeAction atIndex:(NSUInteger) colorAttachmentIndex;
```

## Parameters

- `storeAction`: A store action for the color attachment that can’t be [MTLStoreActionUnknown](../mtlstoreaction/unknown.md).
- `colorAttachmentIndex`: The index of a color attachment.

## See Also

### Configuring the actions for attachments

- [setDepthStoreAction:](setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setStencilStoreAction:](setstencilstoreaction%28__%29.md): Configures the store action for the stencil attachment.
