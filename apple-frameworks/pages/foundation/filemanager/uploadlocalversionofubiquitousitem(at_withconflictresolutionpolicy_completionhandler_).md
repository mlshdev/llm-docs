> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/uploadlocalversionofubiquitousitem(at:withconflictresolutionpolicy:completionhandler:)](https://developer.apple.com/documentation/foundation/filemanager/uploadlocalversionofubiquitousitem(at:withconflictresolutionpolicy:completionhandler:))

# uploadLocalVersionOfUbiquitousItem(at:withConflictResolutionPolicy:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Asynchronously uploads the local version of the item using the provided conflict resolution policy.

## Declaration

```swift
func uploadLocalVersionOfUbiquitousItem(at url: URL, withConflictResolutionPolicy conflictResolutionPolicy: NSFileManagerUploadLocalVersionConflictPolicy, completionHandler: @escaping @Sendable (NSFileVersion?, (any Error)?) -> Void)
```

```swift
func uploadLocalVersionOfUbiquitousItem(at url: URL, withConflictResolutionPolicy conflictResolutionPolicy: NSFileManagerUploadLocalVersionConflictPolicy) async throws -> NSFileVersion
```

## Parameters

- `url`: The URL of the item for which to check the version.
- `conflictResolutionPolicy`: The policy the file manager applies if the local and server versions conflict.
- `completionHandler`: A closure or block that the framework calls when the upload completes. It receives parameters of types [NSFileVersion](../nsfileversion.md) and [NSError](../nserror.md). The error is `nil` if fetching the remote version succeeded; otherwise it indicates the error that caused the call to fail. In Swift, you can omit the completion handler, catching any error in a `do`-`catch` block and receiving the version as the return value.

<a id="discussion"></a>

## Discussion

Once your app pauses a sync for an item, call this method every time your document is in a stable state. This action keeps the server version as up-to-date as possible.

If the server has a newer version than the one to which the app made changes, uploading fails with [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with an underlying error of [localVersionConflictingWithServer](../../fileprovider/nsfileprovidererror/localversionconflictingwithserver.md). In this case, call [fetchLatestRemoteVersionOfItem(at:completionHandler:)](fetchlatestremoteversionofitem%28at_completionhandler_%29.md), rebase local changes on top of that version, and retry the upload.

If the device isn’t connected to the network, the call may fail with [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with the underlying error of [serverUnreachable](../../fileprovider/nsfileprovidererror/serverunreachable.md).

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](../nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItem(at:completionHandler:)](pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItem(at:with:completionHandler:)](resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItem(at:completionHandler:)](fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](../nsfileversion.md): A snapshot of a file at a specific point in time.
- [NSFileManagerUploadLocalVersionConflictPolicy](../nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

# uploadLocalVersionOfUbiquitousItemAtURL:withConflictResolutionPolicy:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Asynchronously uploads the local version of the item using the provided conflict resolution policy.

## Declaration

```objectivec
- (void) uploadLocalVersionOfUbiquitousItemAtURL:(NSURL *) url withConflictResolutionPolicy:(NSFileManagerUploadLocalVersionConflictPolicy) conflictResolutionPolicy completionHandler:(void (^)(NSFileVersion *uploadedVersion, NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL of the item for which to check the version.
- `conflictResolutionPolicy`: The policy the file manager applies if the local and server versions conflict.
- `completionHandler`: A closure or block that the framework calls when the upload completes. It receives parameters of types [NSFileVersion](../nsfileversion.md) and [NSError](../nserror.md). The error is `nil` if fetching the remote version succeeded; otherwise it indicates the error that caused the call to fail. In Swift, you can omit the completion handler, catching any error in a `do`-`catch` block and receiving the version as the return value.

<a id="discussion"></a>

## Discussion

Once your app pauses a sync for an item, call this method every time your document is in a stable state. This action keeps the server version as up-to-date as possible.

If the server has a newer version than the one to which the app made changes, uploading fails with [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with an underlying error of [localVersionConflictingWithServer](../../fileprovider/nsfileprovidererror/localversionconflictingwithserver.md). In this case, call [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](fetchlatestremoteversionofitem%28at_completionhandler_%29.md), rebase local changes on top of that version, and retry the upload.

If the device isn’t connected to the network, the call may fail with [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with the underlying error of [serverUnreachable](../../fileprovider/nsfileprovidererror/serverunreachable.md).

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](../nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItemAtURL:completionHandler:](pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler:](resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](../nsfileversion.md): A snapshot of a file at a specific point in time.
- [NSFileManagerUploadLocalVersionConflictPolicy](../nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.
