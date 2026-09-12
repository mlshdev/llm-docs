> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentreadpacketsproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentreadpacketsproc)

# AudioFileComponentReadPacketsProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentReadPacketsProc = (UnsafeMutableRawPointer, DarwinBoolean, UnsafeMutablePointer<UInt32>, UnsafeMutablePointer<AudioStreamPacketDescription>?, Int64, UnsafeMutablePointer<UInt32>, UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Reading and Writing Data

- [AudioFileComponentReadBytes(\_:\_:\_:\_:\_:)](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWriteBytes(\_:\_:\_:\_:\_:)](audiofilecomponentwritebytes%28__________%29.md)
- [AudioFileComponentWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentwritepackets%28______________%29.md)
- [AudioFileComponentReadBytesProc](audiofilecomponentreadbytesproc.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)

# AudioFileComponentReadPacketsProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned char, unsigned int *, struct AudioStreamPacketDescription *, long long, unsigned int *, void *) AudioFileComponentReadPacketsProc;
```

## See Also

### Reading and Writing Data

- [AudioFileComponentReadBytes](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWriteBytes](audiofilecomponentwritebytes%28__________%29.md)
- [AudioFileComponentWritePackets](audiofilecomponentwritepackets%28______________%29.md)
- [AudioFileComponentReadBytesProc](audiofilecomponentreadbytesproc.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)
