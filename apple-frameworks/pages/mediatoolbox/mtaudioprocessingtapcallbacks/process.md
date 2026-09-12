> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapcallbacks/process](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapcallbacks/process)

# process (Swift)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A callback for processing the audio.

## Declaration

```swift
var process: MTAudioProcessingTapProcessCallback
```

## See Also

### Fields

- [version](version.md): The version number of the structure.
- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [init](init.md): A callback to initialize the tap processor.
- [finalize](finalize.md): A callback to perform any necessary cleanup.
- [prepare](prepare.md): A callback to prepare the tap processor.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.

# process (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A callback for processing the audio.

## Declaration

```objectivec
MTAudioProcessingTapProcessCallback process;
```

## See Also

### Fields

- [version](version.md): The version number of the structure.
- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [init](init.md): A callback to initialize the tap processor.
- [finalize](finalize.md): A callback to perform any necessary cleanup.
- [prepare](prepare.md): A callback to prepare the tap processor.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.
