> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/suggestedframeforinserting(contentinframe:)](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/suggestedframeforinserting(contentinframe:))

# suggestedFrameForInserting(contentInFrame:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Returns the suggested frame for inserting shapes and other content.

## Declaration

```swift
@MainActor @preconcurrency func suggestedFrameForInserting(contentInFrame frame: CGRect) -> CGRect
```

## Parameters

- `frame`: The frame of the content you want to insert.

<a id="return-value"></a>

## Return Value

The suggested frame for the content. Use this value to transform a `PaperMarkup` before inserting it.

<a id="discussion"></a>

## Discussion

```swift
var shapeFrame = CGRect(x: 100, y: 100, width: 300, height: 300)
// Get the default frame for inserting, and insert the shape there.
let suggestedFrame = paperViewController.suggestedFrameForInserting(contentInFrame: shapeFrame)
paperViewController.markup.insertNewShape(configuration: shapeConfiguration, frame: suggestedFrame)
```

## See Also

### Selecting elements

- [selection](selection.md): The current selected elements on the canvas.
- [selectedMarkup](selectedmarkup.md): The selected contents in the UI.
