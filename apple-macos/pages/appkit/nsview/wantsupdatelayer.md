> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/wantsupdatelayer](https://developer.apple.com/documentation/appkit/nsview/wantsupdatelayer)

# wantsUpdateLayer (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value indicating which drawing path the view takes when updating its contents.

## Declaration

```swift
var wantsUpdateLayer: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A view can update its contents using one of two techniques. It can draw those contents using its [draw(\_:)](draw%28__%29.md) method or it can modify its underlying layer object directly. During the view update cycle, each dirty view calls this method on itself to determine which technique to use. The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false), which causes the view to use its [draw(\_:)](draw%28__%29.md) method.

If your view is layer-backed and updates itself by modifying its layer, override this property and change the return value to [true](https://developer.apple.com/documentation/swift/true). Modifying the layer is significantly faster than redrawing the layer contents using [draw(\_:)](draw%28__%29.md). If you override this property to be [true](https://developer.apple.com/documentation/swift/true), you must also override the [updateLayer()](updatelayer%28%29.md) method of your view and use it to make the changes to your layer. Do not modify your layer in your implementation of this property. Your implementation should return [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false) quickly and not perform other tasks.

If the [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md) property is set to [true](https://developer.apple.com/documentation/swift/true), the view ignores the value returned by this method. Instead, the view always uses its [draw(\_:)](draw%28__%29.md) method to draw its content.

> **Note**

>  When using the [updateLayer()](updatelayer%28%29.md) method to update your view, it is recommended that you set the view’s redraw policy to [NSView.LayerContentsRedrawPolicy.onSetNeedsDisplay](layercontentsredrawpolicy-swift.enum/onsetneedsdisplay.md). This policy lets you control when you want to update the layer’s contents.

## See Also

### Related Documentation

- [updateLayer()](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer()](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [layerContentsPlacement](layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [NSView.LayerContentsPlacement](layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSView.LayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.

# wantsUpdateLayer (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value indicating which drawing path the view takes when updating its contents.

## Declaration

```objectivec
@property (readonly) BOOL wantsUpdateLayer;
```

<a id="Discussion"></a>

## Discussion

A view can update its contents using one of two techniques. It can draw those contents using its [drawRect:](draw%28__%29.md) method or it can modify its underlying layer object directly. During the view update cycle, each dirty view calls this method on itself to determine which technique to use. The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false), which causes the view to use its [drawRect:](draw%28__%29.md) method.

If your view is layer-backed and updates itself by modifying its layer, override this property and change the return value to [true](https://developer.apple.com/documentation/swift/true). Modifying the layer is significantly faster than redrawing the layer contents using [drawRect:](draw%28__%29.md). If you override this property to be [true](https://developer.apple.com/documentation/swift/true), you must also override the [updateLayer](updatelayer%28%29.md) method of your view and use it to make the changes to your layer. Do not modify your layer in your implementation of this property. Your implementation should return [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false) quickly and not perform other tasks.

If the [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md) property is set to [true](https://developer.apple.com/documentation/swift/true), the view ignores the value returned by this method. Instead, the view always uses its [drawRect:](draw%28__%29.md) method to draw its content.

> **Note**

>  When using the [updateLayer](updatelayer%28%29.md) method to update your view, it is recommended that you set the view’s redraw policy to [NSViewLayerContentsRedrawOnSetNeedsDisplay](layercontentsredrawpolicy-swift.enum/onsetneedsdisplay.md). This policy lets you control when you want to update the layer’s contents.

## See Also

### Related Documentation

- [updateLayer](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [layerContentsPlacement](layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [NSViewLayerContentsPlacement](layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSViewLayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.
