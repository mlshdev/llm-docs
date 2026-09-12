> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/addbutton(withtitle:)](https://developer.apple.com/documentation/uikit/uiactionsheet/addbutton(withtitle:))

# addButton(withTitle:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Adds a custom button to the action sheet.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
func addButton(withTitle title: String?) -> Int
```

## Parameters

- `title`: The title of the new button.

<a id="return-value"></a>

## Return Value

The index of the new button. Button indices start at `0` and increase in the order they are added.

## See Also

### Related Documentation

- [UIActionSheet](../uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.

### Configuring buttons

- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [buttonTitle(at:)](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the specified index.
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [destructiveButtonIndex](destructivebuttonindex.md): Deprecated. The index number of the destructive button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first custom button.

# addButtonWithTitle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Adds a custom button to the action sheet.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (NSInteger) addButtonWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title of the new button.

<a id="return-value"></a>

## Return Value

The index of the new button. Button indices start at `0` and increase in the order they are added.

## See Also

### Related Documentation

- [UIActionSheet](../uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.

### Configuring buttons

- [numberOfButtons](numberofbuttons.md): Deprecated. The number of buttons on the action sheet.
- [buttonTitleAtIndex:](buttontitle%28at_%29.md): Deprecated. Returns the title of the button at the specified index.
- [cancelButtonIndex](cancelbuttonindex.md): Deprecated. The index number of the cancel button.
- [destructiveButtonIndex](destructivebuttonindex.md): Deprecated. The index number of the destructive button.
- [firstOtherButtonIndex](firstotherbuttonindex.md): Deprecated. The index of the first custom button.
