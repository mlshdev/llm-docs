> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewdelegate/pickerview(_:didselectrow:incomponent:)](https://developer.apple.com/documentation/uikit/uipickerviewdelegate/pickerview(_:didselectrow:incomponent:))

# pickerView(\_:didSelectRow:inComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called by the picker view when the user selects a row in a component.

## Declaration

```swift
optional func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int)
```

## Parameters

- `pickerView`: An object representing the picker view requesting the data.
- `row`: A zero-indexed number identifying a row of `component`. Rows are numbered top-to-bottom.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.

<a id="Discussion"></a>

## Discussion

To determine what value the user selected, the delegate uses the `row` index to access the value at the corresponding position in the array used to construct the component.

# pickerView:didSelectRow:inComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Called by the picker view when the user selects a row in a component.

## Declaration

```objectivec
- (void) pickerView:(UIPickerView *) pickerView didSelectRow:(NSInteger) row inComponent:(NSInteger) component;
```

## Parameters

- `pickerView`: An object representing the picker view requesting the data.
- `row`: A zero-indexed number identifying a row of `component`. Rows are numbered top-to-bottom.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.

<a id="Discussion"></a>

## Discussion

To determine what value the user selected, the delegate uses the `row` index to access the value at the corresponding position in the array used to construct the component.
