> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiocompressedbuffer/init(format:packetcapacity:)](https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/init(format:packetcapacity:))

# init(format:packetCapacity:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a buffer that contains constant bytes per packet of audio data in a compressed state.

## Declaration

```swift
init(format: AVAudioFormat, packetCapacity: AVAudioPacketCount)
```

## Parameters

- `format`: The format of the audio the buffer contains.
- `packetCapacity`: The capacity of the buffer, in packets.

<a id="return-value"></a>

## Return Value

A new [AVAudioCompressedBuffer](../avaudiocompressedbuffer.md) instance.

<a id="Discussion"></a>

## Discussion

This fails if the format is PCM or if the format has variable bytes per packet (for example, `format.streamDescription->mBytesPerPacket == 0`).

## See Also

### Creating an Audio Buffer

- [init(format:packetCapacity:maximumPacketSize:)](init%28format_packetcapacity_maximumpacketsize_%29.md): Creates a buffer that contains audio data in a compressed state.

# initWithFormat:packetCapacity: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a buffer that contains constant bytes per packet of audio data in a compressed state.

## Declaration

```objectivec
- (instancetype) initWithFormat:(AVAudioFormat *) format packetCapacity:(AVAudioPacketCount) packetCapacity;
```

## Parameters

- `format`: The format of the audio the buffer contains.
- `packetCapacity`: The capacity of the buffer, in packets.

<a id="return-value"></a>

## Return Value

A new [AVAudioCompressedBuffer](../avaudiocompressedbuffer.md) instance.

<a id="Discussion"></a>

## Discussion

This fails if the format is PCM or if the format has variable bytes per packet (for example, `format.streamDescription->mBytesPerPacket == 0`).

## See Also

### Creating an Audio Buffer

- [initWithFormat:packetCapacity:maximumPacketSize:](init%28format_packetcapacity_maximumpacketsize_%29.md): Creates a buffer that contains audio data in a compressed state.
