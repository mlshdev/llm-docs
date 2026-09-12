> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setpreferredinput(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setpreferredinput(_:))

# setPreferredInput(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred input port for audio routing.

## Declaration

```swift
func setPreferredInput(_ inPort: AVAudioSessionPortDescription?) throws
```

## Parameters

- `inPort`: An [AVAudioSessionPortDescription](../avaudiosessionportdescription.md) object that describes the port to use for input.

<a id="Discussion"></a>

## Discussion

Setting the preferred input port requests a change to the input audio route. To determine whether the change has taken effect, use the [currentRoute](currentroute.md) property.

The value of the `inPort` parameter must be one of the [AVAudioSessionPortDescription](../avaudiosessionportdescription.md) objects in the [availableInputs](availableinputs.md) array. If this parameter specifies a port that isn’t already part of the current audio route and the app’s session controls audio routing, this method initiates a route change to use the preferred port.

You must set a preferred input port only after setting the audio session’s category and mode and activating the session.

## See Also

### Configuring inputs

- [isInputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource(\_:)](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [availableInputsChangeNotification](availableinputschangenotification.md)

# setPreferredInput:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred input port for audio routing.

## Declaration

```objectivec
- (BOOL) setPreferredInput:(AVAudioSessionPortDescription *) inPort error:(NSError **) outError;
```

## Parameters

- `inPort`: An [AVAudioSessionPortDescription](../avaudiosessionportdescription.md) object that describes the port to use for input.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the request was successfully executed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Setting the preferred input port requests a change to the input audio route. To determine whether the change has taken effect, use the [currentRoute](currentroute.md) property.

The value of the `inPort` parameter must be one of the [AVAudioSessionPortDescription](../avaudiosessionportdescription.md) objects in the [availableInputs](availableinputs.md) array. If this parameter specifies a port that isn’t already part of the current audio route and the app’s session controls audio routing, this method initiates a route change to use the preferred port.

You must set a preferred input port only after setting the audio session’s category and mode and activating the session.

## See Also

### Configuring inputs

- [inputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource:error:](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [AVAudioSessionAvailableInputsChangeNotification](availableinputschangenotification.md)
