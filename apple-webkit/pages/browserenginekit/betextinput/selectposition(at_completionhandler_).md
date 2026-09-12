> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/selectposition(at:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/selectposition(at:completionhandler:))

# selectPosition(at:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Sets the selection caret to the given point.

## Declaration

```swift
func selectPosition(at point: CGPoint, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func selectPosition(at point: CGPoint) async
```

## Parameters

- `point`: The caret’s new location in the text view.
- `completionHandler`: A closure that you call when the text view handles the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Managing selection

- [selectedText](selectedtext.md): A string that represents the selected text.
- [selectedTextRange](selectedtextrange.md): A range that represents the selected text.
- [isSelectionAtDocumentStart](isselectionatdocumentstart.md): A Boolean value that indicates if the current selection is at the beginning of the document.
- [selectPosition(at:for:completionHandler:)](selectposition%28at_for_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelection(by:completionHandler:)](adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.
- [updateCurrentSelection(to:from:in:)](updatecurrentselection%28to_from_in_%29.md): Indicates the point where the text interaction gesture changes.

# selectPositionAtPoint:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Sets the selection caret to the given point.

## Declaration

```objectivec
- (void) selectPositionAtPoint:(CGPoint) point completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `point`: The caret’s new location in the text view.
- `completionHandler`: A closure that you call when the text view handles the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Managing selection

- [selectedText](selectedtext.md): A string that represents the selected text.
- [selectedTextRange](selectedtextrange.md): A range that represents the selected text.
- [selectionAtDocumentStart](isselectionatdocumentstart.md): A Boolean value that indicates if the current selection is at the beginning of the document.
- [selectPositionAtPoint:withContextRequest:completionHandler:](selectposition%28at_for_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelectionByRange:completionHandler:](adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.
- [updateCurrentSelectionTo:fromGesture:inState:](updatecurrentselection%28to_from_in_%29.md): Indicates the point where the text interaction gesture changes.
