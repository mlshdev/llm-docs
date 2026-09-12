> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/init(preparationhandler:)](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/init(preparationhandler:))

# init(preparationHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes the CloudKit sharing controller with a preparation handler intending to save a new share record.

> Use [init(activityItemsConfiguration:)](../uiactivityviewcontroller/init%28activityitemsconfiguration_%29.md) instead.

## Declaration

```swift
init(preparationHandler: @escaping (UICloudSharingController, @escaping (CKShare?, CKContainer?, (any Error)?) -> Void) -> Void)
```

## Parameters

- `preparationHandler`: The block invoked by [UICloudSharingController](../uicloudsharingcontroller.md) when it is time for your application to save a newly created [CKShare](../../cloudkit/ckshare.md) record.

<a id="Discussion"></a>

## Discussion

Use the [init(preparationHandler:)](init%28preparationhandler_%29.md) initializer method to create a new [UICloudSharingController](../uicloudsharingcontroller.md) instance when the user who owns a [CKRecord](../../cloudkit/ckrecord.md) wants to share the record with other people. To determine if the record is shared, check its [share](../../cloudkit/ckrecord/share.md) property. If the property value is `nil`, the record is not shared, and this method is the one to use.

> **Important**

>  You must initialize the controller with the correct initializer method. Do not use [init(preparationHandler:)](init%28preparationhandler_%29.md) if the [CKRecord](../../cloudkit/ckrecord.md) is already shared. Likewise, do not use [init(share:container:)](init%28share_container_%29.md) if the [CKRecord](../../cloudkit/ckrecord.md) is not shared. Using the wrong initializer leads to errors when saving the record.

The `preparationHandler:` provided to the initializer method is responsible for saving the new [CKShare](../../cloudkit/ckshare.md) record. The handler has two parameters:

- A reference to the [UICloudSharingController](../uicloudsharingcontroller.md) instance that called the preparation handler
- A reference to a completion block

After you save the new [CKShare](../../cloudkit/ckshare.md) record and its root record (the [CKRecord](../../cloudkit/ckrecord.md) representing the data to share) in the preparation handler, you call the completion block. Calling the completion block tells the [UICloudSharingController](../uicloudsharingcontroller.md) instance to continue with the invitation workflow.

For more information and sample code, see [Inviting participants to a new share](../uicloudsharingcontroller.md#Inviting-participants-to-a-new-share).

## See Also

### Creating the cloud sharing controller

- [init(share:container:)](init%28share_container_%29.md): Initializes the CloudKit sharing view controller with a CloudKit share record and container to manage participants and restrictions.

# initWithPreparationHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes the CloudKit sharing controller with a preparation handler intending to save a new share record.

> Use [initWithActivityItemsConfiguration:](../uiactivityviewcontroller/init%28activityitemsconfiguration_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithPreparationHandler:(void (^)(UICloudSharingController *controller, void (^preparationCompletionHandler)(CKShare *, CKContainer *, NSError *))) preparationHandler;
```

## Parameters

- `preparationHandler`: The block invoked by [UICloudSharingController](../uicloudsharingcontroller.md) when it is time for your application to save a newly created [CKShare](../../cloudkit/ckshare.md) record.

<a id="Discussion"></a>

## Discussion

Use the [initWithPreparationHandler:](init%28preparationhandler_%29.md) initializer method to create a new [UICloudSharingController](../uicloudsharingcontroller.md) instance when the user who owns a [CKRecord](../../cloudkit/ckrecord.md) wants to share the record with other people. To determine if the record is shared, check its [share](../../cloudkit/ckrecord/share.md) property. If the property value is `nil`, the record is not shared, and this method is the one to use.

> **Important**

>  You must initialize the controller with the correct initializer method. Do not use [initWithPreparationHandler:](init%28preparationhandler_%29.md) if the [CKRecord](../../cloudkit/ckrecord.md) is already shared. Likewise, do not use [initWithShare:container:](init%28share_container_%29.md) if the [CKRecord](../../cloudkit/ckrecord.md) is not shared. Using the wrong initializer leads to errors when saving the record.

The `preparationHandler:` provided to the initializer method is responsible for saving the new [CKShare](../../cloudkit/ckshare.md) record. The handler has two parameters:

- A reference to the [UICloudSharingController](../uicloudsharingcontroller.md) instance that called the preparation handler
- A reference to a completion block

After you save the new [CKShare](../../cloudkit/ckshare.md) record and its root record (the [CKRecord](../../cloudkit/ckrecord.md) representing the data to share) in the preparation handler, you call the completion block. Calling the completion block tells the [UICloudSharingController](../uicloudsharingcontroller.md) instance to continue with the invitation workflow.

For more information and sample code, see [Inviting participants to a new share](../uicloudsharingcontroller.md#Inviting-participants-to-a-new-share).

## See Also

### Creating the cloud sharing controller

- [initWithShare:container:](init%28share_container_%29.md): Initializes the CloudKit sharing view controller with a CloudKit share record and container to manage participants and restrictions.
