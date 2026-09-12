> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodeslopefeedback(startposition:endposition:startstrength:endstrength:)](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodeslopefeedback(startposition:endposition:startstrength:endstrength:))

# setModeSlopeFeedback(startPosition:endPosition:startStrength:endStrength:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.

## Declaration

```swift
func setModeSlopeFeedback(startPosition: Float, endPosition: Float, startStrength: Float, endStrength: Float)
```

## Parameters

- `startPosition`: The effect’s start position, which is a value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger tilt.
- `endPosition`: The effect’s end position, which is a value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger tilt. This value must be greater than `startPosition`.
- `startStrength`: The effect’s start strength, which is a value between `0` and `1`, where `0` is the minimum or off value, and `1` is the maximum strength.
- `endStrength`: The effect’s end strength, which is a value between `0` and `1`, where `0` is the minimum or off value, and `1` is the maximum strength.

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition(\_:resistiveStrength:)](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTrigger.PositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedback(resistiveStrengths:)](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition(\_:endPosition:resistiveStrength:)](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition(\_:amplitude:frequency:)](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibration(amplitudes:frequency:)](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTrigger.PositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.

# setModeSlopeFeedbackWithStartPosition:endPosition:startStrength:endStrength: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.

## Declaration

```objectivec
- (void) setModeSlopeFeedbackWithStartPosition:(float) startPosition endPosition:(float) endPosition startStrength:(float) startStrength endStrength:(float) endStrength;
```

## Parameters

- `startPosition`: The effect’s start position, which is a value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger tilt.
- `endPosition`: The effect’s end position, which is a value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger tilt. This value must be greater than `startPosition`.
- `startStrength`: The effect’s start strength, which is a value between `0` and `1`, where `0` is the minimum or off value, and `1` is the maximum strength.
- `endStrength`: The effect’s end strength, which is a value between `0` and `1`, where `0` is the minimum or off value, and `1` is the maximum strength.

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition:resistiveStrength:](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTriggerPositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedbackWithResistiveStrengths:](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition:endPosition:resistiveStrength:](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition:amplitude:frequency:](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibrationWithAmplitudes:frequency:](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTriggerPositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
