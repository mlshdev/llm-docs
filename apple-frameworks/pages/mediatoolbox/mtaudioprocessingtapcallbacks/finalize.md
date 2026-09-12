> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapcallbacks/finalize](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapcallbacks/finalize)

# finalize (Swift)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A callback to perform any necessary cleanup.

## Declaration

```swift
var finalize: MTAudioProcessingTapFinalizeCallback?
```

<a id="discussion"></a>

## Discussion

The system invokes this callback only once when the [MTAudioProcessingTap](../mtaudioprocessingtap.md) object is finalized. This field can be `NULL`.

## See Also

### Fields

- [version](version.md): The version number of the structure.
- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [init](init.md): A callback to initialize the tap processor.
- [prepare](prepare.md): A callback to prepare the tap processor.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](process.md): A callback for processing the audio.

# finalize (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A callback to perform any necessary cleanup.

## Declaration

```objectivec
MTAudioProcessingTapFinalizeCallback finalize;
```

<a id="discussion"></a>

## Discussion

The system invokes this callback only once when the [MTAudioProcessingTapRef](../mtaudioprocessingtap.md) object is finalized. This field can be `NULL`.

## See Also

### Fields

- [version](version.md): The version number of the structure.
- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [init](init.md): A callback to initialize the tap processor.
- [prepare](prepare.md): A callback to prepare the tap processor.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](process.md): A callback for processing the audio.
