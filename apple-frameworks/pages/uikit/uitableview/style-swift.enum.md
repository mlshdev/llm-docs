> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/style-swift.enum](https://developer.apple.com/documentation/uikit/uitableview/style-swift.enum)

# UITableView.Style (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants for the table view styles.

## Declaration

```swift
enum Style
```

<a id="overview"></a>

## Overview

You set the table style when you initialize the table view (see [init(frame:style:)](init%28frame_style_%29.md)). You can’t modify the style thereafter.

## Topics

### Styles

- [UITableView.Style.plain](style-swift.enum/plain.md): A plain table view.
- [UITableView.Style.grouped](style-swift.enum/grouped.md): A table view where sections have distinct groups of rows.
- [UITableView.Style.insetGrouped](style-swift.enum/insetgrouped.md): A table view where the grouped sections are inset with rounded corners.

### Initializers

- [init(rawValue:)](style-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the table’s appearance

- [style](style-swift.property.md): The style of the table view.
- [tableHeaderView](tableheaderview.md): The view that displays above the table’s content.
- [tableFooterView](tablefooterview.md): The view that displays below the table’s content.
- [backgroundView](backgroundview.md): The background view of the table view.

# UITableViewStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants for the table view styles.

## Declaration

```objectivec
enum UITableViewStyle : NSInteger;
```

<a id="overview"></a>

## Overview

You set the table style when you initialize the table view (see [initWithFrame:style:](init%28frame_style_%29.md)). You can’t modify the style thereafter.

## Topics

### Styles

- [UITableViewStylePlain](style-swift.enum/plain.md): A plain table view.
- [UITableViewStyleGrouped](style-swift.enum/grouped.md): A table view where sections have distinct groups of rows.
- [UITableViewStyleInsetGrouped](style-swift.enum/insetgrouped.md): A table view where the grouped sections are inset with rounded corners.

## See Also

### Configuring the table’s appearance

- [style](style-swift.property.md): The style of the table view.
- [tableHeaderView](tableheaderview.md): The view that displays above the table’s content.
- [tableFooterView](tablefooterview.md): The view that displays below the table’s content.
- [backgroundView](backgroundview.md): The background view of the table view.
