> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput](https://developer.apple.com/documentation/browserenginekit/betextinput)

# BETextInput (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A protocol for asynchronous text views that integrate with the text system.

## Declaration

```swift
protocol BETextInput : BEResponderEditActions, BETextSelectionDirectionNavigation, UIKeyInput
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)
- [Supporting extended text interactions](support-extended-text-interactions.md)

<a id="overview"></a>

## Overview

Adopt this protocol in a text field to perform asynchronous actions and provide information to the text system. For example, you can make an XPC request to a web content extension. See [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md).

## Topics

### Managing the text input view

- [textInputView](betextinput/textinputview.md): An affiliated view that provides a coordinate system for all geometric values in this protocol.
- [unscaledView](betextinput/unscaledview.md): A view that represents the web content that’s agnostic of zoom state.
- [selectionClipRect](betextinput/selectioncliprect.md): A rectangle that represents the bounds of editable elements.
- [unobscuredContentRect](betextinput/unobscuredcontentrect.md): A rectangle that frames a user interface, such as text-selection handles, in an unobscured location.

### Managing selection

- [selectedText](betextinput/selectedtext.md): A string that represents the selected text.
- [selectedTextRange](betextinput/selectedtextrange.md): A range that represents the selected text.
- [isSelectionAtDocumentStart](betextinput/isselectionatdocumentstart.md): A Boolean value that indicates if the current selection is at the beginning of the document.
- [selectPosition(at:completionHandler:)](betextinput/selectposition%28at_completionhandler_%29.md): Sets the selection caret to the given point.
- [selectPosition(at:for:completionHandler:)](betextinput/selectposition%28at_for_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelection(by:completionHandler:)](betextinput/adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.
- [updateCurrentSelection(to:from:in:)](betextinput/updatecurrentselection%28to_from_in_%29.md): Indicates the point where the text interaction gesture changes.

### Managing selection views

- [selectionContainerViewAboveText](betextinput/selectioncontainerviewabovetext.md): An optional view you supply to draw text selection above the text.
- [selectionContainerViewBelowText](betextinput/selectioncontainerviewbelowtext.md): An optional view you supply to draw text selection below the text.

### Managing marked text

- [hasMarkedText](betextinput/hasmarkedtext.md): A Boolean value that indicates if marked text exists for an active input session.
- [markedTextRange](betextinput/markedtextrange.md): A range that represents the position of the marked text.
- [unmarkText()](betextinput/unmarktext%28%29.md): Unmarks the currently marked text.
- [isPointNearMarkedText(\_:)](betextinput/ispointnearmarkedtext%28__%29.md): Provides a Boolean value that indicates if a point is near marked text.

### Inserting and replacing text

- [insert(\_:)](betextinput/insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [insert(\_:)](betextinput/insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceSelectedText(\_:withText:)](betextinput/replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [replaceDictatedText(\_:withText:)](betextinput/replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.
- [add(\_:)](betextinput/add%28__%29.md): Adds text alternatives to the text input object for the current selection.

### Deleting text

- [delete(in:to:)](betextinput/delete%28in_to_%29.md): Deletes the specified amount of text.

### Adjusting text

- [transposeCharactersAroundSelection()](betextinput/transposecharactersaroundselection%28%29.md): Transposes the characters on either side of the caret.
- [selectWordForReplacement()](betextinput/selectwordforreplacement%28%29.md): Selects a tapped word with autocorrect suggestions.

### Requesting context

- [requestDocumentContext(\_:completionHandler:)](betextinput/requestdocumentcontext%28__completionhandler_%29.md): Gathers context for the system about the current document.
- [requestTextContextForAutocorrection(completionHandler:)](betextinput/requesttextcontextforautocorrection%28completionhandler_%29.md): A method the text system calls to get extra information for autocorrection suggestions.
- [requestTextRects(for:withCompletionHandler:)](betextinput/requesttextrects%28for_withcompletionhandler_%29.md): Gathers context for the presentation of a text-related user interface.

### Managing placeholders

- [insertTextPlaceholder(size:completionHandler:)](betextinput/inserttextplaceholder%28size_completionhandler_%29.md): Inserts a placeholder object to reserve visual space during text input.

### Managing text traits

- [extendedTextInputTraits](betextinput/extendedtextinputtraits.md): An object that customizes text-input appearance and behavior beyond the standard system traits.
- [isEditable](betextinput/iseditable.md): A Boolean value that determines the ability to modify text.

### Responding to keyboard input

- [shiftKeyStateChanged(fromState:toState:)](betextinput/shiftkeystatechanged%28fromstate_tostate_%29.md): Indicates a transition in the state of the Shift key.

### Responding to dictation

- [didInsertFinalDictationResult()](betextinput/didinsertfinaldictationresult%28%29.md): A Boolean value that indicates when the system inserts a dictation result.

### Managing the edit menu

- [selectTextForEditMenuWithLocation(inView:completionHandler:)](betextinput/selecttextforeditmenuwithlocation%28inview_completionhandler_%29.md): Indicates the edit menu displays at the given location in the text input view’s coordinate space.
- [canPerformAction(\_:withSender:)](betextinput/canperformaction%28__withsender_%29.md): Indicates whether the text view can process a given action.

### Styling text

- [textStyling(at:in:)](betextinput/textstyling%28at_in_%29.md): Provides a dictionary that customizes the appearance of strings.

### Instance Properties

- [asyncInputDelegate](betextinput/asyncinputdelegate.md): A delegate object that your text view notifies of events and changes in the text’s state.
- [attributedMarkedText](betextinput/attributedmarkedtext.md): Attributed string for the text that has been marked as part of an active input session
- [automaticallyPresentEditMenu](betextinput/automaticallypresenteditmenu.md): Controls whether the edit menu is allowed to be presented or should be suppressed.
- [isReplaceAllowed](betextinput/isreplaceallowed.md): Returns whether replacement should be allowed for an editable element.
- [markedText](betextinput/markedtext.md): String for the text that has been marked as part of an active input session
- [textFirstRect](betextinput/textfirstrect.md): Returns a rect representing the bounds of the first line of marked text, if marked text is set.
- [textLastRect](betextinput/textlastrect.md): Returns a rect representing the bounds of the last line of marked text, if marked text is set.

### Instance Methods

- [adjustSelectionBoundary(to:touchPhase:baseIsStart:flags:)](betextinput/adjustselectionboundary%28to_touchphase_baseisstart_flags_%29.md): Adjusts the start or end boundary of the current selection to the given point.
- [alternativesForSelectedText()](betextinput/alternativesforselectedtext%28%29.md): Returns the text alternatives that are available to the text input object.
- [autoscroll(to:)](betextinput/autoscroll%28to_%29.md): Indicates that a text gesture initiated autoscrolling.
- [cancelAutoscroll()](betextinput/cancelautoscroll%28%29.md): Indicates that the current autoscroll gesture is complete.
- [caretRect(for:)](betextinput/caretrect%28for_%29.md): Returns a rectangle in which the system can draw the text-selection caret.
- [handleKeyEntry(\_:completionHandler:)](betextinput/handlekeyentry%28__completionhandler_%29.md): Accepts key-entry events from the text system for the text view to process.
- [keyboardWillDismiss()](betextinput/keyboardwilldismiss%28%29.md): Called when the user has requested the keyboard to dismiss itself.
- [move(byOffset:)](betextinput/move%28byoffset_%29.md): Adjusts the current selection by `offset` in character granularity units
- [moveSelection(atBoundary:in:completionHandler:)](betextinput/moveselection%28atboundary_in_completionhandler_%29.md): Moves the text-selection caret relative to the current position.
- [offset(from:to:)](betextinput/offset%28from_to_%29.md): Returns the distance between two positions in the text view’s text.
- [remove(\_:willInsertText:completionHandler:)](betextinput/remove%28__willinserttext_completionhandler_%29.md): Removes a placeholder object from the text input view.
- [removeTextAlternatives()](betextinput/removetextalternatives%28%29.md): Removes text alternatives from the text input object for the current selection
- [replaceText(\_:withText:options:completionHandler:)](betextinput/replacetext%28__withtext_options_completionhandler_%29.md): Replace the specified text preceding the current selection.
- [requestPreferredArrowDirectionForEditMenu(completionHandler:)](betextinput/requestpreferredarrowdirectionforeditmenu%28completionhandler_%29.md): Invoked by the system to gather context, including the client’s preference for how the edit menu should be positioned relative to the selected text.
- [selectText(in:at:completionHandler:)](betextinput/selecttext%28in_at_completionhandler_%29.md): Selects the text within the given granularity at the given point in the text view.
- [selectionRects(for:)](betextinput/selectionrects%28for_%29.md): Returns an array of selection rectangles corresponding to the given text range.
- [setAttributedMarkedText(\_:selectedRange:)](betextinput/setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [setBaseWritingDirection(\_:for:)](betextinput/setbasewritingdirection%28__for_%29.md): Informs the text view of the writing direction for a given range of text.
- [setMarkedText(\_:selectedRange:)](betextinput/setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setSelection(from:to:gesture:state:)](betextinput/setselection%28from_to_gesture_state_%29.md): Notifies the text view that its selection needs to change to the text between the given points.
- [systemWillDismissEditMenu(withAnimator:)](betextinput/systemwilldismisseditmenu%28withanimator_%29.md): Invoked by the system when it is about to dismiss an edit menu with an animator.
- [systemWillPresentEditMenu(withAnimator:)](betextinput/systemwillpresenteditmenu%28withanimator_%29.md): Invoked by the system when it is about to present an edit menu with an animator.
- [text(in:)](betextinput/text%28in_%29.md): Returns the text in a browser’s text view in the given range.
- [textInteractionGesture(\_:shouldBeginAt:)](betextinput/textinteractiongesture%28__shouldbeginat_%29.md): Returns whether a gesture at the given point in the view needs to begin.
- [updateSelection(extent:boundary:completionHandler:)](betextinput/updateselection%28extent_boundary_completionhandler_%29.md): Includes the text up to the given point in the current text selection.
- [willInsertFinalDictationResult()](betextinput/willinsertfinaldictationresult%28%29.md): Indicates the system is about to insert the final dictation result.

## Relationships

### Inherits From

- [BEResponderEditActions](berespondereditactions.md)
- [BETextSelectionDirectionNavigation](betextselectiondirectionnavigation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UIKeyInput](https://developer.apple.com/documentation/uikit/uikeyinput)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UITextInputTraits](https://developer.apple.com/documentation/uikit/uitextinputtraits)

## See Also

### Custom text views

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md): Process keyboard interactions asynchronously in your iOS browser app’s text view.
- [Supporting extended text interactions](support-extended-text-interactions.md): Share content, add replacement shortcuts, and perform other rich actions in browser text views.
- [BETextInputDelegate](betextinputdelegate.md): A delegate protocol that a browser text view uses to notify the text system of changes.

# BETextInput (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A protocol for asynchronous text views that integrate with the text system.

## Declaration

```objectivec
@protocol BETextInput <UIKeyInput, BETextSelectionDirectionNavigation, BEResponderEditActions>
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)
- [Supporting extended text interactions](support-extended-text-interactions.md)

<a id="overview"></a>

## Overview

Adopt this protocol in a text field to perform asynchronous actions and provide information to the text system. For example, you can make an XPC request to a web content extension. See [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md).

## Topics

### Managing the text input view

- [textInputView](betextinput/textinputview.md): An affiliated view that provides a coordinate system for all geometric values in this protocol.
- [unscaledView](betextinput/unscaledview.md): A view that represents the web content that’s agnostic of zoom state.
- [selectionClipRect](betextinput/selectioncliprect.md): A rectangle that represents the bounds of editable elements.
- [unobscuredContentRect](betextinput/unobscuredcontentrect.md): A rectangle that frames a user interface, such as text-selection handles, in an unobscured location.

### Managing selection

- [selectedText](betextinput/selectedtext.md): A string that represents the selected text.
- [selectedTextRange](betextinput/selectedtextrange.md): A range that represents the selected text.
- [selectionAtDocumentStart](betextinput/isselectionatdocumentstart.md): A Boolean value that indicates if the current selection is at the beginning of the document.
- [selectPositionAtPoint:completionHandler:](betextinput/selectposition%28at_completionhandler_%29.md): Sets the selection caret to the given point.
- [selectPositionAtPoint:withContextRequest:completionHandler:](betextinput/selectposition%28at_for_completionhandler_%29.md): Sets the selection caret to the given point.
- [adjustSelectionByRange:completionHandler:](betextinput/adjustselection%28by_completionhandler_%29.md): Adjusts the selection using a range.
- [updateCurrentSelectionTo:fromGesture:inState:](betextinput/updatecurrentselection%28to_from_in_%29.md): Indicates the point where the text interaction gesture changes.

### Managing selection views

- [selectionContainerViewAboveText](betextinput/selectioncontainerviewabovetext.md): An optional view you supply to draw text selection above the text.
- [selectionContainerViewBelowText](betextinput/selectioncontainerviewbelowtext.md): An optional view you supply to draw text selection below the text.

### Managing marked text

- [hasMarkedText](betextinput/hasmarkedtext.md): A Boolean value that indicates if marked text exists for an active input session.
- [markedTextRange](betextinput/markedtextrange.md): A range that represents the position of the marked text.
- [unmarkText](betextinput/unmarktext%28%29.md): Unmarks the currently marked text.
- [isPointNearMarkedText:](betextinput/ispointnearmarkedtext%28__%29.md): Provides a Boolean value that indicates if a point is near marked text.

### Inserting and replacing text

- [insertTextSuggestion:](betextinput/insert%28__%29-5iryn.md): Inserts a text suggestion in response to a suggestion selection.
- [insertTextAlternatives:](betextinput/insert%28__%29-6x7hd.md): Inserts the given text or one of the available alternatives.
- [replaceSelectedText:withText:](betextinput/replaceselectedtext%28__withtext_%29.md): Replaces text with new text, either within the current selection or near the cursor.
- [replaceDictatedText:withText:](betextinput/replacedictatedtext%28__withtext_%29.md): Replaces the specified text for the text of a dictation.
- [addTextAlternatives:](betextinput/add%28__%29.md): Adds text alternatives to the text input object for the current selection.

### Deleting text

- [deleteInDirection:toGranularity:](betextinput/delete%28in_to_%29.md): Deletes the specified amount of text.

### Adjusting text

- [transposeCharactersAroundSelection](betextinput/transposecharactersaroundselection%28%29.md): Transposes the characters on either side of the caret.
- [selectWordForReplacement](betextinput/selectwordforreplacement%28%29.md): Selects a tapped word with autocorrect suggestions.

### Requesting context

- [requestDocumentContext:completionHandler:](betextinput/requestdocumentcontext%28__completionhandler_%29.md): Gathers context for the system about the current document.
- [requestTextContextForAutocorrectionWithCompletionHandler:](betextinput/requesttextcontextforautocorrection%28completionhandler_%29.md): A method the text system calls to get extra information for autocorrection suggestions.
- [requestTextRectsForString:withCompletionHandler:](betextinput/requesttextrects%28for_withcompletionhandler_%29.md): Gathers context for the presentation of a text-related user interface.

### Managing placeholders

- [insertTextPlaceholderWithSize:completionHandler:](betextinput/inserttextplaceholder%28size_completionhandler_%29.md): Inserts a placeholder object to reserve visual space during text input.

### Managing text traits

- [extendedTextInputTraits](betextinput/extendedtextinputtraits.md): An object that customizes text-input appearance and behavior beyond the standard system traits.
- [editable](betextinput/iseditable.md): A Boolean value that determines the ability to modify text.

### Responding to keyboard input

- [shiftKeyStateChangedFromState:toState:](betextinput/shiftkeystatechanged%28fromstate_tostate_%29.md): Indicates a transition in the state of the Shift key.

### Responding to dictation

- [didInsertFinalDictationResult](betextinput/didinsertfinaldictationresult%28%29.md): A Boolean value that indicates when the system inserts a dictation result.

### Managing the edit menu

- [selectTextForEditMenuWithLocationInView:completionHandler:](betextinput/selecttextforeditmenuwithlocation%28inview_completionhandler_%29.md): Indicates the edit menu displays at the given location in the text input view’s coordinate space.
- [canPerformAction:withSender:](betextinput/canperformaction%28__withsender_%29.md): Indicates whether the text view can process a given action.

### Styling text

- [textStylingAtPosition:inDirection:](betextinput/textstyling%28at_in_%29.md): Provides a dictionary that customizes the appearance of strings.

### Instance Properties

- [asyncInputDelegate](betextinput/asyncinputdelegate.md): A delegate object that your text view notifies of events and changes in the text’s state.
- [attributedMarkedText](betextinput/attributedmarkedtext.md): Attributed string for the text that has been marked as part of an active input session
- [automaticallyPresentEditMenu](betextinput/automaticallypresenteditmenu.md): Controls whether the edit menu is allowed to be presented or should be suppressed.
- [replaceAllowed](betextinput/isreplaceallowed.md): Returns whether replacement should be allowed for an editable element.
- [markedText](betextinput/markedtext.md): String for the text that has been marked as part of an active input session
- [textFirstRect](betextinput/textfirstrect.md): Returns a rect representing the bounds of the first line of marked text, if marked text is set.
- [textLastRect](betextinput/textlastrect.md): Returns a rect representing the bounds of the last line of marked text, if marked text is set.

### Instance Methods

- [adjustSelectionBoundaryToPoint:touchPhase:baseIsStart:flags:](betextinput/adjustselectionboundary%28to_touchphase_baseisstart_flags_%29.md): Adjusts the start or end boundary of the current selection to the given point.
- [alternativesForSelectedText](betextinput/alternativesforselectedtext%28%29.md): Returns the text alternatives that are available to the text input object.
- [autoscrollToPoint:](betextinput/autoscroll%28to_%29.md): Indicates that a text gesture initiated autoscrolling.
- [cancelAutoscroll](betextinput/cancelautoscroll%28%29.md): Indicates that the current autoscroll gesture is complete.
- [caretRectForPosition:](betextinput/caretrect%28for_%29.md): Returns a rectangle in which the system can draw the text-selection caret.
- [handleKeyEntry:withCompletionHandler:](betextinput/handlekeyentry%28__completionhandler_%29.md): Accepts key-entry events from the text system for the text view to process.
- [keyboardWillDismiss](betextinput/keyboardwilldismiss%28%29.md): Called when the user has requested the keyboard to dismiss itself.
- [moveByOffset:](betextinput/move%28byoffset_%29.md): Adjusts the current selection by `offset` in character granularity units
- [moveSelectionAtBoundary:inStorageDirection:completionHandler:](betextinput/moveselection%28atboundary_in_completionhandler_%29.md): Moves the text-selection caret relative to the current position.
- [offsetFromPosition:toPosition:](betextinput/offset%28from_to_%29.md): Returns the distance between two positions in the text view’s text.
- [removeTextPlaceholder:willInsertText:completionHandler:](betextinput/remove%28__willinserttext_completionhandler_%29.md): Removes a placeholder object from the text input view.
- [removeTextAlternatives](betextinput/removetextalternatives%28%29.md): Removes text alternatives from the text input object for the current selection
- [replaceText:withText:options:completionHandler:](betextinput/replacetext%28__withtext_options_completionhandler_%29.md): Replace the specified text preceding the current selection.
- [requestPreferredArrowDirectionForEditMenuWithCompletionHandler:](betextinput/requestpreferredarrowdirectionforeditmenu%28completionhandler_%29.md): Invoked by the system to gather context, including the client’s preference for how the edit menu should be positioned relative to the selected text.
- [selectTextInGranularity:atPoint:completionHandler:](betextinput/selecttext%28in_at_completionhandler_%29.md): Selects the text within the given granularity at the given point in the text view.
- [selectionRectsForRange:](betextinput/selectionrects%28for_%29.md): Returns an array of selection rectangles corresponding to the given text range.
- [setAttributedMarkedText:selectedRange:](betextinput/setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [setBaseWritingDirection:forRange:](betextinput/setbasewritingdirection%28__for_%29.md): Informs the text view of the writing direction for a given range of text.
- [setMarkedText:selectedRange:](betextinput/setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setSelectionFromPoint:toPoint:gesture:state:](betextinput/setselection%28from_to_gesture_state_%29.md): Notifies the text view that its selection needs to change to the text between the given points.
- [systemWillDismissEditMenuWithAnimator:](betextinput/systemwilldismisseditmenu%28withanimator_%29.md): Invoked by the system when it is about to dismiss an edit menu with an animator.
- [systemWillPresentEditMenuWithAnimator:](betextinput/systemwillpresenteditmenu%28withanimator_%29.md): Invoked by the system when it is about to present an edit menu with an animator.
- [textInRange:](betextinput/text%28in_%29.md): Returns the text in a browser’s text view in the given range.
- [textInteractionGesture:shouldBeginAtPoint:](betextinput/textinteractiongesture%28__shouldbeginat_%29.md): Returns whether a gesture at the given point in the view needs to begin.
- [updateSelectionWithExtentPoint:boundary:completionHandler:](betextinput/updateselection%28extent_boundary_completionhandler_%29.md): Includes the text up to the given point in the current text selection.
- [willInsertFinalDictationResult](betextinput/willinsertfinaldictationresult%28%29.md): Indicates the system is about to insert the final dictation result.

## Relationships

### Inherits From

- [BEResponderEditActions](berespondereditactions.md)
- [BETextSelectionDirectionNavigation](betextselectiondirectionnavigation.md)
- [UIKeyInput](https://developer.apple.com/documentation/uikit/uikeyinput)

## See Also

### Custom text views

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md): Process keyboard interactions asynchronously in your iOS browser app’s text view.
- [Supporting extended text interactions](support-extended-text-interactions.md): Share content, add replacement shortcuts, and perform other rich actions in browser text views.
- [BETextInputDelegate](betextinputdelegate.md): A delegate protocol that a browser text view uses to notify the text system of changes.
