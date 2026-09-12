> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiocompressedbuffer/packetdependencies-5oae6](https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/packetdependencies-5oae6)

# packetDependencies

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The buffer’s array of packet dependencies.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AudioStreamPacketDependencyDescription * packetDependencies;
```

<a id="discussion"></a>

## Discussion

If the audio format doesn’t use packet dependencies, this value is `nil`.

## See Also

### Getting Audio Buffer Properties

- [byteCapacity](bytecapacity.md): The number of packets the buffer contains.
- [byteLength](bytelength.md): The number of valid bytes in the buffer.
- [data](data.md): The audio buffer’s data bytes.
- [maximumPacketSize](maximumpacketsize.md): The maximum size of a packet, in bytes.
- [packetCapacity](packetcapacity.md): The total number of packets that the buffer can contain.
- [packetCount](packetcount.md): The number of packets currently in the buffer.
- [AVAudioPacketCount](../avaudiopacketcount.md): The number of packets of audio data.
- [packetDescriptions](packetdescriptions.md): The buffer’s array of packet descriptions.
