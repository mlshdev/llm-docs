> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/groups](https://developer.apple.com/documentation/phase/phaseengine/groups)

# groups (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A list of named groups that contain sounds the app operates on collectively.

## Declaration

```swift
var groups: [String : PHASEGroup] { get }
```

## See Also

### Managing Groups of Sounds

- [activeGroupPreset](activegrouppreset.md): The settings that define playback for a group of sounds.
- [duckers](duckers.md): An array of objects that reduce the volume of simultaneously playing sounds.

# groups (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A list of named groups that contain sounds the app operates on collectively.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<NSString *,PHASEGroup *> * groups;
```

## See Also

### Managing Groups of Sounds

- [activeGroupPreset](activegrouppreset.md): The settings that define playback for a group of sounds.
- [duckers](duckers.md): An array of objects that reduce the volume of simultaneously playing sounds.
