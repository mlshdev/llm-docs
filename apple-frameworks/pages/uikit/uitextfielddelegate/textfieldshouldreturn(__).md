> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfieldshouldreturn(_:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfieldshouldreturn(_:))

# textFieldShouldReturn(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate whether to process the pressing of the Return button for the text field.

## Declaration

```swift
optional func textFieldShouldReturn(_ textField: UITextField) -> Bool
```

## Parameters

- `textField`: The text field whose return button was pressed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text field should implement its default behavior for the return button; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The text field calls this method whenever the user taps the return button. You can use this method to implement any custom behavior when the button is tapped. For example, if you want to dismiss the keyboard when the user taps the return button, your implementation can call the [resignFirstResponder()](../uiresponder/resignfirstresponder%28%29.md) method.

## See Also

### Editing the text field’s text

- [textField(\_:shouldChangeCharactersIn:replacementString:)](textfield%28__shouldchangecharactersin_replacementstring_%29.md): Deprecated. Asks the delegate whether to change the specified text.
- [textFieldShouldClear(\_:)](textfieldshouldclear%28__%29.md): Asks the delegate whether to remove the text field’s current contents.

# textFieldShouldReturn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate whether to process the pressing of the Return button for the text field.

## Declaration

```objectivec
- (BOOL) textFieldShouldReturn:(UITextField *) textField;
```

## Parameters

- `textField`: The text field whose return button was pressed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text field should implement its default behavior for the return button; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The text field calls this method whenever the user taps the return button. You can use this method to implement any custom behavior when the button is tapped. For example, if you want to dismiss the keyboard when the user taps the return button, your implementation can call the [resignFirstResponder](../uiresponder/resignfirstresponder%28%29.md) method.

## See Also

### Editing the text field’s text

- [textField:shouldChangeCharactersInRange:replacementString:](textfield%28__shouldchangecharactersin_replacementstring_%29.md): Deprecated. Asks the delegate whether to change the specified text.
- [textFieldShouldClear:](textfieldshouldclear%28__%29.md): Asks the delegate whether to remove the text field’s current contents.
