> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstexttableblock](https://developer.apple.com/documentation/uikit/nstexttableblock)

# NSTextTableBlock (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A text block that represents a single cell in a text table.

## Declaration

```swift
class NSTextTableBlock
```

## Mentioned In

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md)

<a id="overview"></a>

## Overview

`NSTextTableBlock` is a subclass of [NSTextBlock](nstextblock.md) that places a paragraph in a cell of an [NSTextTable](nstexttable.md). When you create an `NSTextTableBlock`, you specify the table it belongs to, the cell’s starting row and column, and how many rows and columns the cell spans.

To build a table, create an [NSTextTable](nstexttable.md), then create an `NSTextTableBlock` for each cell. Assign each block to a paragraph by setting [textBlocks](nsparagraphstyle/textblocks.md) on an [NSMutableParagraphStyle](nsmutableparagraphstyle.md) and applying that style to the paragraph’s range in your attributed string.

## Topics

### Creating a text table block

- [init(table:startingRow:rowSpan:startingColumn:columnSpan:)](nstexttableblock/init%28table_startingrow_rowspan_startingcolumn_columnspan_%29.md)
- [init(coder:)](nstexttableblock/init%28coder_%29.md)

### Accessing the parent table

- [table](nstexttableblock/table.md)

### Accessing cell position

- [startingRow](nstexttableblock/startingrow.md)
- [rowSpan](nstexttableblock/rowspan.md)
- [startingColumn](nstexttableblock/startingcolumn.md)
- [columnSpan](nstexttableblock/columnspan.md)

## Relationships

### Inherits From

- [NSTextBlock](nstextblock.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tables

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md): Create and configure tables in attributed strings and display them in a text view.
- [NSTextTable](nstexttable.md): An object that represents a table of rows and columns in an attributed string.
- [NSTextBlock](nstextblock.md): An object that defines the size, spacing, and appearance of a block of text in an attributed string.

# NSTextTableBlock (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A text block that represents a single cell in a text table.

## Declaration

```objectivec
@interface NSTextTableBlock : NSTextBlock
```

## Mentioned In

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md)

<a id="overview"></a>

## Overview

`NSTextTableBlock` is a subclass of [NSTextBlock](nstextblock.md) that places a paragraph in a cell of an [NSTextTable](nstexttable.md). When you create an `NSTextTableBlock`, you specify the table it belongs to, the cell’s starting row and column, and how many rows and columns the cell spans.

To build a table, create an [NSTextTable](nstexttable.md), then create an `NSTextTableBlock` for each cell. Assign each block to a paragraph by setting [textBlocks](nsparagraphstyle/textblocks.md) on an [NSMutableParagraphStyle](nsmutableparagraphstyle.md) and applying that style to the paragraph’s range in your attributed string.

## Topics

### Creating a text table block

- [initWithTable:startingRow:rowSpan:startingColumn:columnSpan:](nstexttableblock/init%28table_startingrow_rowspan_startingcolumn_columnspan_%29.md)
- [initWithCoder:](nstexttableblock/init%28coder_%29.md)

### Accessing the parent table

- [table](nstexttableblock/table.md)

### Accessing cell position

- [startingRow](nstexttableblock/startingrow.md)
- [rowSpan](nstexttableblock/rowspan.md)
- [startingColumn](nstexttableblock/startingcolumn.md)
- [columnSpan](nstexttableblock/columnspan.md)

## Relationships

### Inherits From

- [NSTextBlock](nstextblock.md)

## See Also

### Tables

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md): Create and configure tables in attributed strings and display them in a text view.
- [NSTextTable](nstexttable.md): An object that represents a table of rows and columns in an attributed string.
- [NSTextBlock](nstextblock.md): An object that defines the size, spacing, and appearance of a block of text in an attributed string.
