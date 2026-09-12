> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechlanguagemodel/configuration/init(languagemodel:vocabulary:)](https://developer.apple.com/documentation/speech/sfspeechlanguagemodel/configuration/init(languagemodel:vocabulary:))

# init(languageModel:vocabulary:) (Swift)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a configuration with the locations of language model and vocabulary files.

## Declaration

```swift
init(languageModel: URL, vocabulary: URL?)
```

## See Also

### Creating a language model configuration

- [init(languageModel:)](init%28languagemodel_%29.md): Creates a configuration with the location of a language model file.
- [init(languageModel:vocabulary:weight:)](init%28languagemodel_vocabulary_weight_%29.md): Creates a configuration with the locations of language model and vocabulary files, and custom weight.

# initWithLanguageModel:vocabulary: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a configuration with the locations of language model and vocabulary files.

## Declaration

```objectivec
- (instancetype) initWithLanguageModel:(NSURL *) languageModel vocabulary:(NSURL *) vocabulary;
```

## See Also

### Creating a language model configuration

- [initWithLanguageModel:](init%28languagemodel_%29.md): Creates a configuration with the location of a language model file.
- [initWithLanguageModel:vocabulary:weight:](init%28languagemodel_vocabulary_weight_%29.md): Creates a configuration with the locations of language model and vocabulary files, and custom weight.
