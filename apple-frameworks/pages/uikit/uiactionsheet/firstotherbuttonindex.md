> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/firstotherbuttonindex](https://developer.apple.com/documentation/uikit/uiactionsheet/firstotherbuttonindex)

# firstOtherButtonIndex (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

The index of the first custom button.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
var firstOtherButtonIndex: Int { get }
```

<a id="Discussion"></a>

## Discussion

Button indices start at `0`. The default value of this property is `-1`, which indicates that there are no other custom buttons.

## See Also

### Configuring buttons

- [addButton(withTitle:)](addbutton%28withtitle_%29.md): Deprecated. Adds a custom button to the action sheet.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [buttonTitle(at:)](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the specified index.
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [destructiveButtonIndex](destructivebuttonindex.md): Deprecated. The index number of the destructive button.

# firstOtherButtonIndex (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

The index of the first custom button.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger firstOtherButtonIndex;
```

<a id="Discussion"></a>

## Discussion

Button indices start at `0`. The default value of this property is `-1`, which indicates that there are no other custom buttons.

## See Also

### Configuring buttons

- [addButtonWithTitle:](addbutton%28withtitle_%29.md): Deprecated. Adds a custom button to the action sheet.
- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [buttonTitleAtIndex:](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the specified index.
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [destructiveButtonIndex](destructivebuttonindex.md): Deprecated. The index number of the destructive button.
