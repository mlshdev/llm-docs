> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore](https://developer.apple.com/documentation/healthkit/hkhealthstore)

# HKHealthStore (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The access point for all data managed by HealthKit.

## Declaration

```swift
class HKHealthStore
```

## Mentioned In

- [Executing Observer Queries](executing-observer-queries.md)
- [Reading data from HealthKit](reading-data-from-healthkit.md)

<a id="overview"></a>

## Overview

Use a [HKHealthStore](hkhealthstore.md) object to request permission to share or read HealthKit data. People can grant your app full access to a data type, limited access restricted to a recent window of data, or no access at all. After requesting authorization, you can check the scope of your read access for specific data types before making queries. You can also use the HealthKit store to save new samples to the store, manage the samples that your app saves, and start, stop, and manage queries.

For more information, see [Setting up HealthKit](setting-up-healthkit.md).

## Topics

### Accessing HealthKit

- [authorizationStatus(for:)](hkhealthstore/authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorization(toShare:read:completion:)](hkhealthstore/getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable()](hkhealthstore/ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords()](hkhealthstore/supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorization(toShare:read:completion:)](hkhealthstore/requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestAuthorization(toShare:read:)](hkhealthstore/requestauthorization%28toshare_read_%29.md): Asynchronously requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorization(for:predicate:completion:)](hkhealthstore/requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtension(completion:)](hkhealthstore/handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](hkhealthstore/authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDate(for:completion:)](hkhealthstore/getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestAuthorizedSampleDate(for:)](hkhealthstore/earliestauthorizedsampledate%28for_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate()](hkhealthstore/earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.

### Querying HealthKit data

- [execute(\_:)](hkhealthstore/execute%28__%29.md): Starts executing the provided query.
- [stop(\_:)](hkhealthstore/stop%28__%29.md): Stops a long-running query.

### Reading characteristic data

- [biologicalSex()](hkhealthstore/biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodType()](hkhealthstore/bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirth()](hkhealthstore/dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [dateOfBirthComponents()](hkhealthstore/dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [fitzpatrickSkinType()](hkhealthstore/fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
- [wheelchairUse()](hkhealthstore/wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.

### Working with HealthKit objects

- [delete(\_:withCompletion:)](hkhealthstore/delete%28__withcompletion_%29-78l1m.md): Deletes the specified object from the HealthKit store.
- [delete(\_:withCompletion:)](hkhealthstore/delete%28__withcompletion_%29-17hzm.md): Deletes the specified objects from the HealthKit store.
- [deleteObjects(of:predicate:withCompletion:)](hkhealthstore/deleteobjects%28of_predicate_withcompletion_%29.md): Deletes objects saved by this application that match the provided type and predicate.
- [save(\_:withCompletion:)](hkhealthstore/save%28__withcompletion_%29-6fmtg.md): Saves the provided object to the HealthKit store.
- [save(\_:withCompletion:)](hkhealthstore/save%28__withcompletion_%29-47iwb.md): Saves an array of objects to the HealthKit store.

### Accessing the preferred units

- [preferredUnits(for:completion:)](hkhealthstore/preferredunits%28for_completion_%29.md): Returns the user’s preferred units for the given quantity types.
- [preferredWorkoutZoneConfiguration(for:)](hkhealthstore/preferredworkoutzoneconfiguration%28for_%29.md): Returns a person’s preferred zone configuration for a quantity type.
- [HKUserPreferencesDidChange](../foundation/nsnotification/name-swift.struct/hkuserpreferencesdidchange.md): Notifies observers whenever the user changes his or her preferred units.

### Managing background delivery

- [enableBackgroundDelivery(for:frequency:withCompletion:)](hkhealthstore/enablebackgrounddelivery%28for_frequency_withcompletion_%29.md): Enables the delivery of updates to an app running in the background.
- [com.apple.developer.healthkit.background-delivery](../bundleresources/entitlements/com.apple.developer.healthkit.background-delivery.md): A Boolean value that indicates whether observer queries receive updates while running in the background.
- [HKUpdateFrequency](hkupdatefrequency.md): Constants that determine how often the system launches your app in response to changes to HealthKit data.
- [disableBackgroundDelivery(for:withCompletion:)](hkhealthstore/disablebackgrounddelivery%28for_withcompletion_%29.md): Disables background deliveries of update notifications for the specified data type.
- [disableAllBackgroundDelivery(completion:)](hkhealthstore/disableallbackgrounddelivery%28completion_%29.md): Disables all background deliveries of update notifications.

### Managing workouts

- [splitTotalEnergy(\_:start:end:resultsHandler:)](hkhealthstore/splittotalenergy%28__start_end_resultshandler_%29.md): Deprecated. Calculates the active and resting energy burned based on the total energy burned over the given duration.
- [recoverActiveWorkoutSession(completion:)](hkhealthstore/recoveractiveworkoutsession%28completion_%29.md): Recovers an active workout session.

### Managing workout sessions

- [workoutSessionMirroringStartHandler](hkhealthstore/workoutsessionmirroringstarthandler.md): A block that the system calls when it starts a mirrored workout session.
- [startWatchApp(with:completion:)](hkhealthstore/startwatchapp%28with_completion_%29.md): Launches or wakes the companion watchOS app to create a new workout session.
- [pause(\_:)](hkhealthstore/pause%28__%29.md): Deprecated. Pauses the provided workout session.
- [resumeWorkoutSession(\_:)](hkhealthstore/resumeworkoutsession%28__%29.md): Deprecated. Resumes the provided workout session.

### Managing estimates

- [recalibrateEstimates(sampleType:date:completion:)](hkhealthstore/recalibrateestimates%28sampletype_date_completion_%29.md): Recalibrates the prediction algorithm used to calculate the specified sample type.

### Accessing the move mode

- [activityMoveMode()](hkhealthstore/activitymovemode%28%29.md): Returns the activity move mode for the current user.
- [HKUserPreferencesDidChange](../foundation/nsnotification/name-swift.struct/hkuserpreferencesdidchange.md): Notifies observers whenever the user changes his or her preferred units.

### Deprecated symbols

- [add(\_:to:completion:)](hkhealthstore/add%28__to_completion_%29.md): Deprecated. Associates the provided samples with the specified workout.
- [start(\_:)](hkhealthstore/start%28__%29.md): Deprecated. Starts a workout session for the current app.
- [end(\_:)](hkhealthstore/end%28__%29.md): Deprecated. Ends a workout session for the current app.

### Structures

- [HKHealthStore.HKUserPreferencesDidChangeMessage](hkhealthstore/hkuserpreferencesdidchangemessage.md)

### Instance Methods

- [relateWorkoutEffortSample(\_:with:activity:completion:)](hkhealthstore/relateworkouteffortsample%28__with_activity_completion_%29.md)
- [unrelateWorkoutEffortSample(\_:from:activity:completion:)](hkhealthstore/unrelateworkouteffortsample%28__from_activity_completion_%29.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Health data

- [Saving data to HealthKit](saving-data-to-healthkit.md): Create and share HealthKit samples.
- [Reading data from HealthKit](reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.
- [Creating a Mobility Health App](creating-a-mobility-health-app.md): Create a health app that allows a clinical care team to send and receive mobility data.
- [Data types](data-types.md): Specify the kind of data used in HealthKit.
- [Samples](samples.md): Create and save health and fitness samples.
- [Queries](queries.md): Query health and fitness data.
- [Visualizing HealthKit State of Mind in visionOS](visualizing-healthkit-state-of-mind-in-visionos.md): Incorporate HealthKit State of Mind into your app and visualize the data in visionOS.
- [Logging symptoms associated with a medication](logging-symptoms-associated-with-a-medication.md): Fetch medications and dose events from the HealthKit store, and create symptom samples to associate with them.

# HKHealthStore (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The access point for all data managed by HealthKit.

## Declaration

```objectivec
@interface HKHealthStore : NSObject
```

## Mentioned In

- [Executing Observer Queries](executing-observer-queries.md)
- [Reading data from HealthKit](reading-data-from-healthkit.md)

<a id="overview"></a>

## Overview

Use a [HKHealthStore](hkhealthstore.md) object to request permission to share or read HealthKit data. People can grant your app full access to a data type, limited access restricted to a recent window of data, or no access at all. After requesting authorization, you can check the scope of your read access for specific data types before making queries. You can also use the HealthKit store to save new samples to the store, manage the samples that your app saves, and start, stop, and manage queries.

For more information, see [Setting up HealthKit](setting-up-healthkit.md).

## Topics

### Accessing HealthKit

- [authorizationStatusForType:](hkhealthstore/authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorizationToShareTypes:readTypes:completion:](hkhealthstore/getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable](hkhealthstore/ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords](hkhealthstore/supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorizationToShareTypes:readTypes:completion:](hkhealthstore/requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorizationForType:predicate:completion:](hkhealthstore/requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtensionWithCompletion:](hkhealthstore/handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](hkhealthstore/authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDateForTypes:completion:](hkhealthstore/getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate](hkhealthstore/earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.

### Querying HealthKit data

- [executeQuery:](hkhealthstore/execute%28__%29.md): Starts executing the provided query.
- [stopQuery:](hkhealthstore/stop%28__%29.md): Stops a long-running query.

### Reading characteristic data

- [biologicalSexWithError:](hkhealthstore/biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodTypeWithError:](hkhealthstore/bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirthWithError:](hkhealthstore/dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [dateOfBirthComponentsWithError:](hkhealthstore/dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [fitzpatrickSkinTypeWithError:](hkhealthstore/fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
- [wheelchairUseWithError:](hkhealthstore/wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.

### Working with HealthKit objects

- [deleteObject:withCompletion:](hkhealthstore/delete%28__withcompletion_%29-78l1m.md): Deletes the specified object from the HealthKit store.
- [deleteObjects:withCompletion:](hkhealthstore/delete%28__withcompletion_%29-17hzm.md): Deletes the specified objects from the HealthKit store.
- [deleteObjectsOfType:predicate:withCompletion:](hkhealthstore/deleteobjects%28of_predicate_withcompletion_%29.md): Deletes objects saved by this application that match the provided type and predicate.
- [saveObject:withCompletion:](hkhealthstore/save%28__withcompletion_%29-6fmtg.md): Saves the provided object to the HealthKit store.
- [saveObjects:withCompletion:](hkhealthstore/save%28__withcompletion_%29-47iwb.md): Saves an array of objects to the HealthKit store.

### Accessing the preferred units

- [preferredUnitsForQuantityTypes:completion:](hkhealthstore/preferredunits%28for_completion_%29.md): Returns the user’s preferred units for the given quantity types.
- [HKUserPreferencesDidChangeNotification](hkuserpreferencesdidchangenotification.md): Notifies observers whenever the user changes his or her preferred units.

### Managing background delivery

- [enableBackgroundDeliveryForType:frequency:withCompletion:](hkhealthstore/enablebackgrounddelivery%28for_frequency_withcompletion_%29.md): Enables the delivery of updates to an app running in the background.
- [com.apple.developer.healthkit.background-delivery](../bundleresources/entitlements/com.apple.developer.healthkit.background-delivery.md): A Boolean value that indicates whether observer queries receive updates while running in the background.
- [HKUpdateFrequency](hkupdatefrequency.md): Constants that determine how often the system launches your app in response to changes to HealthKit data.
- [disableBackgroundDeliveryForType:withCompletion:](hkhealthstore/disablebackgrounddelivery%28for_withcompletion_%29.md): Disables background deliveries of update notifications for the specified data type.
- [disableAllBackgroundDeliveryWithCompletion:](hkhealthstore/disableallbackgrounddelivery%28completion_%29.md): Disables all background deliveries of update notifications.

### Managing workouts

- [splitTotalEnergy:startDate:endDate:resultsHandler:](hkhealthstore/splittotalenergy%28__start_end_resultshandler_%29.md): Deprecated. Calculates the active and resting energy burned based on the total energy burned over the given duration.
- [recoverActiveWorkoutSessionWithCompletion:](hkhealthstore/recoveractiveworkoutsession%28completion_%29.md): Recovers an active workout session.

### Managing workout sessions

- [workoutSessionMirroringStartHandler](hkhealthstore/workoutsessionmirroringstarthandler.md): A block that the system calls when it starts a mirrored workout session.
- [startWatchAppWithWorkoutConfiguration:completion:](hkhealthstore/startwatchapp%28with_completion_%29.md): Launches or wakes the companion watchOS app to create a new workout session.
- [pauseWorkoutSession:](hkhealthstore/pause%28__%29.md): Deprecated. Pauses the provided workout session.
- [resumeWorkoutSession:](hkhealthstore/resumeworkoutsession%28__%29.md): Deprecated. Resumes the provided workout session.

### Managing estimates

- [recalibrateEstimatesForSampleType:atDate:completion:](hkhealthstore/recalibrateestimates%28sampletype_date_completion_%29.md): Recalibrates the prediction algorithm used to calculate the specified sample type.

### Accessing the move mode

- [activityMoveModeWithError:](hkhealthstore/activitymovemode%28%29.md): Returns the activity move mode for the current user.
- [HKUserPreferencesDidChangeNotification](hkuserpreferencesdidchangenotification.md): Notifies observers whenever the user changes his or her preferred units.

### Deprecated symbols

- [addSamples:toWorkout:completion:](hkhealthstore/add%28__to_completion_%29.md): Deprecated. Associates the provided samples with the specified workout.
- [startWorkoutSession:](hkhealthstore/start%28__%29.md): Deprecated. Starts a workout session for the current app.
- [endWorkoutSession:](hkhealthstore/end%28__%29.md): Deprecated. Ends a workout session for the current app.

### Instance Methods

- [relateWorkoutEffortSample:withWorkout:activity:completion:](hkhealthstore/relateworkouteffortsample%28__with_activity_completion_%29.md)
- [unrelateWorkoutEffortSample:fromWorkout:activity:completion:](hkhealthstore/unrelateworkouteffortsample%28__from_activity_completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Health data

- [Saving data to HealthKit](saving-data-to-healthkit.md): Create and share HealthKit samples.
- [Reading data from HealthKit](reading-data-from-healthkit.md): Use queries to request sample data from HealthKit.
- [Data types](data-types.md): Specify the kind of data used in HealthKit.
- [Samples](samples.md): Create and save health and fitness samples.
- [Queries](queries.md): Query health and fitness data.
- [Visualizing HealthKit State of Mind in visionOS](visualizing-healthkit-state-of-mind-in-visionos.md): Incorporate HealthKit State of Mind into your app and visualize the data in visionOS.
- [Logging symptoms associated with a medication](logging-symptoms-associated-with-a-medication.md): Fetch medications and dose events from the HealthKit store, and create symptom samples to associate with them.
