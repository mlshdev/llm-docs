> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioenvironmentreverbparameters/loadfactoryreverbpreset(_:)

# loadFactoryReverbPreset(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads one of the reverbs factory presets.

## Declaration

```swift
func loadFactoryReverbPreset(_ preset: AVAudioUnitReverbPreset)
```

## Parameters

- `preset`: A reverb preset to load.

<a id="Discussion"></a>

## Discussion

Loading a factory reverb preset changes the sound of the reverb. This is independent of the filter which follows the reverb in the signal chain.

## See Also

### Related Documentation

- [enable](enable.md): A Boolean value that indicates whether reverberation is in an enabled state.

### Getting and Setting Reverb Values

- [level](level.md): Controls the amount of reverb, in decibels.
- [filterParameters](filterparameters.md): A filter that the system applies to the output.

# loadFactoryReverbPreset: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads one of the reverbs factory presets.

## Declaration

```objectivec
- (void) loadFactoryReverbPreset:(AVAudioUnitReverbPreset) preset;
```

## Parameters

- `preset`: A reverb preset to load.

<a id="Discussion"></a>

## Discussion

Loading a factory reverb preset changes the sound of the reverb. This is independent of the filter which follows the reverb in the signal chain.

## See Also

### Related Documentation

- [enable](enable.md): A Boolean value that indicates whether reverberation is in an enabled state.

### Getting and Setting Reverb Values

- [level](level.md): Controls the amount of reverb, in decibels.
- [filterParameters](filterparameters.md): A filter that the system applies to the output.
