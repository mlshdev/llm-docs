> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/autoresizesoutlinecolumn](https://developer.apple.com/documentation/appkit/nsoutlineview/autoresizesoutlinecolumn)

# autoresizesOutlineColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the outline view resizes its outline column when the user expands or collapses items.

## Declaration

```swift
var autoresizesOutlineColumn: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The outline column contains the cells with the expansion symbols and is generally the first column. The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the outline column to be resized.

The outline column is resized based on how many indentation levels are exposed or hidden. For example, if expanding a row exposes a single indentation level, the outline column width is increased by one [indentationPerLevel](indentationperlevel.md).

## See Also

### Working with the Outline Column

- [outlineTableColumn](outlinetablecolumn.md): The table column in which hierarchical data is displayed.

# autoresizesOutlineColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the outline view resizes its outline column when the user expands or collapses items.

## Declaration

```objectivec
@property BOOL autoresizesOutlineColumn;
```

<a id="Discussion"></a>

## Discussion

The outline column contains the cells with the expansion symbols and is generally the first column. The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the outline column to be resized.

The outline column is resized based on how many indentation levels are exposed or hidden. For example, if expanding a row exposes a single indentation level, the outline column width is increased by one [indentationPerLevel](indentationperlevel.md).

## See Also

### Working with the Outline Column

- [outlineTableColumn](outlinetablecolumn.md): The table column in which hierarchical data is displayed.
