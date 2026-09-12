> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapcallbacks/init](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapcallbacks/init)

# init (Swift)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A callback to initialize the tap processor.

## Declaration

```swift
var `init`: MTAudioProcessingTapInitCallback?
```

<a id="discussion"></a>

## Discussion

This callback is called before [MTAudioProcessingTapCreate(\_:\_:\_:\_:)](../mtaudioprocessingtapcreate%28________%29.md) returns. This field can be `NULL`.

## See Also

### Fields

- [version](version.md): The version number of the structure.
- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [finalize](finalize.md): A callback to perform any necessary cleanup.
- [prepare](prepare.md): A callback to prepare the tap processor.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](process.md): A callback for processing the audio.

# init (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A callback to initialize the tap processor.

## Declaration

```objectivec
MTAudioProcessingTapInitCallback init;
```

<a id="discussion"></a>

## Discussion

This callback is called before [MTAudioProcessingTapCreate](../mtaudioprocessingtapcreate%28________%29.md) returns. This field can be `NULL`.

## See Also

### Fields

- [version](version.md): The version number of the structure.
- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [finalize](finalize.md): A callback to perform any necessary cleanup.
- [prepare](prepare.md): A callback to prepare the tap processor.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](process.md): A callback for processing the audio.
