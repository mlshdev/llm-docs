> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodelconfiguration/revision](https://developer.apple.com/documentation/naturallanguage/nlmodelconfiguration/revision)

# revision (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The version of the Natural Language framework that trained the model.

## Declaration

```swift
var revision: Int { get }
```

## See Also

### Accessing the configuration

- [language](language.md): The language the model supports.
- [supportedRevisions(for:)](supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevision(for:)](currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](type.md): The natural language model type of the model.
- [NLModel.ModelType](../nlmodel/modeltype.md): The different types of a natural language model.

# revision (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The version of the Natural Language framework that trained the model.

## Declaration

```objectivec
@property (readonly) NSUInteger revision;
```

## See Also

### Accessing the configuration

- [language](language.md): The language the model supports.
- [supportedRevisionsForType:](supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevisionForType:](currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](type.md): The natural language model type of the model.
- [NLModelType](../nlmodel/modeltype.md): The different types of a natural language model.
