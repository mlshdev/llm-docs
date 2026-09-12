> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesismarker](https://developer.apple.com/documentation/avfaudio/avspeechsynthesismarker)

# AVSpeechSynthesisMarker (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that contains information about the synthesized audio.

## Declaration

```swift
class AVSpeechSynthesisMarker
```

## Topics

### Creating a marker

- [init(markerType:forTextRange:atByteSampleOffset:)](avspeechsynthesismarker/init%28markertype_fortextrange_atbytesampleoffset_%29.md): Creates a marker with a type and location of the request’s text.
- [init(wordRange:atByteSampleOffset:)](avspeechsynthesismarker/init%28wordrange_atbytesampleoffset_%29.md): Creates a word marker with a range of the word and offset into the audio buffer.
- [init(sentenceRange:atByteSampleOffset:)](avspeechsynthesismarker/init%28sentencerange_atbytesampleoffset_%29.md): Creates a sentence marker with a range of the sentence and offset into the audio buffer.
- [init(paragraphRange:atByteSampleOffset:)](avspeechsynthesismarker/init%28paragraphrange_atbytesampleoffset_%29.md): Creates a paragraph marker with a range of the paragraph and offset into the audio buffer.
- [init(phonemeString:atByteSampleOffset:)](avspeechsynthesismarker/init%28phonemestring_atbytesampleoffset_%29.md): Creates a phoneme marker with a range of the phoneme and offset into the audio buffer.
- [init(bookmarkName:atByteSampleOffset:)](avspeechsynthesismarker/init%28bookmarkname_atbytesampleoffset_%29.md): Creates a bookmark marker with a name and offset into the audio buffer.

### Inspecting a marker

- [mark](avspeechsynthesismarker/mark-swift.property.md): The type that describes the text.
- [bookmarkName](avspeechsynthesismarker/bookmarkname.md): A string that represents the name of a bookmark.
- [phoneme](avspeechsynthesismarker/phoneme.md): A string that represents a distinct sound.
- [textRange](avspeechsynthesismarker/textrange.md): The location and length of the request’s text.
- [byteSampleOffset](avspeechsynthesismarker/bytesampleoffset.md): The byte offset into the audio buffer.
- [AVSpeechSynthesisMarker.Mark](avspeechsynthesismarker/mark-swift.enum.md): Constants that describe the type of text.

### Initializers

- [init(coder:)](avspeechsynthesismarker/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supplying metadata

- [AVSpeechSynthesisProviderOutputBlock](avspeechsynthesisprovideroutputblock.md): A type that represents the method for sending marker information to the host.
- [speechSynthesisOutputMetadataBlock](avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md): A block that subclasses use to send marker information to the host.

# AVSpeechSynthesisMarker (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that contains information about the synthesized audio.

## Declaration

```objectivec
@interface AVSpeechSynthesisMarker : NSObject
```

## Topics

### Creating a marker

- [initWithMarkerType:forTextRange:atByteSampleOffset:](avspeechsynthesismarker/init%28markertype_fortextrange_atbytesampleoffset_%29.md): Creates a marker with a type and location of the request’s text.
- [initWithWordRange:atByteSampleOffset:](avspeechsynthesismarker/init%28wordrange_atbytesampleoffset_%29.md): Creates a word marker with a range of the word and offset into the audio buffer.
- [initWithSentenceRange:atByteSampleOffset:](avspeechsynthesismarker/init%28sentencerange_atbytesampleoffset_%29.md): Creates a sentence marker with a range of the sentence and offset into the audio buffer.
- [initWithParagraphRange:atByteSampleOffset:](avspeechsynthesismarker/init%28paragraphrange_atbytesampleoffset_%29.md): Creates a paragraph marker with a range of the paragraph and offset into the audio buffer.
- [initWithPhonemeString:atByteSampleOffset:](avspeechsynthesismarker/init%28phonemestring_atbytesampleoffset_%29.md): Creates a phoneme marker with a range of the phoneme and offset into the audio buffer.
- [initWithBookmarkName:atByteSampleOffset:](avspeechsynthesismarker/init%28bookmarkname_atbytesampleoffset_%29.md): Creates a bookmark marker with a name and offset into the audio buffer.

### Inspecting a marker

- [mark](avspeechsynthesismarker/mark-swift.property.md): The type that describes the text.
- [bookmarkName](avspeechsynthesismarker/bookmarkname.md): A string that represents the name of a bookmark.
- [phoneme](avspeechsynthesismarker/phoneme.md): A string that represents a distinct sound.
- [textRange](avspeechsynthesismarker/textrange.md): The location and length of the request’s text.
- [byteSampleOffset](avspeechsynthesismarker/bytesampleoffset.md): The byte offset into the audio buffer.
- [AVSpeechSynthesisMarkerMark](avspeechsynthesismarker/mark-swift.enum.md): Constants that describe the type of text.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supplying metadata

- [AVSpeechSynthesisProviderOutputBlock](avspeechsynthesisprovideroutputblock.md): A type that represents the method for sending marker information to the host.
- [speechSynthesisOutputMetadataBlock](avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md): A block that subclasses use to send marker information to the host.
