> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/rowsize(forcomponent:)](https://developer.apple.com/documentation/uikit/uipickerview/rowsize(forcomponent:))

# rowSize(forComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the size of a row for a component.

## Declaration

```swift
func rowSize(forComponent component: Int) -> CGSize
```

## Parameters

- `component`: A zero-indexed number identifying a component.

<a id="return-value"></a>

## Return Value

The size of rows in the given component. This is generally the size required to display the largest string or view used as a row in the component.

<a id="Discussion"></a>

## Discussion

A picker view fetches the value of this property by calling the [pickerView(\_:widthForComponent:)](../uipickerviewdelegate/pickerview%28__widthforcomponent_%29.md) and [pickerView(\_:rowHeightForComponent:)](../uipickerviewdelegate/pickerview%28__rowheightforcomponent_%29.md) delegate methods, and caches it. The default value is (`0`, `0`).

## See Also

### Getting the dimensions of the picker view

- [numberOfComponents](numberofcomponents.md): The number of components for the picker view.
- [numberOfRows(inComponent:)](numberofrows%28incomponent_%29.md): Returns the number of rows for a component.

# rowSizeForComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the size of a row for a component.

## Declaration

```objectivec
- (CGSize) rowSizeForComponent:(NSInteger) component;
```

## Parameters

- `component`: A zero-indexed number identifying a component.

<a id="return-value"></a>

## Return Value

The size of rows in the given component. This is generally the size required to display the largest string or view used as a row in the component.

<a id="Discussion"></a>

## Discussion

A picker view fetches the value of this property by calling the [pickerView:widthForComponent:](../uipickerviewdelegate/pickerview%28__widthforcomponent_%29.md) and [pickerView:rowHeightForComponent:](../uipickerviewdelegate/pickerview%28__rowheightforcomponent_%29.md) delegate methods, and caches it. The default value is (`0`, `0`).

## See Also

### Getting the dimensions of the picker view

- [numberOfComponents](numberofcomponents.md): The number of components for the picker view.
- [numberOfRowsInComponent:](numberofrows%28incomponent_%29.md): Returns the number of rows for a component.
