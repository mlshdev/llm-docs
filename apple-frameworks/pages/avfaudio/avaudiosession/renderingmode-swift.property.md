> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/renderingmode-swift.property](https://developer.apple.com/documentation/avfaudio/avaudiosession/renderingmode-swift.property)

# renderingMode (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · tvOS 17.2+

The current audio session’s rendering mode.

## Declaration

```swift
var renderingMode: AVAudioSession.RenderingMode { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is [AVAudioSession.RenderingMode.notApplicable](renderingmode-swift.enum/notapplicable.md) in the following cases:

- The currently selected port isn’t of type [carAudio](port/caraudio.md) or, in iOS 18 and later, [airPlay](port/airplay.md).
- Your app uses a playback API other than [AVPlayer](../../avfoundation/avplayer.md) or [AVSampleBufferAudioRenderer](../../avfoundation/avsamplebufferaudiorenderer.md).
- Playback isn’t currently active.
- The audio session is inactive, muted, or not eligible for Now Playing.

## See Also

### Inspecting rendering mode and capabilities

- [AVAudioSession.RenderingMode](renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [renderingModeChangeNotification](renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [supportedOutputChannelLayouts](supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.
- [renderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.

# renderingMode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · tvOS 17.2+

The current audio session’s rendering mode.

## Declaration

```objectivec
@property (readonly) AVAudioSessionRenderingMode renderingMode;
```

<a id="discussion"></a>

## Discussion

The value of this property is [AVAudioSessionRenderingModeNotApplicable](renderingmode-swift.enum/notapplicable.md) in the following cases:

- The currently selected port isn’t of type [AVAudioSessionPortCarAudio](port/caraudio.md) or, in iOS 18 and later, [AVAudioSessionPortAirPlay](port/airplay.md).
- Your app uses a playback API other than [AVPlayer](../../avfoundation/avplayer.md) or [AVSampleBufferAudioRenderer](../../avfoundation/avsamplebufferaudiorenderer.md).
- Playback isn’t currently active.
- The audio session is inactive, muted, or not eligible for Now Playing.

## See Also

### Inspecting rendering mode and capabilities

- [AVAudioSessionRenderingMode](renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [AVAudioSessionRenderingModeChangeNotification](renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [supportedOutputChannelLayouts](supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.
- [AVAudioSessionRenderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.
