> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avroutepickerview/prioritizesvideodevices](https://developer.apple.com/documentation/avkit/avroutepickerview/prioritizesvideodevices)

# prioritizesVideoDevices (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+

A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.

## Declaration

```swift
var prioritizesVideoDevices: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Configuring the route picker view

- [activeTintColor](activetintcolor.md): The view’s tint color when AirPlay is active.
- [isRoutePickerButtonBordered](isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [routePickerButtonStyle](routepickerbuttonstyle.md): The button style for the route picker.
- [AVRoutePickerViewButtonStyle](../avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
- [routePickerButtonColor(for:)](routepickerbuttoncolor%28for_%29.md): Returns the color of the picker button for the specified state.
- [setRoutePickerButtonColor(\_:for:)](setroutepickerbuttoncolor%28__for_%29.md): Sets the route picker button color for the specified state.
- [AVRoutePickerView.ButtonState](buttonstate.md): Constants that describe the available button states.

# prioritizesVideoDevices (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+

A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.

## Declaration

```objectivec
@property (nonatomic) BOOL prioritizesVideoDevices;
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Configuring the route picker view

- [activeTintColor](activetintcolor.md): The view’s tint color when AirPlay is active.
- [routePickerButtonBordered](isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [routePickerButtonStyle](routepickerbuttonstyle.md): The button style for the route picker.
- [AVRoutePickerViewButtonStyle](../avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
- [routePickerButtonColorForState:](routepickerbuttoncolor%28for_%29.md): Returns the color of the picker button for the specified state.
- [setRoutePickerButtonColor:forState:](setroutepickerbuttoncolor%28__for_%29.md): Sets the route picker button color for the specified state.
- [AVRoutePickerViewButtonState](buttonstate.md): Constants that describe the available button states.
