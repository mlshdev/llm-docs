> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodelconfiguration](https://developer.apple.com/documentation/naturallanguage/nlmodelconfiguration)

# NLModelConfiguration (Swift)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The configuration parameters of a natural language model.

## Declaration

```swift
class NLModelConfiguration
```

## Topics

### Accessing the configuration

- [language](nlmodelconfiguration/language.md): The language the model supports.
- [revision](nlmodelconfiguration/revision.md): The version of the Natural Language framework that trained the model.
- [supportedRevisions(for:)](nlmodelconfiguration/supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevision(for:)](nlmodelconfiguration/currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](nlmodelconfiguration/type.md): The natural language model type of the model.
- [NLModel.ModelType](nlmodel/modeltype.md): The different types of a natural language model.

### Initializers

- [init(coder:)](nlmodelconfiguration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Inspecting a model

- [configuration](nlmodel/configuration.md): A configuration describing the natural language model.

# NLModelConfiguration (Objective-C)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The configuration parameters of a natural language model.

## Declaration

```objectivec
@interface NLModelConfiguration : NSObject
```

## Topics

### Accessing the configuration

- [language](nlmodelconfiguration/language.md): The language the model supports.
- [revision](nlmodelconfiguration/revision.md): The version of the Natural Language framework that trained the model.
- [supportedRevisionsForType:](nlmodelconfiguration/supportedrevisions%28for_%29.md): Returns the versions of the Natural Language framework the OS supports.
- [currentRevisionForType:](nlmodelconfiguration/currentrevision%28for_%29.md): Returns the current Natural Language framework version in the OS.
- [type](nlmodelconfiguration/type.md): The natural language model type of the model.
- [NLModelType](nlmodel/modeltype.md): The different types of a natural language model.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Inspecting a model

- [configuration](nlmodel/configuration.md): A configuration describing the natural language model.
