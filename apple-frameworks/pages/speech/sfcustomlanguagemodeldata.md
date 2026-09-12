> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata)

# SFCustomLanguageModelData

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

An object that generates and exports custom language model training data.

## Declaration

```swift
class SFCustomLanguageModelData
```

## Topics

### Creating a model data container

- [init(locale:identifier:version:builder:)](sfcustomlanguagemodeldata/init%28locale_identifier_version_builder_%29.md): Constructs a data container using a builder
- [init(locale:identifier:version:)](sfcustomlanguagemodeldata/init%28locale_identifier_version_%29.md): Constructs an empty data container.
- [SFCustomLanguageModelData.DataInsertableBuilder](sfcustomlanguagemodeldata/datainsertablebuilder.md): A custom parameter attribute that constructs custom language model data from closures.

### Adding terms

- [insert(term:)](sfcustomlanguagemodeldata/insert%28term_%29.md): Add a custom term to the vocabulary.
- [supportedPhonemes(locale:)](sfcustomlanguagemodeldata/supportedphonemes%28locale_%29.md): List the supported subset of X-SAMPA pronunciations supported by this locale for the Speech framework.
- [SFCustomLanguageModelData.CustomPronunciation](sfcustomlanguagemodeldata/custompronunciation.md): A term to be introduced into the speech recognition model’s vocabulary.

### Adding phrases

- [insert(phraseCount:)](sfcustomlanguagemodeldata/insert%28phrasecount_%29.md): Add a sample to the body of training data.
- [SFCustomLanguageModelData.PhraseCount](sfcustomlanguagemodeldata/phrasecount.md): A phrase used to bias the language model, along with a weight influencing the relative strength of the bias.

### Adding parameterized sample data within a result builder

- [SFCustomLanguageModelData.PhraseCountsFromTemplates](sfcustomlanguagemodeldata/phrasecountsfromtemplates.md): A type that can be used to construct custom language model data by specifying a set of template classes and using the result builder DSL to specify templates.
- [SFCustomLanguageModelData.TemplateInsertableBuilder](sfcustomlanguagemodeldata/templateinsertablebuilder.md): A custom parameter attribute that constructs custom language model data from closures.

### Adding parameterized sample data with a generator

- [insert(phraseCountGenerator:)](sfcustomlanguagemodeldata/insert%28phrasecountgenerator_%29.md): Add a stream of samples to the body of training data.
- [SFCustomLanguageModelData.TemplatePhraseCountGenerator](sfcustomlanguagemodeldata/templatephrasecountgenerator.md): A `PhraseCountGenerator` that produces `PhraseCount` values based on templates.
- [SFCustomLanguageModelData.PhraseCountGenerator](sfcustomlanguagemodeldata/phrasecountgenerator.md): Abstract base class defining the interface for classes that generate `PhraseCount` via an iterator.

### Exporting model data

- [export(to:)](sfcustomlanguagemodeldata/export%28to_%29.md): Export the accumulated data to a file.

### Inspecting model data

- [identifier](sfcustomlanguagemodeldata/identifier.md)
- [locale](sfcustomlanguagemodeldata/locale.md)
- [version](sfcustomlanguagemodeldata/version.md)

### Result builder support

- [SFCustomLanguageModelData.CompoundTemplate](sfcustomlanguagemodeldata/compoundtemplate.md): A class supporting the custom language model training data result builder. You are not intended to use this directly.
- [DataInsertable](datainsertable.md): A protocol supporting the custom language model training data result builder.
- [TemplateInsertable](templateinsertable.md): A protocol supporting the custom language model training data result builder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Custom vocabulary

- [AnalysisContext](analysiscontext.md): Contextual information that may be shared among analyzers.
- [SFSpeechLanguageModel](sfspeechlanguagemodel.md): A language model built from custom training data.
- [SFSpeechLanguageModel.Configuration](sfspeechlanguagemodel/configuration.md): An object describing the location of a custom language model and specialized vocabulary.
