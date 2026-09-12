> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeylaplength](https://developer.apple.com/documentation/healthkit/hkmetadatakeylaplength)

# HKMetadataKeyLapLength (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A key that indicates the length of a lap during a workout.

## Declaration

```swift
let HKMetadataKeyLapLength: String
```

<a id="Discussion"></a>

## Discussion

Set this key on  a workout, workout segment, or a quantity sample that represents distance. Set its value to an [HKQuantity](hkquantity.md) object that uses length units (described in [HKUnit](hkunit.md)).

## See Also

### Swimming

- [HKMetadataKeySwimmingLocationType](hkmetadatakeyswimminglocationtype.md): A key that indicates the location for a swimming workout.
- [HKMetadataKeySwimmingStrokeStyle](hkmetadatakeyswimmingstrokestyle.md): A key that indicates the predominant stroke style for a lap of swimming.
- [HKMetadataKeySWOLFScore](hkmetadatakeyswolfscore.md)
- [HKMetadataKeyWaterSalinity](hkmetadatakeywatersalinity.md)

# HKMetadataKeyLapLength (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A key that indicates the length of a lap during a workout.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyLapLength;
```

<a id="Discussion"></a>

## Discussion

Set this key on  a workout, workout segment, or a quantity sample that represents distance. Set its value to an [HKQuantity](hkquantity.md) object that uses length units (described in [HKUnit](hkunit.md)).

## See Also

### Swimming

- [HKMetadataKeySwimmingLocationType](hkmetadatakeyswimminglocationtype.md): A key that indicates the location for a swimming workout.
- [HKMetadataKeySwimmingStrokeStyle](hkmetadatakeyswimmingstrokestyle.md): A key that indicates the predominant stroke style for a lap of swimming.
- [HKMetadataKeySWOLFScore](hkmetadatakeyswolfscore.md)
- [HKMetadataKeyWaterSalinity](hkmetadatakeywatersalinity.md)
