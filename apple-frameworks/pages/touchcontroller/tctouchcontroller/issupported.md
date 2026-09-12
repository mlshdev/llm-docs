> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchcontroller/issupported](https://developer.apple.com/documentation/touchcontroller/tctouchcontroller/issupported)

# isSupported (Swift)

**Framework:** Touch Controller  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Whether touch controllers are supported for the device.

## Declaration

```swift
class var isSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

Attempting to create a touch controller on an unsupported device will result in a fatal error.

## See Also

### Inspecting the touch controller

- [buttons](buttons.md): An array containing all the button controls managed by this controller.
- [controls](controls.md): An array containing all the touch controls managed by this controller.
- [device](device.md): The Metal device the touch control uses for rendering the touch controls.
- [directionPads](directionpads.md): An array containing all the direction pad controls managed by this controller.
- [drawableSize](drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [size](size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [switches](switches.md): An array containing all the switch controls managed by this controller.
- [isConnected](isconnected.md): A Boolean value that indicates whether the touch controller is connected to the Game Controller framework.
- [throttles](throttles.md): An array containing all the throttle controls managed by this controller.
- [thumbsticks](thumbsticks.md): An array containing all the thumbstick controls managed by this controller.
- [touchpads](touchpads.md): An array containing all the touchpad controls managed by this controller.

# supported (Objective-C)

**Framework:** Touch Controller  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Whether touch controllers are supported for the device.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isSupported) BOOL supported;
```

<a id="discussion"></a>

## Discussion

Attempting to create a touch controller on an unsupported device will result in a fatal error.

## See Also

### Inspecting the touch controller

- [buttons](buttons.md): An array containing all the button controls managed by this controller.
- [controls](controls.md): An array containing all the touch controls managed by this controller.
- [device](device.md): The Metal device the touch control uses for rendering the touch controls.
- [directionPads](directionpads.md): An array containing all the direction pad controls managed by this controller.
- [drawableSize](drawablesize.md): The size of the drawable to which the touch controller’s contents be drawn, in native pixels.
- [size](size.md): The size of the view the touch controller’s drawable is embedded in, in points.
- [switches](switches.md): An array containing all the switch controls managed by this controller.
- [connected](isconnected.md): A Boolean value that indicates whether the touch controller is connected to the Game Controller framework.
- [throttles](throttles.md): An array containing all the throttle controls managed by this controller.
- [thumbsticks](thumbsticks.md): An array containing all the thumbstick controls managed by this controller.
- [touchpads](touchpads.md): An array containing all the touchpad controls managed by this controller.
