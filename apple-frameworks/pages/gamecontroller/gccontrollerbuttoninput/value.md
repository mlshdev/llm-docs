> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerbuttoninput/value](https://developer.apple.com/documentation/gamecontroller/gccontrollerbuttoninput/value)

# value (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The level of pressure the user is applying to the button.

## Declaration

```swift
var value: Float { get }
```

<a id="Discussion"></a>

## Discussion

If the user applies pressure to the button, the [isPressed](ispressed.md) property is [true](https://developer.apple.com/documentation/swift/true) and this property indicates the amount of pressure. The framework normalizes the value to a number between `0.0` (minimum) and `1.0` (maximum). If the user isn’t pressing the button, the [isPressed](ispressed.md) property is [false](https://developer.apple.com/documentation/swift/false) and this property is `0.0`.

For axis buttons, such as thumbsticks and touchpads, the location on the positive or negative axis of the element simulates the pressure.

## See Also

### Accessing input values

- [isTouched](istouched.md): A Boolean value that indicates whether the user is touching the button.
- [isPressed](ispressed.md): A Boolean value that indicates whether the user is pressing the button.

# value (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The level of pressure the user is applying to the button.

## Declaration

```objectivec
@property (nonatomic, readonly) float value;
```

<a id="Discussion"></a>

## Discussion

If the user applies pressure to the button, the [pressed](ispressed.md) property is [true](https://developer.apple.com/documentation/swift/true) and this property indicates the amount of pressure. The framework normalizes the value to a number between `0.0` (minimum) and `1.0` (maximum). If the user isn’t pressing the button, the [pressed](ispressed.md) property is [false](https://developer.apple.com/documentation/swift/false) and this property is `0.0`.

For axis buttons, such as thumbsticks and touchpads, the location on the positive or negative axis of the element simulates the pressure.

## See Also

### Accessing input values

- [touched](istouched.md): A Boolean value that indicates whether the user is touching the button.
- [pressed](ispressed.md): A Boolean value that indicates whether the user is pressing the button.
