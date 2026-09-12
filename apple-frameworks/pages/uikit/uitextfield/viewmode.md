> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/viewmode](https://developer.apple.com/documentation/uikit/uitextfield/viewmode)

# UITextField.ViewMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that define when overlay views appear in a text field.

## Declaration

```swift
enum ViewMode
```

## Topics

### Constants

- [UITextField.ViewMode.never](viewmode/never.md): The overlay view never appears.
- [UITextField.ViewMode.whileEditing](viewmode/whileediting.md): The overlay view is displayed only while text is being edited in the text field.
- [UITextField.ViewMode.unlessEditing](viewmode/unlessediting.md): The overlay view is displayed only when text is not being edited.
- [UITextField.ViewMode.always](viewmode/always.md): The overlay view is always displayed if the text field contains text.

### Initializers

- [init(rawValue:)](viewmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing overlay views

- [clearButtonMode](clearbuttonmode.md): A mode that controls when the standard Clear button appears in the text field.
- [leftView](leftview.md): The overlay view that displays on the left (or leading) side of the text field.
- [leftViewMode](leftviewmode.md): A mode that controls when the left overlay view appears in the text field.
- [rightView](rightview.md): The overlay view that displays on the right (or trailing) side of the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.

# UITextFieldViewMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that define when overlay views appear in a text field.

## Declaration

```objectivec
enum UITextFieldViewMode : NSInteger;
```

## Topics

### Constants

- [UITextFieldViewModeNever](viewmode/never.md): The overlay view never appears.
- [UITextFieldViewModeWhileEditing](viewmode/whileediting.md): The overlay view is displayed only while text is being edited in the text field.
- [UITextFieldViewModeUnlessEditing](viewmode/unlessediting.md): The overlay view is displayed only when text is not being edited.
- [UITextFieldViewModeAlways](viewmode/always.md): The overlay view is always displayed if the text field contains text.

## See Also

### Managing overlay views

- [clearButtonMode](clearbuttonmode.md): A mode that controls when the standard Clear button appears in the text field.
- [leftView](leftview.md): The overlay view that displays on the left (or leading) side of the text field.
- [leftViewMode](leftviewmode.md): A mode that controls when the left overlay view appears in the text field.
- [rightView](rightview.md): The overlay view that displays on the right (or trailing) side of the text field.
- [rightViewMode](rightviewmode.md): A mode that controls when the right overlay view appears in the text field.
