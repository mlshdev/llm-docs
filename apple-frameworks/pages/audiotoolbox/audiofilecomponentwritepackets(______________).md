> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentwritepackets(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentwritepackets(_:_:_:_:_:_:_:))

# AudioFileComponentWritePackets(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func AudioFileComponentWritePackets(_ inComponent: AudioFileComponent, _ inUseCache: Bool, _ inNumBytes: UInt32, _ inPacketDescriptions: UnsafePointer<AudioStreamPacketDescription>?, _ inStartingPacket: Int64, _ ioNumPackets: UnsafeMutablePointer<UInt32>, _ inBuffer: UnsafeRawPointer) -> OSStatus
```

## See Also

### Reading and Writing Data

- [AudioFileComponentReadBytes(\_:\_:\_:\_:\_:)](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWriteBytes(\_:\_:\_:\_:\_:)](audiofilecomponentwritebytes%28__________%29.md)
- [AudioFileComponentReadBytesProc](audiofilecomponentreadbytesproc.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)

# AudioFileComponentWritePackets (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus AudioFileComponentWritePackets(AudioFileComponent inComponent, Boolean inUseCache, UInt32 inNumBytes, const AudioStreamPacketDescription *inPacketDescriptions, SInt64 inStartingPacket, UInt32 *ioNumPackets, const void *inBuffer);
```

## See Also

### Reading and Writing Data

- [AudioFileComponentReadBytes](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWriteBytes](audiofilecomponentwritebytes%28__________%29.md)
- [AudioFileComponentReadBytesProc](audiofilecomponentreadbytesproc.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)
