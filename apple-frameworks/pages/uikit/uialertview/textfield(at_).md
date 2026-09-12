> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertview/textfield(at:)](https://developer.apple.com/documentation/uikit/uialertview/textfield(at:))

# textField(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the text field at the given index

## Declaration

```swift
func textField(at textFieldIndex: Int) -> UITextField?
```

## Parameters

- `textFieldIndex`: The index of the text field. The text field indices start at `0`.

<a id="return-value"></a>

## Return Value

The text field specified by index `textFieldIndex`.

<a id="Discussion"></a>

## Discussion

The number of text fields present in an alert is dependent on the style of the alert.

| Alert Style | Text Fields |
| --- | --- |
| [UIAlertViewStyle.default](../uialertviewstyle/default.md) | No user-editable text fields. |
| [UIAlertViewStyle.secureTextInput](../uialertviewstyle/securetextinput.md) | A single text field at index `0`. |
| [UIAlertViewStyle.plainTextInput](../uialertviewstyle/plaintextinput.md) | A single text field at index `0`. |
| [UIAlertViewStyle.loginAndPasswordInput](../uialertviewstyle/loginandpasswordinput.md) | The login field is at index `0`. The password field is at index `1`. |

If your application attempts to retrieve a text field with an index that is out of bounds, the alert raises an [rangeException](../../foundation/nsexceptionname/rangeexception.md).

## See Also

### Configuring buttons

- [addButton(withTitle:)](addbutton%28withtitle_%29.md): Deprecated. Adds a button to the receiver with the given title.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [buttonTitle(at:)](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the given index.
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first other button.

# textFieldAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the text field at the given index

## Declaration

```objectivec
- (UITextField *) textFieldAtIndex:(NSInteger) textFieldIndex;
```

## Parameters

- `textFieldIndex`: The index of the text field. The text field indices start at `0`.

<a id="return-value"></a>

## Return Value

The text field specified by index `textFieldIndex`.

<a id="Discussion"></a>

## Discussion

The number of text fields present in an alert is dependent on the style of the alert.

| Alert Style | Text Fields |
| --- | --- |
| [UIAlertViewStyleDefault](../uialertviewstyle/default.md) | No user-editable text fields. |
| [UIAlertViewStyleSecureTextInput](../uialertviewstyle/securetextinput.md) | A single text field at index `0`. |
| [UIAlertViewStylePlainTextInput](../uialertviewstyle/plaintextinput.md) | A single text field at index `0`. |
| [UIAlertViewStyleLoginAndPasswordInput](../uialertviewstyle/loginandpasswordinput.md) | The login field is at index `0`. The password field is at index `1`. |

If your application attempts to retrieve a text field with an index that is out of bounds, the alert raises an [NSRangeException](../../foundation/nsexceptionname/rangeexception.md).

## See Also

### Configuring buttons

- [addButtonWithTitle:](addbutton%28withtitle_%29.md): Deprecated. Adds a button to the receiver with the given title.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [buttonTitleAtIndex:](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the given index.
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first other button.
