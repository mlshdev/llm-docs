> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreamclose(_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilestreamclose(_:))

# AudioFileStreamClose(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Closes and deallocates the specified audio file stream parser.

## Declaration

```swift
func AudioFileStreamClose(_ inAudioFileStream: AudioFileStreamID) -> OSStatus
```

## Parameters

- `inAudioFileStream`: The ID of the parser you wish to close. The parser ID is returned by the [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md) function.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

# AudioFileStreamClose (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Closes and deallocates the specified audio file stream parser.

## Declaration

```objectivec
extern OSStatus AudioFileStreamClose(AudioFileStreamID inAudioFileStream);
```

## Parameters

- `inAudioFileStream`: The ID of the parser you wish to close. The parser ID is returned by the [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md) function.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.
