> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyswimmingstrokestyle](https://developer.apple.com/documentation/healthkit/hkmetadatakeyswimmingstrokestyle)

# HKMetadataKeySwimmingStrokeStyle (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A key that indicates the predominant stroke style for a lap of swimming.

## Declaration

```swift
let HKMetadataKeySwimmingStrokeStyle: String
```

<a id="Discussion"></a>

## Discussion

Set this key on workout lap events. Set its value to an [NSNumber](../foundation/nsnumber.md) object that contains a valid value from the  [HKSwimmingStrokeStyle](hkswimmingstrokestyle.md) enumeration.

## Topics

### Valid Stroke Styles

- [HKSwimmingStrokeStyle](hkswimmingstrokestyle.md): The style of stroke while swimming.

## See Also

### Swimming

- [HKMetadataKeySwimmingLocationType](hkmetadatakeyswimminglocationtype.md): A key that indicates the location for a swimming workout.
- [HKMetadataKeyLapLength](hkmetadatakeylaplength.md): A key that indicates the length of a lap during a workout.
- [HKMetadataKeySWOLFScore](hkmetadatakeyswolfscore.md)
- [HKMetadataKeyWaterSalinity](hkmetadatakeywatersalinity.md)

# HKMetadataKeySwimmingStrokeStyle (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A key that indicates the predominant stroke style for a lap of swimming.

## Declaration

```objectivec
extern NSString * const HKMetadataKeySwimmingStrokeStyle;
```

<a id="Discussion"></a>

## Discussion

Set this key on workout lap events. Set its value to an [NSNumber](../foundation/nsnumber.md) object that contains a valid value from the  [HKSwimmingStrokeStyle](hkswimmingstrokestyle.md) enumeration.

## Topics

### Valid Stroke Styles

- [HKSwimmingStrokeStyle](hkswimmingstrokestyle.md): The style of stroke while swimming.

## See Also

### Swimming

- [HKMetadataKeySwimmingLocationType](hkmetadatakeyswimminglocationtype.md): A key that indicates the location for a swimming workout.
- [HKMetadataKeyLapLength](hkmetadatakeylaplength.md): A key that indicates the length of a lap during a workout.
- [HKMetadataKeySWOLFScore](hkmetadatakeyswolfscore.md)
- [HKMetadataKeyWaterSalinity](hkmetadatakeywatersalinity.md)
