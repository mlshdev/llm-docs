> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasegroup/gain

# gain (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Modifies the volume of the group’s sounds.

## Declaration

```swift
var gain: Double { get set }
```

<a id="Discussion"></a>

## Discussion

This property modifies the volume of all audio in the group. The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` doesn’t modify the original volume.

## See Also

### Conrolling Loudness

- [fadeGain(gain:duration:curveType:)](fadegain%28gain_duration_curvetype_%29.md): Adjusts the volume of the sounds in a group gradually.

# gain (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Modifies the volume of the group’s sounds.

## Declaration

```objectivec
@property (nonatomic, assign) double gain;
```

<a id="Discussion"></a>

## Discussion

This property modifies the volume of all audio in the group. The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` doesn’t modify the original volume.

## See Also

### Conrolling Loudness

- [fadeGain:duration:curveType:](fadegain%28gain_duration_curvetype_%29.md): Adjusts the volume of the sounds in a group gradually.
