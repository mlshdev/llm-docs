> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileflags/dontpagealignaudiodata](https://developer.apple.com/documentation/audiotoolbox/audiofileflags/dontpagealignaudiodata)

# dontPageAlignAudioData (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Typically, the audio data in a file is page aligned. To make reading the file data as fast as possible, you can use page-aligned data to take advantage of optimized code paths in the file system. However, when space is at a premium, you might want to avoid the additional padding required to attain alignment. To do so, set this flag when calling [AudioFileCreate](../audiofilecreate.md) or [AudioFileCreateWithURL(\_:\_:\_:\_:\_:)](../audiofilecreatewithurl%28__________%29.md).

## Declaration

```swift
static var dontPageAlignAudioData: AudioFileFlags { get }
```

## See Also

### Flags

- [eraseFile](erasefile.md)

# kAudioFileFlags_DontPageAlignAudioData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Typically, the audio data in a file is page aligned. To make reading the file data as fast as possible, you can use page-aligned data to take advantage of optimized code paths in the file system. However, when space is at a premium, you might want to avoid the additional padding required to attain alignment. To do so, set this flag when calling [AudioFileCreate](../audiofilecreate.md) or [AudioFileCreateWithURL](../audiofilecreatewithurl%28__________%29.md).

## Declaration

```objectivec
kAudioFileFlags_DontPageAlignAudioData
```

## See Also

### Flags

- [kAudioFileFlags_EraseFile](erasefile.md)
