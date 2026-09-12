> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview](https://developer.apple.com/documentation/appkit/nstablerowview)

# NSTableRowView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

The view shown for a row in a table view.

## Declaration

```swift
class NSTableRowView
```

<a id="overview"></a>

## Overview

[NSTableRowView](nstablerowview.md) is responsible for displaying attributes associated with the row, including the selection highlight, and group row look.

## Topics

### Display Style

- [isEmphasized](nstablerowview/isemphasized.md): Determines whether the row will draw with the alternate or secondary color (unless overridden).
- [interiorBackgroundStyle](nstablerowview/interiorbackgroundstyle.md): Specifies how the subviews should draw.
- [isFloating](nstablerowview/isfloating.md): Specifies whether the row is drawn using the floating style.

### Row Selection

- [isSelected](nstablerowview/isselected.md): Determines whether the row is selected.
- [selectionHighlightStyle](nstablerowview/selectionhighlightstyle.md): Specifies the selection highlight style.

### Drag and Drop

- [draggingDestinationFeedbackStyle](nstablerowview/draggingdestinationfeedbackstyle.md): Specifies the dragging destination feedback style.
- [indentationForDropOperation](nstablerowview/indentationfordropoperation.md): Defines the amount the drag target for a row should be indented.
- [isTargetForDropOperation](nstablerowview/istargetfordropoperation.md): Specifies whether this row will draw a drop indicator based on the current dragging feedback style.

### Row Grouping

- [isGroupRowStyle](nstablerowview/isgrouprowstyle.md): Specifies whether this row view is a group row.
- [numberOfColumns](nstablerowview/numberofcolumns.md): Returns the number of columns represented by views in the table row view.

### Overriding Row View Display Characteristics

- [backgroundColor](nstablerowview/backgroundcolor.md): The background color of the row.
- [drawBackground(in:)](nstablerowview/drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawDraggingDestinationFeedback(in:)](nstablerowview/drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSelection(in:)](nstablerowview/drawselection%28in_%29.md): Draws the selected row.
- [drawSeparator(in:)](nstablerowview/drawseparator%28in_%29.md): Draws the horizontal separator between table rows.

### Accessing A Row Column View

- [view(atColumn:)](nstablerowview/view%28atcolumn_%29.md): Provides access to the given view at a particular column.

### Instance Properties

- [isNextRowSelected](nstablerowview/isnextrowselected.md)
- [isPreviousRowSelected](nstablerowview/ispreviousrowselected.md)

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityGroup](nsaccessibilitygroup.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilityRow](nsaccessibilityrow.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rows and Columns

- [NSTableHeaderView](nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableHeaderCell](nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableColumn](nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableViewRowAction](nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.
- [NSTableColumn.ResizingOptions](nstablecolumn/resizingoptions.md)

# NSTableRowView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

The view shown for a row in a table view.

## Declaration

```objectivec
@interface NSTableRowView : NSView
```

<a id="overview"></a>

## Overview

[NSTableRowView](nstablerowview.md) is responsible for displaying attributes associated with the row, including the selection highlight, and group row look.

## Topics

### Display Style

- [emphasized](nstablerowview/isemphasized.md): Determines whether the row will draw with the alternate or secondary color (unless overridden).
- [interiorBackgroundStyle](nstablerowview/interiorbackgroundstyle.md): Specifies how the subviews should draw.
- [floating](nstablerowview/isfloating.md): Specifies whether the row is drawn using the floating style.

### Row Selection

- [selected](nstablerowview/isselected.md): Determines whether the row is selected.
- [selectionHighlightStyle](nstablerowview/selectionhighlightstyle.md): Specifies the selection highlight style.

### Drag and Drop

- [draggingDestinationFeedbackStyle](nstablerowview/draggingdestinationfeedbackstyle.md): Specifies the dragging destination feedback style.
- [indentationForDropOperation](nstablerowview/indentationfordropoperation.md): Defines the amount the drag target for a row should be indented.
- [targetForDropOperation](nstablerowview/istargetfordropoperation.md): Specifies whether this row will draw a drop indicator based on the current dragging feedback style.

### Row Grouping

- [groupRowStyle](nstablerowview/isgrouprowstyle.md): Specifies whether this row view is a group row.
- [numberOfColumns](nstablerowview/numberofcolumns.md): Returns the number of columns represented by views in the table row view.

### Overriding Row View Display Characteristics

- [backgroundColor](nstablerowview/backgroundcolor.md): The background color of the row.
- [drawBackgroundInRect:](nstablerowview/drawbackground%28in_%29.md): Draws the background of the row in the rectangle.
- [drawDraggingDestinationFeedbackInRect:](nstablerowview/drawdraggingdestinationfeedback%28in_%29.md): Draws the row’s dragging destination feedback when the entire row is a drop target.
- [drawSelectionInRect:](nstablerowview/drawselection%28in_%29.md): Draws the selected row.
- [drawSeparatorInRect:](nstablerowview/drawseparator%28in_%29.md): Draws the horizontal separator between table rows.

### Accessing A Row Column View

- [viewAtColumn:](nstablerowview/view%28atcolumn_%29.md): Provides access to the given view at a particular column.

### Instance Properties

- [nextRowSelected](nstablerowview/isnextrowselected.md)
- [previousRowSelected](nstablerowview/ispreviousrowselected.md)

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [NSAccessibilityRow](nsaccessibilityrow.md)

## See Also

### Rows and Columns

- [NSTableHeaderView](nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableHeaderCell](nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableColumn](nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableViewRowAction](nstableviewrowaction.md): A single action to present when the user swipes horizontally on a table row.
- [NSTableColumnResizingOptions](nstablecolumn/resizingoptions.md)
