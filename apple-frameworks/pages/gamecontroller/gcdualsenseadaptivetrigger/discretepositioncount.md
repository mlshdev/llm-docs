> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/discretepositioncount](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/discretepositioncount)

# discretePositionCount (Swift)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

The number of discrete control positions that the DualSense adaptive triggers support.

## Declaration

```swift
class var discretePositionCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

You can configure each of these positions separately in multiposition feedback and vibration modes.

## See Also

### Related Documentation

- [setModeFeedback(resistiveStrengths:)](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeVibration(amplitudes:frequency:)](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.

### Getting the arm position

- [armPosition](armposition.md): The position of the trigger’s arm.

# GCDualSenseAdaptiveTriggerDiscretePositionCount (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

The number of discrete control positions that the DualSense adaptive triggers support.

## Declaration

```objectivec
GCDualSenseAdaptiveTriggerDiscretePositionCount
```

<a id="Discussion"></a>

## Discussion

You can configure each of these positions separately in multiposition feedback and vibration modes.

## See Also

### Related Documentation

- [setModeFeedbackWithResistiveStrengths:](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeVibrationWithAmplitudes:frequency:](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.

### Getting the arm position

- [armPosition](armposition.md): The position of the trigger’s arm.
