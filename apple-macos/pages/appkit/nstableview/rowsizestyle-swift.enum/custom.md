> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/rowsizestyle-swift.enum/custom](https://developer.apple.com/documentation/appkit/nstableview/rowsizestyle-swift.enum/custom)

# NSTableView.RowSizeStyle.custom (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.7+

The table will use the [rowHeight](../rowheight.md) or invoke the delegate method [tableView(\_:heightOfRow:)](../../nstableviewdelegate/tableview%28__heightofrow_%29.md), if implemented. The cell layout is not changed.

## Declaration

```swift
case custom
```

## See Also

### Constants

- [NSTableView.RowSizeStyle.default](default.md): The table will use the system default layout size: small, medium or large.
- [NSTableView.RowSizeStyle.small](small.md): The table will use a row height specified for a small table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.
- [NSTableView.RowSizeStyle.medium](medium.md): The table will use a row height specified for a medium table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.
- [NSTableView.RowSizeStyle.large](large.md): The table will use a row height specified for a large table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.

# NSTableViewRowSizeStyleCustom (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The table will use the [rowHeight](../rowheight.md) or invoke the delegate method [tableView:heightOfRow:](../../nstableviewdelegate/tableview%28__heightofrow_%29.md), if implemented. The cell layout is not changed.

## Declaration

```objectivec
NSTableViewRowSizeStyleCustom
```

## See Also

### Constants

- [NSTableViewRowSizeStyleDefault](default.md): The table will use the system default layout size: small, medium or large.
- [NSTableViewRowSizeStyleSmall](small.md): The table will use a row height specified for a small table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.
- [NSTableViewRowSizeStyleMedium](medium.md): The table will use a row height specified for a medium table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.
- [NSTableViewRowSizeStyleLarge](large.md): The table will use a row height specified for a large table. It is required that the size be fully tested and supported if `NSTableViewRowSizeStyleCustom` is not used.
