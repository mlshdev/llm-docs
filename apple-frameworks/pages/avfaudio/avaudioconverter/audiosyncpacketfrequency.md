> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/audiosyncpacketfrequency](https://developer.apple.com/documentation/avfaudio/avaudioconverter/audiosyncpacketfrequency)

# audioSyncPacketFrequency (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var audioSyncPacketFrequency: Int { get set }
```

<a id="discussion"></a>

## Discussion

Number of packets between consecutive sync packets.

A sync packet is an independently-decodable packet that completely refreshes the decoder without needing to decode other packets.  When compressing to a format which supports it (such as APAC), the audio sync packet frequency indicates the distance in packets between two sync packets, with non-sync packets between.  This is useful to set when saving compressed packets to a file and efficient random access is desired.  Note: Separating sync packets by at least one second of encoded audio (e.g. 75 packets) is recommended.

## See Also

### Managing packet dependencies

- [contentSource](contentsource.md)
- [AVAudioContentSource](../avaudiocontentsource.md)
- [dynamicRangeControlConfiguration](dynamicrangecontrolconfiguration.md)
- [AVAudioDynamicRangeControlConfiguration](../avaudiodynamicrangecontrolconfiguration.md)

# audioSyncPacketFrequency (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
@property (nonatomic) NSInteger audioSyncPacketFrequency;
```

<a id="discussion"></a>

## Discussion

Number of packets between consecutive sync packets.

A sync packet is an independently-decodable packet that completely refreshes the decoder without needing to decode other packets.  When compressing to a format which supports it (such as APAC), the audio sync packet frequency indicates the distance in packets between two sync packets, with non-sync packets between.  This is useful to set when saving compressed packets to a file and efficient random access is desired.  Note: Separating sync packets by at least one second of encoded audio (e.g. 75 packets) is recommended.

## See Also

### Managing packet dependencies

- [contentSource](contentsource.md)
- [AVAudioContentSource](../avaudiocontentsource.md)
- [dynamicRangeControlConfiguration](dynamicrangecontrolconfiguration.md)
- [AVAudioDynamicRangeControlConfiguration](../avaudiodynamicrangecontrolconfiguration.md)
