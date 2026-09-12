> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiocompressedbuffer/init(format:packetcapacity:maximumpacketsize:)](https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/init(format:packetcapacity:maximumpacketsize:))

# init(format:packetCapacity:maximumPacketSize:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a buffer that contains audio data in a compressed state.

## Declaration

```swift
init(format: AVAudioFormat, packetCapacity: AVAudioPacketCount, maximumPacketSize: Int)
```

## Parameters

- `format`: The format of the audio the buffer contains.
- `packetCapacity`: The capacity of the buffer, in packets.
- `maximumPacketSize`: The maximum size in bytes of a packet in a compressed state.

<a id="return-value"></a>

## Return Value

A new [AVAudioCompressedBuffer](../avaudiocompressedbuffer.md) instance.

<a id="Discussion"></a>

## Discussion

You can obtain the maximum packet size from the [maximumOutputPacketSize](../avaudioconverter/maximumoutputpacketsize.md) property of an [AVAudioConverter](../avaudioconverter.md) you configure for encoding this format.

The method raises an exception if the format is PCM.

## See Also

### Creating an Audio Buffer

- [init(format:packetCapacity:)](init%28format_packetcapacity_%29.md): Creates a buffer that contains constant bytes per packet of audio data in a compressed state.

# initWithFormat:packetCapacity:maximumPacketSize: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a buffer that contains audio data in a compressed state.

## Declaration

```objectivec
- (instancetype) initWithFormat:(AVAudioFormat *) format packetCapacity:(AVAudioPacketCount) packetCapacity maximumPacketSize:(NSInteger) maximumPacketSize;
```

## Parameters

- `format`: The format of the audio the buffer contains.
- `packetCapacity`: The capacity of the buffer, in packets.
- `maximumPacketSize`: The maximum size in bytes of a packet in a compressed state.

<a id="return-value"></a>

## Return Value

A new [AVAudioCompressedBuffer](../avaudiocompressedbuffer.md) instance.

<a id="Discussion"></a>

## Discussion

You can obtain the maximum packet size from the [maximumOutputPacketSize](../avaudioconverter/maximumoutputpacketsize.md) property of an [AVAudioConverter](../avaudioconverter.md) you configure for encoding this format.

The method raises an exception if the format is PCM.

## See Also

### Creating an Audio Buffer

- [initWithFormat:packetCapacity:](init%28format_packetcapacity_%29.md): Creates a buffer that contains constant bytes per packet of audio data in a compressed state.
