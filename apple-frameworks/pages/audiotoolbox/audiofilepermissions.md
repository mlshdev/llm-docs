> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilepermissions](https://developer.apple.com/documentation/audiotoolbox/audiofilepermissions)

# AudioFilePermissions (Swift)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags for use when opening an audio file.

## Declaration

```swift
enum AudioFilePermissions
```

<a id="overview"></a>

## Overview

Use these flags with the [AudioFileOpenURL(\_:\_:\_:\_:)](audiofileopenurl%28________%29.md) and [AudioFileOpen](audiofileopen.md) functions.

## Topics

### Constants

- [AudioFilePermissions.readPermission](audiofilepermissions/readpermission.md): File is read-only.
- [AudioFilePermissions.readWritePermission](audiofilepermissions/readwritepermission.md): File has read-write permission.
- [AudioFilePermissions.writePermission](audiofilepermissions/writepermission.md): File is write-only.

### Initializers

- [init(rawValue:)](audiofilepermissions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [AudioBytePacketTranslationFlags](audiobytepackettranslationflags.md)
- [AudioFileFlags](audiofileflags.md)
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [AudioFileStreamParseFlags](audiofilestreamparseflags.md)
- [AudioFileStreamPropertyFlags](audiofilestreampropertyflags.md)
- [AudioFileStreamSeekFlags](audiofilestreamseekflags.md)

# AudioFilePermissions (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags for use when opening an audio file.

## Declaration

```objectivec
enum AudioFilePermissions : SInt8;
```

<a id="overview"></a>

## Overview

Use these flags with the [AudioFileOpenURL](audiofileopenurl%28________%29.md) and [AudioFileOpen](audiofileopen.md) functions.

## Topics

### Constants

- [kAudioFileReadPermission](audiofilepermissions/readpermission.md): File is read-only.
- [kAudioFileReadWritePermission](audiofilepermissions/readwritepermission.md): File has read-write permission.
- [kAudioFileWritePermission](audiofilepermissions/writepermission.md): File is write-only.

## See Also

### Enumerations

- [AudioBytePacketTranslationFlags](audiobytepackettranslationflags.md)
- [AudioFileFlags](audiofileflags.md)
- [AudioFileRegionFlags](audiofileregionflags.md): Flags that specify a playback direction for an audio file region structure.
- [AudioFileStreamParseFlags](audiofilestreamparseflags.md)
- [AudioFileStreamPropertyFlags](audiofilestreampropertyflags.md)
- [AudioFileStreamSeekFlags](audiofilestreamseekflags.md)
