> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/duckers](https://developer.apple.com/documentation/phase/phaseengine/duckers)

# duckers (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of objects that reduce the volume of simultaneously playing sounds.

## Declaration

```swift
var duckers: [PHASEDucker] { get }
```

## See Also

### Managing Groups of Sounds

- [groups](groups.md): A list of named groups that contain sounds the app operates on collectively.
- [activeGroupPreset](activegrouppreset.md): The settings that define playback for a group of sounds.

# duckers (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of objects that reduce the volume of simultaneously playing sounds.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<PHASEDucker *> * duckers;
```

## See Also

### Managing Groups of Sounds

- [groups](groups.md): A list of named groups that contain sounds the app operates on collectively.
- [activeGroupPreset](activegrouppreset.md): The settings that define playback for a group of sounds.
