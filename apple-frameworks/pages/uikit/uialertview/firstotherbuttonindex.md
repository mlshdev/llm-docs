> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertview/firstotherbuttonindex](https://developer.apple.com/documentation/uikit/uialertview/firstotherbuttonindex)

# firstOtherButtonIndex (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The index of the first other button.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
var firstOtherButtonIndex: Int { get }
```

<a id="Discussion"></a>

## Discussion

The button indices start at `0`. If `-1`, then the index is not set. This property is ignored if there are no other buttons. The default value is `-1`.

## See Also

### Configuring buttons

- [addButton(withTitle:)](addbutton%28withtitle_%29.md): Deprecated. Adds a button to the receiver with the given title.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [buttonTitle(at:)](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the given index.
- [textField(at:)](textfield%28at_%29.md): Deprecated. Returns the text field at the given index
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.

# firstOtherButtonIndex (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The index of the first other button.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger firstOtherButtonIndex;
```

<a id="Discussion"></a>

## Discussion

The button indices start at `0`. If `-1`, then the index is not set. This property is ignored if there are no other buttons. The default value is `-1`.

## See Also

### Configuring buttons

- [addButtonWithTitle:](addbutton%28withtitle_%29.md): Deprecated. Adds a button to the receiver with the given title.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the alert view.
- [buttonTitleAtIndex:](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the given index.
- [textFieldAtIndex:](textfield%28at_%29.md): Deprecated. Returns the text field at the given index
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
