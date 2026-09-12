> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatializationmode/alwaysusechannelbased](https://developer.apple.com/documentation/phase/phasespatializationmode/alwaysusechannelbased)

# PHASESpatializationMode.alwaysUseChannelBased (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A mode that adds a 3D position and orientation to sound by panning across the available output channels.

## Declaration

```swift
case alwaysUseChannelBased
```

<a id="Discussion"></a>

## Discussion

The framework selects a channel layout for the output audio that’s compatible with the device’s channel configuration in Settings.

This mode applies the same effect regardless of the current output device.

## See Also

### Modes

- [PHASESpatializationMode.automatic](automatic.md): A mode that indicates that the framework chooses the spatialization mode.
- [PHASESpatializationMode.alwaysUseBinaural](alwaysusebinaural.md): A mode that introduces special processing to replicate a realistic spatial listening experience.

# PHASESpatializationModeAlwaysUseChannelBased (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A mode that adds a 3D position and orientation to sound by panning across the available output channels.

## Declaration

```objectivec
PHASESpatializationModeAlwaysUseChannelBased
```

<a id="Discussion"></a>

## Discussion

The framework selects a channel layout for the output audio that’s compatible with the device’s channel configuration in Settings.

This mode applies the same effect regardless of the current output device.

## See Also

### Modes

- [PHASESpatializationModeAutomatic](automatic.md): A mode that indicates that the framework chooses the spatialization mode.
- [PHASESpatializationModeAlwaysUseBinaural](alwaysusebinaural.md): A mode that introduces special processing to replicate a realistic spatial listening experience.
