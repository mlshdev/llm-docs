> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreamparseflags/discontinuity](https://developer.apple.com/documentation/audiotoolbox/audiofilestreamparseflags/discontinuity)

# discontinuity (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Pass this flag to the [AudioFileStreamParseBytes(\_:\_:\_:\_:)](../audiofilestreamparsebytes%28________%29.md) function to signal a discontinuity in the audio data.

## Declaration

```swift
static var discontinuity: AudioFileStreamParseFlags { get }
```

<a id="Discussion"></a>

## Discussion

Any partial packet straddling a buffer boundary is discarded to avoid having the parser call your callback with a corrupt packet. After a discontinuity occurs, the [AudioFileStreamSeek(\_:\_:\_:\_:)](../audiofilestreamseek%28________%29.md) function might return approximate values for some data formats.

# kAudioFileStreamParseFlag_Discontinuity (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Pass this flag to the [AudioFileStreamParseBytes](../audiofilestreamparsebytes%28________%29.md) function to signal a discontinuity in the audio data.

## Declaration

```objectivec
kAudioFileStreamParseFlag_Discontinuity
```

<a id="Discussion"></a>

## Discussion

Any partial packet straddling a buffer boundary is discarded to avoid having the parser call your callback with a corrupt packet. After a discontinuity occurs, the [AudioFileStreamSeek](../audiofilestreamseek%28________%29.md) function might return approximate values for some data formats.
