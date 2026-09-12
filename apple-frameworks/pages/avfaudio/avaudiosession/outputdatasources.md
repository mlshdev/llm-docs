> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/outputdatasources](https://developer.apple.com/documentation/avfaudio/avaudiosession/outputdatasources)

# outputDataSources (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of available output data sources for the current audio route.

## Declaration

```swift
var outputDataSources: [AVAudioSessionDataSourceDescription]? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns an array of [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md) objects representing available output sources, or `nil` if switching between multiple output sources isn’t currently possible. Only certain USB accessories support this feature.

You can observe changes to the value of this property by using key-value observing.

## See Also

### Configuring outputs

- [outputDataSource](outputdatasource.md): The currently selected output data source.
- [setOutputDataSource(\_:)](setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
- [overrideOutputAudioPort(\_:)](overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.

# outputDataSources (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of available output data sources for the current audio route.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<AVAudioSessionDataSourceDescription *> * outputDataSources;
```

<a id="Discussion"></a>

## Discussion

This property returns an array of [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md) objects representing available output sources, or `nil` if switching between multiple output sources isn’t currently possible. Only certain USB accessories support this feature.

You can observe changes to the value of this property by using key-value observing.

## See Also

### Configuring outputs

- [outputDataSource](outputdatasource.md): The currently selected output data source.
- [setOutputDataSource:error:](setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
- [overrideOutputAudioPort:error:](overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.
