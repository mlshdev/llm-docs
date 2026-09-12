> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/candrawsubviewsintolayer](https://developer.apple.com/documentation/appkit/nsview/candrawsubviewsintolayer)

# canDrawSubviewsIntoLayer (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value indicating whether the view incorporates content from its subviews into its own layer.

## Declaration

```swift
var canDrawSubviewsIntoLayer: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), any subviews that have an implicitly created layer—that is, layers for which you did not explicitly set the [wantsLayer](wantslayer.md) property to [true](https://developer.apple.com/documentation/swift/true)—draw their contents into the current view’s layer. In other words, the subviews do not get a layer of their own. Instead, they draw their content into the parent view’s layer. All views involved in the operation draw their content using their [draw(\_:)](draw%28__%29.md) method. They do not use the [updateLayer()](updatelayer%28%29.md) method to update their layer contents, even if the [wantsUpdateLayer](wantsupdatelayer.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

Use this property to flatten the layer hierarchy for a layer-backed view and its subviews. Flattening a layer hierarchy reduces the number of layers (and may reduce the amount of memory) used by your view hierarchy. Reducing the number of layers can be more efficient in situations where there is significant overlap among the subviews or where the content of the view and subviews does not change significantly. For example, flattening a hierarchy reduces the amount of time spent compositing your views together. Do not flatten a view hierarchy if you plan to animate one or more subviews in that hierarchy.

When changing the value of this property, the current view must have a layer object. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer()](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [layerContentsPlacement](layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [NSView.LayerContentsPlacement](layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSView.LayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.

# canDrawSubviewsIntoLayer (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value indicating whether the view incorporates content from its subviews into its own layer.

## Declaration

```objectivec
@property BOOL canDrawSubviewsIntoLayer;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), any subviews that have an implicitly created layer—that is, layers for which you did not explicitly set the [wantsLayer](wantslayer.md) property to [true](https://developer.apple.com/documentation/swift/true)—draw their contents into the current view’s layer. In other words, the subviews do not get a layer of their own. Instead, they draw their content into the parent view’s layer. All views involved in the operation draw their content using their [drawRect:](draw%28__%29.md) method. They do not use the [updateLayer](updatelayer%28%29.md) method to update their layer contents, even if the [wantsUpdateLayer](wantsupdatelayer.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

Use this property to flatten the layer hierarchy for a layer-backed view and its subviews. Flattening a layer hierarchy reduces the number of layers (and may reduce the amount of memory) used by your view hierarchy. Reducing the number of layers can be more efficient in situations where there is significant overlap among the subviews or where the content of the view and subviews does not change significantly. For example, flattening a hierarchy reduces the amount of time spent compositing your views together. Do not flatten a view hierarchy if you plan to animate one or more subviews in that hierarchy.

When changing the value of this property, the current view must have a layer object. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [layerContentsPlacement](layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [NSViewLayerContentsPlacement](layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSViewLayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.
