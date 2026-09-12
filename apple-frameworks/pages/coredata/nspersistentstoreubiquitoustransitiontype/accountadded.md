> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreubiquitoustransitiontype/accountadded](https://developer.apple.com/documentation/coredata/nspersistentstoreubiquitoustransitiontype/accountadded)

# NSPersistentStoreUbiquitousTransitionType.accountAdded (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

This value indicates that a new iCloud account is available, and the persistent store in use will or did transition to the new account.

> Please see the release notes and Core Data documentation.

## Declaration

```swift
case accountAdded
```

<a id="Discussion"></a>

## Discussion

It is only possible to discern this state when the application is running, and therefore this transition type will only be posted if the account changes while the application is running or in the background.

## See Also

### Constants

- [NSPersistentStoreUbiquitousTransitionType.accountRemoved](accountremoved.md): Deprecated. This value indicates that no iCloud account is available, and the persistent store in use will or did transition to the “local” store.
- [NSPersistentStoreUbiquitousTransitionType.contentRemoved](contentremoved.md): Deprecated. This value indicates that the user has wiped the contents of the iCloud account, usually using Delete All from Documents & Data in Settings.
- [NSPersistentStoreUbiquitousTransitionType.initialImportCompleted](initialimportcompleted.md): Deprecated. This value indicates that the Core Data integration has finished building a store file that is consistent with the contents of the iCloud account, and is ready to replace the fallback store with that file.

# NSPersistentStoreUbiquitousTransitionTypeAccountAdded (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

This value indicates that a new iCloud account is available, and the persistent store in use will or did transition to the new account.

> Please see the release notes and Core Data documentation.

## Declaration

```objectivec
NSPersistentStoreUbiquitousTransitionTypeAccountAdded
```

<a id="Discussion"></a>

## Discussion

It is only possible to discern this state when the application is running, and therefore this transition type will only be posted if the account changes while the application is running or in the background.

## See Also

### Constants

- [NSPersistentStoreUbiquitousTransitionTypeAccountRemoved](accountremoved.md): Deprecated. This value indicates that no iCloud account is available, and the persistent store in use will or did transition to the “local” store.
- [NSPersistentStoreUbiquitousTransitionTypeContentRemoved](contentremoved.md): Deprecated. This value indicates that the user has wiped the contents of the iCloud account, usually using Delete All from Documents & Data in Settings.
- [NSPersistentStoreUbiquitousTransitionTypeInitialImportCompleted](initialimportcompleted.md): Deprecated. This value indicates that the Core Data integration has finished building a store file that is consistent with the contents of the iCloud account, and is ready to replace the fallback store with that file.
