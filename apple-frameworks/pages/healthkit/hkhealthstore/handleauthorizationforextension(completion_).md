> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/handleauthorizationforextension(completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/handleauthorizationforextension(completion:))

# handleAuthorizationForExtension(completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

Requests permission to save and read the data types specified by an extension.

## Declaration

```swift
func handleAuthorizationForExtension(completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func handleAuthorizationForExtension() async throws
```

## Parameters

- `completion`: A block that is called after the user finishes responding to the request. This block is passed the following parameters:

  - **success**: A Boolean value that indicates whether the user responded to the prompt (if any). This value does not indicate whether permission was actually granted. This parameter is [false](https://developer.apple.com/documentation/swift/false) if the user canceled the prompt without selecting permissions; otherwise, [true](https://developer.apple.com/documentation/swift/true).
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

The host app must implement the application delegate’s [applicationShouldRequestHealthAuthorization(\_:)](../../uikit/uiapplicationdelegate/applicationshouldrequesthealthauthorization%28__%29.md) method. This delegate method is called after an app extension calls [requestAuthorization(toShare:read:completion:)](requestauthorization%28toshare_read_completion_%29.md). The host app is then responsible for calling [handleAuthorizationForExtension(completion:)](handleauthorizationforextension%28completion_%29.md). This method prompts the user to authorize both the app and its extensions for the types that the extension requested.

The system performs this request asynchronously. After the user has finished responding, this method calls its completion block on a background queue. If the user has already chosen to grant or prohibit access to all of the types specified, the completion is called without prompting the user.

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
- [requestPerObjectReadAuthorization(for:predicate:completion:)](requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDate(for:completion:)](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestAuthorizedSampleDate(for:)](earliestauthorizedsampledate%28for_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate()](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.

# handleAuthorizationForExtensionWithCompletion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

Requests permission to save and read the data types specified by an extension.

## Declaration

```objectivec
- (void) handleAuthorizationForExtensionWithCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `completion`: A block that is called after the user finishes responding to the request. This block is passed the following parameters:

  - **success**: A Boolean value that indicates whether the user responded to the prompt (if any). This value does not indicate whether permission was actually granted. This parameter is [false](https://developer.apple.com/documentation/swift/false) if the user canceled the prompt without selecting permissions; otherwise, [true](https://developer.apple.com/documentation/swift/true).
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

The host app must implement the application delegate’s [applicationShouldRequestHealthAuthorization:](../../uikit/uiapplicationdelegate/applicationshouldrequesthealthauthorization%28__%29.md) method. This delegate method is called after an app extension calls [requestAuthorizationToShareTypes:readTypes:completion:](requestauthorization%28toshare_read_completion_%29.md). The host app is then responsible for calling [handleAuthorizationForExtensionWithCompletion:](handleauthorizationforextension%28completion_%29.md). This method prompts the user to authorize both the app and its extensions for the types that the extension requested.

The system performs this request asynchronously. After the user has finished responding, this method calls its completion block on a background queue. If the user has already chosen to grant or prohibit access to all of the types specified, the completion is called without prompting the user.

## See Also

### Accessing HealthKit

- [authorizationStatusForType:](authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorizationToShareTypes:readTypes:completion:](getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable](ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorizationToShareTypes:readTypes:completion:](requestauthorization%28toshare_read_completion_%29.md): Requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorizationForType:predicate:completion:](requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDateForTypes:completion:](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.
