> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecreatewithurl(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecreatewithurl(_:_:_:_:_:))

# AudioFileCreateWithURL(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new audio file, or initializes an existing file, specified by a URL.

## Declaration

```swift
func AudioFileCreateWithURL(_ inFileRef: CFURL, _ inFileType: AudioFileTypeID, _ inFormat: UnsafePointer<AudioStreamBasicDescription>, _ inFlags: AudioFileFlags, _ outAudioFile: UnsafeMutablePointer<AudioFileID?>) -> OSStatus
```

## Parameters

- `inFileRef`: The fully specified path of the file to create or initialize.
- `inFileType`: The type of audio file to create.  See [AudioFileTypeID](audiofiletypeid.md) for constants that can be used.
- `inFormat`: A pointer to the structure that describes the format of the data.
- `inFlags`: Relevant flags for creating or opening the file. If [eraseFile](audiofileflags/erasefile.md) is set, it erases an existing file. If the flag is not set, the function fails fails if the URL is an existing file.
- `outAudioFile`: On output, a pointer to a newly created or initialized file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function uses a `CFURLRef` type rather than the `FSRef` type used by the deprecated [AudioFileCreate](audiofilecreate.md) function.

## See Also

### Creating and Initializing Audio Files

- [AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofileinitializewithcallbacks%28__________________%29.md): Deletes the content of an existing file and assigns callbacks to the audio file object.

# AudioFileCreateWithURL (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new audio file, or initializes an existing file, specified by a URL.

## Declaration

```objectivec
extern OSStatus AudioFileCreateWithURL(CFURLRef inFileRef, AudioFileTypeID inFileType, const AudioStreamBasicDescription *inFormat, AudioFileFlags inFlags, AudioFileID*outAudioFile);
```

## Parameters

- `inFileRef`: The fully specified path of the file to create or initialize.
- `inFileType`: The type of audio file to create.  See [AudioFileTypeID](audiofiletypeid.md) for constants that can be used.
- `inFormat`: A pointer to the structure that describes the format of the data.
- `inFlags`: Relevant flags for creating or opening the file. If [kAudioFileFlags_EraseFile](audiofileflags/erasefile.md) is set, it erases an existing file. If the flag is not set, the function fails fails if the URL is an existing file.
- `outAudioFile`: On output, a pointer to a newly created or initialized file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function uses a `CFURLRef` type rather than the `FSRef` type used by the deprecated [AudioFileCreate](audiofilecreate.md) function.

## See Also

### Creating and Initializing Audio Files

- [AudioFileInitializeWithCallbacks](audiofileinitializewithcallbacks%28__________________%29.md): Deletes the content of an existing file and assigns callbacks to the audio file object.
