> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avroutepickerview/setroutepickerbuttoncolor(_:for:)](https://developer.apple.com/documentation/avkit/avroutepickerview/setroutepickerbuttoncolor(_:for:))

# setRoutePickerButtonColor(\_:for:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Sets the route picker button color for the specified state.

## Declaration

```swift
func setRoutePickerButtonColor(_ color: NSColor?, for state: AVRoutePickerView.ButtonState)
```

## Parameters

- `color`: The route picker button color to set.
- `state`: The button state.

## See Also

### Configuring the route picker view

- [activeTintColor](activetintcolor.md): The view’s tint color when AirPlay is active.
- [isRoutePickerButtonBordered](isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [prioritizesVideoDevices](prioritizesvideodevices.md): A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.
- [routePickerButtonStyle](routepickerbuttonstyle.md): The button style for the route picker.
- [AVRoutePickerViewButtonStyle](../avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
- [routePickerButtonColor(for:)](routepickerbuttoncolor%28for_%29.md): Returns the color of the picker button for the specified state.
- [AVRoutePickerView.ButtonState](buttonstate.md): Constants that describe the available button states.

# setRoutePickerButtonColor:forState: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Sets the route picker button color for the specified state.

## Declaration

```objectivec
- (void) setRoutePickerButtonColor:(UIColor *) color forState:(AVRoutePickerViewButtonState) state;
```

```objectivec
- (void) setRoutePickerButtonColor:(NSColor *) color forState:(AVRoutePickerViewButtonState) state;
```

## Parameters

- `color`: The route picker button color to set.
- `state`: The button state.

## See Also

### Configuring the route picker view

- [activeTintColor](activetintcolor.md): The view’s tint color when AirPlay is active.
- [routePickerButtonBordered](isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [prioritizesVideoDevices](prioritizesvideodevices.md): A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.
- [routePickerButtonStyle](routepickerbuttonstyle.md): The button style for the route picker.
- [AVRoutePickerViewButtonStyle](../avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
- [routePickerButtonColorForState:](routepickerbuttoncolor%28for_%29.md): Returns the color of the picker button for the specified state.
- [AVRoutePickerViewButtonState](buttonstate.md): Constants that describe the available button states.
