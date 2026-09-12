> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialpipelineentry/sendlevelmetaparameterdefinition](https://developer.apple.com/documentation/phase/phasespatialpipelineentry/sendlevelmetaparameterdefinition)

# sendLevelMetaParameterDefinition (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A parameter that gradually updates the amount of audio signal that passes through to the output.

## Declaration

```swift
var sendLevelMetaParameterDefinition: PHASENumberMetaParameterDefinition? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to fade reverb effects into a spatial mixer’s output.

For example, to begin with no reverb and gradually enable it, start by silencing reverb by setting the [lateReverb](../phasespatialcategory/latereverb.md) entry’s [sendLevel](sendlevel.md) to `0`. Begin the fade by calling [fade(value:duration:)](../phasenumbermetaparameter/fade%28value_duration_%29.md) on this property with an argument of `1`.

# sendLevelMetaParameterDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A parameter that gradually updates the amount of audio signal that passes through to the output.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PHASENumberMetaParameterDefinition * sendLevelMetaParameterDefinition;
```

<a id="Discussion"></a>

## Discussion

Use this property to fade reverb effects into a spatial mixer’s output.

For example, to begin with no reverb and gradually enable it, start by silencing reverb by setting the [PHASESpatialCategoryLateReverb](../phasespatialcategory/latereverb.md) entry’s [sendLevel](sendlevel.md) to `0`. Begin the fade by calling [fadeToValue:duration:](../phasenumbermetaparameter/fade%28value_duration_%29.md) on this property with an argument of `1`.
