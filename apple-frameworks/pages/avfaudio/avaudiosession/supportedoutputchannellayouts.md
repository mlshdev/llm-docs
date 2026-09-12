> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/supportedoutputchannellayouts](https://developer.apple.com/documentation/avfaudio/avaudiosession/supportedoutputchannellayouts)

# supportedOutputChannelLayouts (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · tvOS 17.2+

The array of channel layouts that the current route supports.

## Declaration

```swift
var supportedOutputChannelLayouts: [AVAudioChannelLayout] { get }
```

<a id="Discussion"></a>

## Discussion

The possible channel layouts for this property are:

- [kAudioChannelLayoutTag_Stereo](../../coreaudiotypes/kaudiochannellayouttag_stereo.md)
- [kAudioChannelLayoutTag_AAC_5_1](../../coreaudiotypes/kaudiochannellayouttag_aac_5_1.md)
- [kAudioChannelLayoutTag_MPEG_7_1_C](../../coreaudiotypes/kaudiochannellayouttag_mpeg_7_1_c.md)
- [kAudioChannelLayoutTag_Atmos_5_1_2](../../coreaudiotypes/kaudiochannellayouttag_atmos_5_1_2.md)
- [kAudioChannelLayoutTag_Atmos_5_1_4](../../coreaudiotypes/kaudiochannellayouttag_atmos_5_1_4.md)
- [kAudioChannelLayoutTag_Atmos_7_1_2](../../coreaudiotypes/kaudiochannellayouttag_atmos_7_1_2.md)
- [kAudioChannelLayoutTag_Atmos_7_1_4](../../coreaudiotypes/kaudiochannellayouttag_atmos_7_1_4.md)
- [kAudioChannelLayoutTag_Atmos_9_1_6](../../coreaudiotypes/kaudiochannellayouttag_atmos_9_1_6.md)

This value returns an empty array when the audio session is inactive, ineligible for Now Playing, or the port type isn’t [carAudio](port/caraudio.md) or, in iOS 18 or later, [airPlay](port/airplay.md).

Use [renderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md) to listen for updates from the system.

## See Also

### Inspecting rendering mode and capabilities

- [renderingMode](renderingmode-swift.property.md): The current audio session’s rendering mode.
- [AVAudioSession.RenderingMode](renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [renderingModeChangeNotification](renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [renderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.

# supportedOutputChannelLayouts (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · tvOS 17.2+

The array of channel layouts that the current route supports.

## Declaration

```objectivec
@property (readonly) NSArray<AVAudioChannelLayout *> * supportedOutputChannelLayouts;
```

<a id="Discussion"></a>

## Discussion

The possible channel layouts for this property are:

- [kAudioChannelLayoutTag_Stereo](../../coreaudiotypes/kaudiochannellayouttag_stereo.md)
- [kAudioChannelLayoutTag_AAC_5_1](../../coreaudiotypes/kaudiochannellayouttag_aac_5_1.md)
- [kAudioChannelLayoutTag_MPEG_7_1_C](../../coreaudiotypes/kaudiochannellayouttag_mpeg_7_1_c.md)
- [kAudioChannelLayoutTag_Atmos_5_1_2](../../coreaudiotypes/kaudiochannellayouttag_atmos_5_1_2.md)
- [kAudioChannelLayoutTag_Atmos_5_1_4](../../coreaudiotypes/kaudiochannellayouttag_atmos_5_1_4.md)
- [kAudioChannelLayoutTag_Atmos_7_1_2](../../coreaudiotypes/kaudiochannellayouttag_atmos_7_1_2.md)
- [kAudioChannelLayoutTag_Atmos_7_1_4](../../coreaudiotypes/kaudiochannellayouttag_atmos_7_1_4.md)
- [kAudioChannelLayoutTag_Atmos_9_1_6](../../coreaudiotypes/kaudiochannellayouttag_atmos_9_1_6.md)

This value returns an empty array when the audio session is inactive, ineligible for Now Playing, or the port type isn’t [AVAudioSessionPortCarAudio](port/caraudio.md) or, in iOS 18 or later, [AVAudioSessionPortAirPlay](port/airplay.md).

Use [AVAudioSessionRenderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md) to listen for updates from the system.

## See Also

### Inspecting rendering mode and capabilities

- [renderingMode](renderingmode-swift.property.md): The current audio session’s rendering mode.
- [AVAudioSessionRenderingMode](renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [AVAudioSessionRenderingModeChangeNotification](renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [AVAudioSessionRenderingCapabilitiesChangeNotification](renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.
