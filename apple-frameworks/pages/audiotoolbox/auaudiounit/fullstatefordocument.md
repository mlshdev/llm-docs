> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/fullstatefordocument](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/fullstatefordocument)

# fullStateForDocument (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.

## Declaration

```swift
var fullStateForDocument: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Hosts may use this property to save and restore the state of an audio unit being used. Some state, such as a parameter value, is suitable for saving in a user preset. Other state, such as a synthesizer’s primary tuning setting, could be considered global state suitable for saving in a user document.

Subclasses that do not implement this property interface with the [fullState](fullstate.md) property instead.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_ClassInfoFromDocument` API.

## See Also

### Managing Presets

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [factoryPresets](factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [currentPreset](currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [saveUserPreset(\_:)](saveuserpreset%28__%29.md)
- [deleteUserPreset(\_:)](deleteuserpreset%28__%29.md)
- [presetState(for:)](presetstate%28for_%29.md)

# fullStateForDocument (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * fullStateForDocument;
```

```objectivec
@property (atomic, copy, nullable) NSDictionary<NSString *,id> * fullStateForDocument;
```

<a id="Discussion"></a>

## Discussion

Hosts may use this property to save and restore the state of an audio unit being used. Some state, such as a parameter value, is suitable for saving in a user preset. Other state, such as a synthesizer’s primary tuning setting, could be considered global state suitable for saving in a user document.

Subclasses that do not implement this property interface with the [fullState](fullstate.md) property instead.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_ClassInfoFromDocument` API.

## See Also

### Managing Presets

- [fullState](fullstate.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.
- [factoryPresets](factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [currentPreset](currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [saveUserPreset:error:](saveuserpreset%28__%29.md)
- [deleteUserPreset:error:](deleteuserpreset%28__%29.md)
- [presetStateFor:error:](presetstate%28for_%29.md)
