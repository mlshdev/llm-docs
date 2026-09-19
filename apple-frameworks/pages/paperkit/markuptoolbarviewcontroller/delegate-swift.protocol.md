> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller/delegate-swift.protocol

# MarkupToolbarViewController.Delegate

**Framework:** PaperKit  
**Kind:** Protocol  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

The delegate for a PaperKit toolbar.

## Declaration

```swift
protocol Delegate : AnyObject
```

## Topics

### Inserting content

- [markupToolbarViewController(\_:insertNewShape:)](delegate-swift.protocol/markuptoolbarviewcontroller%28__insertnewshape_%29.md): Add a new shape on top of the paper.
- [markupToolbarViewControllerInsertNewTextbox(\_:)](delegate-swift.protocol/markuptoolbarviewcontrollerinsertnewtextbox%28__%29.md): Add a new textbox on top of the paper.
- [markupToolbarViewController(\_:insertNewLineWithStartMarker:endMarker:)](delegate-swift.protocol/markuptoolbarviewcontroller%28__insertnewlinewithstartmarker_endmarker_%29.md): Add a new line on top of the paper.
- [markupToolbarViewController(\_:insertNewContents:)](delegate-swift.protocol/markuptoolbarviewcontroller%28__insertnewcontents_%29.md): Add new content on top of the paper.

### Responding to changes

- [markupToolbarViewControllerSelectedIndirectPointerTouchModeChanged(\_:)](delegate-swift.protocol/markuptoolbarviewcontrollerselectedindirectpointertouchmodechanged%28__%29.md): Called when the `selectedIndirectPointerTouchMode` changes.
- [markupToolbarViewControllerSelectedDrawingToolChanged(\_:)](delegate-swift.protocol/markuptoolbarviewcontrollerselecteddrawingtoolchanged%28__%29.md): Called when the `selectedDrawingTool` changes.

## Relationships

### Conforming Types

- [PaperMarkupViewController](../papermarkupviewcontroller.md)
