> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiocompressedbuffer/bytelength](https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/bytelength)

# byteLength (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The number of valid bytes in the buffer.

## Declaration

```swift
var byteLength: UInt32 { get set }
```

<a id="Discussion"></a>

## Discussion

You can change this value as part of an operation that modifies the contents.

## See Also

### Getting Audio Buffer Properties

- [byteCapacity](bytecapacity.md): The number of packets the buffer contains.
- [data](data.md): The audio buffer’s data bytes.
- [maximumPacketSize](maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCapacity](packetcapacity.md): The total number of packets that the buffer can contain.
- [packetCount](packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](../avaudiopacketcount.md): The number of packets of audio data.
- [packetDescriptions](packetdescriptions.md): The buffer’s array of packet descriptions.
- [packetDependencies](packetdependencies-3a6ln.md): The buffer’s array of packet dependencies.

# byteLength (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The number of valid bytes in the buffer.

## Declaration

```objectivec
@property (nonatomic) uint32_t byteLength;
```

<a id="Discussion"></a>

## Discussion

You can change this value as part of an operation that modifies the contents.

## See Also

### Getting Audio Buffer Properties

- [byteCapacity](bytecapacity.md): The number of packets the buffer contains.
- [data](data.md): The audio buffer’s data bytes.
- [maximumPacketSize](maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCapacity](packetcapacity.md): The total number of packets that the buffer can contain.
- [packetCount](packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](../avaudiopacketcount.md): The number of packets of audio data.
- [packetDescriptions](packetdescriptions.md): The buffer’s array of packet descriptions.
- [packetDependencies](packetdependencies-5oae6.md): The buffer’s array of packet dependencies.
