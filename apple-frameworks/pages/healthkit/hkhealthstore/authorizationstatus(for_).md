> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/authorizationstatus(for:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/authorizationstatus(for:))

# authorizationStatus(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the app’s authorization status for sharing the specified data type.

## Declaration

```swift
func authorizationStatus(for type: HKObjectType) -> HKAuthorizationStatus
```

## Parameters

- `type`: The type of data. This can be any concrete subclass of the [HKObjectType](../hkobjecttype.md) class (any of the [HKCharacteristicType](../hkcharacteristictype.md) , [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md) or [HKCorrelationType](../hkcorrelationtype.md) classes).

<a id="return-value"></a>

## Return Value

A value indicating the app’s authorization status for this type. For a list of possible values, see [HKAuthorizationStatus](../hkauthorizationstatus.md).

## Mentioned In

- [Authorizing access to health data](../authorizing-access-to-health-data.md)

<a id="Discussion"></a>

## Discussion

This method checks the authorization status for saving data to the HealthKit store.

> **Important**

>  An app’s permissions don’t change when an app runs in a Guest User session. Therefore, [authorizationStatus(for:)](authorizationstatus%28for_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) if the owner previously granted authorization to write the data, even though the app can’t write it during a Guest User session. For more information, refer to [Authorizing access to health data](../authorizing-access-to-health-data.md).

To help prevent possible leaks of sensitive health information, your app cannot determine whether or not a user has granted permission to read data. If you are not given permission, it  simply appears as if there is no data of the requested type in the HealthKit store. If your app is given share permission but not read permission, you see only the data that your app has written to the store. Data from other sources remains hidden.

## See Also

### Accessing HealthKit

- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorization(toShare:read:completion:)](getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable()](ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords()](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorization(toShare:read:completion:)](requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestAuthorization(toShare:read:)](requestauthorization%28toshare_read_%29.md): Asynchronously requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorization(for:predicate:completion:)](requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtension(completion:)](handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDate(for:completion:)](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestAuthorizedSampleDate(for:)](earliestauthorizedsampledate%28for_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate()](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.

# authorizationStatusForType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the app’s authorization status for sharing the specified data type.

## Declaration

```objectivec
- (HKAuthorizationStatus) authorizationStatusForType:(HKObjectType *) type;
```

## Parameters

- `type`: The type of data. This can be any concrete subclass of the [HKObjectType](../hkobjecttype.md) class (any of the [HKCharacteristicType](../hkcharacteristictype.md) , [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md) or [HKCorrelationType](../hkcorrelationtype.md) classes).

<a id="return-value"></a>

## Return Value

A value indicating the app’s authorization status for this type. For a list of possible values, see [HKAuthorizationStatus](../hkauthorizationstatus.md).

## Mentioned In

- [Authorizing access to health data](../authorizing-access-to-health-data.md)

<a id="Discussion"></a>

## Discussion

This method checks the authorization status for saving data to the HealthKit store.

> **Important**

>  An app’s permissions don’t change when an app runs in a Guest User session. Therefore, [authorizationStatusForType:](authorizationstatus%28for_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) if the owner previously granted authorization to write the data, even though the app can’t write it during a Guest User session. For more information, refer to [Authorizing access to health data](../authorizing-access-to-health-data.md).

To help prevent possible leaks of sensitive health information, your app cannot determine whether or not a user has granted permission to read data. If you are not given permission, it  simply appears as if there is no data of the requested type in the HealthKit store. If your app is given share permission but not read permission, you see only the data that your app has written to the store. Data from other sources remains hidden.

## See Also

### Accessing HealthKit

- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorizationToShareTypes:readTypes:completion:](getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable](ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorizationToShareTypes:readTypes:completion:](requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorizationForType:predicate:completion:](requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtensionWithCompletion:](handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDateForTypes:completion:](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.
