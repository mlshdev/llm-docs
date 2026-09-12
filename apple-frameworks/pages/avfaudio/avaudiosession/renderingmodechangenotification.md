> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/renderingmodechangenotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/renderingmodechangenotification)

# renderingModeChangeNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · tvOS 17.2+

A notification the system posts when the rendering mode changes.

## Declaration

```swift
class let renderingModeChangeNotification: NSNotification.Name
```

## Topics

### User information keys

- [AVAudioSessionRenderingModeNewRenderingModeKey](../avaudiosessionrenderingmodenewrenderingmodekey.md): A key to retrieve an integer value that represents the new resolved rendering mode.

## See Also

### Inspecting rendering mode and capabilities

- [renderingMode](renderingmode-swift.property.md): The current audio session’s rendering mode.
- [AVAudioSession.RenderingMode](renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [supportedOutputChannelLayouts](supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.
- [renderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.

# AVAudioSessionRenderingModeChangeNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · tvOS 17.2+

A notification the system posts when the rendering mode changes.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionRenderingModeChangeNotification;
```

## Topics

### User information keys

- [AVAudioSessionRenderingModeNewRenderingModeKey](../avaudiosessionrenderingmodenewrenderingmodekey.md): A key to retrieve an integer value that represents the new resolved rendering mode.

## See Also

### Inspecting rendering mode and capabilities

- [renderingMode](renderingmode-swift.property.md): The current audio session’s rendering mode.
- [AVAudioSessionRenderingMode](renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [supportedOutputChannelLayouts](supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.
- [AVAudioSessionRenderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.
