> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechlanguagemodel/preparecustomlanguagemodel(for:configuration:completion:)](https://developer.apple.com/documentation/speech/sfspeechlanguagemodel/preparecustomlanguagemodel(for:configuration:completion:))

# prepareCustomLanguageModel(for:configuration:completion:) (Swift)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a language model from custom training data.

## Declaration

```swift
class func prepareCustomLanguageModel(for asset: URL, configuration: SFSpeechLanguageModel.Configuration, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
class func prepareCustomLanguageModel(for asset: URL, configuration: SFSpeechLanguageModel.Configuration) async throws
```

## Parameters

- `asset`: The URL of a file containing custom training data. Create this file with [export(to:)](../sfcustomlanguagemodeldata/export%28to_%29.md).
- `configuration`: An object listing the URLs at which this method should create the language model and compiled vocabulary from the training data.
- `completion`: Called when the language model has been created.

## See Also

### Creating a custom language model

- [prepareCustomLanguageModel(for:configuration:ignoresCache:completion:)](preparecustomlanguagemodel%28for_configuration_ignorescache_completion_%29.md): Creates a language model from custom training data.
- [SFSpeechLanguageModel.Configuration](configuration.md): An object describing the location of a custom language model and specialized vocabulary.

# prepareCustomLanguageModelForUrl:configuration:completion: (Objective-C)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a language model from custom training data.

## Declaration

```objectivec
+ (void) prepareCustomLanguageModelForUrl:(NSURL *) asset configuration:(SFSpeechLanguageModelConfiguration *) configuration completion:(void (^)(NSError *error)) completion;
```

## Parameters

- `asset`: The URL of a file containing custom training data. Create this file with [export(to:)](../sfcustomlanguagemodeldata/export%28to_%29.md).
- `configuration`: An object listing the URLs at which this method should create the language model and compiled vocabulary from the training data.
- `completion`: Called when the language model has been created.

## See Also

### Creating a custom language model

- [prepareCustomLanguageModelForUrl:configuration:ignoresCache:completion:](preparecustomlanguagemodel%28for_configuration_ignorescache_completion_%29.md): Creates a language model from custom training data.
- [SFSpeechLanguageModelConfiguration](configuration.md): An object describing the location of a custom language model and specialized vocabulary.
