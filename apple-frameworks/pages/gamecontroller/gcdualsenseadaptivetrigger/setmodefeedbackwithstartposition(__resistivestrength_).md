> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodefeedbackwithstartposition(_:resistivestrength:)](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodefeedbackwithstartposition(_:resistivestrength:))

# setModeFeedbackWithStartPosition(\_:resistiveStrength:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.

## Declaration

```swift
func setModeFeedbackWithStartPosition(_ startPosition: Float, resistiveStrength: Float)
```

## Parameters

- `startPosition`: The effect’s start position. A value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger depression.
- `resistiveStrength`: The strength of the feedback. A value between `0` and `1`, where `0` is the minimum and `1` is the maximum strength.

## See Also

### Configuring the trigger

- [GCDualSenseAdaptiveTrigger.PositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedback(resistiveStrengths:)](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition(\_:endPosition:resistiveStrength:)](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition(\_:amplitude:frequency:)](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibration(amplitudes:frequency:)](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTrigger.PositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedback(startPosition:endPosition:startStrength:endStrength:)](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.

# setModeFeedbackWithStartPosition:resistiveStrength: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.

## Declaration

```objectivec
- (void) setModeFeedbackWithStartPosition:(float) startPosition resistiveStrength:(float) resistiveStrength;
```

## Parameters

- `startPosition`: The effect’s start position. A value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger depression.
- `resistiveStrength`: The strength of the feedback. A value between `0` and `1`, where `0` is the minimum and `1` is the maximum strength.

## See Also

### Configuring the trigger

- [GCDualSenseAdaptiveTriggerPositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedbackWithResistiveStrengths:](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition:endPosition:resistiveStrength:](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition:amplitude:frequency:](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibrationWithAmplitudes:frequency:](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTriggerPositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedbackWithStartPosition:endPosition:startStrength:endStrength:](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.
