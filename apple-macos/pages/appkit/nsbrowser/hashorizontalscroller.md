> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/hashorizontalscroller](https://developer.apple.com/documentation/appkit/nsbrowser/hashorizontalscroller)

# hasHorizontalScroller (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the browser has a horizontal scroller.

## Declaration

```swift
var hasHorizontalScroller: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser uses an `NSScroller` object to scroll horizontally.

## See Also

### Scrolling

- [scrollColumnToVisible(\_:)](scrollcolumntovisible%28__%29.md): Scrolls to make the specified column visible.
- [scrollColumnsLeft(by:)](scrollcolumnsleft%28by_%29.md): Scrolls columns left by the specified number of columns.
- [scrollColumnsRight(by:)](scrollcolumnsright%28by_%29.md): Scrolls columns right by the specified number of columns.
- [scrollRowToVisible(\_:inColumn:)](scrollrowtovisible%28__incolumn_%29.md): Scrolls the specified row to be visible within the specified column.

# hasHorizontalScroller (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the browser has a horizontal scroller.

## Declaration

```objectivec
@property BOOL hasHorizontalScroller;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the browser uses an `NSScroller` object to scroll horizontally.

## See Also

### Scrolling

- [scrollColumnToVisible:](scrollcolumntovisible%28__%29.md): Scrolls to make the specified column visible.
- [scrollColumnsLeftBy:](scrollcolumnsleft%28by_%29.md): Scrolls columns left by the specified number of columns.
- [scrollColumnsRightBy:](scrollcolumnsright%28by_%29.md): Scrolls columns right by the specified number of columns.
- [scrollRowToVisible:inColumn:](scrollrowtovisible%28__incolumn_%29.md): Scrolls the specified row to be visible within the specified column.
