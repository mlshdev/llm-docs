> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/layercontentsplacement-swift.enum](https://developer.apple.com/documentation/appkit/nsview/layercontentsplacement-swift.enum)

# NSView.LayerContentsPlacement (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.

## Declaration

```swift
enum LayerContentsPlacement
```

## Topics

### Constants

- [NSView.LayerContentsPlacement.scaleAxesIndependently](layercontentsplacement-swift.enum/scaleaxesindependently.md): The content is resized to fit the entire bounds rectangle.
- [NSView.LayerContentsPlacement.scaleProportionallyToFit](layercontentsplacement-swift.enum/scaleproportionallytofit.md): The content is resized to fit the bounds rectangle, preserving the aspect of the content. If the content does not completely fill the bounds rectangle, the content is centered in the partial axis.
- [NSView.LayerContentsPlacement.scaleProportionallyToFill](layercontentsplacement-swift.enum/scaleproportionallytofill.md): The content is resized to completely fill the bounds rectangle, while still preserving the aspect of the content. The content is centered in the axis it exceeds.
- [NSView.LayerContentsPlacement.center](layercontentsplacement-swift.enum/center.md): The content is horizontally and vertically centered in the bounds rectangle.
- [NSView.LayerContentsPlacement.top](layercontentsplacement-swift.enum/top.md): The content is horizontally centered at the top-edge of the bounds rectangle.
- [NSView.LayerContentsPlacement.topRight](layercontentsplacement-swift.enum/topright.md): The content is positioned in the top-right corner of the bounds rectangle.
- [NSView.LayerContentsPlacement.right](layercontentsplacement-swift.enum/right.md): The content is vertically centered at the right-edge of the bounds rectangle.
- [NSView.LayerContentsPlacement.bottomRight](layercontentsplacement-swift.enum/bottomright.md): The content is positioned in the bottom-right corner of the bounds rectangle.
- [NSView.LayerContentsPlacement.bottom](layercontentsplacement-swift.enum/bottom.md): The content is horizontally centered at the bottom-edge of the bounds rectangle.
- [NSView.LayerContentsPlacement.bottomLeft](layercontentsplacement-swift.enum/bottomleft.md): The content is positioned in the bottom-left corner of the bounds rectangle.
- [NSView.LayerContentsPlacement.left](layercontentsplacement-swift.enum/left.md): The content is vertically centered at the left-edge of the bounds rectangle.
- [NSView.LayerContentsPlacement.topLeft](layercontentsplacement-swift.enum/topleft.md): The content is positioned in the top-left corner of the bounds rectangle.

### Initializers

- [init(rawValue:)](layercontentsplacement-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer()](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [layerContentsPlacement](layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSView.LayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.

# NSViewLayerContentsPlacement (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](layercontentsplacement-swift.property.md) property.

## Declaration

```objectivec
enum NSViewLayerContentsPlacement : NSInteger;
```

## Topics

### Constants

- [NSViewLayerContentsPlacementScaleAxesIndependently](layercontentsplacement-swift.enum/scaleaxesindependently.md): The content is resized to fit the entire bounds rectangle.
- [NSViewLayerContentsPlacementScaleProportionallyToFit](layercontentsplacement-swift.enum/scaleproportionallytofit.md): The content is resized to fit the bounds rectangle, preserving the aspect of the content. If the content does not completely fill the bounds rectangle, the content is centered in the partial axis.
- [NSViewLayerContentsPlacementScaleProportionallyToFill](layercontentsplacement-swift.enum/scaleproportionallytofill.md): The content is resized to completely fill the bounds rectangle, while still preserving the aspect of the content. The content is centered in the axis it exceeds.
- [NSViewLayerContentsPlacementCenter](layercontentsplacement-swift.enum/center.md): The content is horizontally and vertically centered in the bounds rectangle.
- [NSViewLayerContentsPlacementTop](layercontentsplacement-swift.enum/top.md): The content is horizontally centered at the top-edge of the bounds rectangle.
- [NSViewLayerContentsPlacementTopRight](layercontentsplacement-swift.enum/topright.md): The content is positioned in the top-right corner of the bounds rectangle.
- [NSViewLayerContentsPlacementRight](layercontentsplacement-swift.enum/right.md): The content is vertically centered at the right-edge of the bounds rectangle.
- [NSViewLayerContentsPlacementBottomRight](layercontentsplacement-swift.enum/bottomright.md): The content is positioned in the bottom-right corner of the bounds rectangle.
- [NSViewLayerContentsPlacementBottom](layercontentsplacement-swift.enum/bottom.md): The content is horizontally centered at the bottom-edge of the bounds rectangle.
- [NSViewLayerContentsPlacementBottomLeft](layercontentsplacement-swift.enum/bottomleft.md): The content is positioned in the bottom-left corner of the bounds rectangle.
- [NSViewLayerContentsPlacementLeft](layercontentsplacement-swift.enum/left.md): The content is vertically centered at the left-edge of the bounds rectangle.
- [NSViewLayerContentsPlacementTopLeft](layercontentsplacement-swift.enum/topleft.md): The content is positioned in the top-left corner of the bounds rectangle.

## See Also

### Managing the View’s Layer

- [wantsLayer](wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [layerContentsPlacement](layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSViewLayerContentsRedrawPolicy](layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
- [NSViewLayerContentScaleDelegate](../nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.
