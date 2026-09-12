> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkauthorizationrequeststatus](https://developer.apple.com/documentation/healthkit/hkauthorizationrequeststatus)

# HKAuthorizationRequestStatus (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Values that indicate whether your app needs to request authorization from the user.

## Declaration

```swift
enum HKAuthorizationRequestStatus
```

## Topics

### Statuses

- [HKAuthorizationRequestStatus.unknown](hkauthorizationrequeststatus/unknown.md): The authorization request status could not be determined because an error occurred.
- [HKAuthorizationRequestStatus.shouldRequest](hkauthorizationrequeststatus/shouldrequest.md): The application has not yet requested authorization for all the specified data types.
- [HKAuthorizationRequestStatus.unnecessary](hkauthorizationrequeststatus/unnecessary.md): The application has already requested authorization for all the specified data types.

### Initializers

- [init(rawValue:)](hkauthorizationrequeststatus/init%28rawvalue_%29.md)

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
- [HKAuthorizationStatus](hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorization(toShare:read:completion:)](hkhealthstore/getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
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

# HKAuthorizationRequestStatus (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Values that indicate whether your app needs to request authorization from the user.

## Declaration

```objectivec
enum HKAuthorizationRequestStatus : NSInteger;
```

## Topics

### Statuses

- [HKAuthorizationRequestStatusUnknown](hkauthorizationrequeststatus/unknown.md): The authorization request status could not be determined because an error occurred.
- [HKAuthorizationRequestStatusShouldRequest](hkauthorizationrequeststatus/shouldrequest.md): The application has not yet requested authorization for all the specified data types.
- [HKAuthorizationRequestStatusUnnecessary](hkauthorizationrequeststatus/unnecessary.md): The application has already requested authorization for all the specified data types.

## See Also

### Accessing HealthKit

- [authorizationStatusForType:](hkhealthstore/authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorizationToShareTypes:readTypes:completion:](hkhealthstore/getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [isHealthDataAvailable](hkhealthstore/ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords](hkhealthstore/supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorizationToShareTypes:readTypes:completion:](hkhealthstore/requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorizationForType:predicate:completion:](hkhealthstore/requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtensionWithCompletion:](hkhealthstore/handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](hkhealthstore/authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDateForTypes:completion:](hkhealthstore/getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate](hkhealthstore/earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.
