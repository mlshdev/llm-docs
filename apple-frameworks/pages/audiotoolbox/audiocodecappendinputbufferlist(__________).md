> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecappendinputbufferlist(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocodecappendinputbufferlist(_:_:_:_:_:))

# AudioCodecAppendInputBufferList(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioCodecAppendInputBufferList(_ inCodec: AudioCodec, _ inBufferList: UnsafePointer<AudioBufferList>, _ ioNumberPackets: UnsafeMutablePointer<UInt32>, _ inPacketDescription: UnsafePointer<AudioStreamPacketDescription>?, _ outBytesConsumed: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Configuring Buffers

- [AudioCodecProduceOutputBufferList(\_:\_:\_:\_:\_:)](audiocodecproduceoutputbufferlist%28__________%29.md)

# AudioCodecAppendInputBufferList (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioCodecAppendInputBufferList(AudioCodec inCodec, const AudioBufferList *inBufferList, UInt32 *ioNumberPackets, const AudioStreamPacketDescription *inPacketDescription, UInt32 *outBytesConsumed);
```

## See Also

### Configuring Buffers

- [AudioCodecProduceOutputBufferList](audiocodecproduceoutputbufferlist%28__________%29.md)
