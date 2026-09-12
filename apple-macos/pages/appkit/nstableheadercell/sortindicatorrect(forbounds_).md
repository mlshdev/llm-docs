> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableheadercell/sortindicatorrect(forbounds:)](https://developer.apple.com/documentation/appkit/nstableheadercell/sortindicatorrect(forbounds:))

# sortIndicatorRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the location to display the sorting indicator given `theRect`.

## Declaration

```swift
func sortIndicatorRect(forBounds rect: NSRect) -> NSRect
```

## Parameters

- `rect`: A cell rectangle.

<a id="return-value"></a>

## Return Value

The rectangle within `theRect` that should contain the sorting indicator.

## See Also

### Drawing Sorting Indicators

- [drawSortIndicator(withFrame:in:ascending:priority:)](drawsortindicator%28withframe_in_ascending_priority_%29.md): Draws a sorting indicator given a cell frame contained inside a view.

# sortIndicatorRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the location to display the sorting indicator given `theRect`.

## Declaration

```objectivec
- (NSRect) sortIndicatorRectForBounds:(NSRect) rect;
```

## Parameters

- `rect`: A cell rectangle.

<a id="return-value"></a>

## Return Value

The rectangle within `theRect` that should contain the sorting indicator.

## See Also

### Drawing Sorting Indicators

- [drawSortIndicatorWithFrame:inView:ascending:priority:](drawsortindicator%28withframe_in_ascending_priority_%29.md): Draws a sorting indicator given a cell frame contained inside a view.
