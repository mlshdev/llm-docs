> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofilecreatewithurl(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofilecreatewithurl(_:_:_:_:_:_:))

# ExtAudioFileCreateWithURL(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new audio file and associates it with a new extended audio file object.

## Declaration

```swift
func ExtAudioFileCreateWithURL(_ inURL: CFURL, _ inFileType: AudioFileTypeID, _ inStreamDesc: UnsafePointer<AudioStreamBasicDescription>, _ inChannelLayout: UnsafePointer<AudioChannelLayout>?, _ inFlags: UInt32, _ outExtAudioFile: UnsafeMutablePointer<ExtAudioFileRef?>) -> OSStatus
```

## Parameters

- `inURL`: The URL of the new audio file.
- `inFileType`: The type of file to create, specified as a constant from the [AudioFileTypeID](audiofiletypeid.md) enumeration.
- `inStreamDesc`: The format of the audio data to be written to the file.
- `inChannelLayout`: The channel layout of the audio data. If non-null, this must be consistent with the number of channels specified by the `inStreamDesc` parameter.
- `inFlags`: Flags for creating or opening the file. If the [eraseFile](audiofileflags/erasefile.md) flag is set, it erases an existing file. If the flag is not set, the function fails fails if the URL points to an existing file.
- `outExtAudioFile`: On output, a newly allocated extended audio file object.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If the file to be created is in a compressed format, you may set the sample rate in the `inStreamDesc` parameter to `0`. In all cases, the extended file object’s encoding converter may produce audio at a different sample rate than the source. The file will be created with the audio format produced by the encoder.

## See Also

### Managing Extended Audio File Objects

- [ExtAudioFileDispose(\_:)](extaudiofiledispose%28__%29.md): Disposes of an extended audio file object and closes the associated file.
- [ExtAudioFileOpenURL(\_:\_:)](extaudiofileopenurl%28____%29.md): Opens an existing audio file for reading, and associates it with a new extended audio file object.
- [ExtAudioFileWrapAudioFileID(\_:\_:\_:)](extaudiofilewrapaudiofileid%28______%29.md): Wraps an audio file object in an extended audio file object.

# ExtAudioFileCreateWithURL (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new audio file and associates it with a new extended audio file object.

## Declaration

```objectivec
extern OSStatus ExtAudioFileCreateWithURL(CFURLRef inURL, AudioFileTypeID inFileType, const AudioStreamBasicDescription *inStreamDesc, const AudioChannelLayout *inChannelLayout, UInt32 inFlags, ExtAudioFileRef*outExtAudioFile);
```

## Parameters

- `inURL`: The URL of the new audio file.
- `inFileType`: The type of file to create, specified as a constant from the [AudioFileTypeID](audiofiletypeid.md) enumeration.
- `inStreamDesc`: The format of the audio data to be written to the file.
- `inChannelLayout`: The channel layout of the audio data. If non-null, this must be consistent with the number of channels specified by the `inStreamDesc` parameter.
- `inFlags`: Flags for creating or opening the file. If the [kAudioFileFlags_EraseFile](audiofileflags/erasefile.md) flag is set, it erases an existing file. If the flag is not set, the function fails fails if the URL points to an existing file.
- `outExtAudioFile`: On output, a newly allocated extended audio file object.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If the file to be created is in a compressed format, you may set the sample rate in the `inStreamDesc` parameter to `0`. In all cases, the extended file object’s encoding converter may produce audio at a different sample rate than the source. The file will be created with the audio format produced by the encoder.

## See Also

### Managing Extended Audio File Objects

- [ExtAudioFileDispose](extaudiofiledispose%28__%29.md): Disposes of an extended audio file object and closes the associated file.
- [ExtAudioFileOpenURL](extaudiofileopenurl%28____%29.md): Opens an existing audio file for reading, and associates it with a new extended audio file object.
- [ExtAudioFileWrapAudioFileID](extaudiofilewrapaudiofileid%28______%29.md): Wraps an audio file object in an extended audio file object.
