> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasegeneratornodedefinition/calibrationmode

# calibrationMode (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A sound pressure level strategy for loudness correction.

## Declaration

```swift
var calibrationMode: PHASECalibrationMode { get }
```

<a id="Discussion"></a>

## Discussion

The default value is [PHASECalibrationMode.none](../phasecalibrationmode/none.md). To set a value, call [setCalibrationMode(calibrationMode:level:)](setcalibrationmode%28calibrationmode_level_%29.md).

## See Also

### Calibrating Loudness

- [setCalibrationMode(calibrationMode:level:)](setcalibrationmode%28calibrationmode_level_%29.md): Selects a loudness correction strategy and reference level.
- [level](level.md): The node’s loudness.

# calibrationMode (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A sound pressure level strategy for loudness correction.

## Declaration

```objectivec
@property (readonly) PHASECalibrationMode calibrationMode;
```

<a id="Discussion"></a>

## Discussion

The default value is [PHASECalibrationModeNone](../phasecalibrationmode/none.md). To set a value, call [setCalibrationMode:level:](setcalibrationmode%28calibrationmode_level_%29.md).

## See Also

### Calibrating Loudness

- [setCalibrationMode:level:](setcalibrationmode%28calibrationmode_level_%29.md): Selects a loudness correction strategy and reference level.
- [level](level.md): The node’s loudness.
