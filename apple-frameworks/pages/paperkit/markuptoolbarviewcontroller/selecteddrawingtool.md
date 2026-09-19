> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller/selecteddrawingtool

# selectedDrawingTool

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

The currently selected drawing tool.

## Declaration

```swift
@MainActor @preconcurrency var selectedDrawingTool: any PKTool { get set }
```

<a id="discussion"></a>

## Discussion

Default is `PKInkingTool(.monoline)`. Setting this property to a color-bearing tool while `activeInkColor` is non-nil overrides the new tool’s color with the cached value, preserving the user’s most-recent color pick across programmatic tool changes.

## See Also

### Managing drawing tools

- [selectedDrawingToolItem](selecteddrawingtoolitem.md): The currently selected drawing tool.
