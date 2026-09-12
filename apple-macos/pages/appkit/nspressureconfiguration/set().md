> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspressureconfiguration/set()](https://developer.apple.com/documentation/appkit/nspressureconfiguration/set())

# set() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10.3+

Changes the pressure configuration of the trackpad to the initialized pressure configuration.

## Declaration

```swift
func set()
```

<a id="Discussion"></a>

## Discussion

During a mouse drag or pressure event sequence, this method may be called to change the pressure configuration of the trackpad to the initialized pressure configuration. The trackpad’s pressure configuration is automatically reset when the user releases the mouse or ends the gesture. If called outside of a mouse drag or pressure event sequence, this method has no effect on the trackpad.

Ideally, pressure behavior should be configured by adjusting the `pressureConfiguration` property of a view prior to a mouse drag or gesture event occurring, such as before the view is displayed. Otherwise, the user may complete the mouse drag or gesture before the configuration has time to take effect.

## See Also

### Related Documentation

- [NSView](../nsview.md): The infrastructure for drawing, printing, and handling events in an app.

### Creating a Pressure Configuration Object

- [init(pressureBehavior:)](init%28pressurebehavior_%29.md): Initializes a pressure configuration object with a specified pressure behavior.

# set (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10.3+

Changes the pressure configuration of the trackpad to the initialized pressure configuration.

## Declaration

```objectivec
- (void) set;
```

<a id="Discussion"></a>

## Discussion

During a mouse drag or pressure event sequence, this method may be called to change the pressure configuration of the trackpad to the initialized pressure configuration. The trackpad’s pressure configuration is automatically reset when the user releases the mouse or ends the gesture. If called outside of a mouse drag or pressure event sequence, this method has no effect on the trackpad.

Ideally, pressure behavior should be configured by adjusting the `pressureConfiguration` property of a view prior to a mouse drag or gesture event occurring, such as before the view is displayed. Otherwise, the user may complete the mouse drag or gesture before the configuration has time to take effect.

## See Also

### Related Documentation

- [NSView](../nsview.md): The infrastructure for drawing, printing, and handling events in an app.

### Creating a Pressure Configuration Object

- [initWithPressureBehavior:](init%28pressurebehavior_%29.md): Initializes a pressure configuration object with a specified pressure behavior.
