> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/phrasecount](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/phrasecount)

# SFCustomLanguageModelData.PhraseCount

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

A phrase used to bias the language model, along with a weight influencing the relative strength of the bias.

## Declaration

```swift
struct PhraseCount
```

## Topics

### Creating a weighted phrase

- [init(phrase:count:)](phrasecount/init%28phrase_count_%29.md)

### Inspecting the weighted phrase

- [count](phrasecount/count.md)
- [phrase](phrasecount/phrase.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataInsertable](../datainsertable.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding phrases

- [insert(phraseCount:)](insert%28phrasecount_%29.md): Add a sample to the body of training data.
