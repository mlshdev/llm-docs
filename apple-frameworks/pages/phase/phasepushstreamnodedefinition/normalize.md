> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasepushstreamnodedefinition/normalize

# normalize (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An option that resizes loudness of the audio stream for consistency.

## Declaration

```swift
var normalize: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `false`. When `true`, the engine *normalizes* the audio stream — that is, it dynamically resizes loudness within a given range for a consistent listening experience. Normalization serves the benefit of assisting output level calibration. Apps that leave the value `false` need to normalize stream data manually before passing it into the framework (see [pushStreamNodes](../phasesoundevent/pushstreamnodes.md)).

# normalize (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An option that resizes loudness of the audio stream for consistency.

## Declaration

```objectivec
@property (nonatomic) BOOL normalize;
```

<a id="Discussion"></a>

## Discussion

The default value is `false`. When `true`, the engine *normalizes* the audio stream — that is, it dynamically resizes loudness within a given range for a consistent listening experience. Normalization serves the benefit of assisting output level calibration. Apps that leave the value `false` need to normalize stream data manually before passing it into the framework (see [pushStreamNodes](../phasesoundevent/pushstreamnodes.md)).
