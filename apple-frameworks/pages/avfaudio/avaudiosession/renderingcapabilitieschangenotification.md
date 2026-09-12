> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/renderingcapabilitieschangenotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/renderingcapabilitieschangenotification)

# renderingCapabilitiesChangeNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · tvOS 17.2+

A notification the system posts when the rendering capabilities change.

## Declaration

```swift
class let renderingCapabilitiesChangeNotification: NSNotification.Name
```

## See Also

### Inspecting rendering mode and capabilities

- [renderingMode](renderingmode-swift.property.md): The current audio session’s rendering mode.
- [AVAudioSession.RenderingMode](renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [renderingModeChangeNotification](renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [supportedOutputChannelLayouts](supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.

# AVAudioSessionRenderingCapabilitiesChangeNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · tvOS 17.2+

A notification the system posts when the rendering capabilities change.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionRenderingCapabilitiesChangeNotification;
```

## See Also

### Inspecting rendering mode and capabilities

- [renderingMode](renderingmode-swift.property.md): The current audio session’s rendering mode.
- [AVAudioSessionRenderingMode](renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [AVAudioSessionRenderingModeChangeNotification](renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [supportedOutputChannelLayouts](supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.
