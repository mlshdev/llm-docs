> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/cellstyle](https://developer.apple.com/documentation/uikit/uitableviewcell/cellstyle)

# UITableViewCell.CellStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An enumeration for the various styles of cells.

## Declaration

```swift
enum CellStyle
```

<a id="overview"></a>

## Overview

In all these cell styles, the larger of the text labels is accessed using the [textLabel](textlabel.md) property and the smaller using the [detailTextLabel](detailtextlabel.md) property.

## Topics

### Cell styles

- [UITableViewCell.CellStyle.default](cellstyle/default.md): A simple style for a cell with a text label (black and left-aligned) and an optional image view.
- [UITableViewCell.CellStyle.value1](cellstyle/value1.md): A style for a cell with a label on the left side of the cell with left-aligned and black text; on the right side is a label that has smaller blue text and is right-aligned.
- [UITableViewCell.CellStyle.value2](cellstyle/value2.md): A style for a cell with a label on the left side of the cell with text that’s right-aligned and blue; on the right side of the cell is another label with smaller text that’s left-aligned and black.
- [UITableViewCell.CellStyle.subtitle](cellstyle/subtitle.md): A style for a cell with a left-aligned label across the top and a left-aligned label below it in smaller gray text.

### Initializers

- [init(rawValue:)](cellstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a table view cell

- [init(style:reuseIdentifier:)](init%28style_reuseidentifier_%29.md): Initializes a table cell with a style and a reuse identifier and returns it to the caller.
- [init(coder:)](init%28coder_%29.md): Creates a table view from data in an unarchiver.

# UITableViewCellStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An enumeration for the various styles of cells.

## Declaration

```objectivec
enum UITableViewCellStyle : NSInteger;
```

<a id="overview"></a>

## Overview

In all these cell styles, the larger of the text labels is accessed using the [textLabel](textlabel.md) property and the smaller using the [detailTextLabel](detailtextlabel.md) property.

## Topics

### Cell styles

- [UITableViewCellStyleDefault](cellstyle/default.md): A simple style for a cell with a text label (black and left-aligned) and an optional image view.
- [UITableViewCellStyleValue1](cellstyle/value1.md): A style for a cell with a label on the left side of the cell with left-aligned and black text; on the right side is a label that has smaller blue text and is right-aligned.
- [UITableViewCellStyleValue2](cellstyle/value2.md): A style for a cell with a label on the left side of the cell with text that’s right-aligned and blue; on the right side of the cell is another label with smaller text that’s left-aligned and black.
- [UITableViewCellStyleSubtitle](cellstyle/subtitle.md): A style for a cell with a left-aligned label across the top and a left-aligned label below it in smaller gray text.

## See Also

### Creating a table view cell

- [initWithStyle:reuseIdentifier:](init%28style_reuseidentifier_%29.md): Initializes a table cell with a style and a reuse identifier and returns it to the caller.
- [initWithCoder:](init%28coder_%29.md): Creates a table view from data in an unarchiver.
