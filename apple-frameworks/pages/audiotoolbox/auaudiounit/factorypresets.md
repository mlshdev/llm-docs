> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/factorypresets](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/factorypresets)

# factoryPresets (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A collection of presets provided by the audio unit’s developer.

## Declaration

```swift
var factoryPresets: [AUAudioUnitPreset]? { get }
```

<a id="Discussion"></a>

## Discussion

A preset provides audio unit users with an easily-selectable, fine-tuned set of parameters defined by the developer.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_FactoryPresets` API.

## See Also

### Managing Presets

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [fullStateForDocument](fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [currentPreset](currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [saveUserPreset(\_:)](saveuserpreset%28__%29.md)
- [deleteUserPreset(\_:)](deleteuserpreset%28__%29.md)
- [presetState(for:)](presetstate%28for_%29.md)

# factoryPresets (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A collection of presets provided by the audio unit’s developer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<AUAudioUnitPreset *> * factoryPresets;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<AUAudioUnitPreset *> * factoryPresets;
```

<a id="Discussion"></a>

## Discussion

A preset provides audio unit users with an easily-selectable, fine-tuned set of parameters defined by the developer.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_FactoryPresets` API.

## See Also

### Managing Presets

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [fullStateForDocument](fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [currentPreset](currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [saveUserPreset:error:](saveuserpreset%28__%29.md)
- [deleteUserPreset:error:](deleteuserpreset%28__%29.md)
- [presetStateFor:error:](presetstate%28for_%29.md)
