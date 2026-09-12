> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewlayercontentscaledelegate](https://developer.apple.com/documentation/appkit/nsviewlayercontentscaledelegate)

# NSViewLayerContentScaleDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

An optional layer delegate method for handling resolution changes.

## Declaration

```swift
protocol NSViewLayerContentScaleDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use this protocol to manage scale and contents for a layer hosted in a view. When a window changes its backing resolution, AppKit attempts to automatically update the `contentsScale` and `contents` of all `CALayer` objects in the window to match the new resolution. Layers backed by a view are updated automatically. Any layer whose `contents` property is set to an `NSImage` object is also updated automatically. Based on the `NSImage` object’s available representations, AppKit selects an appropriate bitmapped representation, or rasterizes a resolution-independent representation at the appropriate scale factor.

For all other layers, AppKit checks whether the layer has a delegate that implements this protocol.  If so, AppKit asks the layer’s delegate whether it should automatically update the `contentsScale` for that layer to match the new scale factor of the window.

## Topics

### Responding to Resolution Changes

- [layer(\_:shouldInheritContentsScale:from:)](nsviewlayercontentscaledelegate/layer%28__shouldinheritcontentsscale_from_%29.md): Notifies you when a resolution changes occurs for the window that hosts the layer.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [View Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaViewsGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40002978)

### Managing the View’s Layer

- [wantsLayer](nsview/wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](nsview/wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](nsview/layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer()](nsview/makebackinglayer%28%29.md): Creates the view’s backing layer.
- [layerContentsPlacement](nsview/layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [NSView.LayerContentsPlacement](nsview/layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](nsview/layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](nsview/layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSView.LayerContentsRedrawPolicy](nsview/layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](nsview/layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](nsview/candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](nsview/layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.

# NSViewLayerContentScaleDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

An optional layer delegate method for handling resolution changes.

## Declaration

```objectivec
@protocol NSViewLayerContentScaleDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use this protocol to manage scale and contents for a layer hosted in a view. When a window changes its backing resolution, AppKit attempts to automatically update the `contentsScale` and `contents` of all `CALayer` objects in the window to match the new resolution. Layers backed by a view are updated automatically. Any layer whose `contents` property is set to an `NSImage` object is also updated automatically. Based on the `NSImage` object’s available representations, AppKit selects an appropriate bitmapped representation, or rasterizes a resolution-independent representation at the appropriate scale factor.

For all other layers, AppKit checks whether the layer has a delegate that implements this protocol.  If so, AppKit asks the layer’s delegate whether it should automatically update the `contentsScale` for that layer to match the new scale factor of the window.

## Topics

### Responding to Resolution Changes

- [layer:shouldInheritContentsScale:fromWindow:](nsviewlayercontentscaledelegate/layer%28__shouldinheritcontentsscale_from_%29.md): Notifies you when a resolution changes occurs for the window that hosts the layer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [View Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaViewsGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40002978)

### Managing the View’s Layer

- [wantsLayer](nsview/wantslayer.md): A Boolean value indicating whether the view uses a layer as its backing store.
- [wantsUpdateLayer](nsview/wantsupdatelayer.md): A Boolean value indicating which drawing path the view takes when updating its contents.
- [layer](nsview/layer.md): The Core Animation layer that the view uses as its backing store.
- [makeBackingLayer](nsview/makebackinglayer%28%29.md): Creates the view’s backing layer.
- [layerContentsPlacement](nsview/layercontentsplacement-swift.property.md): The current layer contents placement policy.
- [NSViewLayerContentsPlacement](nsview/layercontentsplacement-swift.enum.md): These constants specify the location of the layer content when the content is not rerendered in response to view resizing. For more information, see the [layerContentsPlacement](nsview/layercontentsplacement-swift.property.md) property.
- [layerContentsRedrawPolicy](nsview/layercontentsredrawpolicy-swift.property.md): The contents redraw policy for the view’s layer.
- [NSViewLayerContentsRedrawPolicy](nsview/layercontentsredrawpolicy-swift.enum.md): Constants that specify how layer resizing is handled when a view is layer-backed or layer-hosting. For more information, see the [layerContentsRedrawPolicy](nsview/layercontentsredrawpolicy-swift.property.md) property.
- [canDrawSubviewsIntoLayer](nsview/candrawsubviewsintolayer.md): A Boolean value indicating whether the view incorporates content from its subviews into its own layer.
- [layerUsesCoreImageFilters](nsview/layerusescoreimagefilters.md): A Boolean value indicating whether the view’s layer uses Core Image filters and needs in-process rendering.
