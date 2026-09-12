> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/currentpreset](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/currentpreset)

# currentPreset (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s last-selected preset.

## Declaration

```swift
var currentPreset: AUAudioUnitPreset? { get set }
```

<a id="Discussion"></a>

## Discussion

Hosts can let the user select a preset by setting this property. When getting this property, the preset does not reflect whether parameters may have been modified since it was selected.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_PresentPreset` API.

## See Also

### Managing Presets

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [fullStateForDocument](fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [factoryPresets](factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [saveUserPreset(\_:)](saveuserpreset%28__%29.md)
- [deleteUserPreset(\_:)](deleteuserpreset%28__%29.md)
- [presetState(for:)](presetstate%28for_%29.md)

# currentPreset (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The audio unit’s last-selected preset.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) AUAudioUnitPreset * currentPreset;
```

```objectivec
@property (atomic, retain, nullable) AUAudioUnitPreset * currentPreset;
```

<a id="Discussion"></a>

## Discussion

Hosts can let the user select a preset by setting this property. When getting this property, the preset does not reflect whether parameters may have been modified since it was selected.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_PresentPreset` API.

## See Also

### Managing Presets

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [fullStateForDocument](fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [factoryPresets](factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [saveUserPreset:error:](saveuserpreset%28__%29.md)
- [deleteUserPreset:error:](deleteuserpreset%28__%29.md)
- [presetStateFor:error:](presetstate%28for_%29.md)
