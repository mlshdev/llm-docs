> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupeditviewcontroller/delegate-swift.protocol/markupeditviewcontroller(_:insertnewshape:)](https://developer.apple.com/documentation/paperkit/markupeditviewcontroller/delegate-swift.protocol/markupeditviewcontroller(_:insertnewshape:))

# markupEditViewController(\_:insertNewShape:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Add a new shape on top of the paper.

## Declaration

```swift
func markupEditViewController(_ markupEditViewController: MarkupEditViewController, insertNewShape type: ShapeConfiguration.Shape)
```

## Parameters

- `markupEditViewController`: The source of the action.
- `type`: The type of shape.

## See Also

### Inserting content

- [markupEditViewControllerInsertNewTextbox(\_:)](markupeditviewcontrollerinsertnewtextbox%28__%29.md): Add a new textbox on top of the paper.
- [markupEditViewController(\_:insertNewLineWithStartMarker:endMarker:)](markupeditviewcontroller%28__insertnewlinewithstartmarker_endmarker_%29.md): Add a new line on top of the paper.
- [markupEditViewController(\_:insertNewContents:)](markupeditviewcontroller%28__insertnewcontents_%29.md): Add new content on top of the paper.
