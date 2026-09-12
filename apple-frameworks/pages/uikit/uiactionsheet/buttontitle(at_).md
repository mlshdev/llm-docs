> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/buttontitle(at:)](https://developer.apple.com/documentation/uikit/uiactionsheet/buttontitle(at:))

# buttonTitle(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the title of the button at the specified index.

> For more information, see [UIActionSheet](../uiactionsheet.md).

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

### Related Documentation

- [show(in:)](show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.

### Configuring buttons

- [addButton(withTitle:)](addbutton%28withtitle_%29.md): Deprecated. Adds a custom button to the action sheet.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [destructiveButtonIndex](destructivebuttonindex.md): Deprecated. The index number of the destructive button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first custom button.

# buttonTitleAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the title of the button at the specified index.

> For more information, see [UIActionSheet](../uiactionsheet.md).

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

### Related Documentation

- [showInView:](show%28in_%29.md): Deprecated. Displays an action sheet that originates from the specified view.

### Configuring buttons

- [addButtonWithTitle:](addbutton%28withtitle_%29.md): Deprecated. Adds a custom button to the action sheet.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [destructiveButtonIndex](destructivebuttonindex.md): Deprecated. The index number of the destructive button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first custom button.
