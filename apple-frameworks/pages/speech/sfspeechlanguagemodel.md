> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechlanguagemodel](https://developer.apple.com/documentation/speech/sfspeechlanguagemodel)

# SFSpeechLanguageModel (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A language model built from custom training data.

## Declaration

```swift
class SFSpeechLanguageModel
```

<a id="overview"></a>

## Overview

Create this object using [prepareCustomLanguageModel(for:configuration:completion:)](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_configuration_completion_%29.md) or [prepareCustomLanguageModel(for:configuration:ignoresCache:completion:)](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_configuration_ignorescache_completion_%29.md).

## Topics

### Creating a custom language model

- [prepareCustomLanguageModel(for:configuration:completion:)](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_configuration_completion_%29.md): Creates a language model from custom training data.
- [prepareCustomLanguageModel(for:configuration:ignoresCache:completion:)](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_configuration_ignorescache_completion_%29.md): Creates a language model from custom training data.
- [SFSpeechLanguageModel.Configuration](sfspeechlanguagemodel/configuration.md): An object describing the location of a custom language model and specialized vocabulary.

### Type Methods

- [prepareCustomLanguageModel(for:clientIdentifier:configuration:completion:)](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_clientidentifier_configuration_completion_%29.md): Deprecated.
- [prepareCustomLanguageModel(for:clientIdentifier:configuration:ignoresCache:completion:)](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_clientidentifier_configuration_ignorescache_completion_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom vocabulary

- [AnalysisContext](analysiscontext.md): Contextual information that may be shared among analyzers.
- [SFSpeechLanguageModel.Configuration](sfspeechlanguagemodel/configuration.md): An object describing the location of a custom language model and specialized vocabulary.
- [SFCustomLanguageModelData](sfcustomlanguagemodeldata.md): An object that generates and exports custom language model training data.

# SFSpeechLanguageModel (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A language model built from custom training data.

## Declaration

```objectivec
@interface SFSpeechLanguageModel : NSObject
```

<a id="overview"></a>

## Overview

Create this object using [prepareCustomLanguageModelForUrl:configuration:completion:](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_configuration_completion_%29.md) or [prepareCustomLanguageModelForUrl:configuration:ignoresCache:completion:](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_configuration_ignorescache_completion_%29.md).

## Topics

### Creating a custom language model

- [prepareCustomLanguageModelForUrl:configuration:completion:](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_configuration_completion_%29.md): Creates a language model from custom training data.
- [prepareCustomLanguageModelForUrl:configuration:ignoresCache:completion:](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_configuration_ignorescache_completion_%29.md): Creates a language model from custom training data.
- [SFSpeechLanguageModelConfiguration](sfspeechlanguagemodel/configuration.md): An object describing the location of a custom language model and specialized vocabulary.

### Type Methods

- [prepareCustomLanguageModelForUrl:clientIdentifier:configuration:completion:](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_clientidentifier_configuration_completion_%29.md): Deprecated.
- [prepareCustomLanguageModelForUrl:clientIdentifier:configuration:ignoresCache:completion:](sfspeechlanguagemodel/preparecustomlanguagemodel%28for_clientidentifier_configuration_ignorescache_completion_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Custom vocabulary

- [SFSpeechLanguageModelConfiguration](sfspeechlanguagemodel/configuration.md): An object describing the location of a custom language model and specialized vocabulary.
