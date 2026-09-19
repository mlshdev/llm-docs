> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasesource/gain

# gain (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of sound the source emanates.

## Declaration

```swift
var gain: Double { get set }
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` doesn’t modify the audio’s original volume.

# gain (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of sound the source emanates.

## Declaration

```objectivec
@property (nonatomic, assign) double gain;
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` doesn’t modify the audio’s original volume.
