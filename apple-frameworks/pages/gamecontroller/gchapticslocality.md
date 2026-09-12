> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gchapticslocality](https://developer.apple.com/documentation/gamecontroller/gchapticslocality)

# GCHapticsLocality (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The location of one or more haptics actuators on a game controller.

## Declaration

```swift
struct GCHapticsLocality
```

<a id="Discussion"></a>

## Discussion

Use this symbol to specify the location of the actuators when creating a haptic engine.

## Topics

### Localities

- [default](gchapticslocality/default.md): The default location of a haptics actuator on a game controller.
- [all](gchapticslocality/all.md): All locations of haptics actuators on a game controller.
- [handles](gchapticslocality/handles.md): All handles on a game controller.
- [leftHandle](gchapticslocality/lefthandle.md): The left handle on a game controller.
- [rightHandle](gchapticslocality/righthandle.md): The right handle on a game controller.
- [triggers](gchapticslocality/triggers.md): All triggers on a game controller.
- [leftTrigger](gchapticslocality/lefttrigger.md): The left trigger on a game controller.
- [rightTrigger](gchapticslocality/righttrigger.md): The right trigger on a game controller.

### Initializers

- [init(rawValue:)](gchapticslocality/init%28rawvalue_%29.md): Creates a locality structure with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the localities

- [supportedLocalities](gcdevicehaptics/supportedlocalities.md): The locations of haptic actuators on the device.

# GCHapticsLocality (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The location of one or more haptics actuators on a game controller.

## Declaration

```objectivec
typedef NSString * GCHapticsLocality;
```

<a id="Discussion"></a>

## Discussion

Use this symbol to specify the location of the actuators when creating a haptic engine.

## Topics

### Localities

- [GCHapticsLocalityDefault](gchapticslocality/default.md): The default location of a haptics actuator on a game controller.
- [GCHapticsLocalityAll](gchapticslocality/all.md): All locations of haptics actuators on a game controller.
- [GCHapticsLocalityHandles](gchapticslocality/handles.md): All handles on a game controller.
- [GCHapticsLocalityLeftHandle](gchapticslocality/lefthandle.md): The left handle on a game controller.
- [GCHapticsLocalityRightHandle](gchapticslocality/righthandle.md): The right handle on a game controller.
- [GCHapticsLocalityTriggers](gchapticslocality/triggers.md): All triggers on a game controller.
- [GCHapticsLocalityLeftTrigger](gchapticslocality/lefttrigger.md): The left trigger on a game controller.
- [GCHapticsLocalityRightTrigger](gchapticslocality/righttrigger.md): The right trigger on a game controller.

## See Also

### Getting the localities

- [supportedLocalities](gcdevicehaptics/supportedlocalities.md): The locations of haptic actuators on the device.
