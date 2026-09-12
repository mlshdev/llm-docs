> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/inputdatasource](https://developer.apple.com/documentation/avfaudio/avaudiosession/inputdatasource)

# inputDataSource (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The currently selected input data source.

## Declaration

```swift
var inputDataSource: AVAudioSessionDataSourceDescription? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [nil](../../objectivec/nil-227m0.md) if switching between multiple input sources isn’t currently possible. Only certain devices and peripherals, such as an iPhone equipped with both front- and rear-facing microphones, support this feature.

## See Also

### Configuring inputs

- [isInputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput(\_:)](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource(\_:)](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [availableInputsChangeNotification](availableinputschangenotification.md)

# inputDataSource (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The currently selected input data source.

## Declaration

```objectivec
@property (readonly, nullable) AVAudioSessionDataSourceDescription * inputDataSource;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [nil](../../objectivec/nil-227m0.md) if switching between multiple input sources isn’t currently possible. Only certain devices and peripherals, such as an iPhone equipped with both front- and rear-facing microphones, support this feature.

## See Also

### Configuring inputs

- [inputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput:error:](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource:error:](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [AVAudioSessionAvailableInputsChangeNotification](availableinputschangenotification.md)
