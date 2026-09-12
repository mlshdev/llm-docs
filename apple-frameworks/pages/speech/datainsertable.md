> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/datainsertable](https://developer.apple.com/documentation/speech/datainsertable)

# DataInsertable

**Framework:** Speech  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

A protocol supporting the custom language model training data result builder.

## Declaration

```swift
protocol DataInsertable
```

## Topics

### Protocol requirements

- [insert(data:)](datainsertable/insert%28data_%29.md)

## Relationships

### Conforming Types

- [SFCustomLanguageModelData.CustomPronunciation](sfcustomlanguagemodeldata/custompronunciation.md)
- [SFCustomLanguageModelData.PhraseCount](sfcustomlanguagemodeldata/phrasecount.md)
- [SFCustomLanguageModelData.PhraseCountGenerator](sfcustomlanguagemodeldata/phrasecountgenerator.md)
- [SFCustomLanguageModelData.PhraseCountsFromTemplates](sfcustomlanguagemodeldata/phrasecountsfromtemplates.md)
- [SFCustomLanguageModelData.TemplatePhraseCountGenerator](sfcustomlanguagemodeldata/templatephrasecountgenerator.md)

## See Also

### Result builder support

- [SFCustomLanguageModelData.CompoundTemplate](sfcustomlanguagemodeldata/compoundtemplate.md): A class supporting the custom language model training data result builder. You are not intended to use this directly.
- [TemplateInsertable](templateinsertable.md): A protocol supporting the custom language model training data result builder.
