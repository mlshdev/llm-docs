> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srkeyboardmetrics/deletetocharkey](https://developer.apple.com/documentation/sensorkit/srkeyboardmetrics/deletetocharkey)

# deleteToCharKey (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The duration between touch up of the Delete key and touch down of a sequential character key.

## Declaration

```swift
var deleteToCharKey: SRKeyboardMetrics.ProbabilityMetric<UnitDuration> { get }
```

## See Also

### Timing Key Use

- [SRKeyboardMetrics.ProbabilityMetric](probabilitymetric.md): A likelihood of occurrence.
- [touchDownUp](touchdownup.md): The duration between touch down to touch up for any key.
- [touchUpDown](touchupdown.md): The duration between touch up and touch down for any key.
- [spaceTouchDownUp](spacetouchdownup.md): The duration between touch down and touch up of all Space bar events for the keyboard.
- [deleteTouchDownUp](deletetouchdownup.md): The duration between touch down and touch up of all Delete key events for the keyboard.
- [shortWordCharKeyTouchDownUp](shortwordcharkeytouchdownup.md): The duration between touch down and touch up of all character keys in short words for the keyboard.
- [touchDownDown](touchdowndown.md): The duration between touch down and touch down for any key.
- [charKeyToPrediction](charkeytoprediction.md): The duration between touch up on a character key and touch down on a word in the prediction bar.
- [shortWordCharKeyToCharKey](shortwordcharkeytocharkey.md): The duration between touch up on a character key and touch down on any sequential character key in a short word.
- [charKeyToAnyTapKey](charkeytoanytapkey.md): The duration between touch up on a character key and touch down on the next sequential key.
- [anyTapToCharKey](anytaptocharkey.md): The duration between touch up of any key and touch down on a sequential character key.
- [spaceToCharKey](spacetocharkey.md): The duration between touch up of the Space bar and touch down of a sequential character key.
- [charKeyToSpaceKey](charkeytospacekey.md): The duration between touch up of a character key and touch down of a sequential Space bar.
- [spaceToDeleteKey](spacetodeletekey.md): The duration between touch up of the Space bar and touch down of a sequential Delete key.
- [deleteToSpaceKey](deletetospacekey.md): The duration between touch up of the Delete key and touch down of a sequential Space bar.

# deleteToCharKey (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The duration between touch up of the Delete key and touch down of a sequential character key.

## Declaration

```objectivec
@property (strong, readonly) SRKeyboardProbabilityMetric<NSUnitDuration *> * deleteToCharKey;
```

## See Also

### Timing Key Use

- [SRKeyboardProbabilityMetric](probabilitymetric.md): A likelihood of occurrence.
- [touchDownUp](touchdownup.md): The duration between touch down to touch up for any key.
- [touchUpDown](touchupdown.md): The duration between touch up and touch down for any key.
- [spaceTouchDownUp](spacetouchdownup.md): The duration between touch down and touch up of all Space bar events for the keyboard.
- [deleteTouchDownUp](deletetouchdownup.md): The duration between touch down and touch up of all Delete key events for the keyboard.
- [shortWordCharKeyTouchDownUp](shortwordcharkeytouchdownup.md): The duration between touch down and touch up of all character keys in short words for the keyboard.
- [touchDownDown](touchdowndown.md): The duration between touch down and touch down for any key.
- [charKeyToPrediction](charkeytoprediction.md): The duration between touch up on a character key and touch down on a word in the prediction bar.
- [shortWordCharKeyToCharKey](shortwordcharkeytocharkey.md): The duration between touch up on a character key and touch down on any sequential character key in a short word.
- [charKeyToAnyTapKey](charkeytoanytapkey.md): The duration between touch up on a character key and touch down on the next sequential key.
- [anyTapToCharKey](anytaptocharkey.md): The duration between touch up of any key and touch down on a sequential character key.
- [spaceToCharKey](spacetocharkey.md): The duration between touch up of the Space bar and touch down of a sequential character key.
- [charKeyToSpaceKey](charkeytospacekey.md): The duration between touch up of a character key and touch down of a sequential Space bar.
- [spaceToDeleteKey](spacetodeletekey.md): The duration between touch up of the Space bar and touch down of a sequential Delete key.
- [deleteToSpaceKey](deletetospacekey.md): The duration between touch up of the Delete key and touch down of a sequential Space bar.
