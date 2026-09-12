> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/init(share:container:)](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/init(share:container:))

# init(share:container:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the CloudKit sharing view controller with a CloudKit share record and container to manage participants and restrictions.

## Declaration

```swift
init(share: CKShare, container: CKContainer)
```

## Parameters

- `share`: An instance of [CKShare](../../cloudkit/ckshare.md) that was previously saved.
- `container`: An instance of [CKContainer](../../cloudkit/ckcontainer.md) that contains the record that is shared.

<a id="Discussion"></a>

## Discussion

Use the [init(share:container:)](init%28share_container_%29.md) initializer method to create the [UICloudSharingController](../uicloudsharingcontroller.md) instance when the user who owns the [CKShare](../../cloudkit/ckshare.md) record wants to manage the participants and restrictions associated with the share. (For more information, see [Adding and removing participants from an existing share](../uicloudsharingcontroller.md#Adding-and-removing-participants-from-an-existing-share).) You also use this initializer method when users are participants who want to remove themselves from a share. (For more information, see [Viewing participants and leaving a share](../uicloudsharingcontroller.md#Viewing-participants-and-leaving-a-share).)

> **Important**

>  You must initialize the controller with the correct initializer method. Do not use [init(preparationHandler:)](init%28preparationhandler_%29.md) if the [CKRecord](../../cloudkit/ckrecord.md) is already shared. Likewise, do not use [init(share:container:)](init%28share_container_%29.md) if the [CKRecord](../../cloudkit/ckrecord.md) is not shared. Using the wrong initializer leads to errors when saving the record.

[init(share:container:)](init%28share_container_%29.md) requires a reference to the [CKShare](../../cloudkit/ckshare.md) instance associated with the [CKRecord](../../cloudkit/ckrecord.md) instance that represents the shared data. To retrieve the [CKShare](../../cloudkit/ckshare.md) instance, get the [share](../../cloudkit/ckrecord/share.md) property value (a [CKRecord.Reference](../../cloudkit/ckrecord/reference.md) instance) from the [CKRecord](../../cloudkit/ckrecord.md) instance. Then pass the [recordID](../../cloudkit/ckrecord/reference/recordid.md) from the [CKRecord.Reference](../../cloudkit/ckrecord/reference.md) instance to the [fetch(withRecordID:completionHandler:)](../../cloudkit/ckdatabase/fetch%28withrecordid_completionhandler_%29.md) method on a [CKDatabase](../../cloudkit/ckdatabase.md) instance, as shown in the following code.

```objc
CKRecord *record = [self record];
CKReference *shareReference = [record share];
if (shareReference == nil) {
  return;
}
CKContainer *container = [CKContainer defaultContainer];
[[container privateCloudDatabase] fetchRecordWithID:[shareReference recordID] completionHandler:^(CKRecord * _Nullable record, NSError * _Nullable error) {
  
  if (record == nil) {
    NSLog(@"%@", [error localizedDescription]);
  } else if ([record isKindOfClass:[CKShare class]]) {
    CKShare *shareRecord = (CKShare *)record;
    NSLog(@"%@", [shareRecord URL]);
  }
  
}];
```

## See Also

### Creating the cloud sharing controller

- [init(preparationHandler:)](init%28preparationhandler_%29.md): Deprecated. Initializes the CloudKit sharing controller with a preparation handler intending to save a new share record.

# initWithShare:container: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the CloudKit sharing view controller with a CloudKit share record and container to manage participants and restrictions.

## Declaration

```objectivec
- (instancetype) initWithShare:(CKShare *) share container:(CKContainer *) container;
```

## Parameters

- `share`: An instance of [CKShare](../../cloudkit/ckshare.md) that was previously saved.
- `container`: An instance of [CKContainer](../../cloudkit/ckcontainer.md) that contains the record that is shared.

<a id="Discussion"></a>

## Discussion

Use the [initWithShare:container:](init%28share_container_%29.md) initializer method to create the [UICloudSharingController](../uicloudsharingcontroller.md) instance when the user who owns the [CKShare](../../cloudkit/ckshare.md) record wants to manage the participants and restrictions associated with the share. (For more information, see [Adding and removing participants from an existing share](../uicloudsharingcontroller.md#Adding-and-removing-participants-from-an-existing-share).) You also use this initializer method when users are participants who want to remove themselves from a share. (For more information, see [Viewing participants and leaving a share](../uicloudsharingcontroller.md#Viewing-participants-and-leaving-a-share).)

> **Important**

>  You must initialize the controller with the correct initializer method. Do not use [initWithPreparationHandler:](init%28preparationhandler_%29.md) if the [CKRecord](../../cloudkit/ckrecord.md) is already shared. Likewise, do not use [initWithShare:container:](init%28share_container_%29.md) if the [CKRecord](../../cloudkit/ckrecord.md) is not shared. Using the wrong initializer leads to errors when saving the record.

[initWithShare:container:](init%28share_container_%29.md) requires a reference to the [CKShare](../../cloudkit/ckshare.md) instance associated with the [CKRecord](../../cloudkit/ckrecord.md) instance that represents the shared data. To retrieve the [CKShare](../../cloudkit/ckshare.md) instance, get the [share](../../cloudkit/ckrecord/share.md) property value (a [CKReference](../../cloudkit/ckrecord/reference.md) instance) from the [CKRecord](../../cloudkit/ckrecord.md) instance. Then pass the [recordID](../../cloudkit/ckrecord/reference/recordid.md) from the [CKReference](../../cloudkit/ckrecord/reference.md) instance to the [fetchRecordWithID:completionHandler:](../../cloudkit/ckdatabase/fetch%28withrecordid_completionhandler_%29.md) method on a [CKDatabase](../../cloudkit/ckdatabase.md) instance, as shown in the following code.

```objc
CKRecord *record = [self record];
CKReference *shareReference = [record share];
if (shareReference == nil) {
  return;
}
CKContainer *container = [CKContainer defaultContainer];
[[container privateCloudDatabase] fetchRecordWithID:[shareReference recordID] completionHandler:^(CKRecord * _Nullable record, NSError * _Nullable error) {
  
  if (record == nil) {
    NSLog(@"%@", [error localizedDescription]);
  } else if ([record isKindOfClass:[CKShare class]]) {
    CKShare *shareRecord = (CKShare *)record;
    NSLog(@"%@", [shareRecord URL]);
  }
  
}];
```

## See Also

### Creating the cloud sharing controller

- [initWithPreparationHandler:](init%28preparationhandler_%29.md): Deprecated. Initializes the CloudKit sharing controller with a preparation handler intending to save a new share record.
