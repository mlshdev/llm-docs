> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableheadercell/drawsortindicator(withframe:in:ascending:priority:)](https://developer.apple.com/documentation/appkit/nstableheadercell/drawsortindicator(withframe:in:ascending:priority:))

# drawSortIndicator(withFrame:in:ascending:priority:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws a sorting indicator given a cell frame contained inside a view.

## Declaration

```swift
func drawSortIndicator(withFrame cellFrame: NSRect, in controlView: NSView, ascending: Bool, priority: Int)
```

## Parameters

- `cellFrame`: The cell frame.
- `controlView`: The control view.
- `ascending`: If YES the sort indicator is drawn as ascending; otherwise it is drawn as descending.
- `priority`: If `priority` is 0, this is the primary sort indicator.

<a id="Discussion"></a>

## Discussion

Override this method to customize the sorting user interface.

## See Also

### Related Documentation

- [NSTableHeaderCell](../nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.

### Drawing Sorting Indicators

- [sortIndicatorRect(forBounds:)](sortindicatorrect%28forbounds_%29.md): Returns the location to display the sorting indicator given `theRect`.

# drawSortIndicatorWithFrame:inView:ascending:priority: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws a sorting indicator given a cell frame contained inside a view.

## Declaration

```objectivec
- (void) drawSortIndicatorWithFrame:(NSRect) cellFrame inView:(NSView *) controlView ascending:(BOOL) ascending priority:(NSInteger) priority;
```

## Parameters

- `cellFrame`: The cell frame.
- `controlView`: The control view.
- `ascending`: If YES the sort indicator is drawn as ascending; otherwise it is drawn as descending.
- `priority`: If `priority` is 0, this is the primary sort indicator.

<a id="Discussion"></a>

## Discussion

Override this method to customize the sorting user interface.

## See Also

### Related Documentation

- [NSTableHeaderCell](../nstableheadercell.md): An object that a table header view uses to draw the content of the column headers.

### Drawing Sorting Indicators

- [sortIndicatorRectForBounds:](sortindicatorrect%28forbounds_%29.md): Returns the location to display the sorting indicator given `theRect`.
