> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediatoolbox/mtaudioprocessingtapcallbacks/prepare](https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapcallbacks/prepare)

# prepare (Swift)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A callback to prepare the tap processor.

## Declaration

```swift
var prepare: MTAudioProcessingTapPrepareCallback?
```

<a id="discussion"></a>

## Discussion

Apps can use this callback to allocate memory buffers or perform other preparation. This field an be `NULL`.

> **Note**

> The system may call this function multiple times.

## See Also

### Fields

- [version](version.md): The version number of the structure.
- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [init](init.md): A callback to initialize the tap processor.
- [finalize](finalize.md): A callback to perform any necessary cleanup.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](process.md): A callback for processing the audio.

# prepare (Objective-C)

**Framework:** Media Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A callback to prepare the tap processor.

## Declaration

```objectivec
MTAudioProcessingTapPrepareCallback prepare;
```

<a id="discussion"></a>

## Discussion

Apps can use this callback to allocate memory buffers or perform other preparation. This field an be `NULL`.

> **Note**

> The system may call this function multiple times.

## See Also

### Fields

- [version](version.md): The version number of the structure.
- [clientInfo](clientinfo.md): App data that the system passes to the initialization callback.
- [init](init.md): A callback to initialize the tap processor.
- [finalize](finalize.md): A callback to perform any necessary cleanup.
- [unprepare](unprepare.md): A callback to perform any necessary cleanup for previous preparation.
- [process](process.md): A callback for processing the audio.
