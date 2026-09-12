> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitreverb/loadfactorypreset(_:)](https://developer.apple.com/documentation/avfaudio/avaudiounitreverb/loadfactorypreset(_:))

# loadFactoryPreset(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Configures the audio unit as a reverb preset.

## Declaration

```swift
func loadFactoryPreset(_ preset: AVAudioUnitReverbPreset)
```

## Parameters

- `preset`: The reverb preset.

<a id="Discussion"></a>

## Discussion

For more information about possible values, see [AVAudioUnitReverbPreset](../avaudiounitreverbpreset.md). The default value is [AVAudioUnitReverbPreset.mediumHall](../avaudiounitreverbpreset/mediumhall.md).

## See Also

### Configure the reverb

- [AVAudioUnitReverbPreset](../avaudiounitreverbpreset.md): Constants that represent preset reverbs.

# loadFactoryPreset: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Configures the audio unit as a reverb preset.

## Declaration

```objectivec
- (void) loadFactoryPreset:(AVAudioUnitReverbPreset) preset;
```

## Parameters

- `preset`: The reverb preset.

<a id="Discussion"></a>

## Discussion

For more information about possible values, see [AVAudioUnitReverbPreset](../avaudiounitreverbpreset.md). The default value is [AVAudioUnitReverbPresetMediumHall](../avaudiounitreverbpreset/mediumhall.md).

## See Also

### Configure the reverb

- [AVAudioUnitReverbPreset](../avaudiounitreverbpreset.md): Constants that represent preset reverbs.
