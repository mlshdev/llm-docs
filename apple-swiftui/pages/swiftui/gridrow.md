> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gridrow](https://developer.apple.com/documentation/swiftui/gridrow)

# GridRow

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A horizontal row in a two dimensional grid container.

## Declaration

```swift
@frozen nonisolated struct GridRow<Content> where Content : View
```

<a id="overview"></a>

## Overview

Use one or more `GridRow` instances to define the rows of a [Grid](grid.md) container. The child views inside the row define successive grid cells. You can add rows to the grid explicitly, or use the [ForEach](foreach.md) structure to generate multiple rows. Similarly, you can add cells to the row explicitly or you can use [ForEach](foreach.md) to generate multiple cells inside the row. The following example mixes these strategies:

```swift
Grid {
    GridRow {
        Color.clear
            .gridCellUnsizedAxes([.horizontal, .vertical])
        ForEach(1..<4) { column in
            Text("C\(column)")
        }
    }
    ForEach(1..<4) { row in
        GridRow {
            Text("R\(row)")
            ForEach(1..<4) { _ in
                Circle().foregroundStyle(.mint)
            }
        }
    }
}
```

The grid in the example above has an explicit first row and three generated rows. Similarly, each row has an explicit first cell and three generated cells:

![A screenshot of a grid that contains four rows and four columns. Scanning](https://developer.apple.com/images/com.apple.SwiftUI/GridRow-1-iOS@2x.png)

To create an empty cell, use something invisible, like the [clear](shapestyle/clear.md) color that appears in the first column of the first row in the example above. However, if you use a flexible view like a [Color](color.md) or a [Spacer](spacer.md), you might also need to add the [gridCellUnsizedAxes(\_:)](view/gridcellunsizedaxes%28__%29.md) modifier to prevent the view from taking up more space than the other cells in the row or column need.

> **Important**

> You can’t use [EmptyView](emptyview.md) to create a blank cell because that resolves to the absence of a view and doesn’t generate a cell.

By default, the cells in the row use the [Alignment](alignment.md) that you define when you initialize the [Grid](grid.md). However, you can override the vertical alignment for the cells in a row by providing a [VerticalAlignment](verticalalignment.md) value to the row’s [init(alignment:content:)](gridrow/init%28alignment_content_%29.md) initializer.

If you apply a view modifier to a row, the row applies the modifier to all of the cells, similar to how a [Group](group.md) behaves. For example,  if you apply the [border(\_:width:)](view/border%28__width_%29.md) modifier to a row, SwiftUI draws a border on each cell in the row rather than around the row.

## Topics

### Creating a grid row

- [init(alignment:content:)](gridrow/init%28alignment_content_%29.md): Creates a horizontal row of child views in a grid.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [View](view.md)

## See Also

### Statically arranging views in two dimensions

- [Grid](grid.md): A container view that arranges other views in a two dimensional layout.
- [gridCellColumns(\_:)](view/gridcellcolumns%28__%29.md): Tells a view that acts as a cell in a grid to span the specified number of columns.
- [gridCellAnchor(\_:)](view/gridcellanchor%28__%29.md): Specifies a custom alignment anchor for a view that acts as a grid cell.
- [gridCellUnsizedAxes(\_:)](view/gridcellunsizedaxes%28__%29.md): Asks grid layouts not to offer the view extra size in the specified axes.
- [gridColumnAlignment(\_:)](view/gridcolumnalignment%28__%29.md): Overrides the default horizontal alignment of the grid column that the view appears in.
