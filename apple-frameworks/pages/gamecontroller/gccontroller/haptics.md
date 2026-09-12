> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/haptics](https://developer.apple.com/documentation/gamecontroller/gccontroller/haptics)

# haptics (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The controller’s haptics information.

## Declaration

```swift
var haptics: GCDeviceHaptics? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to create [CHHapticEngine](../../corehaptics/chhapticengine.md) instances as necessary in your app. If the controller doesn’t provide haptics information, this property is `nil`.

## See Also

### Accessing battery, haptics, and light objects

- [battery](battery.md): The controller’s battery information.
- [light](light.md): The controller’s light settings.

# haptics (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The controller’s haptics information.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) GCDeviceHaptics * haptics;
```

<a id="Discussion"></a>

## Discussion

Use this property to create [CHHapticEngine](../../corehaptics/chhapticengine.md) instances as necessary in your app. If the controller doesn’t provide haptics information, this property is `nil`.

## See Also

### Accessing battery, haptics, and light objects

- [battery](battery.md): The controller’s battery information.
- [light](light.md): The controller’s light settings.
