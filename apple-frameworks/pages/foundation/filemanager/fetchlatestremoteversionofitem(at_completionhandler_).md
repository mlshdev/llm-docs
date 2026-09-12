> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/fetchlatestremoteversionofitem(at:completionhandler:)](https://developer.apple.com/documentation/foundation/filemanager/fetchlatestremoteversionofitem(at:completionhandler:))

# fetchLatestRemoteVersionOfItem(at:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Asynchronously fetches the latest remote version of a given item from the server.

## Declaration

```swift
func fetchLatestRemoteVersionOfItem(at url: URL, completionHandler: @escaping @Sendable (NSFileVersion?, (any Error)?) -> Void)
```

```swift
func fetchLatestRemoteVersionOfItem(at url: URL) async throws -> NSFileVersion
```

## Parameters

- `url`: The URL of the item for which to check the version.
- `completionHandler`: A closure or block that the framework calls when the fetch action completes. It receives parameters of types [NSFileVersion](../nsfileversion.md) and [NSError](../nserror.md). The error is `nil` if fetching the remote version succeeded; otherwise it indicates the error that caused the call to fail. In Swift, you can omit the completion handler, catching any error in a `do`-`catch` block and receiving the version as the return value.

<a id="discussion"></a>

## Discussion

Use this method if uploading fails due to a version conflict and sync is paused. In this case, fetching the latest remote version allows you to inspect the newer item from the server, resolve the conflict, and resume uploading.

The version provided by this call depends on several factors:

- If there is no newer version of the file on the server, the caller receives the current version of the file.
- If the server has a newer version and sync isn’t paused, this call replaces the local item and provides the version of the new item.
- If the server has a newer version but sync is paused, the returned version points to a side location. In this case, call [replaceItem(at:options:)](../nsfileversion/replaceitem%28at_options_%29.md) on the provided version object to replace the local item with the newer item from the server.

If the device isn’t connected to the network, the call may fail with [NSFileReadUnknownError](../nsfilereadunknownerror-c.enum.case.md), with the underlying error of [serverUnreachable](../../fileprovider/nsfileprovidererror/serverunreachable.md).

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](../nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItem(at:completionHandler:)](pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItem(at:with:completionHandler:)](resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [NSFileVersion](../nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItem(at:withConflictResolutionPolicy:completionHandler:)](uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](../nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

# fetchLatestRemoteVersionOfItemAtURL:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Asynchronously fetches the latest remote version of a given item from the server.

## Declaration

```objectivec
- (void) fetchLatestRemoteVersionOfItemAtURL:(NSURL *) url completionHandler:(void (^)(NSFileVersion *latestRemoteVersion, NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL of the item for which to check the version.
- `completionHandler`: A closure or block that the framework calls when the fetch action completes. It receives parameters of types [NSFileVersion](../nsfileversion.md) and [NSError](../nserror.md). The error is `nil` if fetching the remote version succeeded; otherwise it indicates the error that caused the call to fail. In Swift, you can omit the completion handler, catching any error in a `do`-`catch` block and receiving the version as the return value.

<a id="discussion"></a>

## Discussion

Use this method if uploading fails due to a version conflict and sync is paused. In this case, fetching the latest remote version allows you to inspect the newer item from the server, resolve the conflict, and resume uploading.

The version provided by this call depends on several factors:

- If there is no newer version of the file on the server, the caller receives the current version of the file.
- If the server has a newer version and sync isn’t paused, this call replaces the local item and provides the version of the new item.
- If the server has a newer version but sync is paused, the returned version points to a side location. In this case, call [replaceItemAtURL:options:error:](../nsfileversion/replaceitem%28at_options_%29.md) on the provided version object to replace the local item with the newer item from the server.

If the device isn’t connected to the network, the call may fail with [NSFileReadUnknownError](../nsfilereadunknownerror-c.enum.case.md), with the underlying error of [serverUnreachable](../../fileprovider/nsfileprovidererror/serverunreachable.md).

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](../nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItemAtURL:completionHandler:](pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler:](resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [NSFileVersion](../nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItemAtURL:withConflictResolutionPolicy:completionHandler:](uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](../nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.
