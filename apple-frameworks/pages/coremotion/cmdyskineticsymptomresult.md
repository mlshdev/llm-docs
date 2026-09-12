> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmdyskineticsymptomresult](https://developer.apple.com/documentation/coremotion/cmdyskineticsymptomresult)

# CMDyskineticSymptomResult (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

A result object that contains data about the likely presence of dyskinetic symptoms during a one-minute interval.

## Declaration

```swift
class CMDyskineticSymptomResult
```

## Mentioned In

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md)

<a id="overview"></a>

## Overview

Dyskinesias are uncontrolled, involuntary movements that occur as a side effect of taking Levadopa to control Parkinson’s disease. Dyskinesias can manifest in a single body part, such as the arm, leg, or head, or they can affect the entire body. Particular dyskinesias resemble actions like fidgeting, writhing, wriggling, head bobbing, or body swaying. These symptoms tend to occur during the drug’s peak dosage. Dyskinesias typically occur in patients with advanced Parkinson’s disease, who may require higher dosages of Levadopa.

The following equation is always true: [percentUnlikely](cmdyskineticsymptomresult/percentunlikely.md) `+` [percentLikely](cmdyskineticsymptomresult/percentlikely.md) `= 1.0`.

> **Important**

>  Gather and present data on dyskinetic symptom results only to users with choreiform dyskinesias, either self-reported or diagnosed by a clinician.

## Topics

### Reading the Time Interval

- [startDate](cmdyskineticsymptomresult/startdate.md): The result’s start time and date.
- [endDate](cmdyskineticsymptomresult/enddate.md): The result’s end time and date.

### Accessing Dyskinetic Symptom Data

- [percentUnlikely](cmdyskineticsymptomresult/percentunlikely.md): The percentage of time when dyskinetic symptoms were unlikely.
- [percentLikely](cmdyskineticsymptomresult/percentlikely.md): The percentage of time when dyskinetic symptoms were likely.

### Initializers

- [init(coder:)](cmdyskineticsymptomresult/init%28coder_%29.md)

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
- [CMTremorResult](cmtremorresult.md): A result object that contains data about the presence and strength of tremors during a one-minute interval.

# CMDyskineticSymptomResult (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

A result object that contains data about the likely presence of dyskinetic symptoms during a one-minute interval.

## Declaration

```objectivec
@interface CMDyskineticSymptomResult : NSObject
```

## Mentioned In

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md)

<a id="overview"></a>

## Overview

Dyskinesias are uncontrolled, involuntary movements that occur as a side effect of taking Levadopa to control Parkinson’s disease. Dyskinesias can manifest in a single body part, such as the arm, leg, or head, or they can affect the entire body. Particular dyskinesias resemble actions like fidgeting, writhing, wriggling, head bobbing, or body swaying. These symptoms tend to occur during the drug’s peak dosage. Dyskinesias typically occur in patients with advanced Parkinson’s disease, who may require higher dosages of Levadopa.

The following equation is always true: [percentUnlikely](cmdyskineticsymptomresult/percentunlikely.md) `+` [percentLikely](cmdyskineticsymptomresult/percentlikely.md) `= 1.0`.

> **Important**

>  Gather and present data on dyskinetic symptom results only to users with choreiform dyskinesias, either self-reported or diagnosed by a clinician.

## Topics

### Reading the Time Interval

- [startDate](cmdyskineticsymptomresult/startdate.md): The result’s start time and date.
- [endDate](cmdyskineticsymptomresult/enddate.md): The result’s end time and date.

### Accessing Dyskinetic Symptom Data

- [percentUnlikely](cmdyskineticsymptomresult/percentunlikely.md): The percentage of time when dyskinetic symptoms were unlikely.
- [percentLikely](cmdyskineticsymptomresult/percentlikely.md): The percentage of time when dyskinetic symptoms were likely.

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
- [CMTremorResult](cmtremorresult.md): A result object that contains data about the presence and strength of tremors during a one-minute interval.
