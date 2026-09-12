> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerbuttonvaluechangedhandler](https://developer.apple.com/documentation/gamecontroller/gccontrollerbuttonvaluechangedhandler)

# GCControllerButtonValueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that executes when a button’s state changes.

## Declaration

```swift
typealias GCControllerButtonValueChangedHandler = (GCControllerButtonInput, Float, Bool) -> Void
```

## Parameters

- `button`: The button element whose state changed.
- `value`: A normalized number between `0.0` (minimum) and `1.0` (maximum) that represents the amount of physical or simulated pressure that the user applies to the button.
- `pressed`: A Boolean value that indicates whether the user is pressing the button. If [true](https://developer.apple.com/documentation/swift/true), the user is pressing the button and the `value` parameter contains the amount of pressure. If [false](https://developer.apple.com/documentation/swift/false), the user isn’t applying any pressure and the `value` parameter is `0.0`.

## See Also

### Getting change information

- [touchedChangedHandler](gccontrollerbuttoninput/touchedchangedhandler.md): The block that the element calls when the user touches the button.
- [GCControllerButtonTouchedChangedHandler](gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [pressedChangedHandler](gccontrollerbuttoninput/pressedchangedhandler.md): The block that the element calls when the user presses or releases the button.
- [valueChangedHandler](gccontrollerbuttoninput/valuechangedhandler.md): The block that the element calls when the user changes the level of pressure on the button.

# GCControllerButtonValueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block that executes when a button’s state changes.

## Declaration

```objectivec
typedef void (^)(GCControllerButtonInput *, float, _Bool) GCControllerButtonValueChangedHandler;
```

## Parameters

- `button`: The button element whose state changed.
- `value`: A normalized number between `0.0` (minimum) and `1.0` (maximum) that represents the amount of physical or simulated pressure that the user applies to the button.
- `pressed`: A Boolean value that indicates whether the user is pressing the button. If [true](https://developer.apple.com/documentation/swift/true), the user is pressing the button and the `value` parameter contains the amount of pressure. If [false](https://developer.apple.com/documentation/swift/false), the user isn’t applying any pressure and the `value` parameter is `0.0`.

## See Also

### Getting change information

- [touchedChangedHandler](gccontrollerbuttoninput/touchedchangedhandler.md): The block that the element calls when the user touches the button.
- [GCControllerButtonTouchedChangedHandler](gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [pressedChangedHandler](gccontrollerbuttoninput/pressedchangedhandler.md): The block that the element calls when the user presses or releases the button.
- [valueChangedHandler](gccontrollerbuttoninput/valuechangedhandler.md): The block that the element calls when the user changes the level of pressure on the button.
