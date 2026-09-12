> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/phrasecountgenerator](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/phrasecountgenerator)

# SFCustomLanguageModelData.PhraseCountGenerator

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

Abstract base class defining the interface for classes that generate `PhraseCount` via an iterator.

## Declaration

```swift
class PhraseCountGenerator
```

## Topics

### Protocol requirements

- [init()](phrasecountgenerator/init%28%29.md)
- [SFCustomLanguageModelData.PhraseCountGenerator.Iterator](phrasecountgenerator/iterator.md)

## Relationships

### Inherited By

- [SFCustomLanguageModelData.TemplatePhraseCountGenerator](templatephrasecountgenerator.md)

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [DataInsertable](../datainsertable.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Adding parameterized sample data with a generator

- [insert(phraseCountGenerator:)](insert%28phrasecountgenerator_%29.md): Add a stream of samples to the body of training data.
- [SFCustomLanguageModelData.TemplatePhraseCountGenerator](templatephrasecountgenerator.md): A `PhraseCountGenerator` that produces `PhraseCount` values based on templates.
