> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinatorstoresdidchangenotification](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinatorstoresdidchangenotification)

# NSPersistentStoreCoordinatorStoresDidChangeNotification

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that the coordinator posts after its registered stores change.

## Declaration

```objectivec
extern NSString * const NSPersistentStoreCoordinatorStoresDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification’s `object` is the changed store coordinator. The framework posts the notification to an internal thread. Move to a known thread before peforming any work.

The `userInfo` dictionary contains information about the added, updated, and removed persistent stores, which you access with the [NSAddedPersistentStoresKey](nsaddedpersistentstoreskey.md), [NSUUIDChangedPersistentStoresKey](nsuuidchangedpersistentstoreskey.md), and [NSRemovedPersistentStoresKey](nsremovedpersistentstoreskey.md) keys. Don’t capture the dictionary’s contents.

## See Also

### Notifications

- [NSPersistentStoreCoordinatorStoresWillChangeNotification](nspersistentstorecoordinatorstoreswillchangenotification.md): A notification that posts before a coordinator changes its registered stores.
- [NSPersistentStoreCoordinatorWillRemoveStoreNotification](nspersistentstorecoordinatorwillremovestorenotification.md): A notification that posts before a coordinator removes a store.
