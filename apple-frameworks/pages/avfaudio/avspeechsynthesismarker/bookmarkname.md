> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avspeechsynthesismarker/bookmarkname

# bookmarkName (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A string that represents the name of a bookmark.

## Declaration

```swift
var bookmarkName: String { get set }
```

## See Also

### Inspecting a marker

- [mark](mark-swift.property.md): The type that describes the text.
- [phoneme](phoneme.md): A string that represents a distinct sound.
- [textRange](textrange.md): The location and length of the request’s text.
- [byteSampleOffset](bytesampleoffset.md): The byte offset into the audio buffer.
- [AVSpeechSynthesisMarker.Mark](mark-swift.enum.md): Constants that describe the type of text.

# bookmarkName (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A string that represents the name of a bookmark.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * bookmarkName;
```

## See Also

### Inspecting a marker

- [mark](mark-swift.property.md): The type that describes the text.
- [phoneme](phoneme.md): A string that represents a distinct sound.
- [textRange](textrange.md): The location and length of the request’s text.
- [byteSampleOffset](bytesampleoffset.md): The byte offset into the audio buffer.
- [AVSpeechSynthesisMarkerMark](mark-swift.enum.md): Constants that describe the type of text.
