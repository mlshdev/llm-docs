> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/iseditable](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/iseditable)

# isEditable

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether a person can edit the canvas contents.

## Declaration

```swift
@MainActor @preconcurrency var isEditable: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This property controls whether a person can edit content. The default value is `true`. Coordinate this property with your `MarkupEditViewController` or `MarkupToolbarViewController` to prevent people from adding new canvas elements.

## See Also

### Editing markup

- [drawingTool](drawingtool.md): The tool for drawing on the canvas.
- [isRulerActive](isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.
