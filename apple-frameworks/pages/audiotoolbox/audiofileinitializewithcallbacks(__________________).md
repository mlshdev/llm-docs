> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileinitializewithcallbacks(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofileinitializewithcallbacks(_:_:_:_:_:_:_:_:_:))

# AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Deletes the content of an existing file and assigns callbacks to the audio file object.

## Declaration

```swift
func AudioFileInitializeWithCallbacks(_ inClientData: UnsafeMutableRawPointer, _ inReadFunc: AudioFile_ReadProc, _ inWriteFunc: AudioFile_WriteProc, _ inGetSizeFunc: AudioFile_GetSizeProc, _ inSetSizeFunc: AudioFile_SetSizeProc, _ inFileType: AudioFileTypeID, _ inFormat: UnsafePointer<AudioStreamBasicDescription>, _ inFlags: AudioFileFlags, _ outAudioFile: UnsafeMutablePointer<AudioFileID?>) -> OSStatus
```

## Parameters

- `inClientData`: A pointer to a constant passed to your callbacks. Th constant should contain any information you use to manage the state for reading data from the file.
- `inReadFunc`: A callback function invoked when the audio file object wants to read data.
- `inWriteFunc`: A callback function invoked when the audio file object wants to write data.
- `inGetSizeFunc`: A callback function invoked when the audio file object wants to know the size of the file.
- `inSetSizeFunc`: A callback function invoked when the audio file object wants to set the size of the file.
- `inFileType`: The type of audio file to initialize
- `inFormat`: The format for the audio data in the file.
- `inFlags`: Flags for creating or opening the file. Set to `0`.
- `outAudioFile`: On output, a pointer to the newly initialized audio file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md): Opens an existing file with callbacks you provide.

### Creating and Initializing Audio Files

- [AudioFileCreateWithURL(\_:\_:\_:\_:\_:)](audiofilecreatewithurl%28__________%29.md): Creates a new audio file, or initializes an existing file, specified by a URL.

# AudioFileInitializeWithCallbacks (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Deletes the content of an existing file and assigns callbacks to the audio file object.

## Declaration

```objectivec
extern OSStatus AudioFileInitializeWithCallbacks(void *inClientData, AudioFile_ReadProc inReadFunc, AudioFile_WriteProc inWriteFunc, AudioFile_GetSizeProc inGetSizeFunc, AudioFile_SetSizeProc inSetSizeFunc, AudioFileTypeID inFileType, const AudioStreamBasicDescription *inFormat, AudioFileFlags inFlags, AudioFileID*outAudioFile);
```

## Parameters

- `inClientData`: A pointer to a constant passed to your callbacks. Th constant should contain any information you use to manage the state for reading data from the file.
- `inReadFunc`: A callback function invoked when the audio file object wants to read data.
- `inWriteFunc`: A callback function invoked when the audio file object wants to write data.
- `inGetSizeFunc`: A callback function invoked when the audio file object wants to know the size of the file.
- `inSetSizeFunc`: A callback function invoked when the audio file object wants to set the size of the file.
- `inFileType`: The type of audio file to initialize
- `inFormat`: The format for the audio data in the file.
- `inFlags`: Flags for creating or opening the file. Set to `0`.
- `outAudioFile`: On output, a pointer to the newly initialized audio file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md): Opens an existing file with callbacks you provide.

### Creating and Initializing Audio Files

- [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md): Creates a new audio file, or initializes an existing file, specified by a URL.
