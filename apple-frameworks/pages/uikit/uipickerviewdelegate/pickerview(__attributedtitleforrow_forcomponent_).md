> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewdelegate/pickerview(_:attributedtitleforrow:forcomponent:)](https://developer.apple.com/documentation/uikit/uipickerviewdelegate/pickerview(_:attributedtitleforrow:forcomponent:))

# pickerView(\_:attributedTitleForRow:forComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called by the picker view when it needs the styled title to use for a given row in a given component.

## Declaration

```swift
optional func pickerView(_ pickerView: UIPickerView, attributedTitleForRow row: Int, forComponent component: Int) -> NSAttributedString?
```

## Parameters

- `pickerView`: An object representing the picker view requesting the data.
- `row`: A zero-indexed number identifying a row of `component`. Rows are numbered top-to-bottom.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.

<a id="return-value"></a>

## Return Value

The attributed string to use as the title of the indicated component row.

<a id="Discussion"></a>

## Discussion

If you implement both this method and the [pickerView(\_:titleForRow:forComponent:)](pickerview%28__titleforrow_forcomponent_%29.md) method, the picker view prefers the use of this method. However, if your implementation of this method returns `nil`, the picker view falls back to using the string returned by the [pickerView(\_:titleForRow:forComponent:)](pickerview%28__titleforrow_forcomponent_%29.md) method.

## See Also

### Setting the content of component rows

- [pickerView(\_:titleForRow:forComponent:)](pickerview%28__titleforrow_forcomponent_%29.md): Called by the picker view when it needs the title to use for a given row in a given component.
- [pickerView(\_:viewForRow:forComponent:reusing:)](pickerview%28__viewforrow_forcomponent_reusing_%29.md): Called by the picker view when it needs the view to use for a given row in a given component.

# pickerView:attributedTitleForRow:forComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called by the picker view when it needs the styled title to use for a given row in a given component.

## Declaration

```objectivec
- (NSAttributedString *) pickerView:(UIPickerView *) pickerView attributedTitleForRow:(NSInteger) row forComponent:(NSInteger) component;
```

## Parameters

- `pickerView`: An object representing the picker view requesting the data.
- `row`: A zero-indexed number identifying a row of `component`. Rows are numbered top-to-bottom.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.

<a id="return-value"></a>

## Return Value

The attributed string to use as the title of the indicated component row.

<a id="Discussion"></a>

## Discussion

If you implement both this method and the [pickerView:titleForRow:forComponent:](pickerview%28__titleforrow_forcomponent_%29.md) method, the picker view prefers the use of this method. However, if your implementation of this method returns `nil`, the picker view falls back to using the string returned by the [pickerView:titleForRow:forComponent:](pickerview%28__titleforrow_forcomponent_%29.md) method.

## See Also

### Setting the content of component rows

- [pickerView:titleForRow:forComponent:](pickerview%28__titleforrow_forcomponent_%29.md): Called by the picker view when it needs the title to use for a given row in a given component.
- [pickerView:viewForRow:forComponent:reusingView:](pickerview%28__viewforrow_forcomponent_reusing_%29.md): Called by the picker view when it needs the view to use for a given row in a given component.
