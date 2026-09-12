> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gchapticslocality/default](https://developer.apple.com/documentation/gamecontroller/gchapticslocality/default)

# default (Swift)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The default location of a haptics actuator on a game controller.

## Declaration

```swift
static let `default`: GCHapticsLocality
```

<a id="Discussion"></a>

## Discussion

Controllers must support this location, and it can be the same as [all](all.md).

## See Also

### Localities

- [all](all.md): All locations of haptics actuators on a game controller.
- [handles](handles.md): All handles on a game controller.
- [leftHandle](lefthandle.md): The left handle on a game controller.
- [rightHandle](righthandle.md): The right handle on a game controller.
- [triggers](triggers.md): All triggers on a game controller.
- [leftTrigger](lefttrigger.md): The left trigger on a game controller.
- [rightTrigger](righttrigger.md): The right trigger on a game controller.

# GCHapticsLocalityDefault (Objective-C)

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The default location of a haptics actuator on a game controller.

## Declaration

```objectivec
extern GCHapticsLocality const GCHapticsLocalityDefault;
```

<a id="Discussion"></a>

## Discussion

Controllers must support this location, and it can be the same as [GCHapticsLocalityAll](all.md).

## See Also

### Localities

- [GCHapticsLocalityAll](all.md): All locations of haptics actuators on a game controller.
- [GCHapticsLocalityHandles](handles.md): All handles on a game controller.
- [GCHapticsLocalityLeftHandle](lefthandle.md): The left handle on a game controller.
- [GCHapticsLocalityRightHandle](righthandle.md): The right handle on a game controller.
- [GCHapticsLocalityTriggers](triggers.md): All triggers on a game controller.
- [GCHapticsLocalityLeftTrigger](lefttrigger.md): The left trigger on a game controller.
- [GCHapticsLocalityRightTrigger](righttrigger.md): The right trigger on a game controller.
