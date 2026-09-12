> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemixerparameters/addspatialmixerparameters(identifier:source:listener:)](https://developer.apple.com/documentation/phase/phasemixerparameters/addspatialmixerparameters(identifier:source:listener:))

# addSpatialMixerParameters(identifier:source:listener:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds runtime parameters for a spatial mixer.

## Declaration

```swift
func addSpatialMixerParameters(identifier: String, source: PHASESource, listener: PHASEListener)
```

## Parameters

- `identifier`: The name of the spatial submixer.
- `source`: A location in the scene that plays audio.
- `listener`: An object that receives a source audio signal. The mixer scales and orients the sound the listener receives based on its [transform](../phaseobject/transform.md).

## See Also

### Positioning and Orienting Audio

- [addAmbientMixerParameters(identifier:listener:)](addambientmixerparameters%28identifier_listener_%29.md): Adds runtime parameters for an ambient mixer.

# addSpatialMixerParametersWithIdentifier:source:listener: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds runtime parameters for a spatial mixer.

## Declaration

```objectivec
- (void) addSpatialMixerParametersWithIdentifier:(NSString *) identifier source:(PHASESource *) source listener:(PHASEListener *) listener;
```

## Parameters

- `identifier`: The name of the spatial submixer.
- `source`: A location in the scene that plays audio.
- `listener`: An object that receives a source audio signal. The mixer scales and orients the sound the listener receives based on its [transform](../phaseobject/transform.md).

## See Also

### Positioning and Orienting Audio

- [addAmbientMixerParametersWithIdentifier:listener:](addambientmixerparameters%28identifier_listener_%29.md): Adds runtime parameters for an ambient mixer.
