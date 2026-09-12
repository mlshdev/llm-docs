> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/availableinputs](https://developer.apple.com/documentation/avfaudio/avaudiosession/availableinputs)

# availableInputs (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of input ports available for audio routing.

## Declaration

```swift
var availableInputs: [AVAudioSessionPortDescription]? { get }
```

<a id="Discussion"></a>

## Discussion

The active audio session category and mode determine the number of inputs this property returns. For example, if the session’s category is [playAndRecord](category-swift.struct/playandrecord.md), the array may contain a built-in microphone port and, if connected, a headset microphone port. Alternatively, if the session’s category is [playback](category-swift.struct/playback.md), this property returns an empty array.

## See Also

### Configuring inputs

- [isInputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput(\_:)](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource(\_:)](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [availableInputsChangeNotification](availableinputschangenotification.md)

# availableInputs (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of input ports available for audio routing.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<AVAudioSessionPortDescription *> * availableInputs;
```

<a id="Discussion"></a>

## Discussion

The active audio session category and mode determine the number of inputs this property returns. For example, if the session’s category is [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md), the array may contain a built-in microphone port and, if connected, a headset microphone port. Alternatively, if the session’s category is [AVAudioSessionCategoryPlayback](category-swift.struct/playback.md), this property returns an empty array.

## See Also

### Configuring inputs

- [inputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput:error:](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource:error:](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [AVAudioSessionAvailableInputsChangeNotification](availableinputschangenotification.md)
