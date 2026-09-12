> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemixer/gainmetaparameter](https://developer.apple.com/documentation/phase/phasemixer/gainmetaparameter)

# gainMetaParameter (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A parameter that changes the mixer’s volume gradually over a period of time.

## Declaration

```swift
var gainMetaParameter: PHASEMetaParameter? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to smoothly adjust the volume of the mixer’s audio signals by calling [fade(value:duration:)](../phasenumbermetaparameter/fade%28value_duration_%29.md).

The framework sets the initial value of this property according to the metaparameter definition object’s [gainMetaParameterDefinition](../phasemixerdefinition/gainmetaparameterdefinition.md).

## See Also

### Adjusting Volume

- [gain](gain.md): The mixer’s volume.

# gainMetaParameter (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A parameter that changes the mixer’s volume gradually over a period of time.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PHASEMetaParameter * gainMetaParameter;
```

<a id="Discussion"></a>

## Discussion

Use this property to smoothly adjust the volume of the mixer’s audio signals by calling [fadeToValue:duration:](../phasenumbermetaparameter/fade%28value_duration_%29.md).

The framework sets the initial value of this property according to the metaparameter definition object’s [gainMetaParameterDefinition](../phasemixerdefinition/gainmetaparameterdefinition.md).

## See Also

### Adjusting Volume

- [gain](gain.md): The mixer’s volume.
