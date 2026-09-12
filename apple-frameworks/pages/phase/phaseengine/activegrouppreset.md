> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/activegrouppreset](https://developer.apple.com/documentation/phase/phaseengine/activegrouppreset)

# activeGroupPreset (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The settings that define playback for a group of sounds.

## Declaration

```swift
var activeGroupPreset: PHASEGroupPreset? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns the most recent group preset on which the app calls [activate()](../phasegrouppreset/activate%28%29.md). Group presets map a collection of sounds in a group to settings the app applies in a specific context. For more information, see [PHASEGroupPreset](../phasegrouppreset.md).

## See Also

### Managing Groups of Sounds

- [groups](groups.md): A list of named groups that contain sounds the app operates on collectively.
- [duckers](duckers.md): An array of objects that reduce the volume of simultaneously playing sounds.

# activeGroupPreset (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The settings that define playback for a group of sounds.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PHASEGroupPreset * activeGroupPreset;
```

<a id="Discussion"></a>

## Discussion

This property returns the most recent group preset on which the app calls [activate](../phasegrouppreset/activate%28%29.md). Group presets map a collection of sounds in a group to settings the app applies in a specific context. For more information, see [PHASEGroupPreset](../phasegrouppreset.md).

## See Also

### Managing Groups of Sounds

- [groups](groups.md): A list of named groups that contain sounds the app operates on collectively.
- [duckers](duckers.md): An array of objects that reduce the volume of simultaneously playing sounds.
