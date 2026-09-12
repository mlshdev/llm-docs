> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertview/buttontitle(at:)](https://developer.apple.com/documentation/uikit/uialertview/buttontitle(at:))

# buttonTitle(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the title of the button at the given index.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
func buttonTitle(at buttonIndex: Int) -> String?
```

## Parameters

- `buttonIndex`: The index of the button. The button indices start at `0`.

<a id="return-value"></a>

## Return Value

The title of the button specified by index `buttonIndex`.

## See Also

### Configuring buttons

- [addButton(withTitle:)](addbutton%28withtitle_%29.md): Deprecated. Adds a button to the receiver with the given title.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [textField(at:)](textfield%28at_%29.md): Deprecated. Returns the text field at the given index
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first other button.

# buttonTitleAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the title of the button at the given index.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (NSString *) buttonTitleAtIndex:(NSInteger) buttonIndex;
```

## Parameters

- `buttonIndex`: The index of the button. The button indices start at `0`.

<a id="return-value"></a>

## Return Value

The title of the button specified by index `buttonIndex`.

## See Also

### Configuring buttons

- [addButtonWithTitle:](addbutton%28withtitle_%29.md): Deprecated. Adds a button to the receiver with the given title.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [textFieldAtIndex:](textfield%28at_%29.md): Deprecated. Returns the text field at the given index
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first other button.
