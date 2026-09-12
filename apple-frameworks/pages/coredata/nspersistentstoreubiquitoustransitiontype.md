> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreubiquitoustransitiontype](https://developer.apple.com/documentation/coredata/nspersistentstoreubiquitoustransitiontype)

# NSPersistentStoreUbiquitousTransitionType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

These constants are used as the value corresponding to the [NSPersistentStoreUbiquitousTransitionTypeKey](nspersistentstoreubiquitoustransitiontypekey.md) in the user info dictionary of [NSPersistentStoreCoordinatorStoresWillChangeNotification](nspersistentstorecoordinatorstoreswillchangenotification.md) and [NSPersistentStoreCoordinatorStoresDidChangeNotification](nspersistentstorecoordinatorstoresdidchangenotification.md) notifications to identify the type of event leading to a change.

> Please see the release notes and Core Data documentation.

## Declaration

```swift
enum NSPersistentStoreUbiquitousTransitionType
```

## Topics

### Constants

- [NSPersistentStoreUbiquitousTransitionType.accountAdded](nspersistentstoreubiquitoustransitiontype/accountadded.md): Deprecated. This value indicates that a new iCloud account is available, and the persistent store in use will or did transition to the new account.
- [NSPersistentStoreUbiquitousTransitionType.accountRemoved](nspersistentstoreubiquitoustransitiontype/accountremoved.md): Deprecated. This value indicates that no iCloud account is available, and the persistent store in use will or did transition to the “local” store.
- [NSPersistentStoreUbiquitousTransitionType.contentRemoved](nspersistentstoreubiquitoustransitiontype/contentremoved.md): Deprecated. This value indicates that the user has wiped the contents of the iCloud account, usually using Delete All from Documents & Data in Settings.
- [NSPersistentStoreUbiquitousTransitionType.initialImportCompleted](nspersistentstoreubiquitoustransitiontype/initialimportcompleted.md): Deprecated. This value indicates that the Core Data integration has finished building a store file that is consistent with the contents of the iCloud account, and is ready to replace the fallback store with that file.

### Initializers

- [init(rawValue:)](nspersistentstoreubiquitoustransitiontype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSPersistentStoreUbiquitousTransitionType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

These constants are used as the value corresponding to the [NSPersistentStoreUbiquitousTransitionTypeKey](nspersistentstoreubiquitoustransitiontypekey.md) in the user info dictionary of [NSPersistentStoreCoordinatorStoresWillChangeNotification](nspersistentstorecoordinatorstoreswillchangenotification.md) and [NSPersistentStoreCoordinatorStoresDidChangeNotification](nspersistentstorecoordinatorstoresdidchangenotification.md) notifications to identify the type of event leading to a change.

> Please see the release notes and Core Data documentation.

## Declaration

```objectivec
enum NSPersistentStoreUbiquitousTransitionType : NSUInteger;
```

## Topics

### Constants

- [NSPersistentStoreUbiquitousTransitionTypeAccountAdded](nspersistentstoreubiquitoustransitiontype/accountadded.md): Deprecated. This value indicates that a new iCloud account is available, and the persistent store in use will or did transition to the new account.
- [NSPersistentStoreUbiquitousTransitionTypeAccountRemoved](nspersistentstoreubiquitoustransitiontype/accountremoved.md): Deprecated. This value indicates that no iCloud account is available, and the persistent store in use will or did transition to the “local” store.
- [NSPersistentStoreUbiquitousTransitionTypeContentRemoved](nspersistentstoreubiquitoustransitiontype/contentremoved.md): Deprecated. This value indicates that the user has wiped the contents of the iCloud account, usually using Delete All from Documents & Data in Settings.
- [NSPersistentStoreUbiquitousTransitionTypeInitialImportCompleted](nspersistentstoreubiquitoustransitiontype/initialimportcompleted.md): Deprecated. This value indicates that the Core Data integration has finished building a store file that is consistent with the contents of the iCloud account, and is ready to replace the fallback store with that file.
