> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/overrideoutputaudioport(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/overrideoutputaudioport(_:))

# overrideOutputAudioPort(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Temporarily changes the current audio route.

## Declaration

```swift
func overrideOutputAudioPort(_ portOverride: AVAudioSession.PortOverride) throws
```

## Parameters

- `portOverride`: The override option for audio output. For a list of constants, see [AVAudioSession.PortOverride](portoverride.md).

<a id="discussion"></a>

## Discussion

If your app uses the [playAndRecord](category-swift.struct/playandrecord.md) category, calling this method with the [AVAudioSession.PortOverride.speaker](portoverride/speaker.md) option causes the system to route audio to the built-in speaker and microphone regardless of other settings. This change remains in effect only until the current route changes or you call this method again with the [AVAudioSession.PortOverride.none](portoverride/none.md) option.

If you’d prefer to permanently enable this behavior, you should instead set the category’s [defaultToSpeaker](categoryoptions-swift.struct/defaulttospeaker.md) option. Setting this option routes to the speaker rather than the receiver if no other accessory such as headphones are in use.

> **Note**

>  The preferred method for routing audio to the speaker instead of the receiver for speakerphone functionality is through the use of the [Media Player](../../mediaplayer.md) framework’s [MPVolumeView](../../mediaplayer/mpvolumeview.md) class.

## Topics

### Data Types

- [AVAudioSession.PortOverride](portoverride.md): Constants for use with the [overrideOutputAudioPort(\_:)](overrideoutputaudioport%28__%29.md) method.

## See Also

### Configuring outputs

- [outputDataSources](outputdatasources.md): An array of available output data sources for the current audio route.
- [outputDataSource](outputdatasource.md): The currently selected output data source.
- [setOutputDataSource(\_:)](setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.

# overrideOutputAudioPort:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Temporarily changes the current audio route.

## Declaration

```objectivec
- (BOOL) overrideOutputAudioPort:(AVAudioSessionPortOverride) portOverride error:(NSError **) outError;
```

## Parameters

- `portOverride`: The override option for audio output. For a list of constants, see [AVAudioSessionPortOverride](portoverride.md).
- `outError`: On input, a pointer to an error object. If an error occurs, the system sets pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the new audio routing option was set successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

If your app uses the [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md) category, calling this method with the [AVAudioSessionPortOverrideSpeaker](portoverride/speaker.md) option causes the system to route audio to the built-in speaker and microphone regardless of other settings. This change remains in effect only until the current route changes or you call this method again with the [AVAudioSessionPortOverrideNone](portoverride/none.md) option.

If you’d prefer to permanently enable this behavior, you should instead set the category’s [AVAudioSessionCategoryOptionDefaultToSpeaker](categoryoptions-swift.struct/defaulttospeaker.md) option. Setting this option routes to the speaker rather than the receiver if no other accessory such as headphones are in use.

> **Note**

>  The preferred method for routing audio to the speaker instead of the receiver for speakerphone functionality is through the use of the [Media Player](../../mediaplayer.md) framework’s [MPVolumeView](../../mediaplayer/mpvolumeview.md) class.

## Topics

### Data Types

- [AVAudioSessionPortOverride](portoverride.md): Constants for use with the [overrideOutputAudioPort:error:](overrideoutputaudioport%28__%29.md) method.

## See Also

### Configuring outputs

- [outputDataSources](outputdatasources.md): An array of available output data sources for the current audio route.
- [outputDataSource](outputdatasource.md): The currently selected output data source.
- [setOutputDataSource:error:](setoutputdatasource%28__%29.md): Sets the output data source for an audio session.
- [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md): An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
