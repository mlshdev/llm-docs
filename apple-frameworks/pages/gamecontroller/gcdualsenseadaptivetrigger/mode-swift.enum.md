> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/mode-swift.enum](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/mode-swift.enum)

# GCDualSenseAdaptiveTrigger.Mode (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

The possible modes of an adaptive trigger.

## Declaration

```swift
enum Mode
```

## Topics

### Modes

- [GCDualSenseAdaptiveTrigger.Mode.off](mode-swift.enum/off.md): Provides no adaptive trigger effects.
- [GCDualSenseAdaptiveTrigger.Mode.feedback](mode-swift.enum/feedback.md): Provides feedback when the user depresses the trigger equal to, or greater than, the start position.
- [GCDualSenseAdaptiveTrigger.Mode.weapon](mode-swift.enum/weapon.md): Provides feedback when the user depresses the trigger between the start and the end positions.
- [GCDualSenseAdaptiveTrigger.Mode.vibration](mode-swift.enum/vibration.md): Vibrates when the user depresses the trigger equal to, or greater than, the start position.
- [GCDualSenseAdaptiveTrigger.Mode.slopeFeedback](mode-swift.enum/slopefeedback.md): Provides feedback when the user tilts the trigger between the start and the end positions.

### Initializers

- [init(rawValue:)](mode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the mode

- [mode](mode-swift.property.md): The current configuration of the adaptive trigger.
- [setModeOff()](setmodeoff%28%29.md): Sets the mode to off and stops any trigger effect.

# GCDualSenseAdaptiveTriggerMode (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

The possible modes of an adaptive trigger.

## Declaration

```objectivec
enum GCDualSenseAdaptiveTriggerMode : NSInteger;
```

## Topics

### Modes

- [GCDualSenseAdaptiveTriggerModeOff](mode-swift.enum/off.md): Provides no adaptive trigger effects.
- [GCDualSenseAdaptiveTriggerModeFeedback](mode-swift.enum/feedback.md): Provides feedback when the user depresses the trigger equal to, or greater than, the start position.
- [GCDualSenseAdaptiveTriggerModeWeapon](mode-swift.enum/weapon.md): Provides feedback when the user depresses the trigger between the start and the end positions.
- [GCDualSenseAdaptiveTriggerModeVibration](mode-swift.enum/vibration.md): Vibrates when the user depresses the trigger equal to, or greater than, the start position.
- [GCDualSenseAdaptiveTriggerModeSlopeFeedback](mode-swift.enum/slopefeedback.md): Provides feedback when the user tilts the trigger between the start and the end positions.

## See Also

### Getting the mode

- [mode](mode-swift.property.md): The current configuration of the adaptive trigger.
- [setModeOff](setmodeoff%28%29.md): Sets the mode to off and stops any trigger effect.
