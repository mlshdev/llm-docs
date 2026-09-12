> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/saveuserpreset(_:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/saveuserpreset(_:))

# saveUserPreset(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func saveUserPreset(_ userPreset: AUAudioUnitPreset) throws
```

## See Also

### Managing Presets

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [fullStateForDocument](fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [factoryPresets](factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [currentPreset](currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [deleteUserPreset(\_:)](deleteuserpreset%28__%29.md)
- [presetState(for:)](presetstate%28for_%29.md)

# saveUserPreset:error: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (BOOL) saveUserPreset:(AUAudioUnitPreset *) userPreset error:(NSError **) outError;
```

## See Also

### Managing Presets

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [fullStateForDocument](fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [factoryPresets](factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [currentPreset](currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [deleteUserPreset:error:](deleteuserpreset%28__%29.md)
- [presetStateFor:error:](presetstate%28for_%29.md)
