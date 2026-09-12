> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredidimportubiquitouscontentchangesnotification](https://developer.apple.com/documentation/coredata/nspersistentstoredidimportubiquitouscontentchangesnotification)

# NSPersistentStoreDidImportUbiquitousContentChangesNotification

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Posted after records are imported from the ubiquitous content store.

## Declaration

```objectivec
extern NSString * const NSPersistentStoreDidImportUbiquitousContentChangesNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s `object` is set to the `NSPersistentStoreCoordinator` instance which registered the store. The notification’s `userInfo` dictionary contains the same keys as the [NSManagedObjectContextObjectsDidChangeNotification](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextobjectsdidchangenotification) notification ([NSInsertedObjectsKey](nsinsertedobjectskey.md), [NSUpdatedObjectsKey](nsupdatedobjectskey.md), [NSDeletedObjectsKey](nsdeletedobjectskey.md)), however the values are sets of [NSManagedObjectID](nsmanagedobjectid.md) objects rather than sets of [NSManagedObject](nsmanagedobject.md) objects.
