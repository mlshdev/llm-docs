> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avroutepickerview/buttonstate](https://developer.apple.com/documentation/avkit/avroutepickerview/buttonstate)

# AVRoutePickerView.ButtonState (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

Constants that describe the available button states.

## Declaration

```swift
enum ButtonState
```

## Topics

### Creating a button state

- [init(rawValue:)](buttonstate/init%28rawvalue_%29.md)

### Button States

- [AVRoutePickerView.ButtonState.normal](buttonstate/normal.md): The normal, or default, button state.
- [AVRoutePickerView.ButtonState.normalHighlighted](buttonstate/normalhighlighted.md): The highlighted button state when a mouse-down event occurs inside the button.
- [AVRoutePickerView.ButtonState.active](buttonstate/active.md): The button state when AirPlay is active.
- [AVRoutePickerView.ButtonState.activeHighlighted](buttonstate/activehighlighted.md): The highlighted button state when AirPlay is active.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the route picker view

- [activeTintColor](activetintcolor.md): The view’s tint color when AirPlay is active.
- [isRoutePickerButtonBordered](isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [prioritizesVideoDevices](prioritizesvideodevices.md): A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.
- [routePickerButtonStyle](routepickerbuttonstyle.md): The button style for the route picker.
- [AVRoutePickerViewButtonStyle](../avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
- [routePickerButtonColor(for:)](routepickerbuttoncolor%28for_%29.md): Returns the color of the picker button for the specified state.
- [setRoutePickerButtonColor(\_:for:)](setroutepickerbuttoncolor%28__for_%29.md): Sets the route picker button color for the specified state.

# AVRoutePickerViewButtonState (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

Constants that describe the available button states.

## Declaration

```objectivec
enum AVRoutePickerViewButtonState : NSInteger;
```

## Topics

### Button States

- [AVRoutePickerViewButtonStateNormal](buttonstate/normal.md): The normal, or default, button state.
- [AVRoutePickerViewButtonStateNormalHighlighted](buttonstate/normalhighlighted.md): The highlighted button state when a mouse-down event occurs inside the button.
- [AVRoutePickerViewButtonStateActive](buttonstate/active.md): The button state when AirPlay is active.
- [AVRoutePickerViewButtonStateActiveHighlighted](buttonstate/activehighlighted.md): The highlighted button state when AirPlay is active.

## See Also

### Configuring the route picker view

- [activeTintColor](activetintcolor.md): The view’s tint color when AirPlay is active.
- [routePickerButtonBordered](isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [prioritizesVideoDevices](prioritizesvideodevices.md): A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.
- [routePickerButtonStyle](routepickerbuttonstyle.md): The button style for the route picker.
- [AVRoutePickerViewButtonStyle](../avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
- [routePickerButtonColorForState:](routepickerbuttoncolor%28for_%29.md): Returns the color of the picker button for the specified state.
- [setRoutePickerButtonColor:forState:](setroutepickerbuttoncolor%28__for_%29.md): Sets the route picker button color for the specified state.
