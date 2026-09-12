> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/preferredinput](https://developer.apple.com/documentation/avfaudio/avaudiosession/preferredinput)

# preferredInput (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred input port for audio routing.

## Declaration

```swift
var preferredInput: AVAudioSessionPortDescription? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the input port selected using the [setPreferredInput(\_:)](setpreferredinput%28__%29.md) method. To see the actual current input port, use the [currentRoute](currentroute.md) property. This property returns [nil](../../objectivec/nil-227m0.md) if you haven’t set a preference or if the previously set preferred input is no longer available.

## See Also

### Configuring inputs

- [isInputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [setPreferredInput(\_:)](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource(\_:)](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [availableInputsChangeNotification](availableinputschangenotification.md)

# preferredInput (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred input port for audio routing.

## Declaration

```objectivec
@property (readonly, nullable) AVAudioSessionPortDescription * preferredInput;
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the input port selected using the [setPreferredInput:error:](setpreferredinput%28__%29.md) method. To see the actual current input port, use the [currentRoute](currentroute.md) property. This property returns [nil](../../objectivec/nil-227m0.md) if you haven’t set a preference or if the previously set preferred input is no longer available.

## See Also

### Configuring inputs

- [inputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [setPreferredInput:error:](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource:error:](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [AVAudioSessionAvailableInputsChangeNotification](availableinputschangenotification.md)
