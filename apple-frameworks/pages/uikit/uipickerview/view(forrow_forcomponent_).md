> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/view(forrow:forcomponent:)](https://developer.apple.com/documentation/uikit/uipickerview/view(forrow:forcomponent:))

# view(forRow:forComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the view used by the picker view for a given row and component.

## Declaration

```swift
func view(forRow row: Int, forComponent component: Int) -> UIView?
```

## Parameters

- `row`: The zero-indexed number of a row of the picker view.
- `component`: The zero-indexed number of a component of the picker view.

<a id="return-value"></a>

## Return Value

The view provided by the delegate in the [pickerView(\_:viewForRow:forComponent:reusing:)](../uipickerviewdelegate/pickerview%28__viewforrow_forcomponent_reusing_%29.md) method. Returns `nil` if the specified row of the component is not visible or if the delegate does not implement p`ickerView:viewForRow:forComponent:reusingView:`.

# viewForRow:forComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the view used by the picker view for a given row and component.

## Declaration

```objectivec
- (UIView *) viewForRow:(NSInteger) row forComponent:(NSInteger) component;
```

## Parameters

- `row`: The zero-indexed number of a row of the picker view.
- `component`: The zero-indexed number of a component of the picker view.

<a id="return-value"></a>

## Return Value

The view provided by the delegate in the [pickerView:viewForRow:forComponent:reusingView:](../uipickerviewdelegate/pickerview%28__viewforrow_forcomponent_reusing_%29.md) method. Returns `nil` if the specified row of the component is not visible or if the delegate does not implement p`ickerView:viewForRow:forComponent:reusingView:`.
