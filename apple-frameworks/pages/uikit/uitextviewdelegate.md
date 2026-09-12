> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate](https://developer.apple.com/documentation/uikit/uitextviewdelegate)

# UITextViewDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods for receiving editing-related messages for text view objects.

## Declaration

```swift
@MainActor protocol UITextViewDelegate : UIScrollViewDelegate
```

<a id="overview"></a>

## Overview

All of the methods in this protocol are optional. You can use them in situations where you might want to adjust the text a user is editing (such as in the case of a spell-checker program) or to modify the intended insertion point.

## Topics

### Responding to editing notifications

- [textViewShouldBeginEditing(\_:)](uitextviewdelegate/textviewshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text view.
- [textViewDidBeginEditing(\_:)](uitextviewdelegate/textviewdidbeginediting%28__%29.md): Tells the delegate when editing of the specified text view begins.
- [textViewShouldEndEditing(\_:)](uitextviewdelegate/textviewshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text view.
- [textViewDidEndEditing(\_:)](uitextviewdelegate/textviewdidendediting%28__%29.md): Tells the delegate when editing of the specified text view ends.

### Responding to text changes

- [textView(\_:shouldChangeTextIn:replacementText:)](uitextviewdelegate/textview%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Asks the delegate whether to replace the specified text in the text view.
- [textViewDidChange(\_:)](uitextviewdelegate/textviewdidchange%28__%29.md): Tells the delegate when the user changes the text or attributes in the specified text view.

### Responding to selection changes

- [textViewDidChangeSelection(\_:)](uitextviewdelegate/textviewdidchangeselection%28__%29.md): Tells the delegate when the text selection changes in the specified text view.

### Interacting with text data

- [textView(\_:menuConfigurationFor:defaultMenu:)](uitextviewdelegate/textview%28__menuconfigurationfor_defaultmenu_%29.md): Asks the delegate for the menu configuration to be performed when interacting with a text item.
- [textView(\_:primaryActionFor:defaultAction:)](uitextviewdelegate/textview%28__primaryactionfor_defaultaction_%29.md): Asks the delegate for the action to be performed when interacting with a text item. If a nil action is provided, the text view will request a menu to be presented on primary action if possible.
- [textView(\_:textItemMenuWillDisplayFor:animator:)](uitextviewdelegate/textview%28__textitemmenuwilldisplayfor_animator_%29.md): Informs the delegate that a text item menu is about to be presented with the specified animator.
- [textView(\_:textItemMenuWillEndFor:animator:)](uitextviewdelegate/textview%28__textitemmenuwillendfor_animator_%29.md): Informs the delegate that a text item menu is about to be dismissed with the specified animator.

### Providing a context menu

- [textView(\_:editMenuForTextIn:suggestedActions:)](uitextviewdelegate/textview%28__editmenufortextin_suggestedactions_%29.md): Deprecated. Asks the delegate for the menu to display in the text view, based on the text range and actions the system provides.

### Customizing an edit menu

- [textView(\_:willDismissEditMenuWith:)](uitextviewdelegate/textview%28__willdismisseditmenuwith_%29.md)
- [textView(\_:willPresentEditMenuWith:)](uitextviewdelegate/textview%28__willpresenteditmenuwith_%29.md)

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin(\_:)](uitextviewdelegate/textviewwritingtoolswillbegin%28__%29.md): Tells the delegate that an interaction with the writing tools interface is about to begin.
- [textViewWritingToolsDidEnd(\_:)](uitextviewdelegate/textviewwritingtoolsdidend%28__%29.md): Tells the delegate that the current writing tools session ended.
- [textView(\_:writingToolsIgnoredRangesInEnclosingRange:)](uitextviewdelegate/textview%28__writingtoolsignoredrangesinenclosingrange_%29.md): Asks the delegate to specify any ranges of text you want the writing tools to ignore.

### Inserting a Smart Reply suggestion

- [textView(\_:insertInputSuggestion:)](uitextviewdelegate/textview%28__insertinputsuggestion_%29.md): Tells the delegate when the keyboard delivers an input suggestion.

### Deprecated

- [textView(\_:shouldInteractWith:in:interaction:)](uitextviewdelegate/textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView(\_:shouldInteractWith:in:interaction:)](uitextviewdelegate/textview%28__shouldinteractwith_in_interaction_%29-622ub.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.
- [textView(\_:shouldInteractWith:in:)](uitextviewdelegate/textview%28__shouldinteractwith_in_%29-97zx6.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.
- [textView(\_:shouldInteractWith:in:)](uitextviewdelegate/textview%28__shouldinteractwith_in_%29-98tho.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.
- [UITextItemInteraction](uitextiteminteraction.md): Deprecated. Constants that indicate the type of interaction the user expects to have with a URL or text attachment.

### Instance Methods

- [textView(\_:didBeginFormattingWith:)](uitextviewdelegate/textview%28__didbeginformattingwith_%29.md)
- [textView(\_:didEndFormattingWith:)](uitextviewdelegate/textview%28__didendformattingwith_%29.md)
- [textView(\_:editMenuForTextInRanges:suggestedActions:)](uitextviewdelegate/textview%28__editmenufortextinranges_suggestedactions_%29.md)
- [textView(\_:shouldChangeTextInRanges:replacementText:)](uitextviewdelegate/textview%28__shouldchangetextinranges_replacementtext_%29.md)
- [textView(\_:willBeginFormattingWith:)](uitextviewdelegate/textview%28__willbeginformattingwith_%29.md)
- [textView(\_:willEndFormattingWith:)](uitextviewdelegate/textview%28__willendformattingwith_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIScrollViewDelegate](uiscrollviewdelegate.md)

## See Also

### Text actions and menus

- [UITextItem](uitextitem.md): An object for attaching custom actions and menus to links, text attachments, or other specific text in a text view.
- [UITextItem.MenuConfiguration](uitextitem/menuconfiguration.md): An object that describes what type of menu and preview to show for a text item.

# UITextViewDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods for receiving editing-related messages for text view objects.

## Declaration

```objectivec
@protocol UITextViewDelegate <NSObject, UIScrollViewDelegate>
```

<a id="overview"></a>

## Overview

All of the methods in this protocol are optional. You can use them in situations where you might want to adjust the text a user is editing (such as in the case of a spell-checker program) or to modify the intended insertion point.

## Topics

### Responding to editing notifications

- [textViewShouldBeginEditing:](uitextviewdelegate/textviewshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text view.
- [textViewDidBeginEditing:](uitextviewdelegate/textviewdidbeginediting%28__%29.md): Tells the delegate when editing of the specified text view begins.
- [textViewShouldEndEditing:](uitextviewdelegate/textviewshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text view.
- [textViewDidEndEditing:](uitextviewdelegate/textviewdidendediting%28__%29.md): Tells the delegate when editing of the specified text view ends.

### Responding to text changes

- [textView:shouldChangeTextInRange:replacementText:](uitextviewdelegate/textview%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Asks the delegate whether to replace the specified text in the text view.
- [textViewDidChange:](uitextviewdelegate/textviewdidchange%28__%29.md): Tells the delegate when the user changes the text or attributes in the specified text view.

### Responding to selection changes

- [textViewDidChangeSelection:](uitextviewdelegate/textviewdidchangeselection%28__%29.md): Tells the delegate when the text selection changes in the specified text view.

### Interacting with text data

- [textView:menuConfigurationForTextItem:defaultMenu:](uitextviewdelegate/textview%28__menuconfigurationfor_defaultmenu_%29.md): Asks the delegate for the menu configuration to be performed when interacting with a text item.
- [textView:primaryActionForTextItem:defaultAction:](uitextviewdelegate/textview%28__primaryactionfor_defaultaction_%29.md): Asks the delegate for the action to be performed when interacting with a text item. If a nil action is provided, the text view will request a menu to be presented on primary action if possible.
- [textView:textItemMenuWillDisplayForTextItem:animator:](uitextviewdelegate/textview%28__textitemmenuwilldisplayfor_animator_%29.md): Informs the delegate that a text item menu is about to be presented with the specified animator.
- [textView:textItemMenuWillEndForTextItem:animator:](uitextviewdelegate/textview%28__textitemmenuwillendfor_animator_%29.md): Informs the delegate that a text item menu is about to be dismissed with the specified animator.

### Providing a context menu

- [textView:editMenuForTextInRange:suggestedActions:](uitextviewdelegate/textview%28__editmenufortextin_suggestedactions_%29.md): Deprecated. Asks the delegate for the menu to display in the text view, based on the text range and actions the system provides.

### Customizing an edit menu

- [textView:willDismissEditMenuWithAnimator:](uitextviewdelegate/textview%28__willdismisseditmenuwith_%29.md)
- [textView:willPresentEditMenuWithAnimator:](uitextviewdelegate/textview%28__willpresenteditmenuwith_%29.md)

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin:](uitextviewdelegate/textviewwritingtoolswillbegin%28__%29.md): Tells the delegate that an interaction with the writing tools interface is about to begin.
- [textViewWritingToolsDidEnd:](uitextviewdelegate/textviewwritingtoolsdidend%28__%29.md): Tells the delegate that the current writing tools session ended.
- [textView:writingToolsIgnoredRangesInEnclosingRange:](uitextviewdelegate/textview%28__writingtoolsignoredrangesinenclosingrange_%29.md): Asks the delegate to specify any ranges of text you want the writing tools to ignore.

### Inserting a Smart Reply suggestion

- [textView:insertInputSuggestion:](uitextviewdelegate/textview%28__insertinputsuggestion_%29.md): Tells the delegate when the keyboard delivers an input suggestion.

### Deprecated

- [textView:shouldInteractWithTextAttachment:inRange:interaction:](uitextviewdelegate/textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView:shouldInteractWithURL:inRange:interaction:](uitextviewdelegate/textview%28__shouldinteractwith_in_interaction_%29-622ub.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.
- [textView:shouldInteractWithTextAttachment:inRange:](uitextviewdelegate/textview%28__shouldinteractwith_in_%29-97zx6.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.
- [textView:shouldInteractWithURL:inRange:](uitextviewdelegate/textview%28__shouldinteractwith_in_%29-98tho.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.
- [UITextItemInteraction](uitextiteminteraction.md): Deprecated. Constants that indicate the type of interaction the user expects to have with a URL or text attachment.

### Instance Methods

- [textView:didBeginFormattingWithViewController:](uitextviewdelegate/textview%28__didbeginformattingwith_%29.md)
- [textView:didEndFormattingWithViewController:](uitextviewdelegate/textview%28__didendformattingwith_%29.md)
- [textView:editMenuForTextInRanges:suggestedActions:](uitextviewdelegate/textview%28__editmenufortextinranges_suggestedactions_%29.md)
- [textView:shouldChangeTextInRanges:replacementText:](uitextviewdelegate/textview%28__shouldchangetextinranges_replacementtext_%29.md)
- [textView:willBeginFormattingWithViewController:](uitextviewdelegate/textview%28__willbeginformattingwith_%29.md)
- [textView:willEndFormattingWithViewController:](uitextviewdelegate/textview%28__willendformattingwith_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
- [UIScrollViewDelegate](uiscrollviewdelegate.md)

## See Also

### Text actions and menus

- [UITextItem](uitextitem.md): An object for attaching custom actions and menus to links, text attachments, or other specific text in a text view.
- [UITextItemContentType](uitextitemcontenttype.md): Constants that describe and capture the type of content a text item represents along with a specific related value.
- [UITextItemMenuConfiguration](uitextitem/menuconfiguration.md): An object that describes what type of menu and preview to show for a text item.
