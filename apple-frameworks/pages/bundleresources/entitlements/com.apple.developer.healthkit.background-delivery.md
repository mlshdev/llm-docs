> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.healthkit.background-delivery](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.healthkit.background-delivery)

# com.apple.developer.healthkit.background-delivery (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether observer queries receive updates while running in the background.

## Details

`com.apple.developer.healthkit.background-delivery`

<a id="Discussion"></a>

## Discussion

If this key is [true](https://developer.apple.com/documentation/swift/true), your app can enable background delivery of [HKObserverQuery](../../healthkit/hkobserverquery.md) instances by calling the HealthKit store’s [enableBackgroundDelivery(for:frequency:withCompletion:)](../../healthkit/hkhealthstore/enablebackgrounddelivery%28for_frequency_withcompletion_%29.md) method. By default, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Health

- [HealthKit Entitlement](com.apple.developer.healthkit.md): A Boolean value that indicates whether the app may request user authorization to access health and activity data that appears in the Health app.
- [HealthKit Capabilities Entitlement](com.apple.developer.healthkit.access.md): Health data types that require additional permission.
- [Fall Detection Notifications](com.apple.developer.health.fall-detection.md): An entitlement that permits an app to receive fall-detection notifications from Apple Watch.
- [com.apple.developer.healthkit.recalibrate-estimates](com.apple.developer.healthkit.recalibrate-estimates.md): A Boolean value that determines whether your app can recalibrate the prediction algorithm used to calculate supported sample types.

# com.apple.developer.healthkit.background-delivery (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether observer queries receive updates while running in the background.

## Details

`com.apple.developer.healthkit.background-delivery`

<a id="Discussion"></a>

## Discussion

If this key is [true](https://developer.apple.com/documentation/swift/true), your app can enable background delivery of [HKObserverQuery](../../healthkit/hkobserverquery.md) instances by calling the HealthKit store’s [enableBackgroundDeliveryForType:frequency:withCompletion:](../../healthkit/hkhealthstore/enablebackgrounddelivery%28for_frequency_withcompletion_%29.md) method. By default, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Health

- [HealthKit Entitlement](com.apple.developer.healthkit.md): A Boolean value that indicates whether the app may request user authorization to access health and activity data that appears in the Health app.
- [HealthKit Capabilities Entitlement](com.apple.developer.healthkit.access.md): Health data types that require additional permission.
- [Fall Detection Notifications](com.apple.developer.health.fall-detection.md): An entitlement that permits an app to receive fall-detection notifications from Apple Watch.
- [com.apple.developer.healthkit.recalibrate-estimates](com.apple.developer.healthkit.recalibrate-estimates.md): A Boolean value that determines whether your app can recalibrate the prediction algorithm used to calculate supported sample types.
