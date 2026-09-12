> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttableblock/init(table:startingrow:rowspan:startingcolumn:columnspan:)](https://developer.apple.com/documentation/appkit/nstexttableblock/init(table:startingrow:rowspan:startingcolumn:columnspan:))

# init(table:startingRow:rowSpan:startingColumn:columnSpan:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Returns an initialized text table block.

## Declaration

```swift
init(table: NSTextTable, startingRow row: Int, rowSpan: Int, startingColumn column: Int, columnSpan: Int)
```

## Parameters

- `table`: The text table containing this text table block.
- `row`: The table row at which the text table block starts.
- `rowSpan`: How many rows the text table block covers.
- `column`: The table column at which the text table block starts.
- `columnSpan`: How many columns the text table block covers.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Related Documentation

- [NSTextTable](../nstexttable.md): An object that represents a text table as a whole.

# initWithTable:startingRow:rowSpan:startingColumn:columnSpan: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns an initialized text table block.

## Declaration

```objectivec
- (instancetype) initWithTable:(NSTextTable *) table startingRow:(NSInteger) row rowSpan:(NSInteger) rowSpan startingColumn:(NSInteger) column columnSpan:(NSInteger) columnSpan;
```

## Parameters

- `table`: The text table containing this text table block.
- `row`: The table row at which the text table block starts.
- `rowSpan`: How many rows the text table block covers.
- `column`: The table column at which the text table block starts.
- `columnSpan`: How many columns the text table block covers.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Related Documentation

- [NSTextTable](../nstexttable.md): An object that represents a text table as a whole.
