> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanagerresumesyncbehavior](https://developer.apple.com/documentation/foundation/nsfilemanagerresumesyncbehavior)

# NSFileManagerResumeSyncBehavior (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The behaviors the file manager can apply to resolve conflicts when resuming a sync.

## Declaration

```swift
enum NSFileManagerResumeSyncBehavior
```

<a id="overview"></a>

## Overview

You use this type when calling [resumeSyncForUbiquitousItem(at:with:completionHandler:)](filemanager/resumesyncforubiquitousitem%28at_with_completionhandler_%29.md) to resume synchronizing. In most situations, the [NSFileManagerResumeSyncBehavior.preserveLocalChanges](nsfilemanagerresumesyncbehavior/preservelocalchanges.md) behavior is the best choice to avoid risk of data loss.

## Topics

### Identifying sync behaviors

- [NSFileManagerResumeSyncBehavior.preserveLocalChanges](nsfilemanagerresumesyncbehavior/preservelocalchanges.md): Resumes synchronizing by uploading the local version of the file.
- [NSFileManagerResumeSyncBehavior.afterUploadWithFailOnConflict](nsfilemanagerresumesyncbehavior/afteruploadwithfailonconflict.md): Resumes sync by first uploading the local version of the file, failing if the provider detects a conflict.
- [NSFileManagerResumeSyncBehavior.dropLocalChanges](nsfilemanagerresumesyncbehavior/droplocalchanges.md): Resumes synchronizing by overwriting any local changes with the remote version of the file.

### Working with raw values

- [init(rawValue:)](nsfilemanagerresumesyncbehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItem(at:completionHandler:)](filemanager/pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItem(at:with:completionHandler:)](filemanager/resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [fetchLatestRemoteVersionOfItem(at:completionHandler:)](filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItem(at:withConflictResolutionPolicy:completionHandler:)](filemanager/uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

# NSFileManagerResumeSyncBehavior (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The behaviors the file manager can apply to resolve conflicts when resuming a sync.

## Declaration

```objectivec
enum NSFileManagerResumeSyncBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

You use this type when calling [resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler:](filemanager/resumesyncforubiquitousitem%28at_with_completionhandler_%29.md) to resume synchronizing. In most situations, the [NSFileManagerResumeSyncBehaviorPreserveLocalChanges](nsfilemanagerresumesyncbehavior/preservelocalchanges.md) behavior is the best choice to avoid risk of data loss.

## Topics

### Identifying sync behaviors

- [NSFileManagerResumeSyncBehaviorPreserveLocalChanges](nsfilemanagerresumesyncbehavior/preservelocalchanges.md): Resumes synchronizing by uploading the local version of the file.
- [NSFileManagerResumeSyncBehaviorAfterUploadWithFailOnConflict](nsfilemanagerresumesyncbehavior/afteruploadwithfailonconflict.md): Resumes sync by first uploading the local version of the file, failing if the provider detects a conflict.
- [NSFileManagerResumeSyncBehaviorDropLocalChanges](nsfilemanagerresumesyncbehavior/droplocalchanges.md): Resumes synchronizing by overwriting any local changes with the remote version of the file.

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItemAtURL:completionHandler:](filemanager/pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler:](filemanager/resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItemAtURL:withConflictResolutionPolicy:completionHandler:](filemanager/uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.
