> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/columnautoresizingstyle-swift.enum/lastcolumnonlyautoresizingstyle](https://developer.apple.com/documentation/appkit/nstableview/columnautoresizingstyle-swift.enum/lastcolumnonlyautoresizingstyle)

# NSTableView.ColumnAutoresizingStyle.lastColumnOnlyAutoresizingStyle (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Autoresize only the last table column.

## Declaration

```swift
case lastColumnOnlyAutoresizingStyle
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
- [NSTableView.ColumnAutoresizingStyle.firstColumnOnlyAutoresizingStyle](firstcolumnonlyautoresizingstyle.md): Autoresize only the first table column.

# NSTableViewLastColumnOnlyAutoresizingStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Autoresize only the last table column.

## Declaration

```objectivec
NSTableViewLastColumnOnlyAutoresizingStyle
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
- [NSTableViewFirstColumnOnlyAutoresizingStyle](firstcolumnonlyautoresizingstyle.md): Autoresize only the first table column.
