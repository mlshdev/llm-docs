> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewdelegate/pickerview(_:titleforrow:forcomponent:)](https://developer.apple.com/documentation/uikit/uipickerviewdelegate/pickerview(_:titleforrow:forcomponent:))

# pickerView(\_:titleForRow:forComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called by the picker view when it needs the title to use for a given row in a given component.

## Declaration

```swift
optional func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String?
```

## Parameters

- `pickerView`: An object representing the picker view requesting the data.
- `row`: A zero-indexed number identifying a row of `component`. Rows are numbered top-to-bottom.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.

<a id="return-value"></a>

## Return Value

The string to use as the title of the indicated component row.

<a id="Discussion"></a>

## Discussion

If you implement both this method and the [pickerView(\_:attributedTitleForRow:forComponent:)](pickerview%28__attributedtitleforrow_forcomponent_%29.md) method, the picker view prefers the [pickerView(\_:attributedTitleForRow:forComponent:)](pickerview%28__attributedtitleforrow_forcomponent_%29.md) method. However, if that method returns `nil`, the picker view falls back to using the string returned by this method.

## See Also

### Setting the content of component rows

- [pickerView(\_:attributedTitleForRow:forComponent:)](pickerview%28__attributedtitleforrow_forcomponent_%29.md): Called by the picker view when it needs the styled title to use for a given row in a given component.
- [pickerView(\_:viewForRow:forComponent:reusing:)](pickerview%28__viewforrow_forcomponent_reusing_%29.md): Called by the picker view when it needs the view to use for a given row in a given component.

# pickerView:titleForRow:forComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Called by the picker view when it needs the title to use for a given row in a given component.

## Declaration

```objectivec
- (NSString *) pickerView:(UIPickerView *) pickerView titleForRow:(NSInteger) row forComponent:(NSInteger) component;
```

## Parameters

- `pickerView`: An object representing the picker view requesting the data.
- `row`: A zero-indexed number identifying a row of `component`. Rows are numbered top-to-bottom.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.

<a id="return-value"></a>

## Return Value

The string to use as the title of the indicated component row.

<a id="Discussion"></a>

## Discussion

If you implement both this method and the [pickerView:attributedTitleForRow:forComponent:](pickerview%28__attributedtitleforrow_forcomponent_%29.md) method, the picker view prefers the [pickerView:attributedTitleForRow:forComponent:](pickerview%28__attributedtitleforrow_forcomponent_%29.md) method. However, if that method returns `nil`, the picker view falls back to using the string returned by this method.

## See Also

### Setting the content of component rows

- [pickerView:attributedTitleForRow:forComponent:](pickerview%28__attributedtitleforrow_forcomponent_%29.md): Called by the picker view when it needs the styled title to use for a given row in a given component.
- [pickerView:viewForRow:forComponent:reusingView:](pickerview%28__viewforrow_forcomponent_reusing_%29.md): Called by the picker view when it needs the view to use for a given row in a given component.
