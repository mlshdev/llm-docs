> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setoutputdatasource(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setoutputdatasource(_:))

# setOutputDataSource(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the output data source for an audio session.

## Declaration

```swift
func setOutputDataSource(_ dataSource: AVAudioSessionDataSourceDescription?) throws
```

## Parameters

- `dataSource`: The data source for the audio session’s output.

<a id="Discussion"></a>

## Discussion

You can change the output source to one of the [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md) objects in the [outputDataSources](outputdatasources.md) array. Only certain USB accessories support this feature.

## See Also

### Configuring outputs

- [outputDataSources](outputdatasources.md): An array of available output data sources for the current audio route.
- [outputDataSource](outputdatasource.md): The currently selected output data source.
- [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
- [overrideOutputAudioPort(\_:)](overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.

# setOutputDataSource:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the output data source for an audio session.

## Declaration

```objectivec
- (BOOL) setOutputDataSource:(AVAudioSessionDataSourceDescription *) dataSource error:(NSError **) outError;
```

## Parameters

- `dataSource`: The data source for the audio session’s output.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the output data source for the audio session was successfully assigned; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can change the output source to one of the [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md) objects in the [outputDataSources](outputdatasources.md) array. Only certain USB accessories support this feature.

## See Also

### Configuring outputs

- [outputDataSources](outputdatasources.md): An array of available output data sources for the current audio route.
- [outputDataSource](outputdatasource.md): The currently selected output data source.
- [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
- [overrideOutputAudioPort:error:](overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.
