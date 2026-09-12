> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodelconfiguration/supportedrevisions(for:)](https://developer.apple.com/documentation/naturallanguage/nlmodelconfiguration/supportedrevisions(for:))

# supportedRevisions(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the versions of the Natural Language framework the OS supports.

## Declaration

```swift
class func supportedRevisions(for type: NLModel.ModelType) -> IndexSet
```

<a id="return-value"></a>

## Return Value

An index set of version numbers.

## See Also

### Accessing the configuration

- [language](language.md): The language the model supports.
- [revision](revision.md): The version of the Natural Language framework that trained the model.
- [currentRevision(for:)](currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](type.md): The natural language model type of the model.
- [NLModel.ModelType](../nlmodel/modeltype.md): The different types of a natural language model.

# supportedRevisionsForType: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the versions of the Natural Language framework the OS supports.

## Declaration

```objectivec
+ (NSIndexSet *) supportedRevisionsForType:(NLModelType) type;
```

<a id="return-value"></a>

## Return Value

An index set of version numbers.

## See Also

### Accessing the configuration

- [language](language.md): The language the model supports.
- [revision](revision.md): The version of the Natural Language framework that trained the model.
- [currentRevisionForType:](currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](type.md): The natural language model type of the model.
- [NLModelType](../nlmodel/modeltype.md): The different types of a natural language model.
