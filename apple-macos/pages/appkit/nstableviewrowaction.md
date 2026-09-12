> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewrowaction](https://developer.apple.com/documentation/appkit/nstableviewrowaction)

# NSTableViewRowAction (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A single action to present when the user swipes horizontally on a table row.

## Declaration

```swift
class NSTableViewRowAction
```

<a id="overview"></a>

## Overview

In an editable table, performing a horizontal swipe on a row reveals a button to delete the row by default. This class lets you define one or more custom actions to display for a given row in your table. Each instance of this class represents a single action to perform and includes the text, formatting information, and behavior for the corresponding button.

To add custom actions to your table view’s rows, implement the [tableView(\_:rowActionsForRow:edge:)](nstableviewdelegate/tableview%28__rowactionsforrow_edge_%29.md) method in your table view’s delegate object. In that method, create and return an array of actions for the specified row. The table handles the remaining work of displaying the action buttons and executing the appropriate handler block when the user clicks the button.

## Topics

### Creating a Table Row Action

- [init(style:title:handler:)](nstableviewrowaction/init%28style_title_handler_%29.md): Creates and returns a new table view row action object.

### Configuring the Action’s Appearance

- [style](nstableviewrowaction/style-swift.property.md): The style applied to the action button.
- [title](nstableviewrowaction/title.md): The title of the action button.
- [backgroundColor](nstableviewrowaction/backgroundcolor.md): The background color of the action button.

### Constants

- [NSTableViewRowAction.Style](nstableviewrowaction/style-swift.enum.md): Constants that help define the appearance and behavior of action buttons.

### Instance Properties

- [image](nstableviewrowaction/image.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Rows and Columns

- [NSTableHeaderView](nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableHeaderCell](nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableRowView](nstablerowview.md): The view shown for a row in a table view.
- [NSTableColumn](nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableColumn.ResizingOptions](nstablecolumn/resizingoptions.md)

# NSTableViewRowAction (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A single action to present when the user swipes horizontally on a table row.

## Declaration

```objectivec
@interface NSTableViewRowAction : NSObject
```

<a id="overview"></a>

## Overview

In an editable table, performing a horizontal swipe on a row reveals a button to delete the row by default. This class lets you define one or more custom actions to display for a given row in your table. Each instance of this class represents a single action to perform and includes the text, formatting information, and behavior for the corresponding button.

To add custom actions to your table view’s rows, implement the [tableView:rowActionsForRow:edge:](nstableviewdelegate/tableview%28__rowactionsforrow_edge_%29.md) method in your table view’s delegate object. In that method, create and return an array of actions for the specified row. The table handles the remaining work of displaying the action buttons and executing the appropriate handler block when the user clicks the button.

## Topics

### Creating a Table Row Action

- [rowActionWithStyle:title:handler:](nstableviewrowaction/init%28style_title_handler_%29.md): Creates and returns a new table view row action object.

### Configuring the Action’s Appearance

- [style](nstableviewrowaction/style-swift.property.md): The style applied to the action button.
- [title](nstableviewrowaction/title.md): The title of the action button.
- [backgroundColor](nstableviewrowaction/backgroundcolor.md): The background color of the action button.

### Constants

- [NSTableViewRowActionStyle](nstableviewrowaction/style-swift.enum.md): Constants that help define the appearance and behavior of action buttons.

### Instance Properties

- [image](nstableviewrowaction/image.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Rows and Columns

- [NSTableHeaderView](nstableheaderview.md): An object that draws headers over a table view’s columns and handles mouse events in those headers.
- [NSTableHeaderCell](nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.
- [NSTableRowView](nstablerowview.md): The view shown for a row in a table view.
- [NSTableColumn](nstablecolumn.md): The display characteristics and identifier for a column in a table view.
- [NSTableColumnResizingOptions](nstablecolumn/resizingoptions.md)
