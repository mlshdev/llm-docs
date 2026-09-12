> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmovementdisordermanager](https://developer.apple.com/documentation/coremotion/cmmovementdisordermanager)

# CMMovementDisorderManager (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** watchOS 5.0+

A manager for recording and querying movement disorder data.

## Declaration

```swift
class CMMovementDisorderManager
```

## Mentioned In

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md)

<a id="overview"></a>

## Overview

> **Important**

>  Only collect data from patients clinically diagnosed with a movement disorder. This API is not designed to collect data from users who have not been diagnosed with a movement disorder. All medical decisions should be made through the guidance of a licensed clinician. For more information, see [Adhering to the movement disorder data collection requirements](adhering-to-the-movement-disorder-data-collection-requirements.md).

Use `CMMovementDisorderManager` to measure a resting Parkinsonian tremor in the 3-7 Hz range and choreiform dyskinetic symptoms. When collecting data, the user should wear Apple Watch on their most affected arm.

`CMMovementDisorderManager` requires an entitlement from Apple. To apply for the entitlement, see [Movement Disorder Entitlement Request](https://developer.apple.com/contact/request/movement-disorder-api-entitlement/).

> **Important**

>  To use this API, you must include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file and provide a usage description string for this key. The usage description appears in the prompt that the user must accept the first time the system asks the user to access motion data for your app. If you don’t include a usage description string, your app crashes when you call this API.

## Topics

### Checking Availablility

- [isAvailable()](cmmovementdisordermanager/isavailable%28%29.md): A Boolean value indicating whether the current device supports the movement disorder manager.
- [authorizationStatus()](cmmovementdisordermanager/authorizationstatus%28%29.md): A value indicating whether the user has authorized the app to monitor and query for movement disorder data.
- [version()](cmmovementdisordermanager/version%28%29.md): Returns a string that describes the movement disorder algorithm’s current version.

### Recording Movement Disorders

- [monitorKinesias(forDuration:)](cmmovementdisordermanager/monitorkinesias%28forduration_%29.md): Calculate and store tremor and dyskinetic symptom results for the duration of the specified time interval.
- [monitorKinesiasExpirationDate()](cmmovementdisordermanager/monitorkinesiasexpirationdate%28%29.md): Returns the expiration date for the most recent monitoring period.

### Querying for Movement Disorders

- [queryTremor(from:to:withHandler:)](cmmovementdisordermanager/querytremor%28from_to_withhandler_%29.md): Query for tremor results from the provided time interval.
- [CMTremorResultHandler](cmtremorresulthandler.md): A completion handler for accessing and processing tremor results.
- [queryDyskineticSymptom(from:to:withHandler:)](cmmovementdisordermanager/querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.
- [CMDyskineticSymptomResultHandler](cmdyskineticsymptomresulthandler.md): A completion handler for processing dyskinetic symptom results.
- [lastProcessedDate()](cmmovementdisordermanager/lastprocesseddate%28%29.md): Returns the date of the most recently calculated results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Movement disorder

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md): Retrieve data from the Apple Watch’s movement disorder manager.
- [Adhering to the movement disorder data collection requirements](adhering-to-the-movement-disorder-data-collection-requirements.md): Ensure that your users understand and have control over the data your app collects.
- [Movement disorder algorithm changelog](movement-disorder-algorithm-changelog.md): A chronological log of notable changes to the movement disorder algorithm.
- [CMTremorResult](cmtremorresult.md): A result object that contains data about the presence and strength of tremors during a one-minute interval.
- [CMDyskineticSymptomResult](cmdyskineticsymptomresult.md): A result object that contains data about the likely presence of dyskinetic symptoms during a one-minute interval.

# CMMovementDisorderManager (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** watchOS 5.0+

A manager for recording and querying movement disorder data.

## Declaration

```objectivec
@interface CMMovementDisorderManager : NSObject
```

## Mentioned In

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md)

<a id="overview"></a>

## Overview

> **Important**

>  Only collect data from patients clinically diagnosed with a movement disorder. This API is not designed to collect data from users who have not been diagnosed with a movement disorder. All medical decisions should be made through the guidance of a licensed clinician. For more information, see [Adhering to the movement disorder data collection requirements](adhering-to-the-movement-disorder-data-collection-requirements.md).

Use `CMMovementDisorderManager` to measure a resting Parkinsonian tremor in the 3-7 Hz range and choreiform dyskinetic symptoms. When collecting data, the user should wear Apple Watch on their most affected arm.

`CMMovementDisorderManager` requires an entitlement from Apple. To apply for the entitlement, see [Movement Disorder Entitlement Request](https://developer.apple.com/contact/request/movement-disorder-api-entitlement/).

> **Important**

>  To use this API, you must include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file and provide a usage description string for this key. The usage description appears in the prompt that the user must accept the first time the system asks the user to access motion data for your app. If you don’t include a usage description string, your app crashes when you call this API.

## Topics

### Checking Availablility

- [isAvailable](cmmovementdisordermanager/isavailable%28%29.md): A Boolean value indicating whether the current device supports the movement disorder manager.
- [authorizationStatus](cmmovementdisordermanager/authorizationstatus%28%29.md): A value indicating whether the user has authorized the app to monitor and query for movement disorder data.
- [version](cmmovementdisordermanager/version%28%29.md): Returns a string that describes the movement disorder algorithm’s current version.

### Recording Movement Disorders

- [monitorKinesiasForDuration:](cmmovementdisordermanager/monitorkinesias%28forduration_%29.md): Calculate and store tremor and dyskinetic symptom results for the duration of the specified time interval.
- [monitorKinesiasExpirationDate](cmmovementdisordermanager/monitorkinesiasexpirationdate%28%29.md): Returns the expiration date for the most recent monitoring period.

### Querying for Movement Disorders

- [queryTremorFromDate:toDate:withHandler:](cmmovementdisordermanager/querytremor%28from_to_withhandler_%29.md): Query for tremor results from the provided time interval.
- [CMTremorResultHandler](cmtremorresulthandler.md): A completion handler for accessing and processing tremor results.
- [queryDyskineticSymptomFromDate:toDate:withHandler:](cmmovementdisordermanager/querydyskineticsymptom%28from_to_withhandler_%29.md): Query for dyskinetic symptoms from the provided time interval.
- [CMDyskineticSymptomResultHandler](cmdyskineticsymptomresulthandler.md): A completion handler for processing dyskinetic symptom results.
- [lastProcessedDate](cmmovementdisordermanager/lastprocesseddate%28%29.md): Returns the date of the most recently calculated results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Movement disorder

- [Getting movement disorder symptom data](getting-movement-disorder-symptom-data.md): Retrieve data from the Apple Watch’s movement disorder manager.
- [Adhering to the movement disorder data collection requirements](adhering-to-the-movement-disorder-data-collection-requirements.md): Ensure that your users understand and have control over the data your app collects.
- [Movement disorder algorithm changelog](movement-disorder-algorithm-changelog.md): A chronological log of notable changes to the movement disorder algorithm.
- [CMTremorResult](cmtremorresult.md): A result object that contains data about the presence and strength of tremors during a one-minute interval.
- [CMDyskineticSymptomResult](cmdyskineticsymptomresult.md): A result object that contains data about the likely presence of dyskinetic symptoms during a one-minute interval.
