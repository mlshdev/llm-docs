> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/level(forrow:)](https://developer.apple.com/documentation/appkit/nsoutlineview/level(forrow:))

# level(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the indentation level for a given row.

## Declaration

```swift
func level(forRow row: Int) -> Int
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The indentation level for `row`. For an invalid row, returns `–1`.

<a id="Discussion"></a>

## Discussion

The levels are zero-based—that is, the first level of displayed items is level `0`.

## See Also

### Working with Indentation

- [level(forItem:)](level%28foritem_%29.md): Returns the indentation level for a given item.
- [indentationPerLevel](indentationperlevel.md): The per-level indentation, measured in points.
- [indentationMarkerFollowsCell](indentationmarkerfollowscell.md): A Boolean value indicating whether the indentation marker symbol displayed in the outline column should be indented along with the cell contents.

# levelForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the indentation level for a given row.

## Declaration

```objectivec
- (NSInteger) levelForRow:(NSInteger) row;
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The indentation level for `row`. For an invalid row, returns `–1`.

<a id="Discussion"></a>

## Discussion

The levels are zero-based—that is, the first level of displayed items is level `0`.

## See Also

### Working with Indentation

- [levelForItem:](level%28foritem_%29.md): Returns the indentation level for a given item.
- [indentationPerLevel](indentationperlevel.md): The per-level indentation, measured in points.
- [indentationMarkerFollowsCell](indentationmarkerfollowscell.md): A Boolean value indicating whether the indentation marker symbol displayed in the outline column should be indented along with the cell contents.
