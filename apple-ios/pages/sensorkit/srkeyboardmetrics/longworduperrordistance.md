> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srkeyboardmetrics/longworduperrordistance](https://developer.apple.com/documentation/sensorkit/srkeyboardmetrics/longworduperrordistance)

# longWordUpErrorDistance (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The distance from the touch up to the center of the intended key of the characters of a long word.

## Declaration

```swift
var longWordUpErrorDistance: [SRKeyboardMetrics.ProbabilityMetric<UnitLength>] { get }
```

## See Also

### Measuring Key Use

- [longWordDownErrorDistance](longworddownerrordistance.md): The distance from the touch down to the center of the intended key of the characters of a long word.
- [upErrorDistance](uperrordistance.md): The distance from the touch up to the center of any key.
- [downErrorDistance](downerrordistance.md): The distance from the touch down to the center of any key.
- [spaceUpErrorDistance](spaceuperrordistance.md): The distance from the touch up to the right centroid of the Space bar.
- [spaceDownErrorDistance](spacedownerrordistance.md): The distance from the touch down to the right centroid of the Space bar.
- [deleteUpErrorDistance](deleteuperrordistance.md): The distance from the touch up to the center of the Delete key.
- [deleteDownErrorDistance](deletedownerrordistance.md): The distance from the touch down to the center of the Delete key.
- [shortWordCharKeyUpErrorDistance](shortwordcharkeyuperrordistance.md): The distance from the touch up to the center of the intended key of a character in a short word.
- [shortWordCharKeyDownErrorDistance](shortwordcharkeydownerrordistance.md): The distance from the touch down to the center of the intended key of a character in a short word.
- [pathErrorDistanceRatio](patherrordistanceratio.md): Sample values of the ratio of error distance between the intended and actual path.

# longWordUpErrorDistance (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The distance from the touch up to the center of the intended key of the characters of a long word.

## Declaration

```objectivec
@property (strong, readonly) NSArray<SRKeyboardProbabilityMetric<NSUnitLength *> *> * longWordUpErrorDistance;
```

## See Also

### Measuring Key Use

- [longWordDownErrorDistance](longworddownerrordistance.md): The distance from the touch down to the center of the intended key of the characters of a long word.
- [upErrorDistance](uperrordistance.md): The distance from the touch up to the center of any key.
- [downErrorDistance](downerrordistance.md): The distance from the touch down to the center of any key.
- [spaceUpErrorDistance](spaceuperrordistance.md): The distance from the touch up to the right centroid of the Space bar.
- [spaceDownErrorDistance](spacedownerrordistance.md): The distance from the touch down to the right centroid of the Space bar.
- [deleteUpErrorDistance](deleteuperrordistance.md): The distance from the touch up to the center of the Delete key.
- [deleteDownErrorDistance](deletedownerrordistance.md): The distance from the touch down to the center of the Delete key.
- [shortWordCharKeyUpErrorDistance](shortwordcharkeyuperrordistance.md): The distance from the touch up to the center of the intended key of a character in a short word.
- [shortWordCharKeyDownErrorDistance](shortwordcharkeydownerrordistance.md): The distance from the touch down to the center of the intended key of a character in a short word.
- [pathErrorDistanceRatio](patherrordistanceratio.md): Sample values of the ratio of error distance between the intended and actual path.
