> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avroutepickerviewbuttonstyle](https://developer.apple.com/documentation/avkit/avroutepickerviewbuttonstyle)

# AVRoutePickerViewButtonStyle (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** tvOS 11.0+

Constants that define the button styles a route picker view supports.

## Declaration

```swift
enum AVRoutePickerViewButtonStyle
```

## Topics

### Creating a button style

- [init(rawValue:)](avroutepickerviewbuttonstyle/init%28rawvalue_%29.md)

### Button Styles

- [AVRoutePickerViewButtonStyle.custom](avroutepickerviewbuttonstyle/custom.md): A custom button style.
- [AVRoutePickerViewButtonStyle.plain](avroutepickerviewbuttonstyle/plain.md): A plain button style.
- [AVRoutePickerViewButtonStyle.system](avroutepickerviewbuttonstyle/system.md): A system-defined button style.

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

- [activeTintColor](avroutepickerview/activetintcolor.md): The view’s tint color when AirPlay is active.
- [isRoutePickerButtonBordered](avroutepickerview/isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [prioritizesVideoDevices](avroutepickerview/prioritizesvideodevices.md): A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.
- [routePickerButtonStyle](avroutepickerview/routepickerbuttonstyle.md): The button style for the route picker.
- [routePickerButtonColor(for:)](avroutepickerview/routepickerbuttoncolor%28for_%29.md): Returns the color of the picker button for the specified state.
- [setRoutePickerButtonColor(\_:for:)](avroutepickerview/setroutepickerbuttoncolor%28__for_%29.md): Sets the route picker button color for the specified state.
- [AVRoutePickerView.ButtonState](avroutepickerview/buttonstate.md): Constants that describe the available button states.

# AVRoutePickerViewButtonStyle (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** tvOS 11.0+

Constants that define the button styles a route picker view supports.

## Declaration

```objectivec
enum AVRoutePickerViewButtonStyle : NSInteger;
```

## Topics

### Button Styles

- [AVRoutePickerViewButtonStyleCustom](avroutepickerviewbuttonstyle/custom.md): A custom button style.
- [AVRoutePickerViewButtonStylePlain](avroutepickerviewbuttonstyle/plain.md): A plain button style.
- [AVRoutePickerViewButtonStyleSystem](avroutepickerviewbuttonstyle/system.md): A system-defined button style.

## See Also

### Configuring the route picker view

- [activeTintColor](avroutepickerview/activetintcolor.md): The view’s tint color when AirPlay is active.
- [routePickerButtonBordered](avroutepickerview/isroutepickerbuttonbordered.md): A Boolean value that indicates whether the route picker button has a border.
- [prioritizesVideoDevices](avroutepickerview/prioritizesvideodevices.md): A Boolean value that indicates whether the route picker sorts video output devices to the top of the list.
- [routePickerButtonStyle](avroutepickerview/routepickerbuttonstyle.md): The button style for the route picker.
- [routePickerButtonColorForState:](avroutepickerview/routepickerbuttoncolor%28for_%29.md): Returns the color of the picker button for the specified state.
- [setRoutePickerButtonColor:forState:](avroutepickerview/setroutepickerbuttoncolor%28__for_%29.md): Sets the route picker button color for the specified state.
- [AVRoutePickerViewButtonState](avroutepickerview/buttonstate.md): Constants that describe the available button states.
