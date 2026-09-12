> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:heightofrow:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:heightofrow:incolumn:))

# browser(\_:heightOfRow:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Specifies the height of the specified row in the specified column.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, heightOfRow row: Int, inColumn columnIndex: Int) -> CGFloat
```

## Parameters

- `browser`: The browser.
- `row`: The index of the row.
- `columnIndex`: The index of the column.

<a id="return-value"></a>

## Return Value

The height to set for the specified row, which must be greater than 0.

<a id="Discussion"></a>

## Discussion

The values returned for this method may be cached. Therefore, you should call [noteHeightOfRowsWithIndexesChanged(\_:inColumn:)](../nsbrowser/noteheightofrowswithindexeschanged%28__incolumn_%29.md) to invalidate a row’s height before changing it.

## See Also

### Sizing

- [browser(\_:shouldSizeColumn:forUserResize:toWidth:)](browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.
- [browser(\_:sizeToFitWidthOfColumn:)](browser%28__sizetofitwidthofcolumn_%29.md): Returns the ideal width for a column.
- [browserColumnConfigurationDidChange(\_:)](browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.

# browser:heightOfRow:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Specifies the height of the specified row in the specified column.

## Declaration

```objectivec
- (CGFloat) browser:(NSBrowser *) browser heightOfRow:(NSInteger) row inColumn:(NSInteger) columnIndex;
```

## Parameters

- `browser`: The browser.
- `row`: The index of the row.
- `columnIndex`: The index of the column.

<a id="return-value"></a>

## Return Value

The height to set for the specified row, which must be greater than 0.

<a id="Discussion"></a>

## Discussion

The values returned for this method may be cached. Therefore, you should call [noteHeightOfRowsWithIndexesChanged:inColumn:](../nsbrowser/noteheightofrowswithindexeschanged%28__incolumn_%29.md) to invalidate a row’s height before changing it.

## See Also

### Sizing

- [browser:shouldSizeColumn:forUserResize:toWidth:](browser%28__shouldsizecolumn_foruserresize_towidth_%29.md): Used to determine a column’s initial size.
- [browser:sizeToFitWidthOfColumn:](browser%28__sizetofitwidthofcolumn_%29.md): Returns the ideal width for a column.
- [browserColumnConfigurationDidChange:](browsercolumnconfigurationdidchange%28__%29.md): Used by clients to implement their own column width persistence.
