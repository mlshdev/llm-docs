> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/templateinsertable](https://developer.apple.com/documentation/speech/templateinsertable)

# TemplateInsertable

**Framework:** Speech  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

A protocol supporting the custom language model training data result builder.

## Declaration

```swift
protocol TemplateInsertable
```

## Topics

### Protocol requirements

- [insert(generator:)](templateinsertable/insert%28generator_%29.md)

## Relationships

### Conforming Types

- [SFCustomLanguageModelData.CompoundTemplate](sfcustomlanguagemodeldata/compoundtemplate.md)
- [SFCustomLanguageModelData.TemplatePhraseCountGenerator.Template](sfcustomlanguagemodeldata/templatephrasecountgenerator/template.md)

## See Also

### Result builder support

- [SFCustomLanguageModelData.CompoundTemplate](sfcustomlanguagemodeldata/compoundtemplate.md): A class supporting the custom language model training data result builder. You are not intended to use this directly.
- [DataInsertable](datainsertable.md): A protocol supporting the custom language model training data result builder.
