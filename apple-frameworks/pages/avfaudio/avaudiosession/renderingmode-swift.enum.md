> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/renderingmode-swift.enum](https://developer.apple.com/documentation/avfaudio/avaudiosession/renderingmode-swift.enum)

# AVAudioSession.RenderingMode (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Audio session rendering mode identifiers.

## Declaration

```swift
enum RenderingMode
```

## Topics

### Getting the rendering modes

- [AVAudioSession.RenderingMode.monoStereo](renderingmode-swift.enum/monostereo.md): A mode that represents non multi-channel audio.
- [AVAudioSession.RenderingMode.surround](renderingmode-swift.enum/surround.md): A mode that represents general multi-channel audio.
- [AVAudioSession.RenderingMode.spatialAudio](renderingmode-swift.enum/spatialaudio.md): A mode that represents a fallback for when hardware capabilities don’t support Dolby.
- [AVAudioSession.RenderingMode.dolbyAudio](renderingmode-swift.enum/dolbyaudio.md): A mode that represents Dolby audio.
- [AVAudioSession.RenderingMode.dolbyAtmos](renderingmode-swift.enum/dolbyatmos.md): A mode that represents Dolby Atmos.
- [AVAudioSession.RenderingMode.notApplicable](renderingmode-swift.enum/notapplicable.md): A mode that represents there’s no asset in a loading or playing state.

### Initializers

- [init(rawValue:)](renderingmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting rendering mode and capabilities

- [renderingMode](renderingmode-swift.property.md): The current audio session’s rendering mode.
- [renderingModeChangeNotification](renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [supportedOutputChannelLayouts](supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.
- [renderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.

# AVAudioSessionRenderingMode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Audio session rendering mode identifiers.

## Declaration

```objectivec
enum AVAudioSessionRenderingMode : NSInteger;
```

## Topics

### Getting the rendering modes

- [AVAudioSessionRenderingModeMonoStereo](renderingmode-swift.enum/monostereo.md): A mode that represents non multi-channel audio.
- [AVAudioSessionRenderingModeSurround](renderingmode-swift.enum/surround.md): A mode that represents general multi-channel audio.
- [AVAudioSessionRenderingModeSpatialAudio](renderingmode-swift.enum/spatialaudio.md): A mode that represents a fallback for when hardware capabilities don’t support Dolby.
- [AVAudioSessionRenderingModeDolbyAudio](renderingmode-swift.enum/dolbyaudio.md): A mode that represents Dolby audio.
- [AVAudioSessionRenderingModeDolbyAtmos](renderingmode-swift.enum/dolbyatmos.md): A mode that represents Dolby Atmos.
- [AVAudioSessionRenderingModeNotApplicable](renderingmode-swift.enum/notapplicable.md): A mode that represents there’s no asset in a loading or playing state.

## See Also

### Inspecting rendering mode and capabilities

- [renderingMode](renderingmode-swift.property.md): The current audio session’s rendering mode.
- [AVAudioSessionRenderingModeChangeNotification](renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [supportedOutputChannelLayouts](supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.
- [AVAudioSessionRenderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.
