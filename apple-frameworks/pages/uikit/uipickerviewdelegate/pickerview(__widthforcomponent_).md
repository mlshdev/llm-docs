> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewdelegate/pickerview(_:widthforcomponent:)](https://developer.apple.com/documentation/uikit/uipickerviewdelegate/pickerview(_:widthforcomponent:))

# pickerView(\_:widthForComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called by the picker view when it needs the row width to use for drawing row content.

## Declaration

```swift
optional func pickerView(_ pickerView: UIPickerView, widthForComponent component: Int) -> CGFloat
```

## Parameters

- `pickerView`: The picker view requesting this information.
- `component`: A zero-indexed number identifying a component of the picker view. Components are numbered left-to-right.

<a id="return-value"></a>

## Return Value

A float value indicating the width of the row in points.

## See Also

### Setting the dimensions of the picker view

- [pickerView(\_:rowHeightForComponent:)](pickerview%28__rowheightforcomponent_%29.md): Called by the picker view when it needs the row height to use for drawing row content.

# pickerView:widthForComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Called by the picker view when it needs the row width to use for drawing row content.

## Declaration

```objectivec
- (CGFloat) pickerView:(UIPickerView *) pickerView widthForComponent:(NSInteger) component;
```

## Parameters

- `pickerView`: The picker view requesting this information.
- `component`: A zero-indexed number identifying a component of the picker view. Components are numbered left-to-right.

<a id="return-value"></a>

## Return Value

A float value indicating the width of the row in points.

## See Also

### Setting the dimensions of the picker view

- [pickerView:rowHeightForComponent:](pickerview%28__rowheightforcomponent_%29.md): Called by the picker view when it needs the row height to use for drawing row content.
