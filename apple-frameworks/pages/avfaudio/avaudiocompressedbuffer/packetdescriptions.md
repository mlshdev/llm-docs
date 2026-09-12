> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiocompressedbuffer/packetdescriptions](https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/packetdescriptions)

# packetDescriptions (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The buffer’s array of packet descriptions.

## Declaration

```swift
var packetDescriptions: UnsafeMutablePointer<AudioStreamPacketDescription>? { get }
```

## See Also

### Getting Audio Buffer Properties

- [byteCapacity](bytecapacity.md): The number of packets the buffer contains.
- [byteLength](bytelength.md): The number of valid bytes in the buffer.
- [data](data.md): The audio buffer’s data bytes.
- [maximumPacketSize](maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCapacity](packetcapacity.md): The total number of packets that the buffer can contain.
- [packetCount](packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](../avaudiopacketcount.md): The number of packets of audio data.
- [packetDependencies](packetdependencies-3a6ln.md): The buffer’s array of packet dependencies.

# packetDescriptions (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The buffer’s array of packet descriptions.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AudioStreamPacketDescription * packetDescriptions;
```

## See Also

### Getting Audio Buffer Properties

- [byteCapacity](bytecapacity.md): The number of packets the buffer contains.
- [byteLength](bytelength.md): The number of valid bytes in the buffer.
- [data](data.md): The audio buffer’s data bytes.
- [maximumPacketSize](maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCapacity](packetcapacity.md): The total number of packets that the buffer can contain.
- [packetCount](packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](../avaudiopacketcount.md): The number of packets of audio data.
- [packetDependencies](packetdependencies-5oae6.md): The buffer’s array of packet dependencies.
