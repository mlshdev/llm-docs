> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupeditviewcontroller/delegate-swift.protocol/markupeditviewcontroller(_:insertnewlinewithstartmarker:endmarker:)](https://developer.apple.com/documentation/paperkit/markupeditviewcontroller/delegate-swift.protocol/markupeditviewcontroller(_:insertnewlinewithstartmarker:endmarker:))

# markupEditViewController(\_:insertNewLineWithStartMarker:endMarker:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Add a new line on top of the paper.

## Declaration

```swift
func markupEditViewController(_ markupEditViewController: MarkupEditViewController, insertNewLineWithStartMarker lineStartMarker: Bool, endMarker lineEndMarker: Bool)
```

## Parameters

- `markupEditViewController`: The source of the action.
- `lineStartMarker`: True if the start of the line has a marker / arrow.
- `lineEndMarker`: True if the end of the line has a marker / arrow.

## See Also

### Inserting content

- [markupEditViewController(\_:insertNewShape:)](markupeditviewcontroller%28__insertnewshape_%29.md): Add a new shape on top of the paper.
- [markupEditViewControllerInsertNewTextbox(\_:)](markupeditviewcontrollerinsertnewtextbox%28__%29.md): Add a new textbox on top of the paper.
- [markupEditViewController(\_:insertNewContents:)](markupeditviewcontroller%28__insertnewcontents_%29.md): Add new content on top of the paper.
