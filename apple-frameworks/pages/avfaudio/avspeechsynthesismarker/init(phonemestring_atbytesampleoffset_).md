> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesismarker/init(phonemestring:atbytesampleoffset:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesismarker/init(phonemestring:atbytesampleoffset:))

# init(phonemeString:atByteSampleOffset:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a phoneme marker with a range of the phoneme and offset into the audio buffer.

## Declaration

```swift
init(phonemeString phoneme: String, atByteSampleOffset byteSampleOffset: Int)
```

## Parameters

- `phoneme`: A string that represents a distinct sound.
- `byteSampleOffset`: The byte offset into the audio buffer.

## See Also

### Creating a marker

- [init(markerType:forTextRange:atByteSampleOffset:)](init%28markertype_fortextrange_atbytesampleoffset_%29.md): Creates a marker with a type and location of the request’s text.
- [init(wordRange:atByteSampleOffset:)](init%28wordrange_atbytesampleoffset_%29.md): Creates a word marker with a range of the word and offset into the audio buffer.
- [init(sentenceRange:atByteSampleOffset:)](init%28sentencerange_atbytesampleoffset_%29.md): Creates a sentence marker with a range of the sentence and offset into the audio buffer.
- [init(paragraphRange:atByteSampleOffset:)](init%28paragraphrange_atbytesampleoffset_%29.md): Creates a paragraph marker with a range of the paragraph and offset into the audio buffer.
- [init(bookmarkName:atByteSampleOffset:)](init%28bookmarkname_atbytesampleoffset_%29.md): Creates a bookmark marker with a name and offset into the audio buffer.

# initWithPhonemeString:atByteSampleOffset: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a phoneme marker with a range of the phoneme and offset into the audio buffer.

## Declaration

```objectivec
- (instancetype) initWithPhonemeString:(NSString *) phoneme atByteSampleOffset:(NSInteger) byteSampleOffset;
```

## Parameters

- `phoneme`: A string that represents a distinct sound.
- `byteSampleOffset`: The byte offset into the audio buffer.

## See Also

### Creating a marker

- [initWithMarkerType:forTextRange:atByteSampleOffset:](init%28markertype_fortextrange_atbytesampleoffset_%29.md): Creates a marker with a type and location of the request’s text.
- [initWithWordRange:atByteSampleOffset:](init%28wordrange_atbytesampleoffset_%29.md): Creates a word marker with a range of the word and offset into the audio buffer.
- [initWithSentenceRange:atByteSampleOffset:](init%28sentencerange_atbytesampleoffset_%29.md): Creates a sentence marker with a range of the sentence and offset into the audio buffer.
- [initWithParagraphRange:atByteSampleOffset:](init%28paragraphrange_atbytesampleoffset_%29.md): Creates a paragraph marker with a range of the paragraph and offset into the audio buffer.
- [initWithBookmarkName:atByteSampleOffset:](init%28bookmarkname_atbytesampleoffset_%29.md): Creates a bookmark marker with a name and offset into the audio buffer.
