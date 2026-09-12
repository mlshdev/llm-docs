> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/currentrenderpassdescriptor](https://developer.apple.com/documentation/metalkit/mtkview/currentrenderpassdescriptor)

# currentRenderPassDescriptor (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A render pass descriptor to draw into the current drawable.

## Declaration

```swift
var currentRenderPassDescriptor: MTLRenderPassDescriptor? { get }
```

<a id="Discussion"></a>

## Discussion

Reading this property creates and returns a new render pass descriptor to render into the current drawable’s texture. [MTKView](../mtkview.md) doesn’t use this descriptor, and there’s no requirement for your application to use it.

This property is `nil` if the view’s [device](device.md) property isn’t set or if [currentDrawable](currentdrawable.md) is `nil`. Your app should check that [currentRenderPassDescriptor](currentrenderpassdescriptor.md) isn’t `nil` before attempting to use it.

The view configures the render pass as follows:

- If multisampling isn’t enabled—The color attachment at index 0 of the render pass descriptor points to the texture assigned to the current drawable, with a load action of [MTLLoadAction.clear](../../metal/mtlloadaction/clear.md) and a store action of [MTLStoreAction.store](../../metal/mtlstoreaction/store.md).
- If you’ve enabled multisampling—The color attachment at index 0 of the render pass descriptor points to the multisample texture, the resolve texture points to the texture assigned to the current drawable, and the attachment has a load action of [MTLLoadAction.clear](../../metal/mtlloadaction/clear.md) and a store action of [MTLStoreAction.multisampleResolve](../../metal/mtlstoreaction/multisampleresolve.md).
- If you’ve specified a depth or stencil target—The render pass configures the appropriate targets, with a load action of [MTLLoadAction.clear](../../metal/mtlloadaction/clear.md) and a store action of [MTLStoreAction.dontCare](../../metal/mtlstoreaction/dontcare.md).

## See Also

### Retrieving Render Target Information

- [currentDrawable](currentdrawable.md): The drawable to use for the current frame.
- [depthStencilTexture](depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [depthStencilStorageMode](depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.
- [multisampleColorTexture](multisamplecolortexture.md): The multisample color sample texture to render into.

# currentRenderPassDescriptor (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A render pass descriptor to draw into the current drawable.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MTLRenderPassDescriptor * currentRenderPassDescriptor;
```

<a id="Discussion"></a>

## Discussion

Reading this property creates and returns a new render pass descriptor to render into the current drawable’s texture. [MTKView](../mtkview.md) doesn’t use this descriptor, and there’s no requirement for your application to use it.

This property is `nil` if the view’s [device](device.md) property isn’t set or if [currentDrawable](currentdrawable.md) is `nil`. Your app should check that [currentRenderPassDescriptor](currentrenderpassdescriptor.md) isn’t `nil` before attempting to use it.

The view configures the render pass as follows:

- If multisampling isn’t enabled—The color attachment at index 0 of the render pass descriptor points to the texture assigned to the current drawable, with a load action of [MTLLoadActionClear](../../metal/mtlloadaction/clear.md) and a store action of [MTLStoreActionStore](../../metal/mtlstoreaction/store.md).
- If you’ve enabled multisampling—The color attachment at index 0 of the render pass descriptor points to the multisample texture, the resolve texture points to the texture assigned to the current drawable, and the attachment has a load action of [MTLLoadActionClear](../../metal/mtlloadaction/clear.md) and a store action of [MTLStoreActionMultisampleResolve](../../metal/mtlstoreaction/multisampleresolve.md).
- If you’ve specified a depth or stencil target—The render pass configures the appropriate targets, with a load action of [MTLLoadActionClear](../../metal/mtlloadaction/clear.md) and a store action of [MTLStoreActionDontCare](../../metal/mtlstoreaction/dontcare.md).

## See Also

### Retrieving Render Target Information

- [currentDrawable](currentdrawable.md): The drawable to use for the current frame.
- [depthStencilTexture](depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [depthStencilStorageMode](depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.
- [multisampleColorTexture](multisamplecolortexture.md): The multisample color sample texture to render into.
