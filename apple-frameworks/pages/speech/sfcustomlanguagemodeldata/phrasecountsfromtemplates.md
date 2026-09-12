> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/phrasecountsfromtemplates](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/phrasecountsfromtemplates)

# SFCustomLanguageModelData.PhraseCountsFromTemplates

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

A type that can be used to construct custom language model data by specifying a set of template classes and using the result builder DSL to specify templates.

## Declaration

```swift
struct PhraseCountsFromTemplates
```

## Topics

### Creating weighted phrases from templates

- [init(classes:builder:)](phrasecountsfromtemplates/init%28classes_builder_%29.md)

## Relationships

### Conforms To

- [DataInsertable](../datainsertable.md)

## See Also

### Adding parameterized sample data within a result builder

- [SFCustomLanguageModelData.TemplateInsertableBuilder](templateinsertablebuilder.md): A custom parameter attribute that constructs custom language model data from closures.
