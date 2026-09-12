> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/ishealthdataavailable()](https://developer.apple.com/documentation/healthkit/hkhealthstore/ishealthdataavailable())

# isHealthDataAvailable() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether HealthKit is available on this device.

## Declaration

```swift
class func isHealthDataAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if HealthKit is available; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [About the HealthKit framework](../about-the-healthkit-framework.md)
- [Authorizing access to health data](../authorizing-access-to-health-data.md)

<a id="Discussion"></a>

## Discussion

By default, HealthKit data is available on iOS, watchOS, and visionOS. HealthKit data is also available to iPads running iPadOS 17 or later, and to iOS apps running on Vision Pro. Devices running in an enterprise environment may restrict access to HealthKit data.

The HealthKit framework is available on devices running iPadOS 16 and earlier and macOS 13 and later, but your app can’t read or write HealthKit data. Calls to [isHealthDataAvailable()](ishealthdataavailable%28%29.md) return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing HealthKit

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorization(toShare:read:completion:)](getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [supportsHealthRecords()](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorization(toShare:read:completion:)](requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestAuthorization(toShare:read:)](requestauthorization%28toshare_read_%29.md): Asynchronously requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorization(for:predicate:completion:)](requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtension(completion:)](handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDate(for:completion:)](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestAuthorizedSampleDate(for:)](earliestauthorizedsampledate%28for_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate()](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.

# isHealthDataAvailable (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether HealthKit is available on this device.

## Declaration

```objectivec
+ (BOOL) isHealthDataAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if HealthKit is available; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [About the HealthKit framework](../about-the-healthkit-framework.md)
- [Authorizing access to health data](../authorizing-access-to-health-data.md)

<a id="Discussion"></a>

## Discussion

By default, HealthKit data is available on iOS, watchOS, and visionOS. HealthKit data is also available to iPads running iPadOS 17 or later, and to iOS apps running on Vision Pro. Devices running in an enterprise environment may restrict access to HealthKit data.

The HealthKit framework is available on devices running iPadOS 16 and earlier and macOS 13 and later, but your app can’t read or write HealthKit data. Calls to [isHealthDataAvailable](ishealthdataavailable%28%29.md) return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing HealthKit

- [authorizationStatusForType:](authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorizationToShareTypes:readTypes:completion:](getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [supportsHealthRecords](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorizationToShareTypes:readTypes:completion:](requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorizationForType:predicate:completion:](requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtensionWithCompletion:](handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDateForTypes:completion:](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.
