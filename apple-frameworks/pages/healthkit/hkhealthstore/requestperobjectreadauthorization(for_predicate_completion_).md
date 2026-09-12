> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/requestperobjectreadauthorization(for:predicate:completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/requestperobjectreadauthorization(for:predicate:completion:))

# requestPerObjectReadAuthorization(for:predicate:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).

## Declaration

```swift
func requestPerObjectReadAuthorization(for objectType: HKObjectType, predicate: NSPredicate?, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func requestPerObjectReadAuthorization(for objectType: HKObjectType, predicate: NSPredicate?) async throws
```

## Parameters

- `objectType`: The data type you want to read.
- `predicate`: A predicate that further restricts the data type.
- `completion`: A completion handler that the system calls after the user responds to the request. The completion handler has the following parameters:

  - **success**: A Boolean value that indicates whether the request succeeded. This value doesn’t indicate whether the user actually granted permission. The parameter is [false](https://developer.apple.com/documentation/swift/false) if an error occurred while processing the request; otherwise, it’s [true](https://developer.apple.com/documentation/swift/true).
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, the system passes `nil`.

<a id="Discussion"></a>

## Discussion

Some samples require per-object authorization. For these samples, people can select which ones your app can read on a sample-by-sample basis. By default, your app can read any of the per-object authorization samples that it has saved to the HealthKit store; however, you may not always have access to those samples. People can update the authorization status for any of these samples at any time.

Your app can begin by querying for any samples that it already has permission to read.

```swift
// Read the newest prescription from the HealthKit store.
let queryDescriptor = HKSampleQueryDescriptor(predicates: [.visionPrescription()],
  sortDescriptors: [SortDescriptor(\.startDate, order: .reverse)],
  limit: 1)

let prescription: HKVisionPrescription

do {
guard let result = try await queryDescriptor.result(for: store).first else {
print("*** No prescription found. ***")
return
}

prescription = result
} catch {
// Handle the error here.
fatalError("*** An error occurred while reading the most recent vision prescriptions: \(error.localizedDescription) ***")
}
```

Based on the results, you can then decide whether you need to request authorization for additional samples. Call [requestPerObjectReadAuthorization(for:predicate:completion:)](requestperobjectreadauthorization%28for_predicate_completion_%29.md) to prompt someone to modify the samples your app has access to read.

```swift
// Request authorization to read vision prescriptions.
do {
try await store.requestPerObjectReadAuthorization(for: .visionPrescriptionType(),
  predicate: nil)
} catch HKError.errorUserCanceled {
// Handle the user canceling the authorization request.
print("*** The user canceled the authorization request. ***")
return
} catch {
// Handle the error here.
fatalError("*** An error occurred while requesting permission to read vision prescriptions: \(error.localizedDescription) ***")
}
```

> **Important**

>  Using the [requestAuthorization(toShare:read:)](requestauthorization%28toshare_read_%29.md) method to request read access to any data types that require per-object authorization fails with an [HKError.Code.errorInvalidArgument](../hkerror/code/errorinvalidargument.md) error.

When your app calls this method, HealthKit displays an authorization sheet that asks for permission to read the samples that match the predicate and object type. The person using your app can then select individual samples to share with your app. The system always asks for permission, regardless of whether they previously granted it.

![A screenshot of the authorization sheet, showing two vision prescriptions. People can individually enable each of the prescriptions.](https://developer.apple.com/images/com.apple.healthkit/media-4092700@2x.png)

After the person responds, the system calls the callback handler on an arbitrary background queue.

## See Also

### Accessing HealthKit

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorization(toShare:read:completion:)](getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable()](ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords()](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorization(toShare:read:completion:)](requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestAuthorization(toShare:read:)](requestauthorization%28toshare_read_%29.md): Asynchronously requests permission to save and read the specified data types.
- [handleAuthorizationForExtension(completion:)](handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDate(for:completion:)](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestAuthorizedSampleDate(for:)](earliestauthorizedsampledate%28for_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate()](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.

# requestPerObjectReadAuthorizationForType:predicate:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).

## Declaration

```objectivec
- (void) requestPerObjectReadAuthorizationForType:(HKObjectType *) objectType predicate:(NSPredicate *) predicate completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `objectType`: The data type you want to read.
- `predicate`: A predicate that further restricts the data type.
- `completion`: A completion handler that the system calls after the user responds to the request. The completion handler has the following parameters:

  - **success**: A Boolean value that indicates whether the request succeeded. This value doesn’t indicate whether the user actually granted permission. The parameter is [false](https://developer.apple.com/documentation/swift/false) if an error occurred while processing the request; otherwise, it’s [true](https://developer.apple.com/documentation/swift/true).
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, the system passes `nil`.

<a id="Discussion"></a>

## Discussion

Some samples require per-object authorization. For these samples, people can select which ones your app can read on a sample-by-sample basis. By default, your app can read any of the per-object authorization samples that it has saved to the HealthKit store; however, you may not always have access to those samples. People can update the authorization status for any of these samples at any time.

Your app can begin by querying for any samples that it already has permission to read.

```swift
// Read the newest prescription from the HealthKit store.
let queryDescriptor = HKSampleQueryDescriptor(predicates: [.visionPrescription()],
  sortDescriptors: [SortDescriptor(\.startDate, order: .reverse)],
  limit: 1)

let prescription: HKVisionPrescription

do {
guard let result = try await queryDescriptor.result(for: store).first else {
print("*** No prescription found. ***")
return
}

prescription = result
} catch {
// Handle the error here.
fatalError("*** An error occurred while reading the most recent vision prescriptions: \(error.localizedDescription) ***")
}
```

Based on the results, you can then decide whether you need to request authorization for additional samples. Call [requestPerObjectReadAuthorizationForType:predicate:completion:](requestperobjectreadauthorization%28for_predicate_completion_%29.md) to prompt someone to modify the samples your app has access to read.

```swift
// Request authorization to read vision prescriptions.
do {
try await store.requestPerObjectReadAuthorization(for: .visionPrescriptionType(),
  predicate: nil)
} catch HKError.errorUserCanceled {
// Handle the user canceling the authorization request.
print("*** The user canceled the authorization request. ***")
return
} catch {
// Handle the error here.
fatalError("*** An error occurred while requesting permission to read vision prescriptions: \(error.localizedDescription) ***")
}
```

> **Important**

>  Using the [requestAuthorization(toShare:read:)](requestauthorization%28toshare_read_%29.md) method to request read access to any data types that require per-object authorization fails with an [HKErrorInvalidArgument](../hkerror/code/errorinvalidargument.md) error.

When your app calls this method, HealthKit displays an authorization sheet that asks for permission to read the samples that match the predicate and object type. The person using your app can then select individual samples to share with your app. The system always asks for permission, regardless of whether they previously granted it.

![A screenshot of the authorization sheet, showing two vision prescriptions. People can individually enable each of the prescriptions.](https://developer.apple.com/images/com.apple.healthkit/media-4092700@2x.png)

After the person responds, the system calls the callback handler on an arbitrary background queue.

## See Also

### Accessing HealthKit

- [authorizationStatusForType:](authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorizationToShareTypes:readTypes:completion:](getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable](ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorizationToShareTypes:readTypes:completion:](requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [handleAuthorizationForExtensionWithCompletion:](handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDateForTypes:completion:](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.
