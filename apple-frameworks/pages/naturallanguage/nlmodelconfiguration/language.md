> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodelconfiguration/language](https://developer.apple.com/documentation/naturallanguage/nlmodelconfiguration/language)

# language (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The language the model supports.

## Declaration

```swift
var language: NLLanguage? { get }
```

## See Also

### Accessing the configuration

- [revision](revision.md): The version of the Natural Language framework that trained the model.
- [supportedRevisions(for:)](supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevision(for:)](currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](type.md): The natural language model type of the model.
- [NLModel.ModelType](../nlmodel/modeltype.md): The different types of a natural language model.

# language (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The language the model supports.

## Declaration

```objectivec
@property (copy, readonly, nullable) NLLanguage language;
```

## See Also

### Accessing the configuration

- [revision](revision.md): The version of the Natural Language framework that trained the model.
- [supportedRevisionsForType:](supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevisionForType:](currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](type.md): The natural language model type of the model.
- [NLModelType](../nlmodel/modeltype.md): The different types of a natural language model.
