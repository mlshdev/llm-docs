> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiocompressedbuffer/bytecapacity](https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/bytecapacity)

# byteCapacity (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The number of packets the buffer contains.

## Declaration

```swift
var byteCapacity: UInt32 { get }
```

## See Also

### Getting Audio Buffer Properties

- [byteLength](bytelength.md): The number of valid bytes in the buffer.
- [data](data.md): The audio buffer’s data bytes.
- [maximumPacketSize](maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCapacity](packetcapacity.md): The total number of packets that the buffer can contain.
- [packetCount](packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](../avaudiopacketcount.md): The number of packets of audio data.
- [packetDescriptions](packetdescriptions.md): The buffer’s array of packet descriptions.
- [packetDependencies](packetdependencies-3a6ln.md): The buffer’s array of packet dependencies.

# byteCapacity (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The number of packets the buffer contains.

## Declaration

```objectivec
@property (nonatomic, readonly) uint32_t byteCapacity;
```

## See Also

### Getting Audio Buffer Properties

- [byteLength](bytelength.md): The number of valid bytes in the buffer.
- [data](data.md): The audio buffer’s data bytes.
- [maximumPacketSize](maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCapacity](packetcapacity.md): The total number of packets that the buffer can contain.
- [packetCount](packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](../avaudiopacketcount.md): The number of packets of audio data.
- [packetDescriptions](packetdescriptions.md): The buffer’s array of packet descriptions.
- [packetDependencies](packetdependencies-5oae6.md): The buffer’s array of packet dependencies.
