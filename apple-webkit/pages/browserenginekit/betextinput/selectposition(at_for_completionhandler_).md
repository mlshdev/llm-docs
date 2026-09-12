> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/selectposition(at:for:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/selectposition(at:for:completionhandler:))

# selectPosition(at:for:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Sets the selection caret to the given point.

## Declaration

```swift
func selectPosition(at point: CGPoint, for request: BETextDocumentRequest, completionHandler: @escaping @Sendable (BETextDocumentContext) -> Void)
```

```swift
func selectPosition(at point: CGPoint, for request: BETextDocumentRequest) async -> BETextDocumentContext
```

<a id="discussion"></a>

## Discussion

The returned document context includes autocorrect information for the new caret location, as a convenience.

## See Also

### Managing selection

- [selectedText](selectedtext.md): A string that represents the selected text.
- [selectedTextRange](selectedtextrange.md): A range that represents the selected text.
- [isSelectionAtDocumentStart](isselectionatdocumentstart.md): A Boolean value that indicates if the current selection is at the beginning of the document.
- [selectPosition(at:completionHandler:)](selectposition%28at_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelection(by:completionHandler:)](adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.
- [updateCurrentSelection(to:from:in:)](updatecurrentselection%28to_from_in_%29.md): Indicates the point where the text interaction gesture changes.

# selectPositionAtPoint:withContextRequest:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Sets the selection caret to the given point.

## Declaration

```objectivec
- (void) selectPositionAtPoint:(CGPoint) point withContextRequest:(BETextDocumentRequest *) request completionHandler:(void (^)(BETextDocumentContext *)) completionHandler;
```

<a id="discussion"></a>

## Discussion

The returned document context includes autocorrect information for the new caret location, as a convenience.

## See Also

### Managing selection

- [selectedText](selectedtext.md): A string that represents the selected text.
- [selectedTextRange](selectedtextrange.md): A range that represents the selected text.
- [selectionAtDocumentStart](isselectionatdocumentstart.md): A Boolean value that indicates if the current selection is at the beginning of the document.
- [selectPositionAtPoint:completionHandler:](selectposition%28at_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelectionByRange:completionHandler:](adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.
- [updateCurrentSelectionTo:fromGesture:inState:](updatecurrentselection%28to_from_in_%29.md): Indicates the point where the text interaction gesture changes.
