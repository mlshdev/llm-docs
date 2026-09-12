> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layout-fundamentals](https://developer.apple.com/documentation/swiftui/layout-fundamentals)

# Layout fundamentals

**Framework:** SwiftUI  
**Kind:** API Collection

Arrange views inside built-in layout containers like stacks and grids.

<a id="Overview"></a>

## Overview

Use layout containers to arrange the elements of your user interface. Stacks and grids update and adjust the positions of the subviews they contain in response to changes in content or interface dimensions. You can nest layout containers inside other layout containers to any depth to achieve complex layout effects.

![](https://developer.apple.com/images/com.apple.SwiftUI/layout-fundamentals-hero@2x.png)

To fine-tune the position, alignment, and other elements of a layout that you build with layout container views, see [Layout adjustments](layout-adjustments.md). To define custom layout containers, see [Custom layout](custom-layout.md). For design guidance, see [Layout](https://developer.apple.com/design/human-interface-guidelines/layout) in the Human Interface Guidelines.

## Topics

### Choosing a layout

- [Picking container views for your content](picking-container-views-for-your-content.md): Build flexible user interfaces by using stacks, grids, lists, and forms.

### Statically arranging views in one dimension

- [Building layouts with stack views](building-layouts-with-stack-views.md): Compose complex layouts from primitive container views.
- [HStack](hstack.md): A view that arranges its subviews in a horizontal line.
- [VStack](vstack.md): A view that arranges its subviews in a vertical line.

### Dynamically arranging views in one dimension

- [Grouping data with lazy stack views](grouping-data-with-lazy-stack-views.md): Split content into logical sections inside lazy stack views.
- [Creating performant scrollable stacks](creating-performant-scrollable-stacks.md): Display large numbers of repeated views efficiently with scroll views, stack views, and lazy stacks.
- [LazyHStack](lazyhstack.md): A view that arranges its children in a line that grows horizontally, creating items only as needed.
- [LazyVStack](lazyvstack.md): A view that arranges its children in a line that grows vertically, creating items only as needed.
- [PinnedScrollableViews](pinnedscrollableviews.md): A set of view types that may be pinned to the bounds of a scroll view.

### Statically arranging views in two dimensions

- [Grid](grid.md): A container view that arranges other views in a two dimensional layout.
- [GridRow](gridrow.md): A horizontal row in a two dimensional grid container.
- [gridCellColumns(\_:)](view/gridcellcolumns%28__%29.md): Tells a view that acts as a cell in a grid to span the specified number of columns.
- [gridCellAnchor(\_:)](view/gridcellanchor%28__%29.md): Specifies a custom alignment anchor for a view that acts as a grid cell.
- [gridCellUnsizedAxes(\_:)](view/gridcellunsizedaxes%28__%29.md): Asks grid layouts not to offer the view extra size in the specified axes.
- [gridColumnAlignment(\_:)](view/gridcolumnalignment%28__%29.md): Overrides the default horizontal alignment of the grid column that the view appears in.

### Dynamically arranging views in two dimensions

- [LazyHGrid](lazyhgrid.md): A container view that arranges its child views in a grid that grows horizontally, creating items only as needed.
- [LazyVGrid](lazyvgrid.md): A container view that arranges its child views in a grid that grows vertically, creating items only as needed.
- [GridItem](griditem.md): A description of a row or a column in a lazy grid.

### Layering views

- [Adding a background to your view](adding-a-background-to-your-view.md): Compose a background behind your view and extend it beyond the safe area insets.
- [ZStack](zstack.md): A view that overlays its subviews, aligning them in both axes.
- [zIndex(\_:)](view/zindex%28__%29.md): Controls the display order of overlapping views.
- [background(alignment:content:)](view/background%28alignment_content_%29.md): Layers the views that you specify behind this view.
- [background(\_:ignoresSafeAreaEdges:)](view/background%28__ignoressafeareaedges_%29.md): Sets the view’s background to a style.
- [background(ignoresSafeAreaEdges:)](view/background%28ignoressafeareaedges_%29.md): Sets the view’s background to the default background style.
- [background(\_:in:fillStyle:)](view/background%28__in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with a style.
- [background(in:fillStyle:)](view/background%28in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with the default background style.
- [overlay(alignment:content:)](view/overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](view/overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](view/overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [backgroundMaterial](environmentvalues/backgroundmaterial.md): The material underneath the current view.
- [containerBackground(\_:for:)](view/containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](view/containerbackground%28for_alignment_content_%29.md): Sets the container background of the enclosing container using a view.
- [ContainerBackgroundPlacement](containerbackgroundplacement.md): The placement of a container background.

### Automatically choosing the layout that fits

- [ViewThatFits](viewthatfits.md): A view that adapts to the available space by providing the first child view that fits.

### Separators

- [Spacer](spacer.md): A flexible space that expands along the major axis of its containing stack layout, or on both axes if not contained in a stack.
- [Divider](divider.md): A visual element that can be used to separate other content.

## See Also

### View layout

- [Layout adjustments](layout-adjustments.md): Make fine adjustments to alignment, spacing, padding, and other layout parameters.
- [Custom layout](custom-layout.md): Place views in custom arrangements and create animated transitions between layout types.
- [Lists](lists.md): Display a structured, scrollable column of information.
- [Tables](tables.md): Display selectable, sortable data arranged in rows and columns.
- [View groupings](view-groupings.md): Present views in different kinds of purpose-driven containers, like forms or control groups.
- [Scroll views](scroll-views.md): Enable people to scroll to content that doesn’t fit in the current display.
