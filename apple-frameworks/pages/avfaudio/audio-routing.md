> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/audio-routing](https://developer.apple.com/documentation/avfaudio/audio-routing)

# Audio routing (Swift)

**Framework:** AVFAudio  
**Kind:** API Collection

Inspect and configure audio routes, ports, and data sources.

## Topics

### Inspecting the current route

- [currentRoute](avaudiosession/currentroute.md): A description of the current audio route’s input and output ports.
- [AVAudioSessionRouteDescription](avaudiosessionroutedescription.md): An object that describes the input and output ports associated with a session’s audio route.
- [AVAudioSessionPortDescription](avaudiosessionportdescription.md): Information about the capabilities of the port and the hardware channels it supports.
- [routeChangeNotification](avaudiosession/routechangenotification.md): A notification the system posts when its audio route changes.

### Configuring inputs

- [isInputAvailable](avaudiosession/isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](avaudiosession/availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](avaudiosession/preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput(\_:)](avaudiosession/setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](avaudiosession/inputdatasource.md): The currently selected input data source.
- [inputDataSources](avaudiosession/inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource(\_:)](avaudiosession/setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [availableInputsChangeNotification](avaudiosession/availableinputschangenotification.md)

### Configuring outputs

- [outputDataSources](avaudiosession/outputdatasources.md): An array of available output data sources for the current audio route.
- [outputDataSource](avaudiosession/outputdatasource.md): The currently selected output data source.
- [setOutputDataSource(\_:)](avaudiosession/setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [AVAudioSessionDataSourceDescription](avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
- [overrideOutputAudioPort(\_:)](avaudiosession/overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.

# Audio routing (Objective-C)

**Framework:** AVFAudio  
**Kind:** API Collection

Inspect and configure audio routes, ports, and data sources.

## Topics

### Inspecting the current route

- [currentRoute](avaudiosession/currentroute.md): A description of the current audio route’s input and output ports.
- [AVAudioSessionRouteDescription](avaudiosessionroutedescription.md): An object that describes the input and output ports associated with a session’s audio route.
- [AVAudioSessionPortDescription](avaudiosessionportdescription.md): Information about the capabilities of the port and the hardware channels it supports.
- [AVAudioSessionRouteChangeNotification](avaudiosession/routechangenotification.md): A notification the system posts when its audio route changes.

### Configuring inputs

- [inputAvailable](avaudiosession/isinputavailable.md): A Boolean value that indicates whether an audio input path is available.
- [availableInputs](avaudiosession/availableinputs.md): An array of input ports available for audio routing.
- [preferredInput](avaudiosession/preferredinput.md): The preferred input port for audio routing.
- [setPreferredInput:error:](avaudiosession/setpreferredinput%28__%29.md): Sets the preferred input port for audio routing.
- [inputDataSource](avaudiosession/inputdatasource.md): The currently selected input data source.
- [inputDataSources](avaudiosession/inputdatasources.md): An array of available data sources for the audio session’s current input port.
- [setInputDataSource:error:](avaudiosession/setinputdatasource%28__%29.md): Selects a data source for the audio session’s current input port.
- [AVAudioSessionAvailableInputsChangeNotification](avaudiosession/availableinputschangenotification.md)

### Configuring outputs

- [outputDataSources](avaudiosession/outputdatasources.md): An array of available output data sources for the current audio route.
- [outputDataSource](avaudiosession/outputdatasource.md): The currently selected output data source.
- [setOutputDataSource:error:](avaudiosession/setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [AVAudioSessionDataSourceDescription](avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
- [overrideOutputAudioPort:error:](avaudiosession/overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.
