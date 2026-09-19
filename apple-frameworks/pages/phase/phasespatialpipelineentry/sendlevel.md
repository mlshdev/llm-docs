> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasespatialpipelineentry/sendlevel

# sendLevel (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of audio signal to add to the output.

## Declaration

```swift
var sendLevel: Double { get set }
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` passes the audio through to the output at full volume. The default value is `1`.

When an app adds the entry’s spatial pipeline (see [entries](../phasespatialpipeline/entries.md)) to a sound event, the framework observes no further adjustments to this property. To change the send level after that, adjust the [sendLevelMetaParameterDefinition](sendlevelmetaparameterdefinition.md).

# sendLevel (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of audio signal to add to the output.

## Declaration

```objectivec
@property (nonatomic) double sendLevel;
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` passes the audio through to the output at full volume. The default value is `1`.

When an app adds the entry’s spatial pipeline (see [entries](../phasespatialpipeline/entries.md)) to a sound event, the framework observes no further adjustments to this property. To change the send level after that, adjust the [sendLevelMetaParameterDefinition](sendlevelmetaparameterdefinition.md).
