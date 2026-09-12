> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/selectrow(_:incomponent:animated:)](https://developer.apple.com/documentation/uikit/uipickerview/selectrow(_:incomponent:animated:))

# selectRow(\_:inComponent:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Selects a row in a specified component of the picker view.

## Declaration

```swift
func selectRow(_ row: Int, inComponent component: Int, animated: Bool)
```

## Parameters

- `row`: A zero-indexed number identifying a row of `component`.
- `component`: A zero-indexed number identifying a component of the picker view.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the selection by spinning the wheel (component) to the new value; if you specify [false](https://developer.apple.com/documentation/swift/false), the new selection is shown immediately.

## See Also

### Selecting rows in the view picker

- [selectedRow(inComponent:)](selectedrow%28incomponent_%29.md): Returns the index of the selected row in a given component.

# selectRow:inComponent:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Selects a row in a specified component of the picker view.

## Declaration

```objectivec
- (void) selectRow:(NSInteger) row inComponent:(NSInteger) component animated:(BOOL) animated;
```

## Parameters

- `row`: A zero-indexed number identifying a row of `component`.
- `component`: A zero-indexed number identifying a component of the picker view.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the selection by spinning the wheel (component) to the new value; if you specify [false](https://developer.apple.com/documentation/swift/false), the new selection is shown immediately.

## See Also

### Selecting rows in the view picker

- [selectedRowInComponent:](selectedrow%28incomponent_%29.md): Returns the index of the selected row in a given component.
