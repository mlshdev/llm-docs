> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:shouldsizecolumn:foruserresize:towidth:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:shouldsizecolumn:foruserresize:towidth:))

# browser(\_:shouldSizeColumn:forUserResize:toWidth:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Used to determine a column’s initial size.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, shouldSizeColumn columnIndex: Int, forUserResize: Bool, toWidth suggestedWidth: CGFloat) -> CGFloat
```

## Parameters

- `browser`: The browser.
- `columnIndex`: The index of the column to size.
- `forUserResize`: Currently, this is always set to [false](https://developer.apple.com/documentation/swift/false).
- `suggestedWidth`: The suggested width for the column.

<a id="return-value"></a>

## Return Value

The delegate’s desired initial width for a newly added column. If you want to accept the suggested width, return `suggestedWidth`. If you return `0` or a size too small to display the resize handle and a portion of the column, the actual size used will be larger than the size you requested.

<a id="Discussion"></a>

## Discussion

This method applies only to browsers with resize type [NSBrowser.ColumnResizingType.noColumnResizing](../nsbrowser/columnresizingtype-swift.enum/nocolumnresizing.md) or [NSBrowser.ColumnResizingType.userColumnResizing](../nsbrowser/columnresizingtype-swift.enum/usercolumnresizing.md) (see [NSBrowser.ColumnResizingType](../nsbrowser/columnresizingtype-swift.enum.md)).

## See Also

### Related Documentation

- [setWidth(\_:ofColumn:)](../nsbrowser/setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.

### Sizing

- [browser(\_:sizeToFitWidthOfColumn:)](browser%28__sizetofitwidthofcolumn_%29.md): Returns the ideal width for a column.
- [browserColumnConfigurationDidChange(\_:)](browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.
- [browser(\_:heightOfRow:inColumn:)](browser%28__heightofrow_incolumn_%29.md): Specifies the height of the specified row in the specified column.

# browser:shouldSizeColumn:forUserResize:toWidth: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Used to determine a column’s initial size.

## Declaration

```objectivec
- (CGFloat) browser:(NSBrowser *) browser shouldSizeColumn:(NSInteger) columnIndex forUserResize:(BOOL) forUserResize toWidth:(CGFloat) suggestedWidth;
```

## Parameters

- `browser`: The browser.
- `columnIndex`: The index of the column to size.
- `forUserResize`: Currently, this is always set to [false](https://developer.apple.com/documentation/swift/false).
- `suggestedWidth`: The suggested width for the column.

<a id="return-value"></a>

## Return Value

The delegate’s desired initial width for a newly added column. If you want to accept the suggested width, return `suggestedWidth`. If you return `0` or a size too small to display the resize handle and a portion of the column, the actual size used will be larger than the size you requested.

<a id="Discussion"></a>

## Discussion

This method applies only to browsers with resize type [NSBrowserNoColumnResizing](../nsbrowser/columnresizingtype-swift.enum/nocolumnresizing.md) or [NSBrowserUserColumnResizing](../nsbrowser/columnresizingtype-swift.enum/usercolumnresizing.md) (see [NSBrowserColumnResizingType](../nsbrowser/columnresizingtype-swift.enum.md)).

## See Also

### Related Documentation

- [setWidth:ofColumn:](../nsbrowser/setwidth%28__ofcolumn_%29.md): Sets the width of the specified column.

### Sizing

- [browser:sizeToFitWidthOfColumn:](browser%28__sizetofitwidthofcolumn_%29.md): Returns the ideal width for a column.
- [browserColumnConfigurationDidChange:](browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.
- [browser:heightOfRow:inColumn:](browser%28__heightofrow_incolumn_%29.md): Specifies the height of the specified row in the specified column.
