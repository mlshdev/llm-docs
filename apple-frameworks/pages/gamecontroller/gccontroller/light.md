> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/light](https://developer.apple.com/documentation/gamecontroller/gccontroller/light)

# light (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The controller’s light settings.

## Declaration

```swift
var light: GCDeviceLight? { get }
```

<a id="Discussion"></a>

## Discussion

Use the light settings to signal the user or to create a more immersive experience. If the controller doesn’t provide light settings, this property is `nil`.

## See Also

### Accessing battery, haptics, and light objects

- [battery](battery.md): The controller’s battery information.
- [haptics](haptics.md): The controller’s haptics information.

# light (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The controller’s light settings.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) GCDeviceLight * light;
```

<a id="Discussion"></a>

## Discussion

Use the light settings to signal the user or to create a more immersive experience. If the controller doesn’t provide light settings, this property is `nil`.

## See Also

### Accessing battery, haptics, and light objects

- [battery](battery.md): The controller’s battery information.
- [haptics](haptics.md): The controller’s haptics information.
