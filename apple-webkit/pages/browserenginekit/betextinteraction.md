> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction](https://developer.apple.com/documentation/browserenginekit/betextinteraction)

# BETextInteraction (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An interaction you add to a text view to support extended text gestures.

## Declaration

```swift
@MainActor class BETextInteraction
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)
- [Supporting extended text interactions](support-extended-text-interactions.md)

<a id="overview"></a>

## Overview

Add a `BETextInteraction` object to your browser text view’s [textInputView](betextinput/textinputview.md). When your browser text view receives text-interaction actions, call the methods on this object to invoke the standard system behavior.

## Topics

### Text selection

- [delegate](betextinteraction/delegate.md): A delegate object that the interaction notifies when the system changes the text selection.
- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [textSelectionDisplayInteraction](betextinteraction/textselectiondisplayinteraction.md): An interaction that manages the system’s text-selection UI.
- [selectionBoundaryAdjusted(to:touchPhase:flags:)](betextinteraction/selectionboundaryadjusted%28to_touchphase_flags_%29.md): Notifies the system after the text view adjusts its selection.
- [selectionChangedWithGesture(at:gesture:state:flags:)](betextinteraction/selectionchangedwithgesture%28at_gesture_state_flags_%29.md): Notifies the system that the text view changed its selection.

### Menus

- [presentEditMenuForSelection()](betextinteraction/presenteditmenuforselection%28%29.md): Presents an edit menu for the current text selection.
- [dismissEditMenuForSelection()](betextinteraction/dismisseditmenuforselection%28%29.md): Dismisses the edit menu for the current text selection.
- [contextMenuInteraction](betextinteraction/contextmenuinteraction.md): An interaction you use to work with the text view’s context menu.
- [contextMenuInteractionDelegate](betextinteraction/contextmenuinteractiondelegate.md): The delegate for the context menu interaction associated with this text interaction.

### Text replacements

- [addShortcut(forText:from:)](betextinteraction/addshortcut%28fortext_from_%29.md): Presents UI for a person to add a text-replacement shortcut to the keyboard dictionary.
- [showReplacements(forText:)](betextinteraction/showreplacements%28fortext_%29.md): Displays inline text replacements for the current selection.

### Sharing and defining text

- [share(text:from:)](betextinteraction/share%28text_from_%29.md): Presents standard UI for someone to share text from a browser text view.
- [showDictionary(forTextInContext:definingTextInRange:from:)](betextinteraction/showdictionary%28fortextincontext_definingtextinrange_from_%29.md): Presents a dictionary definition for the supplied text.

### Translation and transliteration

- [translate(text:from:)](betextinteraction/translate%28text_from_%29.md): Presents a translation of the text.
- [transliterateChinese(forText:)](betextinteraction/transliteratechinese%28fortext_%29.md): Converts text between traditional and simplified Chinese.

### UI updates

- [editabilityChanged()](betextinteraction/editabilitychanged%28%29.md): Tells the system that the document’s editability status has changed.
- [refreshKeyboardUI()](betextinteraction/refreshkeyboardui%28%29.md): Tells the system to refresh the keyboard UI.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](https://developer.apple.com/documentation/uikit/uiinteraction)

## See Also

### Interaction responses

- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
- [BEGestureType](begesturetype.md): The types of touch gestures that operate on input text.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.

# BETextInteraction (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An interaction you add to a text view to support extended text gestures.

## Declaration

```objectivec
@interface BETextInteraction : NSObject
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)
- [Supporting extended text interactions](support-extended-text-interactions.md)

<a id="overview"></a>

## Overview

Add a `BETextInteraction` object to your browser text view’s [textInputView](betextinput/textinputview.md). When your browser text view receives text-interaction actions, call the methods on this object to invoke the standard system behavior.

## Topics

### Text selection

- [delegate](betextinteraction/delegate.md): A delegate object that the interaction notifies when the system changes the text selection.
- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [textSelectionDisplayInteraction](betextinteraction/textselectiondisplayinteraction.md): An interaction that manages the system’s text-selection UI.
- [selectionBoundaryAdjustedToPoint:touchPhase:flags:](betextinteraction/selectionboundaryadjusted%28to_touchphase_flags_%29.md): Notifies the system after the text view adjusts its selection.
- [selectionChangedWithGestureAtPoint:gesture:state:flags:](betextinteraction/selectionchangedwithgesture%28at_gesture_state_flags_%29.md): Notifies the system that the text view changed its selection.

### Menus

- [presentEditMenuForSelection](betextinteraction/presenteditmenuforselection%28%29.md): Presents an edit menu for the current text selection.
- [dismissEditMenuForSelection](betextinteraction/dismisseditmenuforselection%28%29.md): Dismisses the edit menu for the current text selection.
- [contextMenuInteraction](betextinteraction/contextmenuinteraction.md): An interaction you use to work with the text view’s context menu.
- [contextMenuInteractionDelegate](betextinteraction/contextmenuinteractiondelegate.md): The delegate for the context menu interaction associated with this text interaction.

### Text replacements

- [addShortcutForText:fromRect:](betextinteraction/addshortcut%28fortext_from_%29.md): Presents UI for a person to add a text-replacement shortcut to the keyboard dictionary.
- [showReplacementsForText:](betextinteraction/showreplacements%28fortext_%29.md): Displays inline text replacements for the current selection.

### Sharing and defining text

- [shareText:fromRect:](betextinteraction/share%28text_from_%29.md): Presents standard UI for someone to share text from a browser text view.
- [showDictionaryForTextInContext:definingTextInRange:fromRect:](betextinteraction/showdictionary%28fortextincontext_definingtextinrange_from_%29.md): Presents a dictionary definition for the supplied text.

### Translation and transliteration

- [translateText:fromRect:](betextinteraction/translate%28text_from_%29.md): Presents a translation of the text.
- [transliterateChineseForText:](betextinteraction/transliteratechinese%28fortext_%29.md): Converts text between traditional and simplified Chinese.

### UI updates

- [editabilityChanged](betextinteraction/editabilitychanged%28%29.md): Tells the system that the document’s editability status has changed.
- [refreshKeyboardUI](betextinteraction/refreshkeyboardui%28%29.md): Tells the system to refresh the keyboard UI.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [UIInteraction](https://developer.apple.com/documentation/uikit/uiinteraction)

## See Also

### Interaction responses

- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
- [BEGestureType](begesturetype.md): The types of touch gestures that operate on input text.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
