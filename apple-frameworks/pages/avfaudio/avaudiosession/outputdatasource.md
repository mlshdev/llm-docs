> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/outputdatasource](https://developer.apple.com/documentation/avfaudio/avaudiosession/outputdatasource)

# outputDataSource (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The currently selected output data source.

## Declaration

```swift
var outputDataSource: AVAudioSessionDataSourceDescription? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [nil](../../objectivec/nil-227m0.md) if switching between multiple output sources isn’t currently possible. Only certain USB accessories support switching output sources.

## See Also

### Configuring outputs

- [outputDataSources](outputdatasources.md): An array of available output data sources for the current audio route.
- [setOutputDataSource(\_:)](setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
- [overrideOutputAudioPort(\_:)](overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.

# outputDataSource (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The currently selected output data source.

## Declaration

```objectivec
@property (readonly, nullable) AVAudioSessionDataSourceDescription * outputDataSource;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [nil](../../objectivec/nil-227m0.md) if switching between multiple output sources isn’t currently possible. Only certain USB accessories support switching output sources.

## See Also

### Configuring outputs

- [outputDataSources](outputdatasources.md): An array of available output data sources for the current audio route.
- [setOutputDataSource:error:](setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
- [overrideOutputAudioPort:error:](overrideoutputaudioport%28__%29.md): Temporarily changes the current audio route.
