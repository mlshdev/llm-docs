> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/getrequeststatusforauthorization(toshare:read:completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/getrequeststatusforauthorization(toshare:read:completion:))

# getRequestStatusForAuthorization(toShare:read:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.

## Declaration

```swift
func getRequestStatusForAuthorization(toShare typesToShare: Set<HKSampleType>, read typesToRead: Set<HKObjectType>, completion: @escaping @Sendable (HKAuthorizationRequestStatus, (any Error)?) -> Void)
```

```swift
func statusForAuthorizationRequest(toShare typesToShare: Set<HKSampleType>, read typesToRead: Set<HKObjectType>) async throws -> HKAuthorizationRequestStatus
```

<a id="Discussion"></a>

## Discussion

When working with clinical types, users may need to reauthorize access when new data is added.

## See Also

### Accessing HealthKit

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
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

# getRequestStatusForAuthorizationToShareTypes:readTypes:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.

## Declaration

```objectivec
- (void) getRequestStatusForAuthorizationToShareTypes:(NSSet<HKSampleType *> *) typesToShare readTypes:(NSSet<HKObjectType *> *) typesToRead completion:(void (^)(HKAuthorizationRequestStatus requestStatus, NSError *error)) completion;
```

<a id="Discussion"></a>

## Discussion

When working with clinical types, users may need to reauthorize access when new data is added.

## See Also

### Accessing HealthKit

- [authorizationStatusForType:](authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable](ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorizationToShareTypes:readTypes:completion:](requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorizationForType:predicate:completion:](requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtensionWithCompletion:](handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDateForTypes:completion:](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.
