> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiounitdistortion/loadfactorypreset(_:)

# loadFactoryPreset(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Configures the audio distortion unit by loading a distortion preset.

## Declaration

```swift
func loadFactoryPreset(_ preset: AVAudioUnitDistortionPreset)
```

## Parameters

- `preset`: The distortion preset.

<a id="Discussion"></a>

## Discussion

For more information about possible values for `preset`, see [AVAudioUnitDistortionPreset](../avaudiounitdistortionpreset.md). The default value is [AVAudioUnitDistortionPreset.drumsBitBrush](../avaudiounitdistortionpreset/drumsbitbrush.md).

## See Also

### Configuring the distortion

- [AVAudioUnitDistortionPreset](../avaudiounitdistortionpreset.md): Constants that represent preset audio distortions.

# loadFactoryPreset: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Configures the audio distortion unit by loading a distortion preset.

## Declaration

```objectivec
- (void) loadFactoryPreset:(AVAudioUnitDistortionPreset) preset;
```

## Parameters

- `preset`: The distortion preset.

<a id="Discussion"></a>

## Discussion

For more information about possible values for `preset`, see [AVAudioUnitDistortionPreset](../avaudiounitdistortionpreset.md). The default value is [AVAudioUnitDistortionPresetDrumsBitBrush](../avaudiounitdistortionpreset/drumsbitbrush.md).

## See Also

### Configuring the distortion

- [AVAudioUnitDistortionPreset](../avaudiounitdistortionpreset.md): Constants that represent preset audio distortions.
