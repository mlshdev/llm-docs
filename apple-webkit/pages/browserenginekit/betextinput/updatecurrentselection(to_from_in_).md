> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/updatecurrentselection(to:from:in:)](https://developer.apple.com/documentation/browserenginekit/betextinput/updatecurrentselection(to:from:in:))

# updateCurrentSelection(to:from:in:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates the point where the text interaction gesture changes.

## Declaration

```swift
func updateCurrentSelection(to point: CGPoint, from gestureType: BEGestureType, in state: UIGestureRecognizer.State)
```

## Parameters

- `point`: The new location of the gesture.
- `gestureType`: The type of gesture the system tracks.
- `state`: The state of the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

In your implementation of this method, notify the system that your app handles the change by calling [selectionChangedWithGesture(at:gesture:state:flags:)](../betextinteraction/selectionchangedwithgesture%28at_gesture_state_flags_%29.md).

## See Also

### Managing selection

- [selectedText](selectedtext.md): A string that represents the selected text.
- [selectedTextRange](selectedtextrange.md): A range that represents the selected text.
- [isSelectionAtDocumentStart](isselectionatdocumentstart.md): A Boolean value that indicates if the current selection is at the beginning of the document.
- [selectPosition(at:completionHandler:)](selectposition%28at_completionhandler_%29.md): Sets the selection caret to the given point.
- [selectPosition(at:for:completionHandler:)](selectposition%28at_for_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelection(by:completionHandler:)](adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.

# updateCurrentSelectionTo:fromGesture:inState: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates the point where the text interaction gesture changes.

## Declaration

```objectivec
- (void) updateCurrentSelectionTo:(CGPoint) point fromGesture:(BEGestureType) gestureType inState:(UIGestureRecognizerState) state;
```

## Parameters

- `point`: The new location of the gesture.
- `gestureType`: The type of gesture the system tracks.
- `state`: The state of the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

In your implementation of this method, notify the system that your app handles the change by calling [selectionChangedWithGestureAtPoint:gesture:state:flags:](../betextinteraction/selectionchangedwithgesture%28at_gesture_state_flags_%29.md).

## See Also

### Managing selection

- [selectedText](selectedtext.md): A string that represents the selected text.
- [selectedTextRange](selectedtextrange.md): A range that represents the selected text.
- [selectionAtDocumentStart](isselectionatdocumentstart.md): A Boolean value that indicates if the current selection is at the beginning of the document.
- [selectPositionAtPoint:completionHandler:](selectposition%28at_completionhandler_%29.md): Sets the selection caret to the given point.
- [selectPositionAtPoint:withContextRequest:completionHandler:](selectposition%28at_for_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelectionByRange:completionHandler:](adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.
