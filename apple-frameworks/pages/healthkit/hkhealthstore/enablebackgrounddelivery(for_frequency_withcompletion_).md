> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/enablebackgrounddelivery(for:frequency:withcompletion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/enablebackgrounddelivery(for:frequency:withcompletion:))

# enableBackgroundDelivery(for:frequency:withCompletion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS · watchOS 8.0+

Enables the delivery of updates to an app running in the background.

## Declaration

```swift
func enableBackgroundDelivery(for type: HKObjectType, frequency: HKUpdateFrequency, withCompletion completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func enableBackgroundDelivery(for type: HKObjectType, frequency: HKUpdateFrequency) async throws
```

## Parameters

- `type`: The type of data to observe. This object can be a [HKCharacteristicType](../hkcharacteristictype.md) , [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), or [HKWorkoutType](../hkworkouttype.md). [HKCorrelationType](../hkcorrelationtype.md) is not a supported type for background delivery.
- `frequency`: The maximum frequency of the updates. The system wakes your app from the background at most once per time period specified. For a complete list of valid frequencies, see [HKUpdateFrequency](../hkupdatefrequency.md).
- `completion`: A block that this method calls as soon as it enables background delivery. It passes the following parameters:

  - **`success`**: A Boolean value. This parameter contains [true](https://developer.apple.com/documentation/swift/true) if the system successfully enabled background delivery; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **`error`**: An error object. If an error occurred, this object contains information about the error; otherwise, it is `nil`.

## Mentioned In

- [Executing Observer Queries](../executing-observer-queries.md)

<a id="Discussion"></a>

## Discussion

Call this method to register your app for background updates.

> **Important**

>  For iOS 15 and watchOS 8 and later, you must enable the HealthKit Background Delivery by adding the [com.apple.developer.healthkit.background-delivery](../../bundleresources/entitlements/com.apple.developer.healthkit.background-delivery.md) entitlement to your app. If your app doesn’t have this entitlement, the [enableBackgroundDelivery(for:frequency:withCompletion:)](enablebackgrounddelivery%28for_frequency_withcompletion_%29.md) method fails with an [HKError.Code.errorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error.

HealthKit wakes your app whenever a process saves or deletes samples of the specified type. The system wakes your app at most once per time period defined by the specified frequency. Some sample types have a maximum frequency of [HKUpdateFrequency.hourly](../hkupdatefrequency/hourly.md). The system enforces this frequency  transparently.

For example, on iOS, [stepCount](../hkquantitytypeidentifier/stepcount.md) samples have an hourly maximum frequency.

In watchOS, most data types have an hourly maximum frequency; however, the following data types can receive updates at [HKUpdateFrequency.immediate](../hkupdatefrequency/immediate.md):

- [highHeartRateEvent](../hkcategorytypeidentifier/highheartrateevent.md)
- [lowHeartRateEvent](../hkcategorytypeidentifier/lowheartrateevent.md)
- [irregularHeartRhythmEvent](../hkcategorytypeidentifier/irregularheartrhythmevent.md)
- [environmentalAudioExposureEvent](../hkcategorytypeidentifier/environmentalaudioexposureevent.md)
- [headphoneAudioExposureEvent](../hkcategorytypeidentifier/headphoneaudioexposureevent.md)
- [lowCardioFitnessEvent](../hkcategorytypeidentifier/lowcardiofitnessevent.md)
- [numberOfTimesFallen](../hkquantitytypeidentifier/numberoftimesfallen.md)
- [vo2Max](../hkquantitytypeidentifier/vo2max.md)
- [handwashingEvent](../hkcategorytypeidentifier/handwashingevent.md)
- [toothbrushingEvent](../hkcategorytypeidentifier/toothbrushingevent.md)

Also, in watchOS, the background updates share a budget with [WKApplicationRefreshBackgroundTask](https://developer.apple.com/documentation/watchkit/wkapplicationrefreshbackgroundtask) tasks. Your app can receive four updates (or background app refresh tasks) an hour, as long as it has a complication on the active watch face.

> **Important**

>  Background server queries aren’t supported on the Simulator. Be sure to test your background queries on a device.

<a id="Receive-Background-Updates"></a>

### Receive Background Updates

As soon as your app launches, HealthKit calls the update handler for any observer queries that match the newly saved data. If you plan on supporting background delivery, set up all your observer queries in your app delegate’s [application(\_:didFinishLaunchingWithOptions:)](../../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method. By setting up the queries in [application(\_:didFinishLaunchingWithOptions:)](../../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md), you ensure that you’ve instantiated your queries, and they’re ready to use before HealthKit delivers the updates.

After your observer queries have finished processing the new data, you must call the update’s completion handler. This lets HealthKit know that your app successfully received the background delivery. If you don’t call the update’s completion handler, HealthKit continues to attempt to launch your app using a backoff algorithm to increase the delay between attempts. If your app fails to respond three times, HealthKit assumes your app can’t receive data and stops sending background updates.

For more information on the background delivery completion handler, see [HKObserverQueryCompletionHandler](../hkobserverquerycompletionhandler.md).

## See Also

### Related Documentation

- [HKObserverQuery](../hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.

### Managing background delivery

- [com.apple.developer.healthkit.background-delivery](../../bundleresources/entitlements/com.apple.developer.healthkit.background-delivery.md): A Boolean value that indicates whether observer queries receive updates while running in the background.
- [HKUpdateFrequency](../hkupdatefrequency.md): Constants that determine how often the system launches your app in response to changes to HealthKit data.
- [disableBackgroundDelivery(for:withCompletion:)](disablebackgrounddelivery%28for_withcompletion_%29.md): Disables background deliveries of update notifications for the specified data type.
- [disableAllBackgroundDelivery(completion:)](disableallbackgrounddelivery%28completion_%29.md): Disables all background deliveries of update notifications.

# enableBackgroundDeliveryForType:frequency:withCompletion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS · watchOS 8.0+

Enables the delivery of updates to an app running in the background.

## Declaration

```objectivec
- (void) enableBackgroundDeliveryForType:(HKObjectType *) type frequency:(HKUpdateFrequency) frequency withCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `type`: The type of data to observe. This object can be a [HKCharacteristicType](../hkcharacteristictype.md) , [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), or [HKWorkoutType](../hkworkouttype.md). [HKCorrelationType](../hkcorrelationtype.md) is not a supported type for background delivery.
- `frequency`: The maximum frequency of the updates. The system wakes your app from the background at most once per time period specified. For a complete list of valid frequencies, see [HKUpdateFrequency](../hkupdatefrequency.md).
- `completion`: A block that this method calls as soon as it enables background delivery. It passes the following parameters:

  - **`success`**: A Boolean value. This parameter contains [true](https://developer.apple.com/documentation/swift/true) if the system successfully enabled background delivery; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **`error`**: An error object. If an error occurred, this object contains information about the error; otherwise, it is `nil`.

## Mentioned In

- [Executing Observer Queries](../executing-observer-queries.md)

<a id="Discussion"></a>

## Discussion

Call this method to register your app for background updates.

> **Important**

>  For iOS 15 and watchOS 8 and later, you must enable the HealthKit Background Delivery by adding the [com.apple.developer.healthkit.background-delivery](../../bundleresources/entitlements/com.apple.developer.healthkit.background-delivery.md) entitlement to your app. If your app doesn’t have this entitlement, the [enableBackgroundDeliveryForType:frequency:withCompletion:](enablebackgrounddelivery%28for_frequency_withcompletion_%29.md) method fails with an [HKErrorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error.

HealthKit wakes your app whenever a process saves or deletes samples of the specified type. The system wakes your app at most once per time period defined by the specified frequency. Some sample types have a maximum frequency of [HKUpdateFrequencyHourly](../hkupdatefrequency/hourly.md). The system enforces this frequency  transparently.

For example, on iOS, [HKQuantityTypeIdentifierStepCount](../hkquantitytypeidentifier/stepcount.md) samples have an hourly maximum frequency.

In watchOS, most data types have an hourly maximum frequency; however, the following data types can receive updates at [HKUpdateFrequencyImmediate](../hkupdatefrequency/immediate.md):

- [HKCategoryTypeIdentifierHighHeartRateEvent](../hkcategorytypeidentifier/highheartrateevent.md)
- [HKCategoryTypeIdentifierLowHeartRateEvent](../hkcategorytypeidentifier/lowheartrateevent.md)
- [HKCategoryTypeIdentifierIrregularHeartRhythmEvent](../hkcategorytypeidentifier/irregularheartrhythmevent.md)
- [HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent](../hkcategorytypeidentifier/environmentalaudioexposureevent.md)
- [HKCategoryTypeIdentifierHeadphoneAudioExposureEvent](../hkcategorytypeidentifier/headphoneaudioexposureevent.md)
- [HKCategoryTypeIdentifierLowCardioFitnessEvent](../hkcategorytypeidentifier/lowcardiofitnessevent.md)
- [HKQuantityTypeIdentifierNumberOfTimesFallen](../hkquantitytypeidentifier/numberoftimesfallen.md)
- [HKQuantityTypeIdentifierVO2Max](../hkquantitytypeidentifier/vo2max.md)
- [HKCategoryTypeIdentifierHandwashingEvent](../hkcategorytypeidentifier/handwashingevent.md)
- [HKCategoryTypeIdentifierToothbrushingEvent](../hkcategorytypeidentifier/toothbrushingevent.md)

Also, in watchOS, the background updates share a budget with [WKApplicationRefreshBackgroundTask](https://developer.apple.com/documentation/watchkit/wkapplicationrefreshbackgroundtask) tasks. Your app can receive four updates (or background app refresh tasks) an hour, as long as it has a complication on the active watch face.

> **Important**

>  Background server queries aren’t supported on the Simulator. Be sure to test your background queries on a device.

<a id="Receive-Background-Updates"></a>

### Receive Background Updates

As soon as your app launches, HealthKit calls the update handler for any observer queries that match the newly saved data. If you plan on supporting background delivery, set up all your observer queries in your app delegate’s [application:didFinishLaunchingWithOptions:](../../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method. By setting up the queries in [application:didFinishLaunchingWithOptions:](../../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md), you ensure that you’ve instantiated your queries, and they’re ready to use before HealthKit delivers the updates.

After your observer queries have finished processing the new data, you must call the update’s completion handler. This lets HealthKit know that your app successfully received the background delivery. If you don’t call the update’s completion handler, HealthKit continues to attempt to launch your app using a backoff algorithm to increase the delay between attempts. If your app fails to respond three times, HealthKit assumes your app can’t receive data and stops sending background updates.

For more information on the background delivery completion handler, see [HKObserverQueryCompletionHandler](../hkobserverquerycompletionhandler.md).

## See Also

### Related Documentation

- [HKObserverQuery](../hkobserverquery.md): A long-running query that monitors the HealthKit store and updates your app when the HealthKit store saves or deletes a matching sample.

### Managing background delivery

- [com.apple.developer.healthkit.background-delivery](../../bundleresources/entitlements/com.apple.developer.healthkit.background-delivery.md): A Boolean value that indicates whether observer queries receive updates while running in the background.
- [HKUpdateFrequency](../hkupdatefrequency.md): Constants that determine how often the system launches your app in response to changes to HealthKit data.
- [disableBackgroundDeliveryForType:withCompletion:](disablebackgrounddelivery%28for_withcompletion_%29.md): Disables background deliveries of update notifications for the specified data type.
- [disableAllBackgroundDeliveryWithCompletion:](disableallbackgrounddelivery%28completion_%29.md): Disables all background deliveries of update notifications.
