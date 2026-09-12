> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummarytype](https://developer.apple.com/documentation/healthkit/hkactivitysummarytype)

# HKActivitySummaryType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

A type that identifies activity summary objects.

## Declaration

```swift
class HKActivitySummaryType
```

<a id="overview"></a>

## Overview

Use the activity summary type to request permission to read [HKActivitySummary](hkactivitysummary.md) objects from the HealthKit store. To create an activity summary type, use the [HKObjectType](hkobjecttype.md) class’s [activitySummaryType()](hkobjecttype/activitysummarytype%28%29.md) convenience method.

> **Note**

>  Although you can request permission to read [HKActivitySummary](hkactivitysummary.md) objects, you can’t request permission to share them. For more information, see [requestAuthorization(toShare:read:completion:)](hkhealthstore/requestauthorization%28toshare_read_completion_%29.md).

The [HKActivitySummaryType](hkactivitysummarytype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. Like many HealthKit classes, activity summary types aren’t extensible and you shouldn’t subclass them.

<a id="Access-and-Modify-Activity-Summaries"></a>

### Access and Modify Activity Summaries

Any workouts that you save to the HealthKit store may affect that day’s summary. For more information, see [HKWorkout](hkworkout.md).

To query for activity summary objects, use an [HKActivitySummaryQuery](hkactivitysummaryquery.md). You can also create your own [HKActivitySummary](hkactivitysummary.md) objects (for example, to display in an [HKActivityRingView](../healthkitui/hkactivityringview.md)), but you can’t save them to the HealthKit store.

## Relationships

### Inherits From

- [HKObjectType](hkobjecttype.md)

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

- [HKActivitySummary](hkactivitysummary.md): An object that contains the move, exercise, and stand data for a given day.
- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKActivityRingView](../healthkitui/hkactivityringview.md): A view that uses the Move, Exercise, and Stand activity rings to display data from a HealthKit activity summary object.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

# HKActivitySummaryType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

A type that identifies activity summary objects.

## Declaration

```objectivec
@interface HKActivitySummaryType : HKObjectType
```

<a id="overview"></a>

## Overview

Use the activity summary type to request permission to read [HKActivitySummary](hkactivitysummary.md) objects from the HealthKit store. To create an activity summary type, use the [HKObjectType](hkobjecttype.md) class’s [activitySummaryType](hkobjecttype/activitysummarytype%28%29.md) convenience method.

> **Note**

>  Although you can request permission to read [HKActivitySummary](hkactivitysummary.md) objects, you can’t request permission to share them. For more information, see [requestAuthorizationToShareTypes:readTypes:completion:](hkhealthstore/requestauthorization%28toshare_read_completion_%29.md).

The [HKActivitySummaryType](hkactivitysummarytype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. Like many HealthKit classes, activity summary types aren’t extensible and you shouldn’t subclass them.

<a id="Access-and-Modify-Activity-Summaries"></a>

### Access and Modify Activity Summaries

Any workouts that you save to the HealthKit store may affect that day’s summary. For more information, see [HKWorkout](hkworkout.md).

To query for activity summary objects, use an [HKActivitySummaryQuery](hkactivitysummaryquery.md). You can also create your own [HKActivitySummary](hkactivitysummary.md) objects (for example, to display in an [HKActivityRingView](../healthkitui/hkactivityringview.md)), but you can’t save them to the HealthKit store.

## Relationships

### Inherits From

- [HKObjectType](hkobjecttype.md)

## See Also

### Related Documentation

- [HKActivitySummary](hkactivitysummary.md): An object that contains the move, exercise, and stand data for a given day.
- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKActivityRingView](../healthkitui/hkactivityringview.md): A view that uses the Move, Exercise, and Stand activity rings to display data from a HealthKit activity summary object.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.
