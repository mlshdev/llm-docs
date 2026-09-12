> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkseriestype](https://developer.apple.com/documentation/healthkit/hkseriestype)

# HKSeriesType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A type that indicates the data stored in a series sample.

## Declaration

```swift
class HKSeriesType
```

## Topics

### Accessing Series Types

- [workoutRoute()](hkseriestype/workoutroute%28%29.md): Returns a series type object for workout routes.
- [heartbeat()](hkseriestype/heartbeat%28%29.md): Returns a series type object for heartbeat data.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [HKWorkoutRoute](hkworkoutroute.md): A sample that contains a workout’s route data.
- [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md): A builder object that incrementally constructs a workout route.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

# HKSeriesType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A type that indicates the data stored in a series sample.

## Declaration

```objectivec
@interface HKSeriesType : HKSampleType
```

## Topics

### Accessing Series Types

- [workoutRouteType](hkseriestype/workoutroute%28%29.md): Returns a series type object for workout routes.
- [heartbeatSeriesType](hkseriestype/heartbeat%28%29.md): Returns a series type object for heartbeat data.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

## See Also

### Related Documentation

- [HKWorkoutRoute](hkworkoutroute.md): A sample that contains a workout’s route data.
- [HKWorkoutRouteBuilder](hkworkoutroutebuilder.md): A builder object that incrementally constructs a workout route.
- [HKWorkoutRouteQuery](hkworkoutroutequery.md): A query to access the location data stored in a workout route.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.
