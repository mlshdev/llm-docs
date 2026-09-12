> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/cancelbuttonindex](https://developer.apple.com/documentation/uikit/uiactionsheet/cancelbuttonindex)

# cancelButtonIndex (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

The index number of the cancel button.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
var cancelButtonIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Button indices start at `0`. The default value of this property is normally `-1`, which indicates that no cancel button has been set. However, a cancel button may be created and set automatically by the [init(title:delegate:cancelButtonTitle:destructiveButtonTitle:)](init%28title_delegate_cancelbuttontitle_destructivebuttontitle_%29.md) method. If you use that method to create a cancel button, you should not change the value of this property.

When presenting an action sheet on an iPad, there are times when you should not include a cancel button. For more information on when you should include a cancel button, see the class overview or [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/).

## See Also

### Configuring buttons

- [addButton(withTitle:)](addbutton%28withtitle_%29.md): Deprecated. Adds a custom button to the action sheet.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [buttonTitle(at:)](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the specified index.
- [destructiveButtonIndex](destructivebuttonindex.md): Deprecated. The index number of the destructive button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first custom button.

# cancelButtonIndex (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

The index number of the cancel button.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
@property (nonatomic) NSInteger cancelButtonIndex;
```

<a id="Discussion"></a>

## Discussion

Button indices start at `0`. The default value of this property is normally `-1`, which indicates that no cancel button has been set. However, a cancel button may be created and set automatically by the [initWithTitle:delegate:cancelButtonTitle:destructiveButtonTitle:otherButtonTitles:](init%28title_delegate_cancelbuttontitle_destructivebuttontitle_%29.md) method. If you use that method to create a cancel button, you should not change the value of this property.

When presenting an action sheet on an iPad, there are times when you should not include a cancel button. For more information on when you should include a cancel button, see the class overview or [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/).

## See Also

### Configuring buttons

- [addButtonWithTitle:](addbutton%28withtitle_%29.md): Deprecated. Adds a custom button to the action sheet.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [buttonTitleAtIndex:](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the specified index.
- [destructiveButtonIndex](destructivebuttonindex.md): Deprecated. The index number of the destructive button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first custom button.
