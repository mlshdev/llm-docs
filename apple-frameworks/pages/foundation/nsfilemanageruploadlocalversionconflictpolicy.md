> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanageruploadlocalversionconflictpolicy](https://developer.apple.com/documentation/foundation/nsfilemanageruploadlocalversionconflictpolicy)

# NSFileManagerUploadLocalVersionConflictPolicy (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

## Declaration

```swift
enum NSFileManagerUploadLocalVersionConflictPolicy
```

## Topics

### Working with conflict policies

- [NSFileManagerUploadLocalVersionConflictPolicy.conflictPolicyDefault](nsfilemanageruploadlocalversionconflictpolicy/conflictpolicydefault.md): Resolves the conflict using the policy defined by the file provider.
- [NSFileManagerUploadLocalVersionConflictPolicy.conflictPolicyFailOnConflict](nsfilemanageruploadlocalversionconflictpolicy/conflictpolicyfailonconflict.md): Resolves the conflict by causing the upload to fail.

### Working with raw values

- [init(rawValue:)](nsfilemanageruploadlocalversionconflictpolicy/init%28rawvalue_%29.md)

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
- [NSFileManagerResumeSyncBehavior](nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItem(at:completionHandler:)](filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItem(at:withConflictResolutionPolicy:completionHandler:)](filemanager/uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.

# NSFileManagerUploadLocalVersionConflictPolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

## Declaration

```objectivec
enum NSFileManagerUploadLocalVersionConflictPolicy : NSInteger;
```

## Topics

### Working with conflict policies

- [NSFileManagerUploadConflictPolicyDefault](nsfilemanageruploadlocalversionconflictpolicy/conflictpolicydefault.md): Resolves the conflict using the policy defined by the file provider.
- [NSFileManagerUploadConflictPolicyFailOnConflict](nsfilemanageruploadlocalversionconflictpolicy/conflictpolicyfailonconflict.md): Resolves the conflict by causing the upload to fail.

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItemAtURL:completionHandler:](filemanager/pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler:](filemanager/resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItemAtURL:withConflictResolutionPolicy:completionHandler:](filemanager/uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
