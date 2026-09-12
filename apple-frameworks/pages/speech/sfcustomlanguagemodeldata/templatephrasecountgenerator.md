> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/templatephrasecountgenerator](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/templatephrasecountgenerator)

# SFCustomLanguageModelData.TemplatePhraseCountGenerator

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

A `PhraseCountGenerator` that produces `PhraseCount` values based on templates.

## Declaration

```swift
class TemplatePhraseCountGenerator
```

## Topics

### Defining template tokens

- [define(className:values:)](templatephrasecountgenerator/define%28classname_values_%29.md): Define a class of tokens to be used in template strings.

### Adding a template

- [insert(template:count:)](templatephrasecountgenerator/insert%28template_count_%29.md): Add a template to be used to generate data samples.
- [SFCustomLanguageModelData.TemplatePhraseCountGenerator.Template](templatephrasecountgenerator/template.md)

### Classes

- [SFCustomLanguageModelData.TemplatePhraseCountGenerator.Iterator](templatephrasecountgenerator/iterator.md)

### Operators

- [==(\_:\_:)](templatephrasecountgenerator/==%28____%29.md)

### Initializers

- [init()](templatephrasecountgenerator/init%28%29.md)
- [init(from:)](templatephrasecountgenerator/init%28from_%29.md)

### Instance Methods

- [hash(into:)](templatephrasecountgenerator/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
- [makeAsyncIterator()](templatephrasecountgenerator/makeasynciterator%28%29.md)

## Relationships

### Inherits From

- [SFCustomLanguageModelData.PhraseCountGenerator](phrasecountgenerator.md)

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
- [SFCustomLanguageModelData.PhraseCountGenerator](phrasecountgenerator.md): Abstract base class defining the interface for classes that generate `PhraseCount` via an iterator.
