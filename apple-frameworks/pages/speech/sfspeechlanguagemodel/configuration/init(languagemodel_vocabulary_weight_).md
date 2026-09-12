> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechlanguagemodel/configuration/init(languagemodel:vocabulary:weight:)](https://developer.apple.com/documentation/speech/sfspeechlanguagemodel/configuration/init(languagemodel:vocabulary:weight:))

# init(languageModel:vocabulary:weight:) (Swift)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a configuration with the locations of language model and vocabulary files, and custom weight.

## Declaration

```swift
init(languageModel: URL, vocabulary: URL?, weight: NSNumber?)
```

## See Also

### Creating a language model configuration

- [init(languageModel:)](init%28languagemodel_%29.md): Creates a configuration with the location of a language model file.
- [init(languageModel:vocabulary:)](init%28languagemodel_vocabulary_%29.md): Creates a configuration with the locations of language model and vocabulary files.

# initWithLanguageModel:vocabulary:weight: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a configuration with the locations of language model and vocabulary files, and custom weight.

## Declaration

```objectivec
- (instancetype) initWithLanguageModel:(NSURL *) languageModel vocabulary:(NSURL *) vocabulary weight:(NSNumber *) weight;
```

## See Also

### Creating a language model configuration

- [initWithLanguageModel:](init%28languagemodel_%29.md): Creates a configuration with the location of a language model file.
- [initWithLanguageModel:vocabulary:](init%28languagemodel_vocabulary_%29.md): Creates a configuration with the locations of language model and vocabulary files.
