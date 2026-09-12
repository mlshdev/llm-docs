> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofiledispose(_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofiledispose(_:))

# ExtAudioFileDispose(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Disposes of an extended audio file object and closes the associated file.

## Declaration

```swift
func ExtAudioFileDispose(_ inExtAudioFile: ExtAudioFileRef) -> OSStatus
```

## Parameters

- `inExtAudioFile`: The extended audio file object to close.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Managing Extended Audio File Objects

- [ExtAudioFileCreateWithURL(\_:\_:\_:\_:\_:\_:)](extaudiofilecreatewithurl%28____________%29.md): Creates a new audio file and associates it with a new extended audio file object.
- [ExtAudioFileOpenURL(\_:\_:)](extaudiofileopenurl%28____%29.md): Opens an existing audio file for reading, and associates it with a new extended audio file object.
- [ExtAudioFileWrapAudioFileID(\_:\_:\_:)](extaudiofilewrapaudiofileid%28______%29.md): Wraps an audio file object in an extended audio file object.

# ExtAudioFileDispose (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Disposes of an extended audio file object and closes the associated file.

## Declaration

```objectivec
extern OSStatus ExtAudioFileDispose(ExtAudioFileRef inExtAudioFile);
```

## Parameters

- `inExtAudioFile`: The extended audio file object to close.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Managing Extended Audio File Objects

- [ExtAudioFileCreateWithURL](extaudiofilecreatewithurl%28____________%29.md): Creates a new audio file and associates it with a new extended audio file object.
- [ExtAudioFileOpenURL](extaudiofileopenurl%28____%29.md): Opens an existing audio file for reading, and associates it with a new extended audio file object.
- [ExtAudioFileWrapAudioFileID](extaudiofilewrapaudiofileid%28______%29.md): Wraps an audio file object in an extended audio file object.
