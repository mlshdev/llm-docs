> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setinputdatasource(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setinputdatasource(_:))

# setInputDataSource(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Selects a data source for the audio session’s current input port.

## Declaration

```swift
func setInputDataSource(_ dataSource: AVAudioSessionDataSourceDescription?) throws
```

## Parameters

- `dataSource`: The data source for the audio session’s input.

<a id="Discussion"></a>

## Discussion

You can set the input source to exactly one of the [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md) objects in the [inputDataSources](inputdatasources.md) array. Only certain devices and peripherals, such as an iPhone equipped with both front- and rear-facing microphones, support switching among input sources.

## See Also

### Configuring inputs

- [isInputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput(\_:)](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [availableInputsChangeNotification](availableinputschangenotification.md)

# setInputDataSource:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Selects a data source for the audio session’s current input port.

## Declaration

```objectivec
- (BOOL) setInputDataSource:(AVAudioSessionDataSourceDescription *) dataSource error:(NSError **) outError;
```

## Parameters

- `dataSource`: The data source for the audio session’s input.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the input data source for the audio session was successfully assigned; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can set the input source to exactly one of the [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md) objects in the [inputDataSources](inputdatasources.md) array. Only certain devices and peripherals, such as an iPhone equipped with both front- and rear-facing microphones, support switching among input sources.

## See Also

### Configuring inputs

- [inputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput:error:](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [AVAudioSessionAvailableInputsChangeNotification](availableinputschangenotification.md)
