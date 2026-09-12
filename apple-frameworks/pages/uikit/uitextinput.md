> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput](https://developer.apple.com/documentation/uikit/uitextinput)

# UITextInput (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods for interacting with the text input system and enabling features in documents.

## Declaration

```swift
@MainActor protocol UITextInput : UIKeyInput
```

## Mentioned In

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md)
- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md)

<a id="overview"></a>

## Overview

Objects that adopt the [UITextInput](uitextinput.md) protocol maintain information about text input and provide that information to the text input system on demand. A [UITextInput](uitextinput.md) object interacts with the text input system by:

- Reporting text positions and text ranges
- Responding to queries layout and writing direction
- Performing hit-testing — returning text positions and ranges for a specific point
- Providing the system with rectangles for highlighting ranges of text and drawing the *caret*, a glyph that represents the insertion point during text entry

In addition, a [UITextInput](uitextinput.md) object maintains ranges for selected text and marked text. Marked text, a part of multistage text input, represents provisionally inserted text that the user has yet to confirm. The range of marked text always contains a range of selected text, which might be a range of characters or the caret. Multistage text input is a requirement when the language is ideographic and the keyboard is phonetic.

<a id="Integrate-with-the-text-input-system"></a>

### Integrate with the text input system

The [UITextInput](uitextinput.md) protocol works with other classes and protocols to integrate text-processing apps with the text input system:

- **[UITextPosition](uitextposition.md) and [UITextRange](uitextrange.md) classes**: All [UITextInput](uitextinput.md)-conforming document classes must create custom subclasses of these classes. A [UITextPosition](uitextposition.md) object represents a position in a text container. A [UITextRange](uitextrange.md) object, which encapsulates beginning and ending [UITextPosition](uitextposition.md) objects, represents a range of characters in the text container.
- **[UITextInputTokenizer](uitextinputtokenizer.md) protocol and [UITextInputStringTokenizer](uitextinputstringtokenizer.md) class**: The [UITextInputTokenizer](uitextinputtokenizer.md) protocol defines an interface for tokenizing input text. The [UITextInputStringTokenizer](uitextinputstringtokenizer.md) class is a default implementation of this protocol.
- **[UITextInputDelegate](uitextinputdelegate.md) protocol**: The text input system automatically assigns its own text input delegate (which conforms to this protocol) to the [UITextInput](uitextinput.md)-conforming document object. This text input delegate allows document objects to inform the input system of changes in text and selection.
- **[UIKeyInput](uikeyinput.md) protocol**: Implement this protocol to allow text entry and deletion at an insertion point.

<a id="Customize-keyboard-behavior"></a>

### Customize keyboard behavior

The [UITextInput](uitextinput.md) protocol also inherits the [UITextInputTraits](uitextinputtraits.md) protocol, which provides customization of the keyboard and its behaviors.

When the user chooses dictation input on a supported device, the system automatically inserts recognized phrases into the current text view. Methods in the [UITextInput](uitextinput.md) protocol allow your app to respond to the completion of dictation. You can use an object of the [UIDictationPhrase](uidictationphrase.md) class to obtain a string that represents a phrase the user dictates. In the case of ambiguous dictation results, a dictation phrase object provides an array that contains alternative strings.

## Topics

### Handling text input

- [inputDelegate](uitextinput/inputdelegate.md): An input delegate that receives a notification when text changes or when the selection changes.
- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.

### Replacing and returning text

- [text(in:)](uitextinput/text%28in_%29.md): Returns the text in the specified range.
- [replace(\_:withText:)](uitextinput/replace%28__withtext_%29.md): Replaces the text in a document that is in the specified range.
- [shouldChangeText(in:replacementText:)](uitextinput/shouldchangetext%28in_replacementtext_%29.md): Asks whether to replace the text in the specified range.

### Working with marked and selected text

- [selectedTextRange](uitextinput/selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](uitextinput/markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](uitextinput/markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText(\_:selectedRange:)](uitextinput/setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText(\_:selectedRange:)](uitextinput/setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText()](uitextinput/unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](uitextinput/selectionaffinity.md): The desired location for the insertion point.

### Computing text ranges and text positions

- [textRange(from:to:)](uitextinput/textrange%28from_to_%29.md): Returns the range between two text positions.
- [position(from:offset:)](uitextinput/position%28from_offset_%29.md): Returns the text position at a specified offset from another text position.
- [position(from:in:offset:)](uitextinput/position%28from_in_offset_%29.md): Returns the text position at a specified offset in a specified direction from another text position.
- [beginningOfDocument](uitextinput/beginningofdocument.md): The text position for the beginning of a document.
- [endOfDocument](uitextinput/endofdocument.md): The text position for the end of a document.

### Evaluating text positions

- [compare(\_:to:)](uitextinput/compare%28__to_%29.md): Returns how one text position compares to another text position.
- [offset(from:to:)](uitextinput/offset%28from_to_%29.md): Returns the number of UTF-16 characters between one text position and another text position.

### Making the view non-editable

- [isEditable](uitextinput/iseditable.md): A Boolean value that indicates whether the text view contains editable text.

### Determining layout and writing direction

- [position(within:farthestIn:)](uitextinput/position%28within_farthestin_%29.md): Returns the text position that is at the farthest extent in a specified layout direction within a range of text.
- [characterRange(byExtending:in:)](uitextinput/characterrange%28byextending_in_%29.md): Returns a text range from a specified text position to its farthest extent in a certain direction of layout.
- [baseWritingDirection(for:in:)](uitextinput/basewritingdirection%28for_in_%29.md): Returns the base writing direction for a position in the text going in a certain direction.
- [setBaseWritingDirection(\_:for:)](uitextinput/setbasewritingdirection%28__for_%29.md): Sets the base writing direction for a specified range of text in a document.

### Working with geometry and hit-testing

- [firstRect(for:)](uitextinput/firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.
- [closestPosition(to:)](uitextinput/closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [selectionRects(for:)](uitextinput/selectionrects%28for_%29.md): Returns an array of selection rects corresponding to the range of text.
- [closestPosition(to:within:)](uitextinput/closestposition%28to_within_%29.md): Returns the position in a document that is closest to a specified point in a specified range.
- [characterRange(at:)](uitextinput/characterrange%28at_%29.md): Returns the character or range of characters that is at a specified point in a document.

### Providing the caret layout information

- [caretRect(for:)](uitextinput/caretrect%28for_%29.md): Returns a rectangle to draw the caret at a specified insertion point.
- [caretTransform(for:)](uitextinput/carettransform%28for_%29.md): Returns the transform to apply to the caret prior to drawing.

### Tokenizing input text

- [tokenizer](uitextinput/tokenizer.md): An input tokenizer that provides information about the granularity of text units.
- [UITextInputTokenizer](uitextinputtokenizer.md): A tokenizer, which is an object that allows the text input system to evaluate text units of different granularities.

### Managing the floating cursor

- [beginFloatingCursor(at:)](uitextinput/beginfloatingcursor%28at_%29.md): Tells the object when the gesture that the system uses to manipulate the cursor begins.
- [updateFloatingCursor(at:)](uitextinput/updatefloatingcursor%28at_%29.md): Tells the object that the floating cursor moved to a new location.
- [endFloatingCursor()](uitextinput/endfloatingcursor%28%29.md): Tells the object when the gesture that the system uses to manipulate the cursor ends.

### Using dictation

- [dictationRecordingDidEnd()](uitextinput/dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed()](uitextinput/dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult(\_:)](uitextinput/insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [insertDictationResultPlaceholder](uitextinput/insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [frame(forDictationResultPlaceholder:)](uitextinput/frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.
- [removeDictationResultPlaceholder(\_:willInsertResult:)](uitextinput/removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.

### Managing placeholders

- [insertTextPlaceholder(with:)](uitextinput/inserttextplaceholder%28with_%29.md): Inserts a placeholder object to reserve visual space during text input.
- [remove(\_:)](uitextinput/remove%28__%29.md): Removes a placeholder object from the text input view.
- [UITextPlaceholder](uitextplaceholder.md): A placeholder object that reserves visual space in a text input view.

### Managing the edit menu

- [editMenu(for:suggestedActions:)](uitextinput/editmenu%28for_suggestedactions_%29.md): Asks for the menu to display for the given text range and actions the system provides.
- [willPresentEditMenu(animator:)](uitextinput/willpresenteditmenu%28animator_%29.md): Tells the object when the system is about to present an edit menu with an animator.
- [willDismissEditMenu(animator:)](uitextinput/willdismisseditmenu%28animator_%29.md): Tells the object when the system is about to dismiss an edit menu with an animator.

### Supporting text-phrase alternatives

- [insertText(\_:alternatives:style:)](uitextinput/inserttext%28__alternatives_style_%29.md)
- [UITextAlternativeStyle](uitextalternativestyle.md): A constant that determines if the system highlights alternative phrases during text input.

### Inserting a Smart Reply suggestion

- [insert(\_:)](uitextinput/insert%28__%29.md): Inserts the user or system’s input suggestion into the document.

### Supporting adaptive images

- [supportsAdaptiveImageGlyph](uitextinput/supportsadaptiveimageglyph.md): A Boolean value that indicates whether the document supports adaptive images in the input.
- [insert(\_:replacementRange:)](uitextinput/insert%28__replacementrange_%29.md): Inserts an adaptive image into the text at the specifed location.

### Returning text-styling information

- [textStyling(at:in:)](uitextinput/textstyling%28at_in_%29.md): Returns a dictionary with properties that specify how to style the text at a certain location in a document.

### Reconciling text position and character offset

- [position(within:atCharacterOffset:)](uitextinput/position%28within_atcharacteroffset_%29.md): Returns the position within a range of a document’s text that corresponds to the character offset from the start of that range.
- [characterOffset(of:within:)](uitextinput/characteroffset%28of_within_%29.md): Returns the character offset of a position in a document’s text that falls within a specified range.

### Returning the text input view

- [textInputView](uitextinput/textinputview.md): An affiliated view that provides a coordinate system for all geometric values in the protocol.

### Constants

- [UITextDirection](uitextdirection.md): The direction of the text.
- [UITextStorageDirection](uitextstoragedirection.md): The direction of text storage.
- [UITextLayoutDirection](uitextlayoutdirection.md): The direction of text layout.

### Deprecated

- [UITextWritingDirection](uitextwritingdirection.md): Deprecated. The writing direction of the text for the language.
- [Style dictionary keys](style-dictionary-keys.md): A dictionary that contains properties that define text style characteristics.

### Instance Properties

- [unobscuredContentRect](uitextinput/unobscuredcontentrect.md): The visible content region, excluding parts covered by view-specific UI.

### Instance Methods

- [attributedText(in:)](uitextinput/attributedtext%28in_%29.md)
- [didDismissWritingTools()](uitextinput/diddismisswritingtools%28%29.md)
- [insertAttributedText(\_:)](uitextinput/insertattributedtext%28__%29.md)
- [replace(\_:withAttributedText:)](uitextinput/replace%28__withattributedtext_%29.md)
- [willPresentWritingTools()](uitextinput/willpresentwritingtools%28%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIKeyInput](uikeyinput.md)
- [UITextInputTraits](uitextinputtraits.md)

### Inherited By

- [UITextDraggable](uitextdraggable.md)
- [UITextDroppable](uitextdroppable.md)

### Conforming Types

- [UISearchTextField](uisearchtextfield.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Text input

- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.
- [UIKeyInput](uikeyinput.md): A set of methods a responder uses to implement simple text entry.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputMode](uitextinputmode.md): The current text input mode.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.
- [UIDictationPhrase](uidictationphrase.md): An object that represents the textual interpretation of a spoken phrase that the user dictates.

# UITextInput (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods for interacting with the text input system and enabling features in documents.

## Declaration

```objectivec
@protocol UITextInput <UIKeyInput>
```

## Mentioned In

- [Adopting system selection UI in custom text views](adopting-system-selection-ui-in-custom-text-views.md)
- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md)

<a id="overview"></a>

## Overview

Objects that adopt the [UITextInput](uitextinput.md) protocol maintain information about text input and provide that information to the text input system on demand. A [UITextInput](uitextinput.md) object interacts with the text input system by:

- Reporting text positions and text ranges
- Responding to queries layout and writing direction
- Performing hit-testing — returning text positions and ranges for a specific point
- Providing the system with rectangles for highlighting ranges of text and drawing the *caret*, a glyph that represents the insertion point during text entry

In addition, a [UITextInput](uitextinput.md) object maintains ranges for selected text and marked text. Marked text, a part of multistage text input, represents provisionally inserted text that the user has yet to confirm. The range of marked text always contains a range of selected text, which might be a range of characters or the caret. Multistage text input is a requirement when the language is ideographic and the keyboard is phonetic.

<a id="Integrate-with-the-text-input-system"></a>

### Integrate with the text input system

The [UITextInput](uitextinput.md) protocol works with other classes and protocols to integrate text-processing apps with the text input system:

- **[UITextPosition](uitextposition.md) and [UITextRange](uitextrange.md) classes**: All [UITextInput](uitextinput.md)-conforming document classes must create custom subclasses of these classes. A [UITextPosition](uitextposition.md) object represents a position in a text container. A [UITextRange](uitextrange.md) object, which encapsulates beginning and ending [UITextPosition](uitextposition.md) objects, represents a range of characters in the text container.
- **[UITextInputTokenizer](uitextinputtokenizer.md) protocol and [UITextInputStringTokenizer](uitextinputstringtokenizer.md) class**: The [UITextInputTokenizer](uitextinputtokenizer.md) protocol defines an interface for tokenizing input text. The [UITextInputStringTokenizer](uitextinputstringtokenizer.md) class is a default implementation of this protocol.
- **[UITextInputDelegate](uitextinputdelegate.md) protocol**: The text input system automatically assigns its own text input delegate (which conforms to this protocol) to the [UITextInput](uitextinput.md)-conforming document object. This text input delegate allows document objects to inform the input system of changes in text and selection.
- **[UIKeyInput](uikeyinput.md) protocol**: Implement this protocol to allow text entry and deletion at an insertion point.

<a id="Customize-keyboard-behavior"></a>

### Customize keyboard behavior

The [UITextInput](uitextinput.md) protocol also inherits the [UITextInputTraits](uitextinputtraits.md) protocol, which provides customization of the keyboard and its behaviors.

When the user chooses dictation input on a supported device, the system automatically inserts recognized phrases into the current text view. Methods in the [UITextInput](uitextinput.md) protocol allow your app to respond to the completion of dictation. You can use an object of the [UIDictationPhrase](uidictationphrase.md) class to obtain a string that represents a phrase the user dictates. In the case of ambiguous dictation results, a dictation phrase object provides an array that contains alternative strings.

## Topics

### Handling text input

- [inputDelegate](uitextinput/inputdelegate.md): An input delegate that receives a notification when text changes or when the selection changes.
- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.

### Replacing and returning text

- [textInRange:](uitextinput/text%28in_%29.md): Returns the text in the specified range.
- [replaceRange:withText:](uitextinput/replace%28__withtext_%29.md): Replaces the text in a document that is in the specified range.
- [shouldChangeTextInRange:replacementText:](uitextinput/shouldchangetext%28in_replacementtext_%29.md): Asks whether to replace the text in the specified range.

### Working with marked and selected text

- [selectedTextRange](uitextinput/selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](uitextinput/markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](uitextinput/markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText:selectedRange:](uitextinput/setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText:selectedRange:](uitextinput/setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText](uitextinput/unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](uitextinput/selectionaffinity.md): The desired location for the insertion point.

### Computing text ranges and text positions

- [textRangeFromPosition:toPosition:](uitextinput/textrange%28from_to_%29.md): Returns the range between two text positions.
- [positionFromPosition:offset:](uitextinput/position%28from_offset_%29.md): Returns the text position at a specified offset from another text position.
- [positionFromPosition:inDirection:offset:](uitextinput/position%28from_in_offset_%29.md): Returns the text position at a specified offset in a specified direction from another text position.
- [beginningOfDocument](uitextinput/beginningofdocument.md): The text position for the beginning of a document.
- [endOfDocument](uitextinput/endofdocument.md): The text position for the end of a document.

### Evaluating text positions

- [comparePosition:toPosition:](uitextinput/compare%28__to_%29.md): Returns how one text position compares to another text position.
- [offsetFromPosition:toPosition:](uitextinput/offset%28from_to_%29.md): Returns the number of UTF-16 characters between one text position and another text position.

### Making the view non-editable

- [editable](uitextinput/iseditable.md): A Boolean value that indicates whether the text view contains editable text.

### Determining layout and writing direction

- [positionWithinRange:farthestInDirection:](uitextinput/position%28within_farthestin_%29.md): Returns the text position that is at the farthest extent in a specified layout direction within a range of text.
- [characterRangeByExtendingPosition:inDirection:](uitextinput/characterrange%28byextending_in_%29.md): Returns a text range from a specified text position to its farthest extent in a certain direction of layout.
- [baseWritingDirectionForPosition:inDirection:](uitextinput/basewritingdirection%28for_in_%29.md): Returns the base writing direction for a position in the text going in a certain direction.
- [setBaseWritingDirection:forRange:](uitextinput/setbasewritingdirection%28__for_%29.md): Sets the base writing direction for a specified range of text in a document.

### Working with geometry and hit-testing

- [firstRectForRange:](uitextinput/firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.
- [closestPositionToPoint:](uitextinput/closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [selectionRectsForRange:](uitextinput/selectionrects%28for_%29.md): Returns an array of selection rects corresponding to the range of text.
- [closestPositionToPoint:withinRange:](uitextinput/closestposition%28to_within_%29.md): Returns the position in a document that is closest to a specified point in a specified range.
- [characterRangeAtPoint:](uitextinput/characterrange%28at_%29.md): Returns the character or range of characters that is at a specified point in a document.

### Providing the caret layout information

- [caretRectForPosition:](uitextinput/caretrect%28for_%29.md): Returns a rectangle to draw the caret at a specified insertion point.
- [caretTransformForPosition:](uitextinput/carettransform%28for_%29.md): Returns the transform to apply to the caret prior to drawing.

### Tokenizing input text

- [tokenizer](uitextinput/tokenizer.md): An input tokenizer that provides information about the granularity of text units.
- [UITextInputTokenizer](uitextinputtokenizer.md): A tokenizer, which is an object that allows the text input system to evaluate text units of different granularities.

### Managing the floating cursor

- [beginFloatingCursorAtPoint:](uitextinput/beginfloatingcursor%28at_%29.md): Tells the object when the gesture that the system uses to manipulate the cursor begins.
- [updateFloatingCursorAtPoint:](uitextinput/updatefloatingcursor%28at_%29.md): Tells the object that the floating cursor moved to a new location.
- [endFloatingCursor](uitextinput/endfloatingcursor%28%29.md): Tells the object when the gesture that the system uses to manipulate the cursor ends.

### Using dictation

- [dictationRecordingDidEnd](uitextinput/dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed](uitextinput/dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult:](uitextinput/insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [insertDictationResultPlaceholder](uitextinput/insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [frameForDictationResultPlaceholder:](uitextinput/frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.
- [removeDictationResultPlaceholder:willInsertResult:](uitextinput/removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.

### Managing placeholders

- [insertTextPlaceholderWithSize:](uitextinput/inserttextplaceholder%28with_%29.md): Inserts a placeholder object to reserve visual space during text input.
- [removeTextPlaceholder:](uitextinput/remove%28__%29.md): Removes a placeholder object from the text input view.
- [UITextPlaceholder](uitextplaceholder.md): A placeholder object that reserves visual space in a text input view.

### Managing the edit menu

- [editMenuForTextRange:suggestedActions:](uitextinput/editmenu%28for_suggestedactions_%29.md): Asks for the menu to display for the given text range and actions the system provides.
- [willPresentEditMenuWithAnimator:](uitextinput/willpresenteditmenu%28animator_%29.md): Tells the object when the system is about to present an edit menu with an animator.
- [willDismissEditMenuWithAnimator:](uitextinput/willdismisseditmenu%28animator_%29.md): Tells the object when the system is about to dismiss an edit menu with an animator.

### Supporting text-phrase alternatives

- [insertText:alternatives:style:](uitextinput/inserttext%28__alternatives_style_%29.md)
- [UITextAlternativeStyle](uitextalternativestyle.md): A constant that determines if the system highlights alternative phrases during text input.

### Inserting a Smart Reply suggestion

- [insertInputSuggestion:](uitextinput/insert%28__%29.md): Inserts the user or system’s input suggestion into the document.

### Supporting adaptive images

- [supportsAdaptiveImageGlyph](uitextinput/supportsadaptiveimageglyph.md): A Boolean value that indicates whether the document supports adaptive images in the input.
- [insertAdaptiveImageGlyph:replacementRange:](uitextinput/insert%28__replacementrange_%29.md): Inserts an adaptive image into the text at the specifed location.

### Returning text-styling information

- [textStylingAtPosition:inDirection:](uitextinput/textstyling%28at_in_%29.md): Returns a dictionary with properties that specify how to style the text at a certain location in a document.

### Reconciling text position and character offset

- [positionWithinRange:atCharacterOffset:](uitextinput/position%28within_atcharacteroffset_%29.md): Returns the position within a range of a document’s text that corresponds to the character offset from the start of that range.
- [characterOffsetOfPosition:withinRange:](uitextinput/characteroffset%28of_within_%29.md): Returns the character offset of a position in a document’s text that falls within a specified range.

### Returning the text input view

- [textInputView](uitextinput/textinputview.md): An affiliated view that provides a coordinate system for all geometric values in the protocol.

### Constants

- [UITextDirection](uitextdirection.md): The direction of the text.
- [UITextStorageDirection](uitextstoragedirection.md): The direction of text storage.
- [UITextLayoutDirection](uitextlayoutdirection.md): The direction of text layout.

### Deprecated

- [UITextWritingDirection](uitextwritingdirection.md): Deprecated. The writing direction of the text for the language.
- [Style dictionary keys](style-dictionary-keys.md): A dictionary that contains properties that define text style characteristics.

### Instance Properties

- [unobscuredContentRect](uitextinput/unobscuredcontentrect.md): The visible content region, excluding parts covered by view-specific UI.

### Instance Methods

- [attributedTextInRange:](uitextinput/attributedtext%28in_%29.md)
- [didDismissWritingTools](uitextinput/diddismisswritingtools%28%29.md)
- [insertAttributedText:](uitextinput/insertattributedtext%28__%29.md)
- [replaceRange:withAttributedText:](uitextinput/replace%28__withattributedtext_%29.md)
- [willPresentWritingTools](uitextinput/willpresentwritingtools%28%29.md)

## Relationships

### Inherits From

- [UIKeyInput](uikeyinput.md)

### Inherited By

- [UITextDraggable](uitextdraggable.md)
- [UITextDroppable](uitextdroppable.md)

### Conforming Types

- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Text input

- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.
- [UIKeyInput](uikeyinput.md): A set of methods a responder uses to implement simple text entry.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputMode](uitextinputmode.md): The current text input mode.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.
- [UIDictationPhrase](uidictationphrase.md): An object that represents the textual interpretation of a spoken phrase that the user dictates.
