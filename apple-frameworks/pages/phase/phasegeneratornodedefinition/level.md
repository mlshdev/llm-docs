> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegeneratornodedefinition/level](https://developer.apple.com/documentation/phase/phasegeneratornodedefinition/level)

# level (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The node’s loudness.

## Declaration

```swift
var level: Double { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `1`. To set a value, call [setCalibrationMode(calibrationMode:level:)](setcalibrationmode%28calibrationmode_level_%29.md).

## See Also

### Calibrating Loudness

- [setCalibrationMode(calibrationMode:level:)](setcalibrationmode%28calibrationmode_level_%29.md): Selects a loudness correction strategy and reference level.
- [calibrationMode](calibrationmode.md): A sound pressure level strategy for loudness correction.

# level (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The node’s loudness.

## Declaration

```objectivec
@property (readonly) double level;
```

<a id="Discussion"></a>

## Discussion

The default value is `1`. To set a value, call [setCalibrationMode:level:](setcalibrationmode%28calibrationmode_level_%29.md).

## See Also

### Calibrating Loudness

- [setCalibrationMode:level:](setcalibrationmode%28calibrationmode_level_%29.md): Selects a loudness correction strategy and reference level.
- [calibrationMode](calibrationmode.md): A sound pressure level strategy for loudness correction.
