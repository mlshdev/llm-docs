> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiocompressedbuffer/packetcapacity](https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/packetcapacity)

# packetCapacity (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The total number of packets that the buffer can contain.

## Declaration

```swift
var packetCapacity: AVAudioPacketCount { get }
```

## See Also

### Getting Audio Buffer Properties

- [byteCapacity](bytecapacity.md): The number of packets the buffer contains.
- [byteLength](bytelength.md): The number of valid bytes in the buffer.
- [data](data.md): The audio buffer’s data bytes.
- [maximumPacketSize](maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCount](packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](../avaudiopacketcount.md): The number of packets of audio data.
- [packetDescriptions](packetdescriptions.md): The buffer’s array of packet descriptions.
- [packetDependencies](packetdependencies-3a6ln.md): The buffer’s array of packet dependencies.

# packetCapacity (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The total number of packets that the buffer can contain.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioPacketCount packetCapacity;
```

## See Also

### Getting Audio Buffer Properties

- [byteCapacity](bytecapacity.md): The number of packets the buffer contains.
- [byteLength](bytelength.md): The number of valid bytes in the buffer.
- [data](data.md): The audio buffer’s data bytes.
- [maximumPacketSize](maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCount](packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](../avaudiopacketcount.md): The number of packets of audio data.
- [packetDescriptions](packetdescriptions.md): The buffer’s array of packet descriptions.
- [packetDependencies](packetdependencies-5oae6.md): The buffer’s array of packet dependencies.
