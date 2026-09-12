> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkauthorizationstatus](https://developer.apple.com/documentation/healthkit/hkauthorizationstatus)

# HKAuthorizationStatus (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the authorization status for a particular data type.

## Declaration

```swift
enum HKAuthorizationStatus
```

<a id="overview"></a>

## Overview

This status indicates whether  the user has authorized your app to save data of the given type.

To help maintain the privacy of sensitive health data, HealthKit does not tell you when the user denies your app permission to query data. Instead, it simply appears as if HealthKit does not have any data matching your query. Your app will receive only the data that it has written to HealthKit. Data from other sources remains hidden from your app. For more information on privacy in HealthKit, see `HealthKit`.

## Topics

### Constants

- [HKAuthorizationStatus.notDetermined](hkauthorizationstatus/notdetermined.md): The user has not yet chosen to authorize access to the specified data type.
- [HKAuthorizationStatus.sharingDenied](hkauthorizationstatus/sharingdenied.md): The user has explicitly denied your app permission to save data of the specified type.
- [HKAuthorizationStatus.sharingAuthorized](hkauthorizationstatus/sharingauthorized.md): The user has explicitly authorized your app to save data of the specified type.

### Initializers

- [init(rawValue:)](hkauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing HealthKit

- [authorizationStatus(for:)](hkhealthstore/authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
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

# HKAuthorizationStatus (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the authorization status for a particular data type.

## Declaration

```objectivec
enum HKAuthorizationStatus : NSInteger;
```

<a id="overview"></a>

## Overview

This status indicates whether  the user has authorized your app to save data of the given type.

To help maintain the privacy of sensitive health data, HealthKit does not tell you when the user denies your app permission to query data. Instead, it simply appears as if HealthKit does not have any data matching your query. Your app will receive only the data that it has written to HealthKit. Data from other sources remains hidden from your app. For more information on privacy in HealthKit, see `HealthKit`.

## Topics

### Constants

- [HKAuthorizationStatusNotDetermined](hkauthorizationstatus/notdetermined.md): The user has not yet chosen to authorize access to the specified data type.
- [HKAuthorizationStatusSharingDenied](hkauthorizationstatus/sharingdenied.md): The user has explicitly denied your app permission to save data of the specified type.
- [HKAuthorizationStatusSharingAuthorized](hkauthorizationstatus/sharingauthorized.md): The user has explicitly authorized your app to save data of the specified type.

## See Also

### Accessing HealthKit

- [authorizationStatusForType:](hkhealthstore/authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
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
