> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/pressureconfiguration](https://developer.apple.com/documentation/appkit/nsview/pressureconfiguration)

# pressureConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

Configures the behavior and progression of the Force Touch trackpad when responding to touch input produced by the user when the cursor is over the view.

## Declaration

```swift
var pressureConfiguration: NSPressureConfiguration? { get set }
```

<a id="Discussion"></a>

## Discussion

This property configures the behavior and progression of the Force Touch trackpad when responding to touch input produced by the user when the cursor is over the view.

Changing the value of this property does not affect a pressure event that’s already active. This property must be set prior to a mouse-down event, for use with future pressure gestures.

## See Also

### Related Documentation

- [NSPressureConfiguration](../nspressureconfiguration.md): An encapsulation of the behavior and progression of a Force Touch trackpad as it responds to specific events.
- [NSEvent.PressureBehavior](../nsevent/pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.
- [init(pressureBehavior:)](../nspressureconfiguration/init%28pressurebehavior_%29.md): Initializes a pressure configuration object with a specified pressure behavior.

# pressureConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

Configures the behavior and progression of the Force Touch trackpad when responding to touch input produced by the user when the cursor is over the view.

## Declaration

```objectivec
@property (strong, nullable) NSPressureConfiguration * pressureConfiguration;
```

<a id="Discussion"></a>

## Discussion

This property configures the behavior and progression of the Force Touch trackpad when responding to touch input produced by the user when the cursor is over the view.

Changing the value of this property does not affect a pressure event that’s already active. This property must be set prior to a mouse-down event, for use with future pressure gestures.

## See Also

### Related Documentation

- [NSPressureConfiguration](../nspressureconfiguration.md): An encapsulation of the behavior and progression of a Force Touch trackpad as it responds to specific events.
- [NSPressureBehavior](../nsevent/pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.
- [initWithPressureBehavior:](../nspressureconfiguration/init%28pressurebehavior_%29.md): Initializes a pressure configuration object with a specified pressure behavior.
