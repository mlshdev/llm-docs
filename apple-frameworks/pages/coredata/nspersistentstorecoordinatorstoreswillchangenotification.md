> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentstorecoordinatorstoreswillchangenotification

# NSPersistentStoreCoordinatorStoresWillChangeNotification

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that posts before a coordinator changes its registered stores.

## Declaration

```objectivec
extern NSString * const NSPersistentStoreCoordinatorStoresWillChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification’s `object` is the store coordinator that’s about to change. The framework posts the notification to an internal thread. Move to a known thread before peforming any work.

The `userInfo` dictionary contains information about the added and removed persistent stores, which you access with the [NSAddedPersistentStoresKey](nsaddedpersistentstoreskey.md) and [NSRemovedPersistentStoresKey](nsremovedpersistentstoreskey.md) keys. Don’t capture the dictionary’s contents.

## See Also

### Notifications

- [NSPersistentStoreCoordinatorStoresDidChangeNotification](nspersistentstorecoordinatorstoresdidchangenotification.md): A notification that the coordinator posts after its registered stores change.
- [NSPersistentStoreCoordinatorWillRemoveStoreNotification](nspersistentstorecoordinatorwillremovestorenotification.md): A notification that posts before a coordinator removes a store.
