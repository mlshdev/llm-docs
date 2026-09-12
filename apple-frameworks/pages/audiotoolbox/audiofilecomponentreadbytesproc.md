> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentreadbytesproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentreadbytesproc)

# AudioFileComponentReadBytesProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentReadBytesProc = (UnsafeMutableRawPointer, DarwinBoolean, Int64, UnsafeMutablePointer<UInt32>, UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Reading and Writing Data

- [AudioFileComponentReadBytes(\_:\_:\_:\_:\_:)](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWriteBytes(\_:\_:\_:\_:\_:)](audiofilecomponentwritebytes%28__________%29.md)
- [AudioFileComponentWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentwritepackets%28______________%29.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)

# AudioFileComponentReadBytesProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned char, long long, unsigned int *, void *) AudioFileComponentReadBytesProc;
```

## See Also

### Reading and Writing Data

- [AudioFileComponentReadBytes](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWriteBytes](audiofilecomponentwritebytes%28__________%29.md)
- [AudioFileComponentWritePackets](audiofilecomponentwritepackets%28______________%29.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)
