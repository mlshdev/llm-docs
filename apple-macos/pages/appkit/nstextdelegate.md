> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextdelegate](https://developer.apple.com/documentation/appkit/nstextdelegate)

# NSTextDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.

## Declaration

```swift
protocol NSTextDelegate : NSObjectProtocol
```

## Topics

### Changing text formatting

- [textDidChange(\_:)](nstextdelegate/textdidchange%28__%29.md): Informs the delegate that the text object has changed its characters or formatting attributes.

### Editing text

- [textShouldBeginEditing(\_:)](nstextdelegate/textshouldbeginediting%28__%29.md): Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.
- [textDidBeginEditing(\_:)](nstextdelegate/textdidbeginediting%28__%29.md): Informs the delegate that the text object has begun editing (that the user has begun changing it).
- [textShouldEndEditing(\_:)](nstextdelegate/textshouldendediting%28__%29.md): Invoked from a text object’s implementation of [resignFirstResponder()](nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.
- [textDidEndEditing(\_:)](nstextdelegate/textdidendediting%28__%29.md): Informs the delegate that the text object has finished editing (that it has resigned first responder status).

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSTextViewDelegate](nstextviewdelegate.md)

### Conforming Types

- [NSOutlineView](nsoutlineview.md)
- [NSTableView](nstableview.md)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.

# NSTextDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.

## Declaration

```objectivec
@protocol NSTextDelegate <NSObject>
```

## Topics

### Changing text formatting

- [textDidChange:](nstextdelegate/textdidchange%28__%29.md): Informs the delegate that the text object has changed its characters or formatting attributes.

### Editing text

- [textShouldBeginEditing:](nstextdelegate/textshouldbeginediting%28__%29.md): Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.
- [textDidBeginEditing:](nstextdelegate/textdidbeginediting%28__%29.md): Informs the delegate that the text object has begun editing (that the user has begun changing it).
- [textShouldEndEditing:](nstextdelegate/textshouldendediting%28__%29.md): Invoked from a text object’s implementation of [resignFirstResponder](nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.
- [textDidEndEditing:](nstextdelegate/textdidendediting%28__%29.md): Informs the delegate that the text object has finished editing (that it has resigned first responder status).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSTextViewDelegate](nstextviewdelegate.md)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.
