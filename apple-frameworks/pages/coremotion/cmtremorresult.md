> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmtremorresult](https://developer.apple.com/documentation/coremotion/cmtremorresult)

# CMTremorResult (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

A result object that contains data about the presence and strength of tremors during a one-minute interval.

## Declaration

```swift
class CMTremorResult
```

## Mentioned In

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md)

<a id="overview"></a>

## Overview

The following equation is always true: [percentUnknown](cmtremorresult/percentunknown.md) `+` [percentNone](cmtremorresult/percentnone.md) `+` [percentSlight](cmtremorresult/percentslight.md) `+` [percentMild](cmtremorresult/percentmild.md) `+` [percentModerate](cmtremorresult/percentmoderate.md) `+` [percentStrong](cmtremorresult/percentstrong.md) `= 1.0`.

## Topics

### Reading the Time Interval

- [startDate](cmtremorresult/startdate.md): The result’s start time and date.
- [endDate](cmtremorresult/enddate.md): The result’s end time and date.

### Accessing Tremor Data

- [percentUnknown](cmtremorresult/percentunknown.md): The percentage of time when the algorithm couldn’t make a determination.
- [percentNone](cmtremorresult/percentnone.md): The percentage of time when no tremor was detected.
- [percentSlight](cmtremorresult/percentslight.md): The percentage of time when a tremor was likely, and the displacement amplitude was slight.
- [percentMild](cmtremorresult/percentmild.md): The percentage of time when a tremor was likely, and the displacement amplitude was mild.
- [percentModerate](cmtremorresult/percentmoderate.md): The percentage of time when a tremor was likely, and the displacement amplitude was moderate.
- [percentStrong](cmtremorresult/percentstrong.md): The percentage of time when a tremor was likely, and the displacement amplitude was strong.

### Initializers

- [init(coder:)](cmtremorresult/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

## See Also

### Movement disorder

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md): Retrieve data from the Apple Watch’s movement disorder manager.
- [Adhering to the movement disorder data collection requirements](adhering-to-the-movement-disorder-data-collection-requirements.md): Ensure that your users understand and have control over the data your app collects.
- [Movement disorder algorithm changelog](movement-disorder-algorithm-changelog.md): A chronological log of notable changes to the movement disorder algorithm.
- [CMMovementDisorderManager](cmmovementdisordermanager.md): A manager for recording and querying movement disorder data.
- [CMDyskineticSymptomResult](cmdyskineticsymptomresult.md): A result object that contains data about the likely presence of dyskinetic symptoms during a one-minute interval.

# CMTremorResult (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

A result object that contains data about the presence and strength of tremors during a one-minute interval.

## Declaration

```objectivec
@interface CMTremorResult : NSObject
```

## Mentioned In

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md)

<a id="overview"></a>

## Overview

The following equation is always true: [percentUnknown](cmtremorresult/percentunknown.md) `+` [percentNone](cmtremorresult/percentnone.md) `+` [percentSlight](cmtremorresult/percentslight.md) `+` [percentMild](cmtremorresult/percentmild.md) `+` [percentModerate](cmtremorresult/percentmoderate.md) `+` [percentStrong](cmtremorresult/percentstrong.md) `= 1.0`.

## Topics

### Reading the Time Interval

- [startDate](cmtremorresult/startdate.md): The result’s start time and date.
- [endDate](cmtremorresult/enddate.md): The result’s end time and date.

### Accessing Tremor Data

- [percentUnknown](cmtremorresult/percentunknown.md): The percentage of time when the algorithm couldn’t make a determination.
- [percentNone](cmtremorresult/percentnone.md): The percentage of time when no tremor was detected.
- [percentSlight](cmtremorresult/percentslight.md): The percentage of time when a tremor was likely, and the displacement amplitude was slight.
- [percentMild](cmtremorresult/percentmild.md): The percentage of time when a tremor was likely, and the displacement amplitude was mild.
- [percentModerate](cmtremorresult/percentmoderate.md): The percentage of time when a tremor was likely, and the displacement amplitude was moderate.
- [percentStrong](cmtremorresult/percentstrong.md): The percentage of time when a tremor was likely, and the displacement amplitude was strong.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Movement disorder

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md): Retrieve data from the Apple Watch’s movement disorder manager.
- [Adhering to the movement disorder data collection requirements](adhering-to-the-movement-disorder-data-collection-requirements.md): Ensure that your users understand and have control over the data your app collects.
- [Movement disorder algorithm changelog](movement-disorder-algorithm-changelog.md): A chronological log of notable changes to the movement disorder algorithm.
- [CMMovementDisorderManager](cmmovementdisordermanager.md): A manager for recording and querying movement disorder data.
- [CMDyskineticSymptomResult](cmdyskineticsymptomresult.md): A result object that contains data about the likely presence of dyskinetic symptoms during a one-minute interval.
