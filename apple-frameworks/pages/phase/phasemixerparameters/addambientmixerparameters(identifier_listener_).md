> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemixerparameters/addambientmixerparameters(identifier:listener:)](https://developer.apple.com/documentation/phase/phasemixerparameters/addambientmixerparameters(identifier:listener:))

# addAmbientMixerParameters(identifier:listener:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds runtime parameters for an ambient mixer.

## Declaration

```swift
func addAmbientMixerParameters(identifier: String, listener: PHASEListener)
```

## Parameters

- `identifier`: The name of the spatial submixer.
- `listener`: An object that receives a source audio signal. The mixer orients the sound the listener receives based on its [transform](../phaseobject/transform.md).

## See Also

### Positioning and Orienting Audio

- [addSpatialMixerParameters(identifier:source:listener:)](addspatialmixerparameters%28identifier_source_listener_%29.md): Adds runtime parameters for a spatial mixer.

# addAmbientMixerParametersWithIdentifier:listener: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds runtime parameters for an ambient mixer.

## Declaration

```objectivec
- (void) addAmbientMixerParametersWithIdentifier:(NSString *) identifier listener:(PHASEListener *) listener;
```

## Parameters

- `identifier`: The name of the spatial submixer.
- `listener`: An object that receives a source audio signal. The mixer orients the sound the listener receives based on its [transform](../phaseobject/transform.md).

## See Also

### Positioning and Orienting Audio

- [addSpatialMixerParametersWithIdentifier:source:listener:](addspatialmixerparameters%28identifier_source_listener_%29.md): Adds runtime parameters for a spatial mixer.
