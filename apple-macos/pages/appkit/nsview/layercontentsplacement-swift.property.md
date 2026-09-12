> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/layercontentsplacement-swift.property](https://developer.apple.com/documentation/appkit/nsview/layercontentsplacement-swift.property)

# layerContentsPlacement (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The current layer contents placement policy.

## Declaration

```swift
var layerContentsPlacement: NSView.LayerContentsPlacement { get set }
```

<a id="Discussion"></a>

## Discussion

The content placement determines how the backing layer’s existing cached content image will be mapped into the layer as the layer is resized. It is analogous to, and underpinned by, the [contentsGravity](https://developer.apple.com/documentation/quartzcore/calayer/contentsgravity) property of the [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) class. The default value of this property is [NSView.LayerContentsPlacement.scaleAxesIndependently](layercontentsplacement-swift.enum/scaleaxesindependently.md). For a list of supported values, see [NSView.LayerContentsPlacement](layercontentsplacement-swift.enum.md).

For additional information about the performance impacts of this property, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.

## See Also

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer()](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [NSView.LayerContentsPlacement](layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSView.LayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.

# layerContentsPlacement (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The current layer contents placement policy.

## Declaration

```objectivec
@property NSViewLayerContentsPlacement layerContentsPlacement;
```

<a id="Discussion"></a>

## Discussion

The content placement determines how the backing layer’s existing cached content image will be mapped into the layer as the layer is resized. It is analogous to, and underpinned by, the [contentsGravity](https://developer.apple.com/documentation/quartzcore/calayer/contentsgravity) property of the [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) class. The default value of this property is [NSViewLayerContentsPlacementScaleAxesIndependently](layercontentsplacement-swift.enum/scaleaxesindependently.md). For a list of supported values, see [NSViewLayerContentsPlacement](layercontentsplacement-swift.enum.md).

For additional information about the performance impacts of this property, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.

## See Also

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [NSViewLayerContentsPlacement](layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSViewLayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.
