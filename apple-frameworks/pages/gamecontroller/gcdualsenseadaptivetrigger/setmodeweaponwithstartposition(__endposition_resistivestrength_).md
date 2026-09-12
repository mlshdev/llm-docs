> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodeweaponwithstartposition(_:endposition:resistivestrength:)](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodeweaponwithstartposition(_:endposition:resistivestrength:))

# setModeWeaponWithStartPosition(\_:endPosition:resistiveStrength:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.

## Declaration

```swift
func setModeWeaponWithStartPosition(_ startPosition: Float, endPosition: Float, resistiveStrength: Float)
```

## Parameters

- `startPosition`: The effect’s start position. A value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger depression.
- `endPosition`: The effect’s end position. A value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger depression. This value must be greater than `startPosition`.
- `resistiveStrength`: The strength of the effect. A value between `0` and `1`, where `0` is the minimum or off value, and `1` is the maximum strength.

<a id="Discussion"></a>

## Discussion

When the user depresses the trigger beyond the value of the end position, it stops providing feedback, giving the user a sense of release, similar to pulling a weapon trigger.

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition(\_:resistiveStrength:)](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTrigger.PositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedback(resistiveStrengths:)](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeVibrationWithStartPosition(\_:amplitude:frequency:)](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibration(amplitudes:frequency:)](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTrigger.PositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedback(startPosition:endPosition:startStrength:endStrength:)](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.

# setModeWeaponWithStartPosition:endPosition:resistiveStrength: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.

## Declaration

```objectivec
- (void) setModeWeaponWithStartPosition:(float) startPosition endPosition:(float) endPosition resistiveStrength:(float) resistiveStrength;
```

## Parameters

- `startPosition`: The effect’s start position. A value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger depression.
- `endPosition`: The effect’s end position. A value between `0` and `1` , where `0` is the minimum and `1` is the maximum trigger depression. This value must be greater than `startPosition`.
- `resistiveStrength`: The strength of the effect. A value between `0` and `1`, where `0` is the minimum or off value, and `1` is the maximum strength.

<a id="Discussion"></a>

## Discussion

When the user depresses the trigger beyond the value of the end position, it stops providing feedback, giving the user a sense of release, similar to pulling a weapon trigger.

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition:resistiveStrength:](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTriggerPositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedbackWithResistiveStrengths:](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeVibrationWithStartPosition:amplitude:frequency:](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibrationWithAmplitudes:frequency:](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTriggerPositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedbackWithStartPosition:endPosition:startStrength:endStrength:](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.
