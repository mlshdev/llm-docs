> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/selectedrow(incomponent:)](https://developer.apple.com/documentation/uikit/uipickerview/selectedrow(incomponent:))

# selectedRow(inComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the index of the selected row in a given component.

## Declaration

```swift
func selectedRow(inComponent component: Int) -> Int
```

## Parameters

- `component`: A zero-indexed number identifying a component of the picker view.

<a id="return-value"></a>

## Return Value

A zero-indexed number identifying the selected row, or `-1` if no row is selected.

## See Also

### Selecting rows in the view picker

- [selectRow(\_:inComponent:animated:)](selectrow%28__incomponent_animated_%29.md): Selects a row in a specified component of the picker view.

# selectedRowInComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the index of the selected row in a given component.

## Declaration

```objectivec
- (NSInteger) selectedRowInComponent:(NSInteger) component;
```

## Parameters

- `component`: A zero-indexed number identifying a component of the picker view.

<a id="return-value"></a>

## Return Value

A zero-indexed number identifying the selected row, or `-1` if no row is selected.

## See Also

### Selecting rows in the view picker

- [selectRow:inComponent:animated:](selectrow%28__incomponent_animated_%29.md): Selects a row in a specified component of the picker view.
