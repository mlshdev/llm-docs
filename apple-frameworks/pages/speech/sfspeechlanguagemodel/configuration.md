> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechlanguagemodel/configuration](https://developer.apple.com/documentation/speech/sfspeechlanguagemodel/configuration)

# SFSpeechLanguageModel.Configuration (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An object describing the location of a custom language model and specialized vocabulary.

## Declaration

```swift
class Configuration
```

<a id="overview"></a>

## Overview

Pass this object to [prepareCustomLanguageModel(for:configuration:completion:)](preparecustomlanguagemodel%28for_configuration_completion_%29.md) to indicate where that method should create the custom language model file, and to [customizedLanguageModel](../sfspeechrecognitionrequest/customizedlanguagemodel.md) or [customizedLanguage(modelConfiguration:)](../dictationtranscriber/contenthint/customizedlanguage%28modelconfiguration_%29.md) to indicate where the system should find that model to use.

## Topics

### Creating a language model configuration

- [init(languageModel:)](configuration/init%28languagemodel_%29.md): Creates a configuration with the location of a language model file.
- [init(languageModel:vocabulary:)](configuration/init%28languagemodel_vocabulary_%29.md): Creates a configuration with the locations of language model and vocabulary files.
- [init(languageModel:vocabulary:weight:)](configuration/init%28languagemodel_vocabulary_weight_%29.md): Creates a configuration with the locations of language model and vocabulary files, and custom weight.

### Inspecting a language model

- [languageModel](configuration/languagemodel.md): The location of a compiled language model file.
- [vocabulary](configuration/vocabulary.md): The location of a compiled vocabulary file.
- [weight](configuration/weight.md): The relative weight of the language model customization. Value must be between 0.0 and 1.0 inclusive.

### Initializers

- [init(coder:)](configuration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom vocabulary

- [AnalysisContext](../analysiscontext.md): Contextual information that may be shared among analyzers.
- [SFSpeechLanguageModel](../sfspeechlanguagemodel.md): A language model built from custom training data.
- [SFCustomLanguageModelData](../sfcustomlanguagemodeldata.md): An object that generates and exports custom language model training data.

# SFSpeechLanguageModelConfiguration (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An object describing the location of a custom language model and specialized vocabulary.

## Declaration

```objectivec
@interface SFSpeechLanguageModelConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Pass this object to [prepareCustomLanguageModelForUrl:configuration:completion:](preparecustomlanguagemodel%28for_configuration_completion_%29.md) to indicate where that method should create the custom language model file, and to [customizedLanguageModel](../sfspeechrecognitionrequest/customizedlanguagemodel.md) or [customizedLanguage(modelConfiguration:)](../dictationtranscriber/contenthint/customizedlanguage%28modelconfiguration_%29.md) to indicate where the system should find that model to use.

## Topics

### Creating a language model configuration

- [initWithLanguageModel:](configuration/init%28languagemodel_%29.md): Creates a configuration with the location of a language model file.
- [initWithLanguageModel:vocabulary:](configuration/init%28languagemodel_vocabulary_%29.md): Creates a configuration with the locations of language model and vocabulary files.
- [initWithLanguageModel:vocabulary:weight:](configuration/init%28languagemodel_vocabulary_weight_%29.md): Creates a configuration with the locations of language model and vocabulary files, and custom weight.

### Inspecting a language model

- [languageModel](configuration/languagemodel.md): The location of a compiled language model file.
- [vocabulary](configuration/vocabulary.md): The location of a compiled vocabulary file.
- [weight](configuration/weight.md): The relative weight of the language model customization. Value must be between 0.0 and 1.0 inclusive.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Custom vocabulary

- [SFSpeechLanguageModel](../sfspeechlanguagemodel.md): A language model built from custom training data.
