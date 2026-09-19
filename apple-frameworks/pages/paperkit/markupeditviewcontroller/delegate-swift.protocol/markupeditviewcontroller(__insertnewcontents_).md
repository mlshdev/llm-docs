> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markupeditviewcontroller/delegate-swift.protocol/markupeditviewcontroller(_:insertnewcontents:)

# markupEditViewController(\_:insertNewContents:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Add new content on top of the paper.

## Declaration

```swift
func markupEditViewController(_ markupEditViewController: MarkupEditViewController, insertNewContents toInsert: PaperMarkup)
```

## Parameters

- `markupEditViewController`: The source of the action.
- `toInsert`: The markup whose contents is added on top of this paper.

<a id="discussion"></a>

## Discussion

This is used for inserting any custom content, and non-shape elements like signatures or loupes.

## See Also

### Inserting content

- [markupEditViewController(\_:insertNewShape:)](markupeditviewcontroller%28__insertnewshape_%29.md): Add a new shape on top of the paper.
- [markupEditViewControllerInsertNewTextbox(\_:)](markupeditviewcontrollerinsertnewtextbox%28__%29.md): Add a new textbox on top of the paper.
- [markupEditViewController(\_:insertNewLineWithStartMarker:endMarker:)](markupeditviewcontroller%28__insertnewlinewithstartmarker_endmarker_%29.md): Add a new line on top of the paper.
