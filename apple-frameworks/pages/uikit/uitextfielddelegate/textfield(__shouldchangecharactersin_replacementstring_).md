> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfield(_:shouldchangecharactersin:replacementstring:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfield(_:shouldchangecharactersin:replacementstring:))

# textField(\_:shouldChangeCharactersIn:replacementString:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the delegate whether to change the specified text.

## Declaration

```swift
optional func textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool
```

## Parameters

- `textField`: The text field containing the text.
- `range`: The range of characters to be replaced.
- `string`: The replacement string for the specified range. During typing, this parameter normally contains only the single new character that was typed, but it may contain more characters if the user is pasting text. When the user deletes one or more characters, the replacement string is empty.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified text range should be replaced; otherwise, [false](https://developer.apple.com/documentation/swift/false) to keep the old text.

<a id="Discussion"></a>

## Discussion

The text field calls this method whenever user actions cause its text to change. Use this method to validate text as it is typed by the user. For example, you could use this method to prevent the user from entering anything but numerical values.

## See Also

### Editing the text field’s text

- [textFieldShouldClear(\_:)](textfieldshouldclear%28__%29.md): Asks the delegate whether to remove the text field’s current contents.
- [textFieldShouldReturn(\_:)](textfieldshouldreturn%28__%29.md): Asks the delegate whether to process the pressing of the Return button for the text field.

# textField:shouldChangeCharactersInRange:replacementString: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the delegate whether to change the specified text.

## Declaration

```objectivec
- (BOOL) textField:(UITextField *) textField shouldChangeCharactersInRange:(NSRange) range replacementString:(NSString *) string;
```

## Parameters

- `textField`: The text field containing the text.
- `range`: The range of characters to be replaced.
- `string`: The replacement string for the specified range. During typing, this parameter normally contains only the single new character that was typed, but it may contain more characters if the user is pasting text. When the user deletes one or more characters, the replacement string is empty.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified text range should be replaced; otherwise, [false](https://developer.apple.com/documentation/swift/false) to keep the old text.

<a id="Discussion"></a>

## Discussion

The text field calls this method whenever user actions cause its text to change. Use this method to validate text as it is typed by the user. For example, you could use this method to prevent the user from entering anything but numerical values.

## See Also

### Editing the text field’s text

- [textFieldShouldClear:](textfieldshouldclear%28__%29.md): Asks the delegate whether to remove the text field’s current contents.
- [textFieldShouldReturn:](textfieldshouldreturn%28__%29.md): Asks the delegate whether to process the pressing of the Return button for the text field.
