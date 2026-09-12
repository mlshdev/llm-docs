> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/requestauthorization(toshare:read:completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/requestauthorization(toshare:read:completion:))

# requestAuthorization(toShare:read:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Requests permission to save and read the specified data types.

## Declaration

```swift
func requestAuthorization(toShare typesToShare: Set<HKSampleType>?, read typesToRead: Set<HKObjectType>?, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

## Parameters

- `typesToShare`: A set containing the data types you want to share. This set can contain any concrete subclass of the [HKSampleType](../hksampletype.md) class (any of the [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md), or [HKCorrelationType](../hkcorrelationtype.md) classes ). If the user grants permission, your app can create and save these data types to the HealthKit store.
- `typesToRead`: A set containing the data types you want to read. This set can contain any concrete subclass of the [HKObjectType](../hkobjecttype.md) class (any of the [HKCharacteristicType](../hkcharacteristictype.md) , [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md), or [HKCorrelationType](../hkcorrelationtype.md) classes). If the user grants permission, your app can read these data types from the HealthKit store.
- `completion`: A block called after the user finishes responding to the request. The system calls this block with the following parameters:

  - **`success`**: A Boolean value that indicates whether the request succeeded. This value doesn’t indicate whether the user actually granted permission. The parameter is [false](https://developer.apple.com/documentation/swift/false) if an error occurred while processing the request; otherwise, it’s [true](https://developer.apple.com/documentation/swift/true).
  - **`error`**: An error object. If an error occurred, this object contains information about the error; otherwise, it’s set to `nil`.

<a id="Discussion"></a>

## Discussion

HealthKit performs these requests asynchronously. If you call this method with a new data type (a type of data that the user hasn’t previously granted or denied permission for in this app), the system automatically displays the permission form, listing all the requested permissions. After the user has finished responding, this method calls its completion block on a background queue. If the user has already chosen to grant or prohibit access to all of the types specified, HealthKit calls the completion without prompting the user.

> **Important**

>  In watchOS 6 and later, this method displays the permission form on Apple Watch, enabling independent HealthKit apps. In watchOS 5 and earlier, this method prompts the user to authorize the app on their paired iPhone. For more information, see `Creating Independent watchOS Apps`.

Each data type has two separate permissions, one to read it and one to share it. You can make a single request, and include all the data types your app needs.

Customize the messages displayed on the permissions sheet by setting the following keys:

- [NSHealthShareUsageDescription](../../bundleresources/information-property-list/nshealthshareusagedescription.md) customizes the message for reading data.
- [NSHealthUpdateUsageDescription](../../bundleresources/information-property-list/nshealthupdateusagedescription.md) customizes the message for writing data.

> **Warning**

>  You must set the usage keys, or your app will crash when you request authorization.

For projects created using Xcode 13 or later, set these keys in the Target Properties list on the app’s Info tab. For projects created with Xcode 12 or earlier, set these keys in the apps `Info.plist` file. For more information, see [Information Property List](../../bundleresources/information-property-list.md).

After users have set the permissions for your app, they can always change them using either the Settings or the Health app. Your app appears in the Health app’s Sources tab, even if the user didn’t allow permission to read or share data.

## See Also

### Accessing HealthKit

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorization(toShare:read:completion:)](getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable()](ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords()](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorization(toShare:read:)](requestauthorization%28toshare_read_%29.md): Asynchronously requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorization(for:predicate:completion:)](requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtension(completion:)](handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDate(for:completion:)](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestAuthorizedSampleDate(for:)](earliestauthorizedsampledate%28for_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate()](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.

# requestAuthorizationToShareTypes:readTypes:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Requests permission to save and read the specified data types.

## Declaration

```objectivec
- (void) requestAuthorizationToShareTypes:(NSSet<HKSampleType *> *) typesToShare readTypes:(NSSet<HKObjectType *> *) typesToRead completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `typesToShare`: A set containing the data types you want to share. This set can contain any concrete subclass of the [HKSampleType](../hksampletype.md) class (any of the [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md), or [HKCorrelationType](../hkcorrelationtype.md) classes ). If the user grants permission, your app can create and save these data types to the HealthKit store.
- `typesToRead`: A set containing the data types you want to read. This set can contain any concrete subclass of the [HKObjectType](../hkobjecttype.md) class (any of the [HKCharacteristicType](../hkcharacteristictype.md) , [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md), or [HKCorrelationType](../hkcorrelationtype.md) classes). If the user grants permission, your app can read these data types from the HealthKit store.
- `completion`: A block called after the user finishes responding to the request. The system calls this block with the following parameters:

  - **`success`**: A Boolean value that indicates whether the request succeeded. This value doesn’t indicate whether the user actually granted permission. The parameter is [false](https://developer.apple.com/documentation/swift/false) if an error occurred while processing the request; otherwise, it’s [true](https://developer.apple.com/documentation/swift/true).
  - **`error`**: An error object. If an error occurred, this object contains information about the error; otherwise, it’s set to `nil`.

<a id="Discussion"></a>

## Discussion

HealthKit performs these requests asynchronously. If you call this method with a new data type (a type of data that the user hasn’t previously granted or denied permission for in this app), the system automatically displays the permission form, listing all the requested permissions. After the user has finished responding, this method calls its completion block on a background queue. If the user has already chosen to grant or prohibit access to all of the types specified, HealthKit calls the completion without prompting the user.

> **Important**

>  In watchOS 6 and later, this method displays the permission form on Apple Watch, enabling independent HealthKit apps. In watchOS 5 and earlier, this method prompts the user to authorize the app on their paired iPhone. For more information, see `Creating Independent watchOS Apps`.

Each data type has two separate permissions, one to read it and one to share it. You can make a single request, and include all the data types your app needs.

Customize the messages displayed on the permissions sheet by setting the following keys:

- [NSHealthShareUsageDescription](../../bundleresources/information-property-list/nshealthshareusagedescription.md) customizes the message for reading data.
- [NSHealthUpdateUsageDescription](../../bundleresources/information-property-list/nshealthupdateusagedescription.md) customizes the message for writing data.

> **Warning**

>  You must set the usage keys, or your app will crash when you request authorization.

For projects created using Xcode 13 or later, set these keys in the Target Properties list on the app’s Info tab. For projects created with Xcode 12 or earlier, set these keys in the apps `Info.plist` file. For more information, see [Information Property List](../../bundleresources/information-property-list.md).

After users have set the permissions for your app, they can always change them using either the Settings or the Health app. Your app appears in the Health app’s Sources tab, even if the user didn’t allow permission to read or share data.

## See Also

### Accessing HealthKit

- [authorizationStatusForType:](authorizationstatus%28for_%29.md): Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](../hkauthorizationstatus.md): Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorizationToShareTypes:readTypes:completion:](getrequeststatusforauthorization%28toshare_read_completion_%29.md): Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](../hkauthorizationrequeststatus.md): Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable](ishealthdataavailable%28%29.md): Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords](supportshealthrecords%28%29.md): Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestPerObjectReadAuthorizationForType:predicate:completion:](requestperobjectreadauthorization%28for_predicate_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtensionWithCompletion:](handleauthorizationforextension%28completion_%29.md): Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](authorizationviewcontrollerpresenter.md): The view controller that presents HealthKit authorization sheets.
- [getEarliestAuthorizedSampleDateForTypes:completion:](getearliestauthorizedsampledate%28for_completion_%29.md): Returns the earliest date that the person permits your app to read samples for the given data types.
- [earliestPermittedSampleDate](earliestpermittedsampledate%28%29.md): Returns the earliest date that the framework permits your app to save or read samples.
