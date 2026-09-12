> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertview/addbutton(withtitle:)](https://developer.apple.com/documentation/uikit/uialertview/addbutton(withtitle:))

# addButton(withTitle:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Adds a button to the receiver with the given title.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
func addButton(withTitle title: String?) -> Int
```

## Parameters

- `title`: The title of the new button.

<a id="return-value"></a>

## Return Value

The index of the new button. Button indices start at `0` and increase in the order they are added.

<a id="Discussion"></a>

## Discussion

Adding too many buttons can cause the alert view to scroll. For guidelines on the best ways to use an alert in an app, see [Temporary Views](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/MobileHIG/Alerts.html#//apple_ref/doc/uid/TP40006556-CH14).

## See Also

### Related Documentation

- [message](message.md): Deprecated. Descriptive text that provides more details than the title.

### Configuring buttons

- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [buttonTitle(at:)](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the given index.
- [textField(at:)](textfield%28at_%29.md): Deprecated. Returns the text field at the given index
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first other button.

# addButtonWithTitle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Adds a button to the receiver with the given title.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (NSInteger) addButtonWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title of the new button.

<a id="return-value"></a>

## Return Value

The index of the new button. Button indices start at `0` and increase in the order they are added.

<a id="Discussion"></a>

## Discussion

Adding too many buttons can cause the alert view to scroll. For guidelines on the best ways to use an alert in an app, see [Temporary Views](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/MobileHIG/Alerts.html#//apple_ref/doc/uid/TP40006556-CH14).

## See Also

### Related Documentation

- [message](message.md): Deprecated. Descriptive text that provides more details than the title.

### Configuring buttons

- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [buttonTitleAtIndex:](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the given index.
- [textFieldAtIndex:](textfield%28at_%29.md): Deprecated. Returns the text field at the given index
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first other button.
