> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentstorecoordinatorwillremovestorenotification

# NSPersistentStoreCoordinatorWillRemoveStoreNotification

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that posts before a coordinator removes a store.

## Declaration

```objectivec
extern NSString * const NSPersistentStoreCoordinatorWillRemoveStoreNotification;
```

<a id="Discussion"></a>

## Discussion

This notification’s `object` is the changed store coordinator. The framework posts the notification to an internal thread. Don’t peform any asynchronous work or block the calling thread.

There is no `userInfo` dictionary.

## See Also

### Notifications

- [NSPersistentStoreCoordinatorStoresDidChangeNotification](nspersistentstorecoordinatorstoresdidchangenotification.md): A notification that the coordinator posts after its registered stores change.
- [NSPersistentStoreCoordinatorStoresWillChangeNotification](nspersistentstorecoordinatorstoreswillchangenotification.md): A notification that posts before a coordinator changes its registered stores.
