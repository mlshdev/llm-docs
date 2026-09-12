> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/selection](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/selection)

# selection

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The current selected elements on the canvas.

## Declaration

```swift
@MainActor @preconcurrency var selection: Set<MarkupOrderedSet.ElementID> { get set }
```

## See Also

### Selecting elements

- [selectedMarkup](selectedmarkup.md): The selected contents in the UI.
- [suggestedFrameForInserting(contentInFrame:)](suggestedframeforinserting%28contentinframe_%29.md): Returns the suggested frame for inserting shapes and other content.
