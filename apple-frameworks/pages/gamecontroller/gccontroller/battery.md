> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/battery](https://developer.apple.com/documentation/gamecontroller/gccontroller/battery)

# battery (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The controller’s battery information.

## Declaration

```swift
@NSCopying var battery: GCDeviceBattery? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to display the battery life or to warn the user when the controller’s battery level is low. If the controller doesn’t provide battery information, this property is `nil`.

## See Also

### Accessing battery, haptics, and light objects

- [haptics](haptics.md): The controller’s haptics information.
- [light](light.md): The controller’s light settings.

# battery (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The controller’s battery information.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) GCDeviceBattery * battery;
```

<a id="Discussion"></a>

## Discussion

Use this property to display the battery life or to warn the user when the controller’s battery level is low. If the controller doesn’t provide battery information, this property is `nil`.

## See Also

### Accessing battery, haptics, and light objects

- [haptics](haptics.md): The controller’s haptics information.
- [light](light.md): The controller’s light settings.
