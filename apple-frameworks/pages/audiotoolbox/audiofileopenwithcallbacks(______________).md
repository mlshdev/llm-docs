> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileopenwithcallbacks(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofileopenwithcallbacks(_:_:_:_:_:_:_:))

# AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Opens an existing file with callbacks you provide.

## Declaration

```swift
func AudioFileOpenWithCallbacks(_ inClientData: UnsafeMutableRawPointer, _ inReadFunc: AudioFile_ReadProc, _ inWriteFunc: AudioFile_WriteProc?, _ inGetSizeFunc: AudioFile_GetSizeProc, _ inSetSizeFunc: AudioFile_SetSizeProc?, _ inFileTypeHint: AudioFileTypeID, _ outAudioFile: UnsafeMutablePointer<AudioFileID?>) -> OSStatus
```

## Parameters

- `inClientData`: A pointer to a constant passed to your callbacks. The constant should contain any information you use to manage the state for reading data from the file.
- `inReadFunc`: A callback function invoked when the audio file object wants to read data.
- `inWriteFunc`: A callback function called when the audio file object wants to write data.
- `inGetSizeFunc`: A callback function called when the audio file object wants to know the file size.
- `inSetSizeFunc`: A callback function called when the audio file object wants to set the file size.
- `inFileTypeHint`: A hint about the type of the designated file. For files with no filename extension and without a type easily or uniquely determined from the data (ADTS,AC3), use this hint to indicate the file type. Otherwise, pass `0` for this parameter. The hint is only available in macOS versions 10.3.1 or greater. In versions prior to OS X 10.3.1, opening files such files fails.
- `outAudioFile`: On output, a pointer to the newly opened file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofileinitializewithcallbacks%28__________________%29.md): Deletes the content of an existing file and assigns callbacks to the audio file object.

### Opening and Closing Audio Files

- [AudioFileOpenURL(\_:\_:\_:\_:)](audiofileopenurl%28________%29.md): Open an existing audio file specified by a URL.
- [AudioFileClose(\_:)](audiofileclose%28__%29.md): Closes an audio file.

# AudioFileOpenWithCallbacks (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Opens an existing file with callbacks you provide.

## Declaration

```objectivec
extern OSStatus AudioFileOpenWithCallbacks(void *inClientData, AudioFile_ReadProc inReadFunc, AudioFile_WriteProc inWriteFunc, AudioFile_GetSizeProc inGetSizeFunc, AudioFile_SetSizeProc inSetSizeFunc, AudioFileTypeID inFileTypeHint, AudioFileID*outAudioFile);
```

## Parameters

- `inClientData`: A pointer to a constant passed to your callbacks. The constant should contain any information you use to manage the state for reading data from the file.
- `inReadFunc`: A callback function invoked when the audio file object wants to read data.
- `inWriteFunc`: A callback function called when the audio file object wants to write data.
- `inGetSizeFunc`: A callback function called when the audio file object wants to know the file size.
- `inSetSizeFunc`: A callback function called when the audio file object wants to set the file size.
- `inFileTypeHint`: A hint about the type of the designated file. For files with no filename extension and without a type easily or uniquely determined from the data (ADTS,AC3), use this hint to indicate the file type. Otherwise, pass `0` for this parameter. The hint is only available in macOS versions 10.3.1 or greater. In versions prior to OS X 10.3.1, opening files such files fails.
- `outAudioFile`: On output, a pointer to the newly opened file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileInitializeWithCallbacks](audiofileinitializewithcallbacks%28__________________%29.md): Deletes the content of an existing file and assigns callbacks to the audio file object.

### Opening and Closing Audio Files

- [AudioFileOpenURL](audiofileopenurl%28________%29.md): Open an existing audio file specified by a URL.
- [AudioFileClose](audiofileclose%28__%29.md): Closes an audio file.
