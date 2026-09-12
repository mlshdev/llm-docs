> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegeneratornodedefinition/setcalibrationmode(calibrationmode:level:)](https://developer.apple.com/documentation/phase/phasegeneratornodedefinition/setcalibrationmode(calibrationmode:level:))

# setCalibrationMode(calibrationMode:level:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Selects a loudness correction strategy and reference level.

## Declaration

```swift
func setCalibrationMode(calibrationMode: PHASECalibrationMode, level: Double)
```

## Parameters

- `calibrationMode`: A given strategy for sound pressure level. For a consistent user experience across platforms and output devices, choose [PHASECalibrationMode.absoluteSpl](../phasecalibrationmode/absolutespl.md) or [PHASECalibrationMode.relativeSpl](../phasecalibrationmode/relativespl.md).
- `level`: The loudness. The calibration mode determines this value’s unit and range.

## See Also

### Calibrating Loudness

- [calibrationMode](calibrationmode.md): A sound pressure level strategy for loudness correction.
- [level](level.md): The node’s loudness.

# setCalibrationMode:level: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Selects a loudness correction strategy and reference level.

## Declaration

```objectivec
- (void) setCalibrationMode:(PHASECalibrationMode) calibrationMode level:(double) level;
```

## Parameters

- `calibrationMode`: A given strategy for sound pressure level. For a consistent user experience across platforms and output devices, choose [PHASECalibrationModeAbsoluteSpl](../phasecalibrationmode/absolutespl.md) or [PHASECalibrationModeRelativeSpl](../phasecalibrationmode/relativespl.md).
- `level`: The loudness. The calibration mode determines this value’s unit and range.

## See Also

### Calibrating Loudness

- [calibrationMode](calibrationmode.md): A sound pressure level strategy for loudness correction.
- [level](level.md): The node’s loudness.
