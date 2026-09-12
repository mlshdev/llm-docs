> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer)

# NSPersistentCloudKitContainer (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A container that encapsulates the Core Data stack in your app, and mirrors select persistent stores to a CloudKit private database.

## Declaration

```swift
class NSPersistentCloudKitContainer
```

## Mentioned In

- [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md)
- [Mirroring a Core Data store with CloudKit](mirroring-a-core-data-store-with-cloudkit.md)
- [Reading CloudKit Records for Core Data](reading-cloudkit-records-for-core-data.md)

<a id="overview"></a>

## Overview

[NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md) is a subclass of [NSPersistentContainer](nspersistentcontainer.md) capable of managing both CloudKit-backed and noncloud stores.

By default, [NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md) contains a single store description, which Core Data assigns to the first CloudKit container identifier in an app’s entitlements. Use [NSPersistentCloudKitContainerOptions](nspersistentcloudkitcontaineroptions.md) to customize this behavior or create additional store descriptions with backing by different containers.

For more information about setting up multiple stores, see [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md).

## Topics

### Checking Permissions

- [canUpdateRecord(forManagedObjectWith:)](nspersistentcloudkitcontainer/canupdaterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can modify the managed object’s underlying CloudKit record.
- [canDeleteRecord(forManagedObjectWith:)](nspersistentcloudkitcontainer/candeleterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can delete the managed object’s underlying CloudKit record.
- [canModifyManagedObjects(in:)](nspersistentcloudkitcontainer/canmodifymanagedobjects%28in_%29.md): Returns a Boolean value that indicates whether the user can modify the specified persistent store.

### Sharing Objects

- [Accepting Share Invitations in a SwiftUI App](accepting-share-invitations-in-a-swiftui-app.md): Adapt your app to use UIKit’s application and scene delegates so it can process CloudKit share invitations.

### Promoting Your Schema

- [initializeCloudKitSchema(options:)](nspersistentcloudkitcontainer/initializecloudkitschema%28options_%29.md): Creates the CloudKit schema for all stores in the container that manage a CloudKit database.
- [NSPersistentCloudKitContainerSchemaInitializationOptions](nspersistentcloudkitcontainerschemainitializationoptions.md): Options that control the behavior when promoting the container’s schema to CloudKit.

### Monitoring Container Events

- [NSPersistentCloudKitContainer.Event](nspersistentcloudkitcontainer/event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainer.EventType](nspersistentcloudkitcontainer/eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [eventChangedNotification](nspersistentcloudkitcontainer/eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [eventNotificationUserInfoKey](nspersistentcloudkitcontainer/eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.

### Structures

- [NSPersistentCloudKitContainer.EventChangedMessage](nspersistentcloudkitcontainer/eventchangedmessage.md): Posted when a CloudKit event occurs on the CloudKit private serial queue.

## Relationships

### Inherits From

- [NSPersistentContainer](nspersistentcontainer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### CloudKit mirroring

- [Mirroring a Core Data store with CloudKit](mirroring-a-core-data-store-with-cloudkit.md): Back user interfaces with a local replica of a CloudKit private database.
- [Synchronizing a local store to the cloud](synchronizing-a-local-store-to-the-cloud.md): Share data between a user’s devices and other iCloud users.
- [NSPersistentCloudKitContainerOptions](nspersistentcloudkitcontaineroptions.md): An object that customizes how a store description aligns with a CloudKit database.
- [Sharing Core Data objects between iCloud users](sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.

# NSPersistentCloudKitContainer (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A container that encapsulates the Core Data stack in your app, and mirrors select persistent stores to a CloudKit private database.

## Declaration

```objectivec
@interface NSPersistentCloudKitContainer : NSPersistentContainer
```

## Mentioned In

- [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md)
- [Mirroring a Core Data store with CloudKit](mirroring-a-core-data-store-with-cloudkit.md)
- [Reading CloudKit Records for Core Data](reading-cloudkit-records-for-core-data.md)

<a id="overview"></a>

## Overview

[NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md) is a subclass of [NSPersistentContainer](nspersistentcontainer.md) capable of managing both CloudKit-backed and noncloud stores.

By default, [NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md) contains a single store description, which Core Data assigns to the first CloudKit container identifier in an app’s entitlements. Use [NSPersistentCloudKitContainerOptions](nspersistentcloudkitcontaineroptions.md) to customize this behavior or create additional store descriptions with backing by different containers.

For more information about setting up multiple stores, see [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md).

## Topics

### Accessing Records

- [recordForManagedObjectID:](nspersistentcloudkitcontainer/recordformanagedobjectid_.md): Returns the CloudKit record for the specified managed object ID.
- [recordsForManagedObjectIDs:](nspersistentcloudkitcontainer/recordsformanagedobjectids_.md): Returns a dictionary that contains the CloudKit records for the specified managed object IDs.
- [recordIDForManagedObjectID:](nspersistentcloudkitcontainer/recordidformanagedobjectid_.md): Returns the CloudKit record ID for the specified managed object ID.
- [recordIDsForManagedObjectIDs:](nspersistentcloudkitcontainer/recordidsformanagedobjectids_.md): Returns a dictionary that contains the CloudKit record IDs for the specified managed object IDs.

### Checking Permissions

- [canUpdateRecordForManagedObjectWithID:](nspersistentcloudkitcontainer/canupdaterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can modify the managed object’s underlying CloudKit record.
- [canDeleteRecordForManagedObjectWithID:](nspersistentcloudkitcontainer/candeleterecord%28formanagedobjectwith_%29.md): Returns a Boolean value that indicates whether the user can delete the managed object’s underlying CloudKit record.
- [canModifyManagedObjectsInStore:](nspersistentcloudkitcontainer/canmodifymanagedobjects%28in_%29.md): Returns a Boolean value that indicates whether the user can modify the specified persistent store.

### Sharing Objects

- [Accepting Share Invitations in a SwiftUI App](accepting-share-invitations-in-a-swiftui-app.md): Adapt your app to use UIKit’s application and scene delegates so it can process CloudKit share invitations.
- [acceptShareInvitationsFromMetadata:intoPersistentStore:completion:](nspersistentcloudkitcontainer/acceptshareinvitationsfrommetadata_intopersistentstore_completion_.md): Accepts one or more invitations to participate in sharing using the specified metadata.
- [fetchParticipantsMatchingLookupInfos:intoPersistentStore:completion:](nspersistentcloudkitcontainer/fetchparticipantsmatchinglookupinfos_intopersistentstore_completion_.md): Fetches all participants that match the specified critieria.
- [fetchSharesInPersistentStore:error:](nspersistentcloudkitcontainer/fetchsharesinpersistentstore_error_.md): Returns an array that contains all share records in the specified persistent store.
- [fetchSharesMatchingObjectIDs:error:](nspersistentcloudkitcontainer/fetchsharesmatchingobjectids_error_.md): Returns a dictionary that contains the share records that CloudKit associates with specified managed object IDs.
- [persistUpdatedShare:inPersistentStore:completion:](nspersistentcloudkitcontainer/persistupdatedshare_inpersistentstore_completion_.md): Saves the share record and schedules it for export to iCloud.
- [shareManagedObjects:toShare:completion:](nspersistentcloudkitcontainer/sharemanagedobjects_toshare_completion_.md): Associates the specified managed objects with a new or existing share record.

### Purging Record Zones

- [purgeObjectsAndRecordsInZoneWithID:inPersistentStore:completion:](nspersistentcloudkitcontainer/purgeobjectsandrecordsinzonewithid_inpersistentstore_completion_.md): Deletes all CloudKit records in the specified record zone, along with their corresponding managed objects.

### Promoting Your Schema

- [initializeCloudKitSchemaWithOptions:error:](nspersistentcloudkitcontainer/initializecloudkitschema%28options_%29.md): Creates the CloudKit schema for all stores in the container that manage a CloudKit database.
- [NSPersistentCloudKitContainerSchemaInitializationOptions](nspersistentcloudkitcontainerschemainitializationoptions.md): Options that control the behavior when promoting the container’s schema to CloudKit.

### Monitoring Container Events

- [NSPersistentCloudKitContainerEvent](nspersistentcloudkitcontainer/event.md): An object that represents activity in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventType](nspersistentcloudkitcontainer/eventtype.md): The type of event in a persistent CloudKit container, either setup, import, or export.
- [NSPersistentCloudKitContainerEventRequest](nspersistentcloudkitcontainereventrequest.md): A request to fetch setup, import, or export events in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventResult](nspersistentcloudkitcontainereventresult.md): The result of a request to fetch persistent CloudKit container events.
- [NSPersistentCloudKitContainerEventChangedNotification](nspersistentcloudkitcontainer/eventchangednotification.md): A notification that contains details about an event in a persistent CloudKit container.
- [NSPersistentCloudKitContainerEventUserInfoKey](nspersistentcloudkitcontainer/eventnotificationuserinfokey.md): The user info dictionary key for the persistent CloudKit container event.

## Relationships

### Inherits From

- [NSPersistentContainer](nspersistentcontainer.md)

## See Also

### CloudKit mirroring

- [Mirroring a Core Data store with CloudKit](mirroring-a-core-data-store-with-cloudkit.md): Back user interfaces with a local replica of a CloudKit private database.
- [Synchronizing a local store to the cloud](synchronizing-a-local-store-to-the-cloud.md): Share data between a user’s devices and other iCloud users.
- [NSPersistentCloudKitContainerOptions](nspersistentcloudkitcontaineroptions.md): An object that customizes how a store description aligns with a CloudKit database.
- [Sharing Core Data objects between iCloud users](sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
