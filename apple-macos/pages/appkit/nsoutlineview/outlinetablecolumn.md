> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/outlinetablecolumn](https://developer.apple.com/documentation/appkit/nsoutlineview/outlinetablecolumn)

# outlineTableColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column in which hierarchical data is displayed.

## Declaration

```swift
unowned(unsafe) var outlineTableColumn: NSTableColumn? { get set }
```

<a id="Discussion"></a>

## Discussion

Each level of hierarchical data is indented by the amount specified by the [indentationPerLevel](indentationperlevel.md) property (the default is `16.0`), and decorated with the indentation marker (disclosure triangle) on rows that are expandable. Outline table column data is archived with the rest of the outline view’s state information.

Attempts to set the value of this property to `nil` are silently ignored.

## See Also

### Working with the Outline Column

- [autoresizesOutlineColumn](autoresizesoutlinecolumn.md): A Boolean value that indicates whether the outline view resizes its outline column when the user expands or collapses items.

# outlineTableColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column in which hierarchical data is displayed.

## Declaration

```objectivec
@property (assign, nullable) NSTableColumn * outlineTableColumn;
```

<a id="Discussion"></a>

## Discussion

Each level of hierarchical data is indented by the amount specified by the [indentationPerLevel](indentationperlevel.md) property (the default is `16.0`), and decorated with the indentation marker (disclosure triangle) on rows that are expandable. Outline table column data is archived with the rest of the outline view’s state information.

Attempts to set the value of this property to `nil` are silently ignored.

## See Also

### Working with the Outline Column

- [autoresizesOutlineColumn](autoresizesoutlinecolumn.md): A Boolean value that indicates whether the outline view resizes its outline column when the user expands or collapses items.
