> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avroutepickerview/routepickerbuttoncolor(for:)](https://developer.apple.com/documentation/avkit/avroutepickerview/routepickerbuttoncolor(for:))

# routePickerButtonColor(for:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns the color of the picker button for the specified state.

## Declaration

```swift
func routePickerButtonColor(for state: AVRoutePickerView.ButtonState) -> NSColor
```

## Parameters

- `state`: The button state.

<a id="return-value"></a>

## Return Value

A color value for the specified state.

## See Also

### Configuring the route picker view

- [activeTintColor](activetintcolor.md): The view’s tint color when AirPlay is active.
- [isRoutePickerButtonBordered](isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [prioritizesVideoDevices](prioritizesvideodevices.md): A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.
- [routePickerButtonStyle](routepickerbuttonstyle.md): The button style for the route picker.
- [AVRoutePickerViewButtonStyle](../avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
- [setRoutePickerButtonColor(\_:for:)](setroutepickerbuttoncolor%28__for_%29.md): Sets the route picker button color for the specified state.
- [AVRoutePickerView.ButtonState](buttonstate.md): Constants that describe the available button states.

# routePickerButtonColorForState: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns the color of the picker button for the specified state.

## Declaration

```objectivec
- (UIColor *) routePickerButtonColorForState:(AVRoutePickerViewButtonState) state;
```

```objectivec
- (NSColor *) routePickerButtonColorForState:(AVRoutePickerViewButtonState) state;
```

## Parameters

- `state`: The button state.

<a id="return-value"></a>

## Return Value

A color value for the specified state.

## See Also

### Configuring the route picker view

- [activeTintColor](activetintcolor.md): The view’s tint color when AirPlay is active.
- [routePickerButtonBordered](isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [prioritizesVideoDevices](prioritizesvideodevices.md): A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.
- [routePickerButtonStyle](routepickerbuttonstyle.md): The button style for the route picker.
- [AVRoutePickerViewButtonStyle](../avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
- [setRoutePickerButtonColor:forState:](setroutepickerbuttoncolor%28__for_%29.md): Sets the route picker button color for the specified state.
- [AVRoutePickerViewButtonState](buttonstate.md): Constants that describe the available button states.
