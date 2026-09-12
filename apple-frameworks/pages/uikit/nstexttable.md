> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstexttable](https://developer.apple.com/documentation/uikit/nstexttable)

# NSTextTable (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a table of rows and columns in an attributed string.

## Declaration

```swift
class NSTextTable
```

## Mentioned In

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md)

<a id="overview"></a>

## Overview

`NSTextTable` is a subclass of [NSTextBlock](nstextblock.md) that represents a complete table. You can configure the number of columns, whether adjacent cell borders collapse into one, and whether empty cells are hidden.

Each cell is an [NSTextTableBlock](nstexttableblock.md) that specifies its row, column, and span within the table. You don’t add cells directly to the table — instead, you apply each cell’s block to a paragraph using [textBlocks](nsparagraphstyle/textblocks.md).

Choose between two layout algorithms using the [layoutAlgorithm](nstexttable/layoutalgorithm-swift.property.md) property:

- [NSTextTable.LayoutAlgorithm.automatic](nstexttable/layoutalgorithm-swift.enum/automatic.md) distributes column widths based on content, similar to the HTML `auto` table layout.
- [NSTextTable.LayoutAlgorithm.fixed](nstexttable/layoutalgorithm-swift.enum/fixed.md) distributes column widths based on explicit values set on the first row of cells, similar to the HTML `fixed` table layout.

## Topics

### Configuring the table

- [numberOfColumns](nstexttable/numberofcolumns.md)
- [layoutAlgorithm](nstexttable/layoutalgorithm-swift.property.md)
- [collapsesBorders](nstexttable/collapsesborders.md)
- [hidesEmptyCells](nstexttable/hidesemptycells.md)
- [NSTextTable.LayoutAlgorithm](nstexttable/layoutalgorithm-swift.enum.md)

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
- [NSTextTableBlock](nstexttableblock.md): A text block that represents a single cell in a text table.
- [NSTextBlock](nstextblock.md): An object that defines the size, spacing, and appearance of a block of text in an attributed string.

# NSTextTable (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a table of rows and columns in an attributed string.

## Declaration

```objectivec
@interface NSTextTable : NSTextBlock
```

## Mentioned In

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md)

<a id="overview"></a>

## Overview

`NSTextTable` is a subclass of [NSTextBlock](nstextblock.md) that represents a complete table. You can configure the number of columns, whether adjacent cell borders collapse into one, and whether empty cells are hidden.

Each cell is an [NSTextTableBlock](nstexttableblock.md) that specifies its row, column, and span within the table. You don’t add cells directly to the table — instead, you apply each cell’s block to a paragraph using [textBlocks](nsparagraphstyle/textblocks.md).

Choose between two layout algorithms using the [layoutAlgorithm](nstexttable/layoutalgorithm-swift.property.md) property:

- [NSTextTableLayoutAlgorithmAutomatic](nstexttable/layoutalgorithm-swift.enum/automatic.md) distributes column widths based on content, similar to the HTML `auto` table layout.
- [NSTextTableLayoutAlgorithmFixed](nstexttable/layoutalgorithm-swift.enum/fixed.md) distributes column widths based on explicit values set on the first row of cells, similar to the HTML `fixed` table layout.

## Topics

### Configuring the table

- [numberOfColumns](nstexttable/numberofcolumns.md)
- [layoutAlgorithm](nstexttable/layoutalgorithm-swift.property.md)
- [collapsesBorders](nstexttable/collapsesborders.md)
- [hidesEmptyCells](nstexttable/hidesemptycells.md)
- [NSTextTableLayoutAlgorithm](nstexttable/layoutalgorithm-swift.enum.md)

## Relationships

### Inherits From

- [NSTextBlock](nstextblock.md)

## See Also

### Tables

- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md): Create and configure tables in attributed strings and display them in a text view.
- [NSTextTableBlock](nstexttableblock.md): A text block that represents a single cell in a text table.
- [NSTextBlock](nstextblock.md): An object that defines the size, spacing, and appearance of a block of text in an attributed string.
