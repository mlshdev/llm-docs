> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/buttons](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/buttons)

# buttons (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An array containing all the button controls managed by this controller.

## Declaration

```swift
var buttons: [TCButton] { get }
```

## See Also

### Inspecting the touch controller

- [controls](controls.md): An array containing all the touch controls managed by this controller.
- [device](device.md): The Metal device the touch control uses for rendering the touch controls.
- [directionPads](directionpads.md): An array containing all the direction pad controls managed by this controller.
- [drawableSize](drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [size](size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [switches](switches.md): An array containing all the switch controls managed by this controller.
- [isConnected](isconnected.md): A Boolean value that indicates whether the touch controller is connected to the Game Controller framework.
- [isSupported](issupported.md): Whether touch controllers are supported for the device.
- [throttles](throttles.md): An array containing all the throttle controls managed by this controller.
- [thumbsticks](thumbsticks.md): An array containing all the thumbstick controls managed by this controller.
- [touchpads](touchpads.md): An array containing all the touchpad controls managed by this controller.

# buttons (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An array containing all the button controls managed by this controller.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<TCButton *> * buttons;
```

## See Also

### Inspecting the touch controller

- [controls](controls.md): An array containing all the touch controls managed by this controller.
- [device](device.md): The Metal device the touch control uses for rendering the touch controls.
- [directionPads](directionpads.md): An array containing all the direction pad controls managed by this controller.
- [drawableSize](drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [size](size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [switches](switches.md): An array containing all the switch controls managed by this controller.
- [connected](isconnected.md): A Boolean value that indicates whether the touch controller is connected to the Game Controller framework.
- [supported](issupported.md): Whether touch controllers are supported for the device.
- [throttles](throttles.md): An array containing all the throttle controls managed by this controller.
- [thumbsticks](thumbsticks.md): An array containing all the thumbstick controls managed by this controller.
- [touchpads](touchpads.md): An array containing all the touchpad controls managed by this controller.
