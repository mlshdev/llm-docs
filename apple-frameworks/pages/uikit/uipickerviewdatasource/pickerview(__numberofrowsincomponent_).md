> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewdatasource/pickerview(_:numberofrowsincomponent:)](https://developer.apple.com/documentation/uikit/uipickerviewdatasource/pickerview(_:numberofrowsincomponent:))

# pickerView(\_:numberOfRowsInComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the data source for the number of rows for a specified component.

## Declaration

```swift
func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int
```

## Parameters

- `pickerView`: The picker view requesting the data.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.

<a id="return-value"></a>

## Return Value

The number of rows for the component.

## See Also

### Providing counts for the picker view

- [numberOfComponents(in:)](numberofcomponents%28in_%29.md): Asks the data source for the number of components in the picker view.

# pickerView:numberOfRowsInComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Asks the data source for the number of rows for a specified component.

## Declaration

```objectivec
- (NSInteger) pickerView:(UIPickerView *) pickerView numberOfRowsInComponent:(NSInteger) component;
```

## Parameters

- `pickerView`: The picker view requesting the data.
- `component`: A zero-indexed number identifying a component of `pickerView`. Components are numbered left-to-right.

<a id="return-value"></a>

## Return Value

The number of rows for the component.

## See Also

### Providing counts for the picker view

- [numberOfComponentsInPickerView:](numberofcomponents%28in_%29.md): Asks the data source for the number of components in the picker view.
