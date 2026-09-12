> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodelconfiguration/type](https://developer.apple.com/documentation/naturallanguage/nlmodelconfiguration/type)

# type (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The natural language model type of the model.

## Declaration

```swift
var type: NLModel.ModelType { get }
```

## See Also

### Accessing the configuration

- [language](language.md): The language the model supports.
- [revision](revision.md): The version of the Natural Language framework that trained the model.
- [supportedRevisions(for:)](supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevision(for:)](currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [NLModel.ModelType](../nlmodel/modeltype.md): The different types of a natural language model.

# type (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The natural language model type of the model.

## Declaration

```objectivec
@property (readonly) NLModelType type;
```

## See Also

### Accessing the configuration

- [language](language.md): The language the model supports.
- [revision](revision.md): The version of the Natural Language framework that trained the model.
- [supportedRevisionsForType:](supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevisionForType:](currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [NLModelType](../nlmodel/modeltype.md): The different types of a natural language model.
