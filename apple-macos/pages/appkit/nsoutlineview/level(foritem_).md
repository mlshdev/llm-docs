> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/level(foritem:)](https://developer.apple.com/documentation/appkit/nsoutlineview/level(foritem:))

# level(forItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the indentation level for a given item.

## Declaration

```swift
func level(forItem item: Any?) -> Int
```

## Parameters

- `item`: An item in the receiver.

<a id="return-value"></a>

## Return Value

The indentation level for `item`. If `item` is `nil` (which is the root item), returns `–1`.

<a id="Discussion"></a>

## Discussion

The levels are zero-based—that is, the first level of displayed items is level `0`.

## See Also

### Working with Indentation

- [level(forRow:)](level%28forrow_%29.md): Returns the indentation level for a given row.
- [indentationPerLevel](indentationperlevel.md): The per-level indentation, measured in points.
- [indentationMarkerFollowsCell](indentationmarkerfollowscell.md): A Boolean value indicating whether the indentation marker symbol displayed in the outline column should be indented along with the cell contents.

# levelForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the indentation level for a given item.

## Declaration

```objectivec
- (NSInteger) levelForItem:(id) item;
```

## Parameters

- `item`: An item in the receiver.

<a id="return-value"></a>

## Return Value

The indentation level for `item`. If `item` is `nil` (which is the root item), returns `–1`.

<a id="Discussion"></a>

## Discussion

The levels are zero-based—that is, the first level of displayed items is level `0`.

## See Also

### Working with Indentation

- [levelForRow:](level%28forrow_%29.md): Returns the indentation level for a given row.
- [indentationPerLevel](indentationperlevel.md): The per-level indentation, measured in points.
- [indentationMarkerFollowsCell](indentationmarkerfollowscell.md): A Boolean value indicating whether the indentation marker symbol displayed in the outline column should be indented along with the cell contents.
