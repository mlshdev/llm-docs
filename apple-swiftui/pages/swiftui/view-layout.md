> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view-layout](https://developer.apple.com/documentation/swiftui/view-layout)

# Layout modifiers

**Framework:** SwiftUI  
**Kind:** API Collection

Tell a view how to arrange itself within a view hierarchy by adjusting its size, position, alignment, padding, and so on.

<a id="Overview"></a>

## Overview

Use layout modifiers to fine tune the placement of views in a view hierarchy. You can adjust or constrain the size, position, and alignment of a view. You can also add padding around a view, and indicate how the view interacts with system-defined safe areas.

To get started arranging views, see [Layout fundamentals](layout-fundamentals.md). To make adjustments to a basic layout, see [Layout adjustments](layout-adjustments.md).

## Topics

### Size

- [frame(width:height:alignment:)](view/frame%28width_height_alignment_%29.md): Positions this view within an invisible frame with the specified size.
- [frame(depth:alignment:)](view/frame%28depth_alignment_%29.md): Positions this view within an invisible frame with the specified depth.
- [frame(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:alignment:)](view/frame%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_alignment_%29.md): Positions this view within an invisible frame having the specified size constraints.
- [frame(minDepth:idealDepth:maxDepth:alignment:)](view/frame%28mindepth_idealdepth_maxdepth_alignment_%29.md): Positions this view within an invisible frame having the specified depth constraints.
- [containerRelativeFrame(\_:alignment:)](view/containerrelativeframe%28__alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:alignment:\_:)](view/containerrelativeframe%28__alignment___%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:count:span:spacing:alignment:)](view/containerrelativeframe%28__count_span_spacing_alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [fixedSize()](view/fixedsize%28%29.md): Fixes this view at its ideal size.
- [fixedSize(horizontal:vertical:)](view/fixedsize%28horizontal_vertical_%29.md): Fixes this view at its ideal size in the specified dimensions.
- [layoutPriority(\_:)](view/layoutpriority%28__%29.md): Sets the priority by which a parent layout should apportion space to this child.
- [containerCornerOffset(\_:sizeToFit:)](view/containercorneroffset%28__sizetofit_%29.md): Adjusts the view’s layout to avoid the container view’s corner insets for the specified edges.

### Position

- [position(\_:)](view/position%28__%29.md): Positions the center of this view at the specified point in its parent’s coordinate space.
- [position(x:y:)](view/position%28x_y_%29.md): Positions the center of this view at the specified coordinates in its parent’s coordinate space.
- [offset(\_:)](view/offset%28__%29.md): Offset this view by the horizontal and vertical amount specified in the offset parameter.
- [offset(x:y:)](view/offset%28x_y_%29.md): Offset this view by the specified horizontal and vertical distances.
- [offset(z:)](view/offset%28z_%29.md): Brings a view forward in Z by the provided distance in points.
- [coordinateSpace(\_:)](view/coordinatespace%28__%29.md): Assigns a name to the view’s coordinate space, so other code can operate on dimensions like points and sizes relative to the named space.

### Alignment

- [alignmentGuide(\_:computeValue:)](view/alignmentguide%28__computevalue_%29.md): Sets the view’s horizontal alignment.

### Padding and spacing

- [padding(\_:)](view/padding%28__%29.md): Adds a different padding amount to each edge of this view.
- [padding(\_:\_:)](view/padding%28____%29.md): Adds an equal padding amount to specific edges of this view.
- [padding3D(\_:)](view/padding3d%28__%29.md): Pads this view using the edge insets you specify.
- [padding3D(\_:\_:)](view/padding3d%28____%29.md): Pads this view using the edge insets you specify.
- [listRowInsets(\_:)](view/listrowinsets%28__%29.md): Applies an inset to the rows in a list.
- [listRowInsets(\_:\_:)](view/listrowinsets%28____%29.md): Sets the insets of rows in a list on the specified edges.
- [scenePadding(\_:)](view/scenepadding%28__%29.md): Adds padding to the specified edges of this view using an amount that’s appropriate for the current scene.
- [scenePadding(\_:edges:)](view/scenepadding%28__edges_%29.md): Adds a specified kind of padding to the specified edges of this view using an amount that’s appropriate for the current scene.
- [listRowSpacing(\_:)](view/listrowspacing%28__%29.md): Sets the vertical spacing between two adjacent rows in a List.
- [listSectionSpacing(\_:)](view/listsectionspacing%28__%29.md): Sets the spacing between adjacent sections in a [List](list.md) to a custom value.
- [listSectionMargins(\_:\_:)](view/listsectionmargins%28____%29.md): Set the section margins for the specific edges.

### Grid configuration

- [gridCellColumns(\_:)](view/gridcellcolumns%28__%29.md): Tells a view that acts as a cell in a grid to span the specified number of columns.
- [gridCellAnchor(\_:)](view/gridcellanchor%28__%29.md): Specifies a custom alignment anchor for a view that acts as a grid cell.
- [gridCellUnsizedAxes(\_:)](view/gridcellunsizedaxes%28__%29.md): Asks grid layouts not to offer the view extra size in the specified axes.
- [gridColumnAlignment(\_:)](view/gridcolumnalignment%28__%29.md): Overrides the default horizontal alignment of the grid column that the view appears in.

### Safe area and margins

- [ignoresSafeArea(\_:edges:)](view/ignoressafearea%28__edges_%29.md): Expands the safe area of a view.
- [ignoresSafeArea(\_:edges:alignment:)](view/ignoressafearea%28__edges_alignment_%29.md): Expands the safe area of a view aligning content within the new bounds using the provided alignment.
- [safeAreaInset(edge:alignment:spacing:content:)](view/safeareainset%28edge_alignment_spacing_content_%29.md): Shows the specified content beside the modified view.
- [safeAreaBar(edge:alignment:spacing:content:)](view/safeareabar%28edge_alignment_spacing_content_%29.md): Shows the specified content as a custom bar beside the modified view.
- [safeAreaPadding(\_:)](view/safeareapadding%28__%29.md): Adds the provided insets into the safe area of this view.
- [safeAreaPadding(\_:\_:)](view/safeareapadding%28____%29.md): Adds the provided insets into the safe area of this view.
- [contentMargins(\_:for:)](view/contentmargins%28__for_%29.md): Configures the content margin for a provided placement.
- [contentMargins(\_:\_:for:)](view/contentmargins%28____for_%29.md): Configures the content margin for a provided placement.

### Layer order

- [zIndex(\_:)](view/zindex%28__%29.md): Controls the display order of overlapping views.

### Layout direction

- [layoutDirectionBehavior(\_:)](view/layoutdirectionbehavior%28__%29.md): Sets the behavior of this view for different layout directions.

### Custom layout characteristics

- [layoutValue(key:value:)](view/layoutvalue%28key_value_%29.md): Associates a value with a custom layout property.
- [containerValue(\_:\_:)](view/containervalue%28____%29.md): Sets a particular container value of a view.

## See Also

### Drawing views

- [Style modifiers](view-style-modifiers.md): Apply built-in styles to different types of views.
- [Graphics and rendering modifiers](view-graphics-and-rendering.md): Affect the way the system draws a view, for example by scaling or masking a view, or by applying graphical effects.
