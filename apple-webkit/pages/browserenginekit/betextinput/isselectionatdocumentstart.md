> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/isselectionatdocumentstart](https://developer.apple.com/documentation/browserenginekit/betextinput/isselectionatdocumentstart)

# isSelectionAtDocumentStart (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates if the current selection is at the beginning of the document.

## Declaration

```swift
var isSelectionAtDocumentStart: Bool { get }
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Managing selection

- [selectedText](selectedtext.md): A string that represents the selected text.
- [selectedTextRange](selectedtextrange.md): A range that represents the selected text.
- [selectPosition(at:completionHandler:)](selectposition%28at_completionhandler_%29.md): Sets the selection caret to the given point.
- [selectPosition(at:for:completionHandler:)](selectposition%28at_for_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelection(by:completionHandler:)](adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.
- [updateCurrentSelection(to:from:in:)](updatecurrentselection%28to_from_in_%29.md): Indicates the point where the text interaction gesture changes.

# selectionAtDocumentStart (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates if the current selection is at the beginning of the document.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSelectionAtDocumentStart) BOOL selectionAtDocumentStart;
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Managing selection

- [selectedText](selectedtext.md): A string that represents the selected text.
- [selectedTextRange](selectedtextrange.md): A range that represents the selected text.
- [selectPositionAtPoint:completionHandler:](selectposition%28at_completionhandler_%29.md): Sets the selection caret to the given point.
- [selectPositionAtPoint:withContextRequest:completionHandler:](selectposition%28at_for_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelectionByRange:completionHandler:](adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.
- [updateCurrentSelectionTo:fromGesture:inState:](updatecurrentselection%28to_from_in_%29.md): Indicates the point where the text interaction gesture changes.
