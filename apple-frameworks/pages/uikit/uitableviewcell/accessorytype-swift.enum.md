> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/accessorytype-swift.enum](https://developer.apple.com/documentation/uikit/uitableviewcell/accessorytype-swift.enum)

# UITableViewCell.AccessoryType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The type of standard accessory control used by a cell.

## Declaration

```swift
enum AccessoryType
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)

<a id="overview"></a>

## Overview

Use these constants to set the value of the [accessoryType](accessorytype-swift.property.md) property.

Several accessory views support additional interactions. For example, a detail button conveys that there is additional information for the user to see. For information about how to respond to interactions with a specific accessory view, see the discussion for that type.

## Topics

### Accessory views

- [UITableViewCell.AccessoryType.none](accessorytype-swift.enum/none.md): No accessory view.
- [UITableViewCell.AccessoryType.disclosureIndicator](accessorytype-swift.enum/disclosureindicator.md): A chevron-shaped control for presenting new content.
- [UITableViewCell.AccessoryType.detailDisclosureButton](accessorytype-swift.enum/detaildisclosurebutton.md): An information button and a disclosure (chevron) control.
- [UITableViewCell.AccessoryType.checkmark](accessorytype-swift.enum/checkmark.md): A checkmark image.
- [UITableViewCell.AccessoryType.detailButton](accessorytype-swift.enum/detailbutton.md): An information button.

### Initializers

- [init(rawValue:)](accessorytype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing accessory views

- [accessoryType](accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.
- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [editingAccessoryType](editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.

# UITableViewCellAccessoryType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The type of standard accessory control used by a cell.

## Declaration

```objectivec
enum UITableViewCellAccessoryType : NSInteger;
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)

<a id="overview"></a>

## Overview

Use these constants to set the value of the [accessoryType](accessorytype-swift.property.md) property.

Several accessory views support additional interactions. For example, a detail button conveys that there is additional information for the user to see. For information about how to respond to interactions with a specific accessory view, see the discussion for that type.

## Topics

### Accessory views

- [UITableViewCellAccessoryNone](accessorytype-swift.enum/none.md): No accessory view.
- [UITableViewCellAccessoryDisclosureIndicator](accessorytype-swift.enum/disclosureindicator.md): A chevron-shaped control for presenting new content.
- [UITableViewCellAccessoryDetailDisclosureButton](accessorytype-swift.enum/detaildisclosurebutton.md): An information button and a disclosure (chevron) control.
- [UITableViewCellAccessoryCheckmark](accessorytype-swift.enum/checkmark.md): A checkmark image.
- [UITableViewCellAccessoryDetailButton](accessorytype-swift.enum/detailbutton.md): An information button.

## See Also

### Managing accessory views

- [accessoryType](accessorytype-swift.property.md): The type of standard accessory view for the cell to use in the table view’s normal state.
- [accessoryView](accessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s normal state.
- [editingAccessoryType](editingaccessorytype.md): The type of standard accessory view for the cell to use in the table view’s editing state.
- [editingAccessoryView](editingaccessoryview.md): The view to use on the right side of the cell, typically as a control, in the table view’s editing state.
