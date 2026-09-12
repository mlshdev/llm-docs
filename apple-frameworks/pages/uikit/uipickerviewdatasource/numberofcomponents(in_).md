> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewdatasource/numberofcomponents(in:)](https://developer.apple.com/documentation/uikit/uipickerviewdatasource/numberofcomponents(in:))

# numberOfComponents(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the data source for the number of components in the picker view.

## Declaration

```swift
func numberOfComponents(in pickerView: UIPickerView) -> Int
```

## Parameters

- `pickerView`: The picker view requesting the data.

<a id="return-value"></a>

## Return Value

The number of components (or “columns”) that the picker view should display.

## See Also

### Providing counts for the picker view

- [pickerView(\_:numberOfRowsInComponent:)](pickerview%28__numberofrowsincomponent_%29.md): Asks the data source for the number of rows for a specified component.

# numberOfComponentsInPickerView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Asks the data source for the number of components in the picker view.

## Declaration

```objectivec
- (NSInteger) numberOfComponentsInPickerView:(UIPickerView *) pickerView;
```

## Parameters

- `pickerView`: The picker view requesting the data.

<a id="return-value"></a>

## Return Value

The number of components (or “columns”) that the picker view should display.

## See Also

### Providing counts for the picker view

- [pickerView:numberOfRowsInComponent:](pickerview%28__numberofrowsincomponent_%29.md): Asks the data source for the number of rows for a specified component.
