> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuptoolbarviewcontroller/delegate-swift.protocol/markuptoolbarviewcontroller(_:insertnewlinewithstartmarker:endmarker:)](https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller/delegate-swift.protocol/markuptoolbarviewcontroller(_:insertnewlinewithstartmarker:endmarker:))

# markupToolbarViewController(\_:insertNewLineWithStartMarker:endMarker:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Add a new line on top of the paper.

## Declaration

```swift
func markupToolbarViewController(_ markupToolbarViewController: MarkupToolbarViewController, insertNewLineWithStartMarker lineStartMarker: Bool, endMarker lineEndMarker: Bool)
```

## Parameters

- `markupToolbarViewController`: The source of the action.
- `lineStartMarker`: True if the start of the line has a marker / arrow.
- `lineEndMarker`: True if the end of the line has a marker / arrow.

## See Also

### Inserting content

- [markupToolbarViewController(\_:insertNewShape:)](markuptoolbarviewcontroller%28__insertnewshape_%29.md): Add a new shape on top of the paper.
- [markupToolbarViewControllerInsertNewTextbox(\_:)](markuptoolbarviewcontrollerinsertnewtextbox%28__%29.md): Add a new textbox on top of the paper.
- [markupToolbarViewController(\_:insertNewContents:)](markuptoolbarviewcontroller%28__insertnewcontents_%29.md): Add new content on top of the paper.
