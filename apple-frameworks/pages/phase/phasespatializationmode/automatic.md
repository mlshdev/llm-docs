> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatializationmode/automatic](https://developer.apple.com/documentation/phase/phasespatializationmode/automatic)

# PHASESpatializationMode.automatic (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A mode that indicates that the framework chooses the spatialization mode.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

This setting instructs the framework to automatically set a mode that determines how PHASE positions and orients sound in 3D space. The framework chooses a mode based on the output device:

- **`PHASESpatializationMode.binaural`**: Headphones (Bluetooth or line output) and the internal speakers of supported Mac or iOS devices.
- **`PHASESpatializationMode.channelBased`**: External speakers with 2 or more channels.

## See Also

### Modes

- [PHASESpatializationMode.alwaysUseBinaural](alwaysusebinaural.md): A mode that introduces special processing to replicate a realistic spatial listening experience.
- [PHASESpatializationMode.alwaysUseChannelBased](alwaysusechannelbased.md): A mode that adds a 3D position and orientation to sound by panning across the available output channels.

# PHASESpatializationModeAutomatic (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A mode that indicates that the framework chooses the spatialization mode.

## Declaration

```objectivec
PHASESpatializationModeAutomatic
```

<a id="Discussion"></a>

## Discussion

This setting instructs the framework to automatically set a mode that determines how PHASE positions and orients sound in 3D space. The framework chooses a mode based on the output device:

- **`PHASESpatializationMode.binaural`**: Headphones (Bluetooth or line output) and the internal speakers of supported Mac or iOS devices.
- **`PHASESpatializationMode.channelBased`**: External speakers with 2 or more channels.

## See Also

### Modes

- [PHASESpatializationModeAlwaysUseBinaural](alwaysusebinaural.md): A mode that introduces special processing to replicate a realistic spatial listening experience.
- [PHASESpatializationModeAlwaysUseChannelBased](alwaysusechannelbased.md): A mode that adds a 3D position and orientation to sound by panning across the available output channels.
