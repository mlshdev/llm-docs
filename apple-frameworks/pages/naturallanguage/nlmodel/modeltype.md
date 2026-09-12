> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodel/modeltype](https://developer.apple.com/documentation/naturallanguage/nlmodel/modeltype)

# NLModel.ModelType (Swift)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The different types of a natural language model.

## Declaration

```swift
enum ModelType
```

## Topics

### Model types

- [NLModel.ModelType.sequence](modeltype/sequence.md): A sequence model type that tags text at the token level.
- [NLModel.ModelType.classifier](modeltype/classifier.md): A classifier model type that tags text at the phrase, sentence, paragraph, or higher level.

### Initializers

- [init(rawValue:)](modeltype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the configuration

- [language](../nlmodelconfiguration/language.md): The language the model supports.
- [revision](../nlmodelconfiguration/revision.md): The version of the Natural Language framework that trained the model.
- [supportedRevisions(for:)](../nlmodelconfiguration/supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevision(for:)](../nlmodelconfiguration/currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](../nlmodelconfiguration/type.md): The natural language model type of the model.

# NLModelType (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The different types of a natural language model.

## Declaration

```objectivec
enum NLModelType : NSInteger;
```

## Topics

### Model types

- [NLModelTypeSequence](modeltype/sequence.md): A sequence model type that tags text at the token level.
- [NLModelTypeClassifier](modeltype/classifier.md): A classifier model type that tags text at the phrase, sentence, paragraph, or higher level.

## See Also

### Accessing the configuration

- [language](../nlmodelconfiguration/language.md): The language the model supports.
- [revision](../nlmodelconfiguration/revision.md): The version of the Natural Language framework that trained the model.
- [supportedRevisionsForType:](../nlmodelconfiguration/supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevisionForType:](../nlmodelconfiguration/currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](../nlmodelconfiguration/type.md): The natural language model type of the model.
