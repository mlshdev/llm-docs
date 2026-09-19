> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasemappedmetaparameterdefinition/init(inputmetaparameterdefinition:envelope:)

# init(inputMetaParameterDefinition:envelope:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a metaparameter that the app plots on a graph defined by the given set of curves.

## Declaration

```swift
init(inputMetaParameterDefinition: PHASENumberMetaParameterDefinition, envelope: PHASEEnvelope)
```

## Parameters

- `inputMetaParameterDefinition`: A metaparameter that contains an input value.
- `envelope`: A set of curves that graph the input value.

## See Also

### Creating a Mapped Metaparameter

- [init(inputMetaParameterDefinition:envelope:identifier:)](init%28inputmetaparameterdefinition_envelope_identifier_%29.md): Creates a specification for a named metaparameter that the app plots on a graph defined by the given set of curves.

# initWithInputMetaParameterDefinition:envelope: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a metaparameter that the app plots on a graph defined by the given set of curves.

## Declaration

```objectivec
- (instancetype) initWithInputMetaParameterDefinition:(PHASENumberMetaParameterDefinition *) inputMetaParameterDefinition envelope:(PHASEEnvelope *) envelope;
```

## Parameters

- `inputMetaParameterDefinition`: A metaparameter that contains an input value.
- `envelope`: A set of curves that graph the input value.

## See Also

### Creating a Mapped Metaparameter

- [initWithInputMetaParameterDefinition:envelope:identifier:](init%28inputmetaparameterdefinition_envelope_identifier_%29.md): Creates a specification for a named metaparameter that the app plots on a graph defined by the given set of curves.
