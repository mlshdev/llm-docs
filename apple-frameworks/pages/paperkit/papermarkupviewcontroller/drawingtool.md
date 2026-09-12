> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/drawingtool](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/drawingtool)

# drawingTool

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The tool for drawing on the canvas.

## Declaration

```swift
@MainActor @preconcurrency var drawingTool: any PKTool { get set }
```

<a id="discussion"></a>

## Discussion

When a touch is a drawing interaction, the canvas uses this tool to draw.

Default is `PKInkingTool(.pen)`.

## See Also

### Editing markup

- [isEditable](iseditable.md): A Boolean value that indicates whether a person can edit the canvas contents.
- [isRulerActive](isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
