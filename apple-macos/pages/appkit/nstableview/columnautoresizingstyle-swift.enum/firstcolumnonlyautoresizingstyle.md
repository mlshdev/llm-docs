> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/columnautoresizingstyle-swift.enum/firstcolumnonlyautoresizingstyle](https://developer.apple.com/documentation/appkit/nstableview/columnautoresizingstyle-swift.enum/firstcolumnonlyautoresizingstyle)

# NSTableView.ColumnAutoresizingStyle.firstColumnOnlyAutoresizingStyle (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Autoresize only the first table column.

## Declaration

```swift
case firstColumnOnlyAutoresizingStyle
```

<a id="Discussion"></a>

## Discussion

When that table column can no longer be resized, stop autoresizing.  Normally you should use one of the sequential autoresizing modes instead.

## See Also

### Constants

- [NSTableView.ColumnAutoresizingStyle.noColumnAutoresizing](nocolumnautoresizing.md): Disable table column autoresizing.
- [NSTableView.ColumnAutoresizingStyle.uniformColumnAutoresizingStyle](uniformcolumnautoresizingstyle.md): Autoresize all columns by distributing space equally, simultaneously.
- [NSTableView.ColumnAutoresizingStyle.sequentialColumnAutoresizingStyle](sequentialcolumnautoresizingstyle.md): Autoresize each table column sequentially, from the last auto-resizable column to the first auto-resizable column; proceed to the next column when the current column has reached its minimum or maximum size.
- [NSTableView.ColumnAutoresizingStyle.reverseSequentialColumnAutoresizingStyle](reversesequentialcolumnautoresizingstyle.md): Autoresize each table column sequentially, from the first auto-resizable column to the last auto-resizable column; proceed to the next column when the current column has reached its minimum or maximum size.
- [NSTableView.ColumnAutoresizingStyle.lastColumnOnlyAutoresizingStyle](lastcolumnonlyautoresizingstyle.md): Autoresize only the last table column.

# NSTableViewFirstColumnOnlyAutoresizingStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Autoresize only the first table column.

## Declaration

```objectivec
NSTableViewFirstColumnOnlyAutoresizingStyle
```

<a id="Discussion"></a>

## Discussion

When that table column can no longer be resized, stop autoresizing.  Normally you should use one of the sequential autoresizing modes instead.

## See Also

### Constants

- [NSTableViewNoColumnAutoresizing](nocolumnautoresizing.md): Disable table column autoresizing.
- [NSTableViewUniformColumnAutoresizingStyle](uniformcolumnautoresizingstyle.md): Autoresize all columns by distributing space equally, simultaneously.
- [NSTableViewSequentialColumnAutoresizingStyle](sequentialcolumnautoresizingstyle.md): Autoresize each table column sequentially, from the last auto-resizable column to the first auto-resizable column; proceed to the next column when the current column has reached its minimum or maximum size.
- [NSTableViewReverseSequentialColumnAutoresizingStyle](reversesequentialcolumnautoresizingstyle.md): Autoresize each table column sequentially, from the first auto-resizable column to the last auto-resizable column; proceed to the next column when the current column has reached its minimum or maximum size.
- [NSTableViewLastColumnOnlyAutoresizingStyle](lastcolumnonlyautoresizingstyle.md): Autoresize only the last table column.
