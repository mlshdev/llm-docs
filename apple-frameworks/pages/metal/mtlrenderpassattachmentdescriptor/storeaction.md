> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassattachmentdescriptor/storeaction](https://developer.apple.com/documentation/metal/mtlrenderpassattachmentdescriptor/storeaction)

# storeAction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The action performed by this attachment at the end of a rendering pass for a render command encoder.

## Declaration

```swift
var storeAction: MTLStoreAction { get set }
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)
- [Storing data a pass makes with custom sample positions for a subsequent pass](../storing-data-a-pass-makes-with-custom-sample-positions-for-a-subsequent-pass.md)

<a id="discussion"></a>

## Discussion

If your app doesn’t need the data in the texture after completing the rendering pass, use the [MTLStoreAction.dontCare](../mtlstoreaction/dontcare.md) action. Otherwise, use the [MTLStoreAction.store](../mtlstoreaction/store.md) action if the texture is directly stored or the [MTLStoreAction.multisampleResolve](../mtlstoreaction/multisampleresolve.md) action if the texture is a multisampled texture. In some feature sets, you can use the [MTLStoreAction.storeAndMultisampleResolve](../mtlstoreaction/storeandmultisampleresolve.md) action to store and resolve the texture in a single rendering pass. For more information, see:

- [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf)
- [Metal feature set tables (Numbers)](https://developer.apple.com/metal/metal-feature-set-tables.zip)

When the store action is either [MTLStoreAction.multisampleResolve](../mtlstoreaction/multisampleresolve.md) or [MTLStoreAction.storeAndMultisampleResolve](../mtlstoreaction/storeandmultisampleresolve.md), the [resolveTexture](resolvetexture.md) property needs to be set to the texture to use as the target for the resolve action. Use the [resolveLevel](resolvelevel.md), [resolveSlice](resolveslice.md), and [resolveDepthPlane](resolvedepthplane.md) properties to specify the mipmap level, cube slice, and depth plane of the resolve texture, respectively.

For color render targets, the default value is [MTLStoreAction.store](../mtlstoreaction/store.md). For depth or stencil render targets, the default value is [MTLStoreAction.dontCare](../mtlstoreaction/dontcare.md).

## See Also

### Specifying rendering pass actions

- [loadAction](loadaction.md): The action performed by this attachment at the start of a rendering pass for a render command encoder.
- [storeActionOptions](storeactionoptions.md): Deprecated. The options that modify the store action performed by this attachment.

# storeAction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The action performed by this attachment at the end of a rendering pass for a render command encoder.

## Declaration

```objectivec
@property (nonatomic) MTLStoreAction storeAction;
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)
- [Storing data a pass makes with custom sample positions for a subsequent pass](../storing-data-a-pass-makes-with-custom-sample-positions-for-a-subsequent-pass.md)

<a id="discussion"></a>

## Discussion

If your app doesn’t need the data in the texture after completing the rendering pass, use the [MTLStoreActionDontCare](../mtlstoreaction/dontcare.md) action. Otherwise, use the [MTLStoreActionStore](../mtlstoreaction/store.md) action if the texture is directly stored or the [MTLStoreActionMultisampleResolve](../mtlstoreaction/multisampleresolve.md) action if the texture is a multisampled texture. In some feature sets, you can use the [MTLStoreActionStoreAndMultisampleResolve](../mtlstoreaction/storeandmultisampleresolve.md) action to store and resolve the texture in a single rendering pass. For more information, see:

- [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf)
- [Metal feature set tables (Numbers)](https://developer.apple.com/metal/metal-feature-set-tables.zip)

When the store action is either [MTLStoreActionMultisampleResolve](../mtlstoreaction/multisampleresolve.md) or [MTLStoreActionStoreAndMultisampleResolve](../mtlstoreaction/storeandmultisampleresolve.md), the [resolveTexture](resolvetexture.md) property needs to be set to the texture to use as the target for the resolve action. Use the [resolveLevel](resolvelevel.md), [resolveSlice](resolveslice.md), and [resolveDepthPlane](resolvedepthplane.md) properties to specify the mipmap level, cube slice, and depth plane of the resolve texture, respectively.

For color render targets, the default value is [MTLStoreActionStore](../mtlstoreaction/store.md). For depth or stencil render targets, the default value is [MTLStoreActionDontCare](../mtlstoreaction/dontcare.md).

## See Also

### Specifying rendering pass actions

- [loadAction](loadaction.md): The action performed by this attachment at the start of a rendering pass for a render command encoder.
- [storeActionOptions](storeactionoptions.md): Deprecated. The options that modify the store action performed by this attachment.
