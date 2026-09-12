> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasecalibrationmode/none](https://developer.apple.com/documentation/phase/phasecalibrationmode/none)

# PHASECalibrationMode.none (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An option that specifies no loudness calibration.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

For a consistent user experience across platforms and output devices, avoid [PHASECalibrationMode.none](none.md) by correcting loudness with [PHASECalibrationMode.absoluteSpl](absolutespl.md) or [PHASECalibrationMode.relativeSpl](relativespl.md).

## See Also

### Modes

- [PHASECalibrationMode.absoluteSpl](absolutespl.md): A sound pressure level based on the current output device.
- [PHASECalibrationMode.relativeSpl](relativespl.md): A sound pressure level that’s tuned for the device.

# PHASECalibrationModeNone (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An option that specifies no loudness calibration.

## Declaration

```objectivec
PHASECalibrationModeNone
```

<a id="Discussion"></a>

## Discussion

For a consistent user experience across platforms and output devices, avoid [PHASECalibrationModeNone](none.md) by correcting loudness with [PHASECalibrationModeAbsoluteSpl](absolutespl.md) or [PHASECalibrationModeRelativeSpl](relativespl.md).

## See Also

### Modes

- [PHASECalibrationModeAbsoluteSpl](absolutespl.md): A sound pressure level based on the current output device.
- [PHASECalibrationModeRelativeSpl](relativespl.md): A sound pressure level that’s tuned for the device.
