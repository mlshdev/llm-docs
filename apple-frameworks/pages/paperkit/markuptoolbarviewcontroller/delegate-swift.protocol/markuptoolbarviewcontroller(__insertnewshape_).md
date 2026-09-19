> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller/delegate-swift.protocol/markuptoolbarviewcontroller(_:insertnewshape:)

# markupToolbarViewController(\_:insertNewShape:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Add a new shape on top of the paper.

## Declaration

```swift
func markupToolbarViewController(_ markupToolbarViewController: MarkupToolbarViewController, insertNewShape type: ShapeConfiguration.Shape)
```

## Parameters

- `markupToolbarViewController`: The source of the action.
- `type`: The type of shape.

## See Also

### Inserting content

- [markupToolbarViewControllerInsertNewTextbox(\_:)](markuptoolbarviewcontrollerinsertnewtextbox%28__%29.md): Add a new textbox on top of the paper.
- [markupToolbarViewController(\_:insertNewLineWithStartMarker:endMarker:)](markuptoolbarviewcontroller%28__insertnewlinewithstartmarker_endmarker_%29.md): Add a new line on top of the paper.
- [markupToolbarViewController(\_:insertNewContents:)](markuptoolbarviewcontroller%28__insertnewcontents_%29.md): Add new content on top of the paper.
