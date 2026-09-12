> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentwritebytes(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentwritebytes(_:_:_:_:_:))

# AudioFileComponentWriteBytes(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func AudioFileComponentWriteBytes(_ inComponent: AudioFileComponent, _ inUseCache: Bool, _ inStartingByte: Int64, _ ioNumBytes: UnsafeMutablePointer<UInt32>, _ inBuffer: UnsafeRawPointer) -> OSStatus
```

## See Also

### Reading and Writing Data

- [AudioFileComponentReadBytes(\_:\_:\_:\_:\_:)](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentwritepackets%28______________%29.md)
- [AudioFileComponentReadBytesProc](audiofilecomponentreadbytesproc.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)

# AudioFileComponentWriteBytes (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus AudioFileComponentWriteBytes(AudioFileComponent inComponent, Boolean inUseCache, SInt64 inStartingByte, UInt32 *ioNumBytes, const void *inBuffer);
```

## See Also

### Reading and Writing Data

- [AudioFileComponentReadBytes](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWritePackets](audiofilecomponentwritepackets%28______________%29.md)
- [AudioFileComponentReadBytesProc](audiofilecomponentreadbytesproc.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)
