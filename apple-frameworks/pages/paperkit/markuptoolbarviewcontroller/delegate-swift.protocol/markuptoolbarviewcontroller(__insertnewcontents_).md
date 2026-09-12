> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuptoolbarviewcontroller/delegate-swift.protocol/markuptoolbarviewcontroller(_:insertnewcontents:)](https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller/delegate-swift.protocol/markuptoolbarviewcontroller(_:insertnewcontents:))

# markupToolbarViewController(\_:insertNewContents:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Add new content on top of the paper.

## Declaration

```swift
func markupToolbarViewController(_ markupToolbarViewController: MarkupToolbarViewController, insertNewContents toInsert: PaperMarkup)
```

## Parameters

- `markupToolbarViewController`: The source of the action.
- `toInsert`: The markup whose contents is added on top of this paper.

<a id="discussion"></a>

## Discussion

This is used for inserting any custom content, and non-shape elements like signatures or loupes.

## See Also

### Inserting content

- [markupToolbarViewController(\_:insertNewShape:)](markuptoolbarviewcontroller%28__insertnewshape_%29.md): Add a new shape on top of the paper.
- [markupToolbarViewControllerInsertNewTextbox(\_:)](markuptoolbarviewcontrollerinsertnewtextbox%28__%29.md): Add a new textbox on top of the paper.
- [markupToolbarViewController(\_:insertNewLineWithStartMarker:endMarker:)](markuptoolbarviewcontroller%28__insertnewlinewithstartmarker_endmarker_%29.md): Add a new line on top of the paper.
