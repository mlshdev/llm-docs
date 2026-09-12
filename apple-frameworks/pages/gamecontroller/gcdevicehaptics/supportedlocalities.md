> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicehaptics/supportedlocalities](https://developer.apple.com/documentation/gamecontroller/gcdevicehaptics/supportedlocalities)

# supportedLocalities (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The locations of haptic actuators on the device.

## Declaration

```swift
var supportedLocalities: Set<GCHapticsLocality> { get }
```

## See Also

### Getting the localities

- [GCHapticsLocality](../gchapticslocality.md): The location of one or more haptics actuators on a game controller.

# supportedLocalities (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The locations of haptic actuators on the device.

## Declaration

```objectivec
@property (copy, readonly) NSSet<NSString *> * supportedLocalities;
```

## See Also

### Getting the localities

- [GCHapticsLocality](../gchapticslocality.md): The location of one or more haptics actuators on a game controller.
