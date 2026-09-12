> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registercloudkitshare(preparationhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registercloudkitshare(preparationhandler:))

# registerCloudKitShare(preparationHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Registers a handler that prepares a new CloudKit share.

## Declaration

```swift
func registerCloudKitShare(preparationHandler: @escaping (@escaping (CKShare?, CKContainer?, (any Error)?) -> Void) -> Void)
```

## Parameters

- `preparationHandler`: The handler the service invokes when it requires the CloudKit share.

<a id="Discussion"></a>

## Discussion

Use this method to share a hierarchy of CloudKit records with other iCloud users. When the service invokes the handler, create an instance of [CKShare](../../cloudkit/ckshare.md) with a root record. Save the share to the server using [CKModifyRecordsOperation](../../cloudkit/ckmodifyrecordsoperation.md). The root record (and its hierarchy) must already exist on the server or be part of the same save operation. After the share saves, call `preparationCompletionHandler` with the saved share and its container. If the save fails, pass the error to the completion handler instead. Invoking the sharing service with a share you register using this method prompts the user to begin sharing.

Use the [NSCloudSharingServiceDelegate](https://developer.apple.com/documentation/appkit/nscloudsharingservicedelegate) protocol to respond to any changes the sharing service makes.

> **Note**

>  To modify an existing share, use the [registerCloudKitShare(\_:container:)](registercloudkitshare%28__container_%29.md) method instead.

The following example shows how to create an item provider with a handler that saves a share. It then invokes the cloud-sharing service with that provider.

```swift
func beginSharing(_ record: CKRecord) {
    let itemProvider = NSItemProvider()
        
    // Register a handler that creates a CloudKit share using
    // the provided record, and saves them both to the server
    // before passing them to the sharing service.
    itemProvider.registerCloudKitShare(preparationHandler: { completion in
        let container = CKContainer.default()
            
        // Create a share and use the record the caller provides as 
        // its root record. 
        let share = CKShare(rootRecord: record)

        // Create an operation that saves both the record and the 
        // share to CloudKit.
        let records = [record, share]
        let operation = CKModifyRecordsOperation(recordsToSave: records, 
                                                 recordIDsToDelete: nil)
            
        // If the save fails, pass the error to the completion handler.
        // Otherwise, pass the new share and its container.
        operation.modifyRecordsCompletionBlock = { _, _, error in
            if let error = error {
                completion(nil, nil, error)
            } else {
                completion(share, container, nil)
            }
        }
            
        // Set an appropriate QoS and add the operation to the
        // container's queue to execute it.
        operation.qualityOfService = .userInitiated
        container.privateCloudDatabase.add(operation)
    })
        
    let items = [itemProvider]
        
    // Create a cloud-sharing service and invoke it to begin sharing.
    if let service = NSSharingService(named: .cloudSharing), 
       service.canPerform(withItems: items) {
        service.perform(withItems: items)
    }
}
```

## See Also

### Registering CloudKit shares

- [registerCloudKitShare(\_:container:)](registercloudkitshare%28__container_%29.md): Registers a CloudKit share for the user to modify.
- [registerCKShare(\_:container:allowedSharingOptions:)](registerckshare%28__container_allowedsharingoptions_%29.md): Registers an existing collaboration object on a server.
- [registerCKShare(container:allowedSharingOptions:preparationHandler:)](registerckshare%28container_allowedsharingoptions_preparationhandler_%29.md): Creates and registers a new collaboration object using a collection of records to share.

# registerCloudKitShareWithPreparationHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Registers a handler that prepares a new CloudKit share.

## Declaration

```objectivec
- (void) registerCloudKitShareWithPreparationHandler:(void (^)(void (^preparationCompletionHandler)(CKShare *, CKContainer *, NSError *))) preparationHandler;
```

## Parameters

- `preparationHandler`: The handler the service invokes when it requires the CloudKit share.

<a id="Discussion"></a>

## Discussion

Use this method to share a hierarchy of CloudKit records with other iCloud users. When the service invokes the handler, create an instance of [CKShare](../../cloudkit/ckshare.md) with a root record. Save the share to the server using [CKModifyRecordsOperation](../../cloudkit/ckmodifyrecordsoperation.md). The root record (and its hierarchy) must already exist on the server or be part of the same save operation. After the share saves, call `preparationCompletionHandler` with the saved share and its container. If the save fails, pass the error to the completion handler instead. Invoking the sharing service with a share you register using this method prompts the user to begin sharing.

Use the [NSCloudSharingServiceDelegate](https://developer.apple.com/documentation/appkit/nscloudsharingservicedelegate) protocol to respond to any changes the sharing service makes.

> **Note**

>  To modify an existing share, use the [registerCloudKitShare:container:](registercloudkitshare%28__container_%29.md) method instead.

The following example shows how to create an item provider with a handler that saves a share. It then invokes the cloud-sharing service with that provider.

```swift
func beginSharing(_ record: CKRecord) {
    let itemProvider = NSItemProvider()
        
    // Register a handler that creates a CloudKit share using
    // the provided record, and saves them both to the server
    // before passing them to the sharing service.
    itemProvider.registerCloudKitShare(preparationHandler: { completion in
        let container = CKContainer.default()
            
        // Create a share and use the record the caller provides as 
        // its root record. 
        let share = CKShare(rootRecord: record)

        // Create an operation that saves both the record and the 
        // share to CloudKit.
        let records = [record, share]
        let operation = CKModifyRecordsOperation(recordsToSave: records, 
                                                 recordIDsToDelete: nil)
            
        // If the save fails, pass the error to the completion handler.
        // Otherwise, pass the new share and its container.
        operation.modifyRecordsCompletionBlock = { _, _, error in
            if let error = error {
                completion(nil, nil, error)
            } else {
                completion(share, container, nil)
            }
        }
            
        // Set an appropriate QoS and add the operation to the
        // container's queue to execute it.
        operation.qualityOfService = .userInitiated
        container.privateCloudDatabase.add(operation)
    })
        
    let items = [itemProvider]
        
    // Create a cloud-sharing service and invoke it to begin sharing.
    if let service = NSSharingService(named: .cloudSharing), 
       service.canPerform(withItems: items) {
        service.perform(withItems: items)
    }
}
```

## See Also

### Registering CloudKit shares

- [registerCloudKitShare:container:](registercloudkitshare%28__container_%29.md): Registers a CloudKit share for the user to modify.
- [registerCKShare:container:allowedSharingOptions:](registerckshare_container_allowedsharingoptions_.md): Registers an existing collaboration object on a server.
- [registerCKShareWithContainer:allowedSharingOptions:preparationHandler:](registercksharewithcontainer_allowedsharingoptions_preparationhandler_.md): Creates and registers a new collaboration object using a collection of records to share.
