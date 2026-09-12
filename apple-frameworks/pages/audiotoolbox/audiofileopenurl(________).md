> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileopenurl(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofileopenurl(_:_:_:_:))

# AudioFileOpenURL(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Open an existing audio file specified by a URL.

## Declaration

```swift
func AudioFileOpenURL(_ inFileRef: CFURL, _ inPermissions: AudioFilePermissions, _ inFileTypeHint: AudioFileTypeID, _ outAudioFile: UnsafeMutablePointer<AudioFileID?>) -> OSStatus
```

## Parameters

- `inFileRef`: The URL of an existing audio file.
- `inPermissions`: The read-write permissions you want to assign to the file. Use the permission constants in [AudioFilePermissions](audiofilepermissions.md).
- `inFileTypeHint`: A hint for the file type of the designated file. For files without filename extensions and with types not easily or uniquely determined from the data (such as ADTS or AC3), use this hint to indicate the file type. Otherwise,  pass `0`. Only use this hint in macOS versions 10.3.1 or greater. In all earlier versions, any attempt to open these files fails.
- `outAudioFile`: On output, a pointer to the newly opened audio file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Opening and Closing Audio Files

- [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md): Opens an existing file with callbacks you provide.
- [AudioFileClose(\_:)](audiofileclose%28__%29.md): Closes an audio file.

# AudioFileOpenURL (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Open an existing audio file specified by a URL.

## Declaration

```objectivec
extern OSStatus AudioFileOpenURL(CFURLRef inFileRef, AudioFilePermissions inPermissions, AudioFileTypeID inFileTypeHint, AudioFileID*outAudioFile);
```

## Parameters

- `inFileRef`: The URL of an existing audio file.
- `inPermissions`: The read-write permissions you want to assign to the file. Use the permission constants in [AudioFilePermissions](audiofilepermissions.md).
- `inFileTypeHint`: A hint for the file type of the designated file. For files without filename extensions and with types not easily or uniquely determined from the data (such as ADTS or AC3), use this hint to indicate the file type. Otherwise,  pass `0`. Only use this hint in macOS versions 10.3.1 or greater. In all earlier versions, any attempt to open these files fails.
- `outAudioFile`: On output, a pointer to the newly opened audio file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Opening and Closing Audio Files

- [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md): Opens an existing file with callbacks you provide.
- [AudioFileClose](audiofileclose%28__%29.md): Closes an audio file.
