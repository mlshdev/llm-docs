> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofile_writeproc](https://developer.apple.com/documentation/audiotoolbox/audiofile_writeproc)

# AudioFile_WriteProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A callback for writing file data when used in conjunction with the [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileCreateWithURL(\_:\_:\_:\_:\_:)](audiofilecreatewithurl%28__________%29.md) functions.

## Declaration

```swift
typealias AudioFile_WriteProc = (UnsafeMutableRawPointer, Int64, UInt32, UnsafeRawPointer, UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `inClientData`: A pointer to the client data as set in the `inClientData` parameter to [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md) or[AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofileinitializewithcallbacks%28__________________%29.md).
- `inPosition`: An offset into the data from which to read.
- `requestCount`: The number of bytes to write.
- `buffer`: A pointer to the buffer containing the data to write.
- `actualCount`: Upon completion, the callback should set this to a pointer to the number of bytes successfully written.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

If you named your function `MyAudioFile_WriteProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

This callback function is invoked when Audio File Services needs to write data.

## See Also

### Callbacks

- [AudioFile_ReadProc](audiofile_readproc.md): Reads audio data when used in conjunction with the [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofileinitializewithcallbacks%28__________________%29.md) functions.)
- [AudioFile_GetSizeProc](audiofile_getsizeproc.md): Gets file data size.
- [AudioFile_SetSizeProc](audiofile_setsizeproc.md): Sets file data size.

# AudioFile_WriteProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A callback for writing file data when used in conjunction with the [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md) functions.

## Declaration

```objectivec
typedef int (*)(void *, long long, unsigned int, const void *, unsigned int *) AudioFile_WriteProc;
```

## Parameters

- `inClientData`: A pointer to the client data as set in the `inClientData` parameter to [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md) or[AudioFileInitializeWithCallbacks](audiofileinitializewithcallbacks%28__________________%29.md).
- `inPosition`: An offset into the data from which to read.
- `requestCount`: The number of bytes to write.
- `buffer`: A pointer to the buffer containing the data to write.
- `actualCount`: Upon completion, the callback should set this to a pointer to the number of bytes successfully written.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

If you named your function `MyAudioFile_WriteProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

This callback function is invoked when Audio File Services needs to write data.

## See Also

### Callbacks

- [AudioFile_ReadProc](audiofile_readproc.md): Reads audio data when used in conjunction with the [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileInitializeWithCallbacks](audiofileinitializewithcallbacks%28__________________%29.md) functions.)
- [AudioFile_GetSizeProc](audiofile_getsizeproc.md): Gets file data size.
- [AudioFile_SetSizeProc](audiofile_setsizeproc.md): Sets file data size.
