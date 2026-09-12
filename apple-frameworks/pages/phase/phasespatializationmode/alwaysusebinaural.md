> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatializationmode/alwaysusebinaural](https://developer.apple.com/documentation/phase/phasespatializationmode/alwaysusebinaural)

# PHASESpatializationMode.alwaysUseBinaural (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A mode that introduces special processing to replicate a realistic spatial listening experience.

## Declaration

```swift
case alwaysUseBinaural
```

<a id="Discussion"></a>

## Discussion

Enable this mode to override a system or user preference and implement binaural audio output. When binaural mode plays through internal speakers on supported Apple devices, the framework applies additional effects to the output to achieve a sound experience comparable to one with headphones.

## See Also

### Modes

- [PHASESpatializationMode.automatic](automatic.md): A mode that indicates that the framework chooses the spatialization mode.
- [PHASESpatializationMode.alwaysUseChannelBased](alwaysusechannelbased.md): A mode that adds a 3D position and orientation to sound by panning across the available output channels.

# PHASESpatializationModeAlwaysUseBinaural (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A mode that introduces special processing to replicate a realistic spatial listening experience.

## Declaration

```objectivec
PHASESpatializationModeAlwaysUseBinaural
```

<a id="Discussion"></a>

## Discussion

Enable this mode to override a system or user preference and implement binaural audio output. When binaural mode plays through internal speakers on supported Apple devices, the framework applies additional effects to the output to achieve a sound experience comparable to one with headphones.

## See Also

### Modes

- [PHASESpatializationModeAutomatic](automatic.md): A mode that indicates that the framework chooses the spatialization mode.
- [PHASESpatializationModeAlwaysUseChannelBased](alwaysusechannelbased.md): A mode that adds a 3D position and orientation to sound by panning across the available output channels.
