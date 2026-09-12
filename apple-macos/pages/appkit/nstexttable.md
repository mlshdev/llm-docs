> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttable](https://developer.apple.com/documentation/appkit/nstexttable)

# NSTextTable (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

An object that represents a text table as a whole.

## Declaration

```swift
class NSTextTable
```

<a id="overview"></a>

## Overview

A text table is responsible for laying out and drawing the text table blocks it contains, and it maintains the basic parameters of the table.

## Topics

### Getting and setting number of columns

- [numberOfColumns](nstexttable/numberofcolumns.md): The number of columns in the text table.

### Getting and setting layout algorithm

- [layoutAlgorithm](nstexttable/layoutalgorithm-swift.property.md): The text table layout algorithm.

### Collapsing borders

- [collapsesBorders](nstexttable/collapsesborders.md): A Boolean value indicating whether the text table borders are collapsible.

### Hiding empty cells

- [hidesEmptyCells](nstexttable/hidesemptycells.md): A Boolean value indicating whether the text table hides empty cells.

### Determining layout rectangles

- [rect(for:layoutAt:in:textContainer:characterRange:)](nstexttable/rect%28for_layoutat_in_textcontainer_characterrange_%29.md): Returns the rectangle within which glyphs should be laid out for a text table block.
- [boundsRect(for:contentRect:in:textContainer:characterRange:)](nstexttable/boundsrect%28for_contentrect_in_textcontainer_characterrange_%29.md): Returns the rectangle the text table block actually occupies, including padding, borders, and margins.

### Drawing the table

- [drawBackground(for:withFrame:in:characterRange:layoutManager:)](nstexttable/drawbackground%28for_withframe_in_characterrange_layoutmanager_%29.md): Draws any colors and other decorations for a text table block.

### Constants

- [NSTextTable.LayoutAlgorithm](nstexttable/layoutalgorithm-swift.enum.md): These constants, specifying the type of text table layout algorithm, are used with [layoutAlgorithm](nstexttable/layoutalgorithm-swift.property.md).

## Relationships

### Inherits From

- [NSTextBlock](nstextblock.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tables

- [NSTextTableBlock](nstexttableblock.md): A text block that appears as a cell in a text table.
- [NSTextBlock](nstextblock.md): A block of text laid out in a subregion of the text container.

# NSTextTable (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

An object that represents a text table as a whole.

## Declaration

```objectivec
@interface NSTextTable : NSTextBlock
```

<a id="overview"></a>

## Overview

A text table is responsible for laying out and drawing the text table blocks it contains, and it maintains the basic parameters of the table.

## Topics

### Getting and setting number of columns

- [numberOfColumns](nstexttable/numberofcolumns.md): The number of columns in the text table.

### Getting and setting layout algorithm

- [layoutAlgorithm](nstexttable/layoutalgorithm-swift.property.md): The text table layout algorithm.

### Collapsing borders

- [collapsesBorders](nstexttable/collapsesborders.md): A Boolean value indicating whether the text table borders are collapsible.

### Hiding empty cells

- [hidesEmptyCells](nstexttable/hidesemptycells.md): A Boolean value indicating whether the text table hides empty cells.

### Determining layout rectangles

- [rectForBlock:layoutAtPoint:inRect:textContainer:characterRange:](nstexttable/rect%28for_layoutat_in_textcontainer_characterrange_%29.md): Returns the rectangle within which glyphs should be laid out for a text table block.
- [boundsRectForBlock:contentRect:inRect:textContainer:characterRange:](nstexttable/boundsrect%28for_contentrect_in_textcontainer_characterrange_%29.md): Returns the rectangle the text table block actually occupies, including padding, borders, and margins.

### Drawing the table

- [drawBackgroundForBlock:withFrame:inView:characterRange:layoutManager:](nstexttable/drawbackground%28for_withframe_in_characterrange_layoutmanager_%29.md): Draws any colors and other decorations for a text table block.

### Constants

- [NSTextTableLayoutAlgorithm](nstexttable/layoutalgorithm-swift.enum.md): These constants, specifying the type of text table layout algorithm, are used with [layoutAlgorithm](nstexttable/layoutalgorithm-swift.property.md).

## Relationships

### Inherits From

- [NSTextBlock](nstextblock.md)

## See Also

### Tables

- [NSTextTableBlock](nstexttableblock.md): A text block that appears as a cell in a text table.
- [NSTextBlock](nstextblock.md): A block of text laid out in a subregion of the text container.
