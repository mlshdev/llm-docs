> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesismarker/textrange](https://developer.apple.com/documentation/avfaudio/avspeechsynthesismarker/textrange)

# textRange (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The location and length of the request’s text.

## Declaration

```swift
var textRange: NSRange { get set }
```

## See Also

### Inspecting a marker

- [mark](mark-swift.property.md): The type that describes the text.
- [bookmarkName](bookmarkname.md): A string that represents the name of a bookmark.
- [phoneme](phoneme.md): A string that represents a distinct sound.
- [byteSampleOffset](bytesampleoffset.md): The byte offset into the audio buffer.
- [AVSpeechSynthesisMarker.Mark](mark-swift.enum.md): Constants that describe the type of text.

# textRange (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The location and length of the request’s text.

## Declaration

```objectivec
@property (nonatomic, assign) NSRange textRange;
```

## See Also

### Inspecting a marker

- [mark](mark-swift.property.md): The type that describes the text.
- [bookmarkName](bookmarkname.md): A string that represents the name of a bookmark.
- [phoneme](phoneme.md): A string that represents a distinct sound.
- [byteSampleOffset](bytesampleoffset.md): The byte offset into the audio buffer.
- [AVSpeechSynthesisMarkerMark](mark-swift.enum.md): Constants that describe the type of text.
