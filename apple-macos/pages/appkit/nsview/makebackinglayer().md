> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/makebackinglayer()](https://developer.apple.com/documentation/appkit/nsview/makebackinglayer())

# makeBackingLayer() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Creates the view’s backing layer.

## Declaration

```swift
func makeBackingLayer() -> CALayer
```

<a id="return-value"></a>

## Return Value

The layer to use as the view’s backing layer.

## See Also

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [layerContentsPlacement](layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [NSView.LayerContentsPlacement](layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSView.LayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.

# makeBackingLayer (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Creates the view’s backing layer.

## Declaration

```objectivec
- (CALayer *) makeBackingLayer;
```

<a id="return-value"></a>

## Return Value

The layer to use as the view’s backing layer.

## See Also

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [layerContentsPlacement](layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [NSViewLayerContentsPlacement](layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSViewLayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.
