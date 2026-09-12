> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemappedmetaparameterdefinition/init(inputmetaparameterdefinition:envelope:identifier:)](https://developer.apple.com/documentation/phase/phasemappedmetaparameterdefinition/init(inputmetaparameterdefinition:envelope:identifier:))

# init(inputMetaParameterDefinition:envelope:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a named metaparameter that the app plots on a graph defined by the given set of curves.

## Declaration

```swift
convenience init(inputMetaParameterDefinition: PHASENumberMetaParameterDefinition, envelope: PHASEEnvelope, identifier: String)
```

## Parameters

- `inputMetaParameterDefinition`: A metaparameter that contains an input value.
- `envelope`: A set of curves that graph the input value.
- `identifier`: A unique name for the metaparameter specification.

## See Also

### Creating a Mapped Metaparameter

- [init(inputMetaParameterDefinition:envelope:)](init%28inputmetaparameterdefinition_envelope_%29.md): Creates a specification for a metaparameter that the app plots on a graph defined by the given set of curves.

# initWithInputMetaParameterDefinition:envelope:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a named metaparameter that the app plots on a graph defined by the given set of curves.

## Declaration

```objectivec
- (instancetype) initWithInputMetaParameterDefinition:(PHASENumberMetaParameterDefinition *) inputMetaParameterDefinition envelope:(PHASEEnvelope *) envelope identifier:(NSString *) identifier;
```

## Parameters

- `inputMetaParameterDefinition`: A metaparameter that contains an input value.
- `envelope`: A set of curves that graph the input value.
- `identifier`: A unique name for the metaparameter specification.

## See Also

### Creating a Mapped Metaparameter

- [initWithInputMetaParameterDefinition:envelope:](init%28inputmetaparameterdefinition_envelope_%29.md): Creates a specification for a metaparameter that the app plots on a graph defined by the given set of curves.
