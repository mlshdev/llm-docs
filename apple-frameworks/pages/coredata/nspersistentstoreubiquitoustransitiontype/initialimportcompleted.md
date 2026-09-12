> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreubiquitoustransitiontype/initialimportcompleted](https://developer.apple.com/documentation/coredata/nspersistentstoreubiquitoustransitiontype/initialimportcompleted)

# NSPersistentStoreUbiquitousTransitionType.initialImportCompleted (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

This value indicates that the Core Data integration has finished building a store file that is consistent with the contents of the iCloud account, and is ready to replace the fallback store with that file.

> Please see the release notes and Core Data documentation.

## Declaration

```swift
case initialImportCompleted
```

## See Also

### Constants

- [NSPersistentStoreUbiquitousTransitionType.accountAdded](accountadded.md): Deprecated. This value indicates that a new iCloud account is available, and the persistent store in use will or did transition to the new account.
- [NSPersistentStoreUbiquitousTransitionType.accountRemoved](accountremoved.md): Deprecated. This value indicates that no iCloud account is available, and the persistent store in use will or did transition to the “local” store.
- [NSPersistentStoreUbiquitousTransitionType.contentRemoved](contentremoved.md): Deprecated. This value indicates that the user has wiped the contents of the iCloud account, usually using Delete All from Documents & Data in Settings.

# NSPersistentStoreUbiquitousTransitionTypeInitialImportCompleted (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

This value indicates that the Core Data integration has finished building a store file that is consistent with the contents of the iCloud account, and is ready to replace the fallback store with that file.

> Please see the release notes and Core Data documentation.

## Declaration

```objectivec
NSPersistentStoreUbiquitousTransitionTypeInitialImportCompleted
```

## See Also

### Constants

- [NSPersistentStoreUbiquitousTransitionTypeAccountAdded](accountadded.md): Deprecated. This value indicates that a new iCloud account is available, and the persistent store in use will or did transition to the new account.
- [NSPersistentStoreUbiquitousTransitionTypeAccountRemoved](accountremoved.md): Deprecated. This value indicates that no iCloud account is available, and the persistent store in use will or did transition to the “local” store.
- [NSPersistentStoreUbiquitousTransitionTypeContentRemoved](contentremoved.md): Deprecated. This value indicates that the user has wiped the contents of the iCloud account, usually using Delete All from Documents & Data in Settings.
