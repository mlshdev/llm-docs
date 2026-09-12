> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesismarker/init(markertype:fortextrange:atbytesampleoffset:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesismarker/init(markertype:fortextrange:atbytesampleoffset:))

# init(markerType:forTextRange:atByteSampleOffset:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a marker with a type and location of the request’s text.

## Declaration

```swift
init(markerType type: AVSpeechSynthesisMarker.Mark, forTextRange range: NSRange, atByteSampleOffset byteSampleOffset: Int)
```

## Parameters

- `type`: The type that describes the text.
- `range`: The location and length of the request’s text.
- `byteSampleOffset`: The byte offset into the audio buffer.

## See Also

### Creating a marker

- [init(wordRange:atByteSampleOffset:)](init%28wordrange_atbytesampleoffset_%29.md): Creates a word marker with a range of the word and offset into the audio buffer.
- [init(sentenceRange:atByteSampleOffset:)](init%28sentencerange_atbytesampleoffset_%29.md): Creates a sentence marker with a range of the sentence and offset into the audio buffer.
- [init(paragraphRange:atByteSampleOffset:)](init%28paragraphrange_atbytesampleoffset_%29.md): Creates a paragraph marker with a range of the paragraph and offset into the audio buffer.
- [init(phonemeString:atByteSampleOffset:)](init%28phonemestring_atbytesampleoffset_%29.md): Creates a phoneme marker with a range of the phoneme and offset into the audio buffer.
- [init(bookmarkName:atByteSampleOffset:)](init%28bookmarkname_atbytesampleoffset_%29.md): Creates a bookmark marker with a name and offset into the audio buffer.

# initWithMarkerType:forTextRange:atByteSampleOffset: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a marker with a type and location of the request’s text.

## Declaration

```objectivec
- (instancetype) initWithMarkerType:(AVSpeechSynthesisMarkerMark) type forTextRange:(NSRange) range atByteSampleOffset:(NSUInteger) byteSampleOffset;
```

## Parameters

- `type`: The type that describes the text.
- `range`: The location and length of the request’s text.
- `byteSampleOffset`: The byte offset into the audio buffer.

## See Also

### Creating a marker

- [initWithWordRange:atByteSampleOffset:](init%28wordrange_atbytesampleoffset_%29.md): Creates a word marker with a range of the word and offset into the audio buffer.
- [initWithSentenceRange:atByteSampleOffset:](init%28sentencerange_atbytesampleoffset_%29.md): Creates a sentence marker with a range of the sentence and offset into the audio buffer.
- [initWithParagraphRange:atByteSampleOffset:](init%28paragraphrange_atbytesampleoffset_%29.md): Creates a paragraph marker with a range of the paragraph and offset into the audio buffer.
- [initWithPhonemeString:atByteSampleOffset:](init%28phonemestring_atbytesampleoffset_%29.md): Creates a phoneme marker with a range of the phoneme and offset into the audio buffer.
- [initWithBookmarkName:atByteSampleOffset:](init%28bookmarkname_atbytesampleoffset_%29.md): Creates a bookmark marker with a name and offset into the audio buffer.
