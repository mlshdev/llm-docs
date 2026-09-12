> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofileopenurl(_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofileopenurl(_:_:))

# ExtAudioFileOpenURL(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Opens an existing audio file for reading, and associates it with a new extended audio file object.

## Declaration

```swift
func ExtAudioFileOpenURL(_ inURL: CFURL, _ outExtAudioFile: UnsafeMutablePointer<ExtAudioFileRef?>) -> OSStatus
```

## Parameters

- `inURL`: The audio file to read.
- `outExtAudioFile`: On output, a newly allocated extended audio file object.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Managing Extended Audio File Objects

- [ExtAudioFileCreateWithURL(\_:\_:\_:\_:\_:\_:)](extaudiofilecreatewithurl%28____________%29.md): Creates a new audio file and associates it with a new extended audio file object.
- [ExtAudioFileDispose(\_:)](extaudiofiledispose%28__%29.md): Disposes of an extended audio file object and closes the associated file.
- [ExtAudioFileWrapAudioFileID(\_:\_:\_:)](extaudiofilewrapaudiofileid%28______%29.md): Wraps an audio file object in an extended audio file object.

# ExtAudioFileOpenURL (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Opens an existing audio file for reading, and associates it with a new extended audio file object.

## Declaration

```objectivec
extern OSStatus ExtAudioFileOpenURL(CFURLRef inURL, ExtAudioFileRef*outExtAudioFile);
```

## Parameters

- `inURL`: The audio file to read.
- `outExtAudioFile`: On output, a newly allocated extended audio file object.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Managing Extended Audio File Objects

- [ExtAudioFileCreateWithURL](extaudiofilecreatewithurl%28____________%29.md): Creates a new audio file and associates it with a new extended audio file object.
- [ExtAudioFileDispose](extaudiofiledispose%28__%29.md): Disposes of an extended audio file object and closes the associated file.
- [ExtAudioFileWrapAudioFileID](extaudiofilewrapaudiofileid%28______%29.md): Wraps an audio file object in an extended audio file object.
