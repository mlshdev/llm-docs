> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialpipeline/entries](https://developer.apple.com/documentation/phase/phasespatialpipeline/entries)

# entries (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Audio layers for environmental effects to add to the output.

## Declaration

```swift
var entries: [PHASESpatialCategory : PHASESpatialPipelineEntry] { get }
```

<a id="Discussion"></a>

## Discussion

This property includes an entry for each spatial category that the app includes in the [init(flags:)](init%28flags_%29.md) argument. Adjust an entry’s send level to blend its audio layer into the output signal. For example, by fading the input audio signal using the [sendLevelMetaParameterDefinition](../phasespatialpipelineentry/sendlevelmetaparameterdefinition.md) property of the [directPathTransmission](flags-swift.struct/directpathtransmission.md) entry, the app can lower the dry signal and blend in the right balance of early reflections and reverb.

## See Also

### Inspecting Effects

- [flags](flags-swift.property.md): A collection of environmental effects to include in the output.

# entries (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Audio layers for environmental effects to add to the output.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,PHASESpatialPipelineEntry *> * entries;
```

<a id="Discussion"></a>

## Discussion

This property includes an entry for each spatial category that the app includes in the [initWithFlags:](init%28flags_%29.md) argument. Adjust an entry’s send level to blend its audio layer into the output signal. For example, by fading the input audio signal using the [sendLevelMetaParameterDefinition](../phasespatialpipelineentry/sendlevelmetaparameterdefinition.md) property of the [PHASESpatialPipelineFlagDirectPathTransmission](flags-swift.struct/directpathtransmission.md) entry, the app can lower the dry signal and blend in the right balance of early reflections and reverb.

## See Also

### Inspecting Effects

- [flags](flags-swift.property.md): A collection of environmental effects to include in the output.
