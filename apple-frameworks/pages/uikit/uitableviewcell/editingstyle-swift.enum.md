> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/editingstyle-swift.enum](https://developer.apple.com/documentation/uikit/uitableviewcell/editingstyle-swift.enum)

# UITableViewCell.EditingStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The editing control used by a cell.

## Declaration

```swift
enum EditingStyle
```

<a id="overview"></a>

## Overview

Use these constants with the [editingStyle](editingstyle-swift.property.md) property.

## Topics

### Constants

- [UITableViewCell.EditingStyle.none](editingstyle-swift.enum/none.md): The cell has no editing control.
- [UITableViewCell.EditingStyle.delete](editingstyle-swift.enum/delete.md): The cell has the delete editing control; this control is a red circle enclosing a minus sign.
- [UITableViewCell.EditingStyle.insert](editingstyle-swift.enum/insert.md): The cell has the insert editing control; this control is a green circle enclosing a plus sign.

### Initializers

- [init(rawValue:)](editingstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Editing the cell

- [isEditing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing(\_:animated:)](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.

# UITableViewCellEditingStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The editing control used by a cell.

## Declaration

```objectivec
enum UITableViewCellEditingStyle : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [editingStyle](editingstyle-swift.property.md) property.

## Topics

### Constants

- [UITableViewCellEditingStyleNone](editingstyle-swift.enum/none.md): The cell has no editing control.
- [UITableViewCellEditingStyleDelete](editingstyle-swift.enum/delete.md): The cell has the delete editing control; this control is a red circle enclosing a minus sign.
- [UITableViewCellEditingStyleInsert](editingstyle-swift.enum/insert.md): The cell has the insert editing control; this control is a green circle enclosing a plus sign.

## See Also

### Editing the cell

- [editing](isediting.md): A Boolean value that indicates whether the cell is in an editable state.
- [setEditing:animated:](setediting%28__animated_%29.md): Toggles the cell into and out of editing mode.
- [editingStyle](editingstyle-swift.property.md): The editing style of the cell.
- [showingDeleteConfirmation](showingdeleteconfirmation.md): A Boolean value that indicates whether the cell is currently showing the delete-confirmation button.
- [showsReorderControl](showsreordercontrol.md): A Boolean value that determines whether the cell shows the reordering control.
