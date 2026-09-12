> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofilewrapaudiofileid(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofilewrapaudiofileid(_:_:_:))

# ExtAudioFileWrapAudioFileID(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Wraps an audio file object in an extended audio file object.

## Declaration

```swift
func ExtAudioFileWrapAudioFileID(_ inFileID: AudioFileID, _ inForWriting: Bool, _ outExtAudioFile: UnsafeMutablePointer<ExtAudioFileRef?>) -> OSStatus
```

## Parameters

- `inFileID`: The audio file object to wrap.
- `inForWriting`: Use `true` if you intend to write to the audio file, `false` otherwise.
- `outExtAudioFile`: On output, a newly allocated extended audio file object.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Allocates a new extended audio file object that wraps an existing audio file object. Your application is responsible for keeping the audio file object open until the extended audio file object is disposed.

## See Also

### Managing Extended Audio File Objects

- [ExtAudioFileCreateWithURL(\_:\_:\_:\_:\_:\_:)](extaudiofilecreatewithurl%28____________%29.md): Creates a new audio file and associates it with a new extended audio file object.
- [ExtAudioFileDispose(\_:)](extaudiofiledispose%28__%29.md): Disposes of an extended audio file object and closes the associated file.
- [ExtAudioFileOpenURL(\_:\_:)](extaudiofileopenurl%28____%29.md): Opens an existing audio file for reading, and associates it with a new extended audio file object.

# ExtAudioFileWrapAudioFileID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Wraps an audio file object in an extended audio file object.

## Declaration

```objectivec
extern OSStatus ExtAudioFileWrapAudioFileID(AudioFileID inFileID, Boolean inForWriting, ExtAudioFileRef*outExtAudioFile);
```

## Parameters

- `inFileID`: The audio file object to wrap.
- `inForWriting`: Use `true` if you intend to write to the audio file, `false` otherwise.
- `outExtAudioFile`: On output, a newly allocated extended audio file object.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Allocates a new extended audio file object that wraps an existing audio file object. Your application is responsible for keeping the audio file object open until the extended audio file object is disposed.

## See Also

### Managing Extended Audio File Objects

- [ExtAudioFileCreateWithURL](extaudiofilecreatewithurl%28____________%29.md): Creates a new audio file and associates it with a new extended audio file object.
- [ExtAudioFileDispose](extaudiofiledispose%28__%29.md): Disposes of an extended audio file object and closes the associated file.
- [ExtAudioFileOpenURL](extaudiofileopenurl%28____%29.md): Opens an existing audio file for reading, and associates it with a new extended audio file object.
