> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttableblock](https://developer.apple.com/documentation/appkit/nstexttableblock)

# NSTextTableBlock (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

A text block that appears as a cell in a text table.

## Declaration

```swift
class NSTextTableBlock
```

## Topics

### Creation

- [init(table:startingRow:rowSpan:startingColumn:columnSpan:)](nstexttableblock/init%28table_startingrow_rowspan_startingcolumn_columnspan_%29.md): Returns an initialized text table block.

### Getting the block’s enclosing table

- [table](nstexttableblock/table.md): Returns the table containing this text table block.

### Getting information about the block’s position in its enclosing table

- [startingRow](nstexttableblock/startingrow.md): Returns the table row at which this text table block starts.
- [rowSpan](nstexttableblock/rowspan.md): Returns the number of table rows spanned by this text table block.
- [startingColumn](nstexttableblock/startingcolumn.md): Returns the table column at which this text table block starts.
- [columnSpan](nstexttableblock/columnspan.md): Returns the number of table columns spanned by this text table block.

### Initializers

- [init(coder:)](nstexttableblock/init%28coder_%29.md)

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

- [NSTextTable](nstexttable.md): An object that represents a text table as a whole.
- [NSTextBlock](nstextblock.md): A block of text laid out in a subregion of the text container.

# NSTextTableBlock (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

A text block that appears as a cell in a text table.

## Declaration

```objectivec
@interface NSTextTableBlock : NSTextBlock
```

## Topics

### Creation

- [initWithTable:startingRow:rowSpan:startingColumn:columnSpan:](nstexttableblock/init%28table_startingrow_rowspan_startingcolumn_columnspan_%29.md): Returns an initialized text table block.

### Getting the block’s enclosing table

- [table](nstexttableblock/table.md): Returns the table containing this text table block.

### Getting information about the block’s position in its enclosing table

- [startingRow](nstexttableblock/startingrow.md): Returns the table row at which this text table block starts.
- [rowSpan](nstexttableblock/rowspan.md): Returns the number of table rows spanned by this text table block.
- [startingColumn](nstexttableblock/startingcolumn.md): Returns the table column at which this text table block starts.
- [columnSpan](nstexttableblock/columnspan.md): Returns the number of table columns spanned by this text table block.

### Instance Methods

- [initWithCoder:](nstexttableblock/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSTextBlock](nstextblock.md)

## See Also

### Tables

- [NSTextTable](nstexttable.md): An object that represents a text table as a whole.
- [NSTextBlock](nstextblock.md): A block of text laid out in a subregion of the text container.
