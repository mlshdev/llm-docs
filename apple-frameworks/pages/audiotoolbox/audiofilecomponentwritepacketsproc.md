> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentwritepacketsproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentwritepacketsproc)

# AudioFileComponentWritePacketsProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentWritePacketsProc = (UnsafeMutableRawPointer, DarwinBoolean, UInt32, UnsafePointer<AudioStreamPacketDescription>?, Int64, UnsafeMutablePointer<UInt32>, UnsafeRawPointer) -> OSStatus
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
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)

# AudioFileComponentWritePacketsProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned char, unsigned int, const struct AudioStreamPacketDescription *, long long, unsigned int *, const void *) AudioFileComponentWritePacketsProc;
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
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
