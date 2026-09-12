> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/core-animation-support](https://developer.apple.com/documentation/appkit/core-animation-support)

# Core Animation Support (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Manage the layer object that provides the view’s visual representation and accelerates drawing operations.

## Topics

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
- [NSViewLayerContentScaleDelegate](nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.

### Managing Layer-Related Properties

- [alphaValue](nsview/alphavalue.md): The opacity of the view.
- [frameCenterRotation](nsview/framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](nsview/backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](nsview/compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](nsview/contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](nsview/shadow.md): The shadow displayed underneath the view.

## See Also

### Configuring the view

- [View Hierarchy](view-hierarchy.md): Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.
- [View Coordinates](view-coordinates.md): Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.
- [Appearance](nsview-appearance.md): Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.
- [Related UI](related-ui.md): Manage contextual menus, cursors, tool tips, and other system-provided windows and content.

# Core Animation Support (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Manage the layer object that provides the view’s visual representation and accelerates drawing operations.

## Topics

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
- [NSViewLayerContentScaleDelegate](nsviewlayercontentscaledelegate.md): An optional layer delegate method for handling resolution changes.

### Managing Layer-Related Properties

- [alphaValue](nsview/alphavalue.md): The opacity of the view.
- [frameCenterRotation](nsview/framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](nsview/backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](nsview/compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](nsview/contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](nsview/shadow.md): The shadow displayed underneath the view.

## See Also

### Configuring the view

- [View Hierarchy](view-hierarchy.md): Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.
- [View Coordinates](view-coordinates.md): Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.
- [Appearance](nsview-appearance.md): Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.
- [Related UI](related-ui.md): Manage contextual menus, cursors, tool tips, and other system-provided windows and content.
