> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesismarker/init(bookmarkname:atbytesampleoffset:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesismarker/init(bookmarkname:atbytesampleoffset:))

# init(bookmarkName:atByteSampleOffset:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a bookmark marker with a name and offset into the audio buffer.

## Declaration

```swift
init(bookmarkName mark: String, atByteSampleOffset byteSampleOffset: Int)
```

## Parameters

- `mark`: The name of the bookmark.
- `byteSampleOffset`: The byte offset into the audio buffer.

## See Also

### Creating a marker

- [init(markerType:forTextRange:atByteSampleOffset:)](init%28markertype_fortextrange_atbytesampleoffset_%29.md): Creates a marker with a type and location of the request’s text.
- [init(wordRange:atByteSampleOffset:)](init%28wordrange_atbytesampleoffset_%29.md): Creates a word marker with a range of the word and offset into the audio buffer.
- [init(sentenceRange:atByteSampleOffset:)](init%28sentencerange_atbytesampleoffset_%29.md): Creates a sentence marker with a range of the sentence and offset into the audio buffer.
- [init(paragraphRange:atByteSampleOffset:)](init%28paragraphrange_atbytesampleoffset_%29.md): Creates a paragraph marker with a range of the paragraph and offset into the audio buffer.
- [init(phonemeString:atByteSampleOffset:)](init%28phonemestring_atbytesampleoffset_%29.md): Creates a phoneme marker with a range of the phoneme and offset into the audio buffer.

# initWithBookmarkName:atByteSampleOffset: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a bookmark marker with a name and offset into the audio buffer.

## Declaration

```objectivec
- (instancetype) initWithBookmarkName:(NSString *) mark atByteSampleOffset:(NSInteger) byteSampleOffset;
```

## Parameters

- `mark`: The name of the bookmark.
- `byteSampleOffset`: The byte offset into the audio buffer.

## See Also

### Creating a marker

- [initWithMarkerType:forTextRange:atByteSampleOffset:](init%28markertype_fortextrange_atbytesampleoffset_%29.md): Creates a marker with a type and location of the request’s text.
- [initWithWordRange:atByteSampleOffset:](init%28wordrange_atbytesampleoffset_%29.md): Creates a word marker with a range of the word and offset into the audio buffer.
- [initWithSentenceRange:atByteSampleOffset:](init%28sentencerange_atbytesampleoffset_%29.md): Creates a sentence marker with a range of the sentence and offset into the audio buffer.
- [initWithParagraphRange:atByteSampleOffset:](init%28paragraphrange_atbytesampleoffset_%29.md): Creates a paragraph marker with a range of the paragraph and offset into the audio buffer.
- [initWithPhonemeString:atByteSampleOffset:](init%28phonemestring_atbytesampleoffset_%29.md): Creates a phoneme marker with a range of the phoneme and offset into the audio buffer.
