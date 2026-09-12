> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesismarker/mark-swift.enum](https://developer.apple.com/documentation/avfaudio/avspeechsynthesismarker/mark-swift.enum)

# AVSpeechSynthesisMarker.Mark (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Constants that describe the type of text.

## Declaration

```swift
enum Mark
```

## Topics

### Marks

- [AVSpeechSynthesisMarker.Mark.word](mark-swift.enum/word.md): A type of text that represents a word.
- [AVSpeechSynthesisMarker.Mark.sentence](mark-swift.enum/sentence.md): A type of text that represents a sentence.
- [AVSpeechSynthesisMarker.Mark.paragraph](mark-swift.enum/paragraph.md): A type of text that represents a paragraph.
- [AVSpeechSynthesisMarker.Mark.phoneme](mark-swift.enum/phoneme.md): A type of text that represents a phoneme.
- [AVSpeechSynthesisMarker.Mark.bookmark](mark-swift.enum/bookmark.md): A Speech Synthesis Markup Language (SSML) mark tag.

### Initializers

- [init(rawValue:)](mark-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a marker

- [mark](mark-swift.property.md): The type that describes the text.
- [bookmarkName](bookmarkname.md): A string that represents the name of a bookmark.
- [phoneme](phoneme.md): A string that represents a distinct sound.
- [textRange](textrange.md): The location and length of the request’s text.
- [byteSampleOffset](bytesampleoffset.md): The byte offset into the audio buffer.

# AVSpeechSynthesisMarkerMark (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Constants that describe the type of text.

## Declaration

```objectivec
enum AVSpeechSynthesisMarkerMark : NSInteger;
```

## Topics

### Marks

- [AVSpeechSynthesisMarkerMarkWord](mark-swift.enum/word.md): A type of text that represents a word.
- [AVSpeechSynthesisMarkerMarkSentence](mark-swift.enum/sentence.md): A type of text that represents a sentence.
- [AVSpeechSynthesisMarkerMarkParagraph](mark-swift.enum/paragraph.md): A type of text that represents a paragraph.
- [AVSpeechSynthesisMarkerMarkPhoneme](mark-swift.enum/phoneme.md): A type of text that represents a phoneme.
- [AVSpeechSynthesisMarkerMarkBookmark](mark-swift.enum/bookmark.md): A Speech Synthesis Markup Language (SSML) mark tag.

## See Also

### Inspecting a marker

- [mark](mark-swift.property.md): The type that describes the text.
- [bookmarkName](bookmarkname.md): A string that represents the name of a bookmark.
- [phoneme](phoneme.md): A string that represents a distinct sound.
- [textRange](textrange.md): The location and length of the request’s text.
- [byteSampleOffset](bytesampleoffset.md): The byte offset into the audio buffer.
