> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/dynamicrangecontrolconfiguration](https://developer.apple.com/documentation/avfaudio/avaudioconverter/dynamicrangecontrolconfiguration)

# dynamicRangeControlConfiguration (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var dynamicRangeControlConfiguration: AVAudioDynamicRangeControlConfiguration { get set }
```

<a id="discussion"></a>

## Discussion

Encoder Dynamic Range Control (DRC) configuration.

When supported by the encoder, this property controls which configuration is applied when a bitstream is generated.  Note: This is only supported when compressing audio to formats which support it.

## See Also

### Managing packet dependencies

- [audioSyncPacketFrequency](audiosyncpacketfrequency.md)
- [contentSource](contentsource.md)
- [AVAudioContentSource](../avaudiocontentsource.md)
- [AVAudioDynamicRangeControlConfiguration](../avaudiodynamicrangecontrolconfiguration.md)

# dynamicRangeControlConfiguration (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
@property (nonatomic) AVAudioDynamicRangeControlConfiguration dynamicRangeControlConfiguration;
```

<a id="discussion"></a>

## Discussion

Encoder Dynamic Range Control (DRC) configuration.

When supported by the encoder, this property controls which configuration is applied when a bitstream is generated.  Note: This is only supported when compressing audio to formats which support it.

## See Also

### Managing packet dependencies

- [audioSyncPacketFrequency](audiosyncpacketfrequency.md)
- [contentSource](contentsource.md)
- [AVAudioContentSource](../avaudiocontentsource.md)
- [AVAudioDynamicRangeControlConfiguration](../avaudiodynamicrangecontrolconfiguration.md)
