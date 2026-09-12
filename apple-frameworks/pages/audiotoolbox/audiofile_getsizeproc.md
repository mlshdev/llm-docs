> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofile_getsizeproc](https://developer.apple.com/documentation/audiotoolbox/audiofile_getsizeproc)

# AudioFile_GetSizeProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Gets file data size.

## Declaration

```swift
typealias AudioFile_GetSizeProc = (UnsafeMutableRawPointer) -> Int64
```

## Parameters

- `inClientData`: A pointer to the client data as set in the `inClientData` parameter to the [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofileinitializewithcallbacks%28__________________%29.md) functions.

<a id="return-value"></a>

## Return Value

The callback should return the size of the data.

<a id="Discussion"></a>

## Discussion

If you named your function `MyAudioFile_GetSizeProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

This callback gets invoked by an audio file object when it needs to get audio file data size. You pass this callback as a parameter when calling the [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md) and [AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofileinitializewithcallbacks%28__________________%29.md) functions.

## See Also

### Callbacks

- [AudioFile_ReadProc](audiofile_readproc.md): Reads audio data when used in conjunction with the [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofileinitializewithcallbacks%28__________________%29.md) functions.)
- [AudioFile_WriteProc](audiofile_writeproc.md): A callback for writing file data when used in conjunction with the [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileCreateWithURL(\_:\_:\_:\_:\_:)](audiofilecreatewithurl%28__________%29.md) functions.
- [AudioFile_SetSizeProc](audiofile_setsizeproc.md): Sets file data size.

# AudioFile_GetSizeProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Gets file data size.

## Declaration

```objectivec
typedef long long (*)(void *) AudioFile_GetSizeProc;
```

## Parameters

- `inClientData`: A pointer to the client data as set in the `inClientData` parameter to the [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileInitializeWithCallbacks](audiofileinitializewithcallbacks%28__________________%29.md) functions.

<a id="return-value"></a>

## Return Value

The callback should return the size of the data.

<a id="Discussion"></a>

## Discussion

If you named your function `MyAudioFile_GetSizeProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

This callback gets invoked by an audio file object when it needs to get audio file data size. You pass this callback as a parameter when calling the [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md) and [AudioFileInitializeWithCallbacks](audiofileinitializewithcallbacks%28__________________%29.md) functions.

## See Also

### Callbacks

- [AudioFile_ReadProc](audiofile_readproc.md): Reads audio data when used in conjunction with the [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileInitializeWithCallbacks](audiofileinitializewithcallbacks%28__________________%29.md) functions.)
- [AudioFile_WriteProc](audiofile_writeproc.md): A callback for writing file data when used in conjunction with the [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md) or [AudioFileCreateWithURL](audiofilecreatewithurl%28__________%29.md) functions.
- [AudioFile_SetSizeProc](audiofile_setsizeproc.md): Sets file data size.
