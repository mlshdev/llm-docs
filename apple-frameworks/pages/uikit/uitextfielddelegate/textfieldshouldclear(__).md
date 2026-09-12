> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfieldshouldclear(_:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfieldshouldclear(_:))

# textFieldShouldClear(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate whether to remove the text field’s current contents.

## Declaration

```swift
optional func textFieldShouldClear(_ textField: UITextField) -> Bool
```

## Parameters

- `textField`: The text field containing the text.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text field’s contents should be cleared; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The text field calls this method in response to the user pressing the built-in clear button. (This button is not shown by default but can be enabled by changing the value in the [clearButtonMode](../uitextfield/clearbuttonmode.md) property of the text field.) This method is also called when editing begins and the [clearsOnBeginEditing](../uitextfield/clearsonbeginediting.md) property of the text field is set to [true](https://developer.apple.com/documentation/swift/true).

If you do not implement this method, the text field clears the text as if the method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Editing the text field’s text

- [textField(\_:shouldChangeCharactersIn:replacementString:)](textfield%28__shouldchangecharactersin_replacementstring_%29.md): Deprecated. Asks the delegate whether to change the specified text.
- [textFieldShouldReturn(\_:)](textfieldshouldreturn%28__%29.md): Asks the delegate whether to process the pressing of the Return button for the text field.

# textFieldShouldClear: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate whether to remove the text field’s current contents.

## Declaration

```objectivec
- (BOOL) textFieldShouldClear:(UITextField *) textField;
```

## Parameters

- `textField`: The text field containing the text.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text field’s contents should be cleared; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The text field calls this method in response to the user pressing the built-in clear button. (This button is not shown by default but can be enabled by changing the value in the [clearButtonMode](../uitextfield/clearbuttonmode.md) property of the text field.) This method is also called when editing begins and the [clearsOnBeginEditing](../uitextfield/clearsonbeginediting.md) property of the text field is set to [true](https://developer.apple.com/documentation/swift/true).

If you do not implement this method, the text field clears the text as if the method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Editing the text field’s text

- [textField:shouldChangeCharactersInRange:replacementString:](textfield%28__shouldchangecharactersin_replacementstring_%29.md): Deprecated. Asks the delegate whether to change the specified text.
- [textFieldShouldReturn:](textfieldshouldreturn%28__%29.md): Asks the delegate whether to process the pressing of the Return button for the text field.
