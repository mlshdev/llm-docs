> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerbuttoninput/ispressed](https://developer.apple.com/documentation/gamecontroller/gccontrollerbuttoninput/ispressed)

# isPressed (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the user is pressing the button.

## Declaration

```swift
var isPressed: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the user is putting pressure on the button; otherwise, the user isn’t.

For the DualSense, DualShock 4, and Siri Remote controllers, the framework simulates whether the user presses the button and the level of pressure for its touch surfaces.

## See Also

### Accessing input values

- [isTouched](istouched.md): A Boolean value that indicates whether the user is touching the button.
- [value](value.md): The level of pressure the user is applying to the button.

# pressed (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the user is pressing the button.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPressed) BOOL pressed;
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the user is putting pressure on the button; otherwise, the user isn’t.

For the DualSense, DualShock 4, and Siri Remote controllers, the framework simulates whether the user presses the button and the level of pressure for its touch surfaces.

## See Also

### Accessing input values

- [touched](istouched.md): A Boolean value that indicates whether the user is touching the button.
- [value](value.md): The level of pressure the user is applying to the button.
