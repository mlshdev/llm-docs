> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfielddelegate](https://developer.apple.com/documentation/appkit/nstextfielddelegate)

# NSTextFieldDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that a text field delegate can use to control its field editor action menu.

## Declaration

```swift
protocol NSTextFieldDelegate : NSControlTextEditingDelegate
```

## Topics

### Controlling Editing Behavior

- [textField(\_:textView:candidates:forSelectedRange:)](nstextfielddelegate/textfield%28__textview_candidates_forselectedrange_%29.md): Allows customizing the candidate list queried from `NSSpellChecker`. This method returns array of text objects to include in a text selection.
- [textField(\_:textView:candidatesForSelectedRange:)](nstextfielddelegate/textfield%28__textview_candidatesforselectedrange_%29.md): Provides a customized list of candidates to the text view’s `candidateListTouchBarItem`. This method returns an array of objects that represent the elements of a selection.
- [textField(\_:textView:shouldSelectCandidateAt:)](nstextfielddelegate/textfield%28__textview_shouldselectcandidateat_%29.md): Notifies the delegate that the user selected the candidate at index in `-[NSCandidateListTouchBarItem candidates]` for the text view’s `candidateListTouchBarItem`. Returns a Boolean value that indicates whether to select the text object at the index.

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSComboBoxDelegate](nscomboboxdelegate.md)
- [NSSearchFieldDelegate](nssearchfielddelegate.md)
- [NSTokenFieldDelegate](nstokenfielddelegate.md)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.

# NSTextFieldDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that a text field delegate can use to control its field editor action menu.

## Declaration

```objectivec
@protocol NSTextFieldDelegate <NSControlTextEditingDelegate>
```

## Topics

### Controlling Editing Behavior

- [textField:textView:candidates:forSelectedRange:](nstextfielddelegate/textfield%28__textview_candidates_forselectedrange_%29.md): Allows customizing the candidate list queried from `NSSpellChecker`. This method returns array of text objects to include in a text selection.
- [textField:textView:candidatesForSelectedRange:](nstextfielddelegate/textfield%28__textview_candidatesforselectedrange_%29.md): Provides a customized list of candidates to the text view’s `candidateListTouchBarItem`. This method returns an array of objects that represent the elements of a selection.
- [textField:textView:shouldSelectCandidateAtIndex:](nstextfielddelegate/textfield%28__textview_shouldselectcandidateat_%29.md): Notifies the delegate that the user selected the candidate at index in `-[NSCandidateListTouchBarItem candidates]` for the text view’s `candidateListTouchBarItem`. Returns a Boolean value that indicates whether to select the text object at the index.

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)

### Inherited By

- [NSComboBoxDelegate](nscomboboxdelegate.md)
- [NSSearchFieldDelegate](nssearchfielddelegate.md)
- [NSTokenFieldDelegate](nstokenfielddelegate.md)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.
