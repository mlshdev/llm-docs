> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemixerdefinition/gainmetaparameterdefinition](https://developer.apple.com/documentation/phase/phasemixerdefinition/gainmetaparameterdefinition)

# gainMetaParameterDefinition (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A template for a parameter that changes the mixer’s volume gradually over a period of time.

## Declaration

```swift
var gainMetaParameterDefinition: PHASENumberMetaParameterDefinition? { get set }
```

<a id="Discussion"></a>

## Discussion

When the framework creates a mixer from a mixer definition, PHASE initializes the mixer’s [gainMetaParameter](../phasepushstreamnode/gainmetaparameter.md) to this property’s values.

## See Also

### Controlling Volume

- [gain](gain.md): The mixer’s volume.

# gainMetaParameterDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A template for a parameter that changes the mixer’s volume gradually over a period of time.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PHASENumberMetaParameterDefinition * gainMetaParameterDefinition;
```

<a id="Discussion"></a>

## Discussion

When the framework creates a mixer from a mixer definition, PHASE initializes the mixer’s [gainMetaParameter](../phasepushstreamnode/gainmetaparameter.md) to this property’s values.

## See Also

### Controlling Volume

- [gain](gain.md): The mixer’s volume.
