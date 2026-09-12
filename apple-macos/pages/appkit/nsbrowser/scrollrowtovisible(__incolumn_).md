> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/scrollrowtovisible(_:incolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/scrollrowtovisible(_:incolumn:))

# scrollRowToVisible(\_:inColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Scrolls the specified row to be visible within the specified column.

## Declaration

```swift
func scrollRowToVisible(_ row: Int, inColumn column: Int)
```

## Parameters

- `row`: The index of the row to scroll.
- `column`: The index of the column containing the row to scroll.

<a id="Discussion"></a>

## Discussion

The row’s column will not be scrolled to visible via this method. To scroll the column to visible, use [scrollColumnToVisible(\_:)](scrollcolumntovisible%28__%29.md).

## See Also

### Scrolling

- [hasHorizontalScroller](hashorizontalscroller.md): A Boolean that indicates whether the browser has a horizontal scroller.
- [scrollColumnToVisible(\_:)](scrollcolumntovisible%28__%29.md): Scrolls to make the specified column visible.
- [scrollColumnsLeft(by:)](scrollcolumnsleft%28by_%29.md): Scrolls columns left by the specified number of columns.
- [scrollColumnsRight(by:)](scrollcolumnsright%28by_%29.md): Scrolls columns right by the specified number of columns.

# scrollRowToVisible:inColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Scrolls the specified row to be visible within the specified column.

## Declaration

```objectivec
- (void) scrollRowToVisible:(NSInteger) row inColumn:(NSInteger) column;
```

## Parameters

- `row`: The index of the row to scroll.
- `column`: The index of the column containing the row to scroll.

<a id="Discussion"></a>

## Discussion

The row’s column will not be scrolled to visible via this method. To scroll the column to visible, use [scrollColumnToVisible:](scrollcolumntovisible%28__%29.md).

## See Also

### Scrolling

- [hasHorizontalScroller](hashorizontalscroller.md): A Boolean that indicates whether the browser has a horizontal scroller.
- [scrollColumnToVisible:](scrollcolumntovisible%28__%29.md): Scrolls to make the specified column visible.
- [scrollColumnsLeftBy:](scrollcolumnsleft%28by_%29.md): Scrolls columns left by the specified number of columns.
- [scrollColumnsRightBy:](scrollcolumnsright%28by_%29.md): Scrolls columns right by the specified number of columns.
