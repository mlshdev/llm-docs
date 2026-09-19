> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiocodecproduceoutputbufferlist(_:_:_:_:_:)

# AudioCodecProduceOutputBufferList(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioCodecProduceOutputBufferList(_ inCodec: AudioCodec, _ ioBufferList: UnsafeMutablePointer<AudioBufferList>, _ ioNumberPackets: UnsafeMutablePointer<UInt32>, _ outPacketDescription: UnsafeMutablePointer<AudioStreamPacketDescription>?, _ outStatus: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Configuring Buffers

- [AudioCodecAppendInputBufferList(\_:\_:\_:\_:\_:)](audiocodecappendinputbufferlist%28__________%29.md)

# AudioCodecProduceOutputBufferList (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioCodecProduceOutputBufferList(AudioCodec inCodec, AudioBufferList *ioBufferList, UInt32 *ioNumberPackets, AudioStreamPacketDescription *outPacketDescription, UInt32 *outStatus);
```

## See Also

### Configuring Buffers

- [AudioCodecAppendInputBufferList](audiocodecappendinputbufferlist%28__________%29.md)
