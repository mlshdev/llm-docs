> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewdelegate/pickerview(_:viewforrow:forcomponent:reusing:)](https://developer.apple.com/documentation/uikit/uipickerviewdelegate/pickerview(_:viewforrow:forcomponent:reusing:))

# pickerView(\_:viewForRow:forComponent:reusing:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called by the picker view when it needs the view to use for a given row in a given component.

## Declaration

```swift
optional func pickerView(_ pickerView: UIPickerView, viewForRow row: Int, forComponent component: Int, reusing view: UIView?) -> UIView
```

## Parameters

- `pickerView`: An object representing the picker view requesting the data.
- `row`: A zero-indexed number identifying a row of `component`. Rows are numbered top-to-bottom.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.
- `view`: A view object that was previously used for this row, but is now hidden and cached by the picker view.

<a id="return-value"></a>

## Return Value

A view object to use as the content of `row`. The object can be any subclass of [UIView](../uiview.md), such as [UILabel](../uilabel.md), [UIImageView](../uiimageview.md), or even a custom view.

<a id="Discussion"></a>

## Discussion

If the previously used view (the `view` parameter) is adequate, return that. If you return a different view, the previously used view is released. The picker view centers the returned view in the rectangle for `row`.

## See Also

### Setting the content of component rows

- [pickerView(\_:titleForRow:forComponent:)](pickerview%28__titleforrow_forcomponent_%29.md): Called by the picker view when it needs the title to use for a given row in a given component.
- [pickerView(\_:attributedTitleForRow:forComponent:)](pickerview%28__attributedtitleforrow_forcomponent_%29.md): Called by the picker view when it needs the styled title to use for a given row in a given component.

# pickerView:viewForRow:forComponent:reusingView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Called by the picker view when it needs the view to use for a given row in a given component.

## Declaration

```objectivec
- (UIView *) pickerView:(UIPickerView *) pickerView viewForRow:(NSInteger) row forComponent:(NSInteger) component reusingView:(UIView *) view;
```

## Parameters

- `pickerView`: An object representing the picker view requesting the data.
- `row`: A zero-indexed number identifying a row of `component`. Rows are numbered top-to-bottom.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.
- `view`: A view object that was previously used for this row, but is now hidden and cached by the picker view.

<a id="return-value"></a>

## Return Value

A view object to use as the content of `row`. The object can be any subclass of [UIView](../uiview.md), such as [UILabel](../uilabel.md), [UIImageView](../uiimageview.md), or even a custom view.

<a id="Discussion"></a>

## Discussion

If the previously used view (the `view` parameter) is adequate, return that. If you return a different view, the previously used view is released. The picker view centers the returned view in the rectangle for `row`.

## See Also

### Setting the content of component rows

- [pickerView:titleForRow:forComponent:](pickerview%28__titleforrow_forcomponent_%29.md): Called by the picker view when it needs the title to use for a given row in a given component.
- [pickerView:attributedTitleForRow:forComponent:](pickerview%28__attributedtitleforrow_forcomponent_%29.md): Called by the picker view when it needs the styled title to use for a given row in a given component.
