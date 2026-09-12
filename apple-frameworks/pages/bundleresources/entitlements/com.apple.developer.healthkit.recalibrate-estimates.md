> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.healthkit.recalibrate-estimates](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.healthkit.recalibrate-estimates)

# com.apple.developer.healthkit.recalibrate-estimates (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.0+ · iPadOS 15.0+

A Boolean value that determines whether your app can recalibrate the prediction algorithm used to calculate supported sample types.

## Details

`com.apple.developer.healthkit.recalibrate-estimates`

<a id="Discussion"></a>

## Discussion

Apps can recalibrate HealthKitʼs prediction algorithms after an event that may significantly affect their results. For example, you can recalibrate the [sixMinuteWalkTestDistance](../../healthkit/hkquantitytypeidentifier/sixminutewalktestdistance.md) type to use only data collected after a mobility-impacting health event, such as surgery or an injury.

To check whether a sample type supports recalibration, see [allowsRecalibrationForEstimates](../../healthkit/hksampletype/allowsrecalibrationforestimates.md). To recalibrate the sample, see [recalibrateEstimates(sampleType:date:completion:)](../../healthkit/hkhealthstore/recalibrateestimates%28sampletype_date_completion_%29.md).

## See Also

### Health

- [HealthKit Entitlement](com.apple.developer.healthkit.md): A Boolean value that indicates whether the app may request user authorization to access health and activity data that appears in the Health app.
- [HealthKit Capabilities Entitlement](com.apple.developer.healthkit.access.md): Health data types that require additional permission.
- [com.apple.developer.healthkit.background-delivery](com.apple.developer.healthkit.background-delivery.md): A Boolean value that indicates whether observer queries receive updates while running in the background.
- [Fall Detection Notifications](com.apple.developer.health.fall-detection.md): An entitlement that permits an app to receive fall-detection notifications from Apple Watch.

# com.apple.developer.healthkit.recalibrate-estimates (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.0+ · iPadOS 15.0+

A Boolean value that determines whether your app can recalibrate the prediction algorithm used to calculate supported sample types.

## Details

`com.apple.developer.healthkit.recalibrate-estimates`

<a id="Discussion"></a>

## Discussion

Apps can recalibrate HealthKitʼs prediction algorithms after an event that may significantly affect their results. For example, you can recalibrate the [HKQuantityTypeIdentifierSixMinuteWalkTestDistance](../../healthkit/hkquantitytypeidentifier/sixminutewalktestdistance.md) type to use only data collected after a mobility-impacting health event, such as surgery or an injury.

To check whether a sample type supports recalibration, see [allowsRecalibrationForEstimates](../../healthkit/hksampletype/allowsrecalibrationforestimates.md). To recalibrate the sample, see [recalibrateEstimatesForSampleType:atDate:completion:](../../healthkit/hkhealthstore/recalibrateestimates%28sampletype_date_completion_%29.md).

## See Also

### Health

- [HealthKit Entitlement](com.apple.developer.healthkit.md): A Boolean value that indicates whether the app may request user authorization to access health and activity data that appears in the Health app.
- [HealthKit Capabilities Entitlement](com.apple.developer.healthkit.access.md): Health data types that require additional permission.
- [com.apple.developer.healthkit.background-delivery](com.apple.developer.healthkit.background-delivery.md): A Boolean value that indicates whether observer queries receive updates while running in the background.
- [Fall Detection Notifications](com.apple.developer.health.fall-detection.md): An entitlement that permits an app to receive fall-detection notifications from Apple Watch.
