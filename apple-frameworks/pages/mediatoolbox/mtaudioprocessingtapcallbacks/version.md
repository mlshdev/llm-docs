> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapcallbacks/version](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapcallbacks/version)

# version (Swift)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The version number of the structure.

## Declaration

```swift
var version: Int32
```

<a id="discussion"></a>

## Discussion

The value is passed as a parameter to [MTAudioProcessingTapCreate(\_:\_:\_:\_:)](../mtaudioprocessingtapcreate%28________%29.md). It must be set to [kMTAudioProcessingTapCallbacksVersion_0](../kmtaudioprocessingtapcallbacksversion_0.md).

## See Also

### Fields

- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [init](init.md): A callback to initialize the tap processor.
- [finalize](finalize.md): A callback to perform any necessary cleanup.
- [prepare](prepare.md): A callback to prepare the tap processor.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](process.md): A callback for processing the audio.

# version (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The version number of the structure.

## Declaration

```objectivec
int version;
```

<a id="discussion"></a>

## Discussion

The value is passed as a parameter to [MTAudioProcessingTapCreate](../mtaudioprocessingtapcreate%28________%29.md). It must be set to [kMTAudioProcessingTapCallbacksVersion_0](../kmtaudioprocessingtapcallbacksversion_0.md).

## See Also

### Fields

- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [init](init.md): A callback to initialize the tap processor.
- [finalize](finalize.md): A callback to perform any necessary cleanup.
- [prepare](prepare.md): A callback to prepare the tap processor.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](process.md): A callback for processing the audio.
