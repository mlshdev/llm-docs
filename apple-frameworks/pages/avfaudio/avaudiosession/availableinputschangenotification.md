> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/availableinputschangenotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/availableinputschangenotification)

# availableInputsChangeNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
class let availableInputsChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

Notification sent to registered listeners when there are changes in [availableInputs](availableinputs.md).

There is no payload (userInfo dictionary) associated with the [availableInputsChangeNotification](availableinputschangenotification.md) notification.

## See Also

### Configuring inputs

- [isInputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput(\_:)](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource(\_:)](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.

# AVAudioSessionAvailableInputsChangeNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionAvailableInputsChangeNotification;
```

<a id="discussion"></a>

## Discussion

Notification sent to registered listeners when there are changes in [availableInputs](availableinputs.md).

There is no payload (userInfo dictionary) associated with the [AVAudioSessionAvailableInputsChangeNotification](availableinputschangenotification.md) notification.

## See Also

### Configuring inputs

- [inputAvailable](isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput:error:](setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](inputdatasource.md): The currently selected input data source.
- [inputDataSources](inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource:error:](setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
