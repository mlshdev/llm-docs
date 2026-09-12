> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiocompressedbuffer](https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer)

# AVAudioCompressedBuffer (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents an audio buffer that you use for compressed audio formats.

## Declaration

```swift
class AVAudioCompressedBuffer
```

## Topics

### Creating an Audio Buffer

- [init(format:packetCapacity:)](avaudiocompressedbuffer/init%28format_packetcapacity_%29.md): Creates a buffer that contains constant bytes per packet of audio data in a compressed state.
- [init(format:packetCapacity:maximumPacketSize:)](avaudiocompressedbuffer/init%28format_packetcapacity_maximumpacketsize_%29.md): Creates a buffer that contains audio data in a compressed state.

### Getting Audio Buffer Properties

- [byteCapacity](avaudiocompressedbuffer/bytecapacity.md): The number of packets the buffer contains.
- [byteLength](avaudiocompressedbuffer/bytelength.md): The number of valid bytes in the buffer.
- [data](avaudiocompressedbuffer/data.md): The audio buffer’s data bytes.
- [maximumPacketSize](avaudiocompressedbuffer/maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCapacity](avaudiocompressedbuffer/packetcapacity.md): The total number of packets that the buffer can contain.
- [packetCount](avaudiocompressedbuffer/packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](avaudiopacketcount.md): The number of packets of audio data.
- [packetDescriptions](avaudiocompressedbuffer/packetdescriptions.md): The buffer’s array of packet descriptions.
- [packetDependencies](avaudiocompressedbuffer/packetdependencies-3a6ln.md): The buffer’s array of packet dependencies.

## Relationships

### Inherits From

- [AVAudioBuffer](avaudiobuffer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Specialized Audio Buffers

- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.

# AVAudioCompressedBuffer (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents an audio buffer that you use for compressed audio formats.

## Declaration

```objectivec
@interface AVAudioCompressedBuffer : AVAudioBuffer
```

## Topics

### Creating an Audio Buffer

- [initWithFormat:packetCapacity:](avaudiocompressedbuffer/init%28format_packetcapacity_%29.md): Creates a buffer that contains constant bytes per packet of audio data in a compressed state.
- [initWithFormat:packetCapacity:maximumPacketSize:](avaudiocompressedbuffer/init%28format_packetcapacity_maximumpacketsize_%29.md): Creates a buffer that contains audio data in a compressed state.

### Getting Audio Buffer Properties

- [byteCapacity](avaudiocompressedbuffer/bytecapacity.md): The number of packets the buffer contains.
- [byteLength](avaudiocompressedbuffer/bytelength.md): The number of valid bytes in the buffer.
- [data](avaudiocompressedbuffer/data.md): The audio buffer’s data bytes.
- [maximumPacketSize](avaudiocompressedbuffer/maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCapacity](avaudiocompressedbuffer/packetcapacity.md): The total number of packets that the buffer can contain.
- [packetCount](avaudiocompressedbuffer/packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](avaudiopacketcount.md): The number of packets of audio data.
- [packetDescriptions](avaudiocompressedbuffer/packetdescriptions.md): The buffer’s array of packet descriptions.
- [packetDependencies](avaudiocompressedbuffer/packetdependencies-5oae6.md): The buffer’s array of packet dependencies.

## Relationships

### Inherits From

- [AVAudioBuffer](avaudiobuffer.md)

## See Also

### Specialized Audio Buffers

- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.
