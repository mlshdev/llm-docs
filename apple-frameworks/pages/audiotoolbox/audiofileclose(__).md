> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileclose(_:)](https://developer.apple.com/documentation/audiotoolbox/audiofileclose(_:))

# AudioFileClose(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Closes an audio file.

## Declaration

```swift
func AudioFileClose(_ inAudioFile: AudioFileID) -> OSStatus
```

## Parameters

- `inAudioFile`: The file you want to close.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Opening and Closing Audio Files

- [AudioFileOpenURL(\_:\_:\_:\_:)](audiofileopenurl%28________%29.md): Open an existing audio file specified by a URL.
- [AudioFileOpenWithCallbacks(\_:\_:\_:\_:\_:\_:\_:)](audiofileopenwithcallbacks%28______________%29.md): Opens an existing file with callbacks you provide.

# AudioFileClose (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Closes an audio file.

## Declaration

```objectivec
extern OSStatus AudioFileClose(AudioFileID inAudioFile);
```

## Parameters

- `inAudioFile`: The file you want to close.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Opening and Closing Audio Files

- [AudioFileOpenURL](audiofileopenurl%28________%29.md): Open an existing audio file specified by a URL.
- [AudioFileOpenWithCallbacks](audiofileopenwithcallbacks%28______________%29.md): Opens an existing file with callbacks you provide.
