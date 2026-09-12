> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/inputdatasources](https://developer.apple.com/documentation/avfaudio/avaudiosession/inputdatasources)

# inputDataSources (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of available data sources for the audio session’s current input port.

## Declaration

```swift
var inputDataSources: [AVAudioSessionDataSourceDescription]? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns an array of [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md) objects representing available input sources, or `nil` if switching between multiple input sources isn’t currently possible. Only certain devices and peripherals, such as an iPhone equipped with both front- and rear-facing microphones, support this feature.

You can observe changes to the value of this property by using key-value observing.

## See Also

### Configuring inputs

- [isInputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput(\_:)](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [setInputDataSource(\_:)](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [availableInputsChangeNotification](availableinputschangenotification.md)

# inputDataSources (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of available data sources for the audio session’s current input port.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<AVAudioSessionDataSourceDescription *> * inputDataSources;
```

<a id="Discussion"></a>

## Discussion

This property returns an array of [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md) objects representing available input sources, or `nil` if switching between multiple input sources isn’t currently possible. Only certain devices and peripherals, such as an iPhone equipped with both front- and rear-facing microphones, support this feature.

You can observe changes to the value of this property by using key-value observing.

## See Also

### Configuring inputs

- [inputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput:error:](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [setInputDataSource:error:](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [AVAudioSessionAvailableInputsChangeNotification](availableinputschangenotification.md)
