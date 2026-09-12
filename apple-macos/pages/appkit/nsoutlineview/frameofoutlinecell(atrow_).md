> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/frameofoutlinecell(atrow:)](https://developer.apple.com/documentation/appkit/nsoutlineview/frameofoutlinecell(atrow:))

# frameOfOutlineCell(atRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the frame of the outline cell for a given row.

## Declaration

```swift
func frameOfOutlineCell(atRow row: Int) -> NSRect
```

## Parameters

- `row`: The index of the row for which to return the frame.

<a id="return-value"></a>

## Return Value

The frame of the outline cell for the row at index `row`, considering the current indentation and the value in the [indentationMarkerFollowsCell](indentationmarkerfollowscell.md) property. If the row at index `row` is not an expandable row, returns `NSZeroRect`.

<a id="Discussion"></a>

## Discussion

You can override this method in a subclass to return a custom frame for the outline button cell. If your override returns an empty rect, no outline cell is drawn for that row. You might do that, for example, so that the disclosure triangle will not be shown for a row that should never be expanded.

# frameOfOutlineCellAtRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the frame of the outline cell for a given row.

## Declaration

```objectivec
- (NSRect) frameOfOutlineCellAtRow:(NSInteger) row;
```

## Parameters

- `row`: The index of the row for which to return the frame.

<a id="return-value"></a>

## Return Value

The frame of the outline cell for the row at index `row`, considering the current indentation and the value in the [indentationMarkerFollowsCell](indentationmarkerfollowscell.md) property. If the row at index `row` is not an expandable row, returns `NSZeroRect`.

<a id="Discussion"></a>

## Discussion

You can override this method in a subclass to return a custom frame for the outline button cell. If your override returns an empty rect, no outline cell is drawn for that row. You might do that, for example, so that the disclosure triangle will not be shown for a row that should never be expanded.
