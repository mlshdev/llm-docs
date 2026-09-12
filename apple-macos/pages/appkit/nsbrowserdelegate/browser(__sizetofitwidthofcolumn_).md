> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:sizetofitwidthofcolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:sizetofitwidthofcolumn:))

# browser(\_:sizeToFitWidthOfColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the ideal width for a column.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, sizeToFitWidthOfColumn columnIndex: Int) -> CGFloat
```

## Parameters

- `browser`: The browser.
- `columnIndex`: The index of the column to size. If `-1`, the result is used to resize all columns.

<a id="return-value"></a>

## Return Value

The ideal width of the column. This method is used when performing a “right-size” operation, that is, when sizing a column to the smallest width that contains all the content without clipping or truncating.

<a id="discussion"></a>

## Discussion

If `columnIndex` is `–1`, you should return a size that can be uniformly applied to all columns (that is, every column will be set to this size).

Returning a value of `-1` allows you to opt-out of providing a width for the requested column.

<a id="Discussion"></a>

## Discussion

This method applies only to browsers with resize type [NSBrowser.ColumnResizingType.userColumnResizing](../nsbrowser/columnresizingtype-swift.enum/usercolumnresizing.md).

It is assumed that the implementation may be expensive, so it will be called only when necessary.

## See Also

### Sizing

- [browser(\_:shouldSizeColumn:forUserResize:toWidth:)](browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.
- [browserColumnConfigurationDidChange(\_:)](browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.
- [browser(\_:heightOfRow:inColumn:)](browser%28__heightofrow_incolumn_%29.md): Specifies the height of the specified row in the specified column.

# browser:sizeToFitWidthOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the ideal width for a column.

## Declaration

```objectivec
- (CGFloat) browser:(NSBrowser *) browser sizeToFitWidthOfColumn:(NSInteger) columnIndex;
```

## Parameters

- `browser`: The browser.
- `columnIndex`: The index of the column to size. If `-1`, the result is used to resize all columns.

<a id="return-value"></a>

## Return Value

The ideal width of the column. This method is used when performing a “right-size” operation, that is, when sizing a column to the smallest width that contains all the content without clipping or truncating.

<a id="discussion"></a>

## Discussion

If `columnIndex` is `–1`, you should return a size that can be uniformly applied to all columns (that is, every column will be set to this size).

Returning a value of `-1` allows you to opt-out of providing a width for the requested column.

<a id="Discussion"></a>

## Discussion

This method applies only to browsers with resize type [NSBrowserUserColumnResizing](../nsbrowser/columnresizingtype-swift.enum/usercolumnresizing.md).

It is assumed that the implementation may be expensive, so it will be called only when necessary.

## See Also

### Sizing

- [browser:shouldSizeColumn:forUserResize:toWidth:](browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.
- [browserColumnConfigurationDidChange:](browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.
- [browser:heightOfRow:inColumn:](browser%28__heightofrow_incolumn_%29.md): Specifies the height of the specified row in the specified column.
