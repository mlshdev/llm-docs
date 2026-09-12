> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/indentationmarkerfollowscell](https://developer.apple.com/documentation/appkit/nsoutlineview/indentationmarkerfollowscell)

# indentationMarkerFollowsCell (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the indentation marker symbol displayed in the outline column should be indented along with the cell contents.

## Declaration

```swift
var indentationMarkerFollowsCell: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the indentation marker is indented along with the cell contents. When the value is [false](https://developer.apple.com/documentation/swift/false), the marker is always displayed left-justified in the column. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Working with Indentation

- [level(forItem:)](level%28foritem_%29.md): Returns the indentation level for a given item.
- [level(forRow:)](level%28forrow_%29.md): Returns the indentation level for a given row.
- [indentationPerLevel](indentationperlevel.md): The per-level indentation, measured in points.

# indentationMarkerFollowsCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the indentation marker symbol displayed in the outline column should be indented along with the cell contents.

## Declaration

```objectivec
@property BOOL indentationMarkerFollowsCell;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the indentation marker is indented along with the cell contents. When the value is [false](https://developer.apple.com/documentation/swift/false), the marker is always displayed left-justified in the column. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Working with Indentation

- [levelForItem:](level%28foritem_%29.md): Returns the indentation level for a given item.
- [levelForRow:](level%28forrow_%29.md): Returns the indentation level for a given row.
- [indentationPerLevel](indentationperlevel.md): The per-level indentation, measured in points.
