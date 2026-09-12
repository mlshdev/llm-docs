> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/fullstate](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/fullstate)

# fullState (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.

## Declaration

```swift
var fullState: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Hosts may use this property to save and restore the state of an audio unit being used in a user preset or document. The audio unit should not persist transitory properties such as stream formats, but should save and restore all other properties.

The base class implementation of this property saves the values of all parameters currently in the parameter tree. A subclass which dynamically produces multiple variants of the parameter tree needs to be aware that the serialization method does a depth-first preorder traversal of the tree.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_ClassInfo` API.

## See Also

### Managing Presets

- [fullStateForDocument](fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [factoryPresets](factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [currentPreset](currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [saveUserPreset(\_:)](saveuserpreset%28__%29.md)
- [deleteUserPreset(\_:)](deleteuserpreset%28__%29.md)
- [presetState(for:)](presetstate%28for_%29.md)

# fullState (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A persistable snapshot of the audio unit’s properties and parameters, suitable for saving as a user preset.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * fullState;
```

```objectivec
@property (atomic, copy, nullable) NSDictionary<NSString *,id> * fullState;
```

<a id="Discussion"></a>

## Discussion

Hosts may use this property to save and restore the state of an audio unit being used in a user preset or document. The audio unit should not persist transitory properties such as stream formats, but should save and restore all other properties.

The base class implementation of this property saves the values of all parameters currently in the parameter tree. A subclass which dynamically produces multiple variants of the parameter tree needs to be aware that the serialization method does a depth-first preorder traversal of the tree.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_ClassInfo` API.

## See Also

### Managing Presets

- [fullStateForDocument](fullstatefordocument.md): A persistable snapshot of the audio unit’s properties and parameters, suitable for saving in a user’s document.
- [factoryPresets](factorypresets.md): A collection of presets provided by the audio unit’s developer.
- [currentPreset](currentpreset.md): The audio unit’s last-selected preset.
- [supportsUserPresets](supportsuserpresets.md)
- [userPresets](userpresets.md)
- [saveUserPreset:error:](saveuserpreset%28__%29.md)
- [deleteUserPreset:error:](deleteuserpreset%28__%29.md)
- [presetStateFor:error:](presetstate%28for_%29.md)
