> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/resumesyncforubiquitousitem(at:with:completionhandler:)](https://developer.apple.com/documentation/foundation/filemanager/resumesyncforubiquitousitem(at:with:completionhandler:))

# resumeSyncForUbiquitousItem(at:with:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Asynchronously resumes the sync on a paused item using the given resume behavior.

## Declaration

```swift
func resumeSyncForUbiquitousItem(at url: URL, with behavior: NSFileManagerResumeSyncBehavior, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func resumeSyncForUbiquitousItem(at url: URL, with behavior: NSFileManagerResumeSyncBehavior) async throws
```

## Parameters

- `url`: The URL of the item for which to resume sync.
- `behavior`: A [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md) value that tells the file manager how to handle conflicts between local and remote versions of files.
- `completionHandler`: A closure or block that the framework calls when the resume action completes. It receives a single [NSError](../nserror.md) parameter to indicate an error that prevented the resume action; the value is `nil` if the resume succeeded. In Swift, you can omit the completion handler and catch the thrown error instead.

<a id="discussion"></a>

## Discussion

Always call this method when your app closes an item to allow the file provider to sync local changes back to the server.

In most situations, the [NSFileManagerResumeSyncBehavior.preserveLocalChanges](../nsfilemanagerresumesyncbehavior/preservelocalchanges.md) behavior is the best choice to avoid any risk of data loss.

The resume call fails with [featureUnsupported](../cocoaerror/featureunsupported.md) if `url` isn’t currently paused. If the device isn’t connected to the network, the call may fail with [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with the underlying error of [serverUnreachable](../../fileprovider/nsfileprovidererror/serverunreachable.md).

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](../nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItem(at:completionHandler:)](pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItem(at:completionHandler:)](fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](../nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItem(at:withConflictResolutionPolicy:completionHandler:)](uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](../nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

# resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Asynchronously resumes the sync on a paused item using the given resume behavior.

## Declaration

```objectivec
- (void) resumeSyncForUbiquitousItemAtURL:(NSURL *) url withBehavior:(NSFileManagerResumeSyncBehavior) behavior completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL of the item for which to resume sync.
- `behavior`: A [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md) value that tells the file manager how to handle conflicts between local and remote versions of files.
- `completionHandler`: A closure or block that the framework calls when the resume action completes. It receives a single [NSError](../nserror.md) parameter to indicate an error that prevented the resume action; the value is `nil` if the resume succeeded. In Swift, you can omit the completion handler and catch the thrown error instead.

<a id="discussion"></a>

## Discussion

Always call this method when your app closes an item to allow the file provider to sync local changes back to the server.

In most situations, the [NSFileManagerResumeSyncBehaviorPreserveLocalChanges](../nsfilemanagerresumesyncbehavior/preservelocalchanges.md) behavior is the best choice to avoid any risk of data loss.

The resume call fails with [featureUnsupported](../cocoaerror/featureunsupported.md) if `url` isn’t currently paused. If the device isn’t connected to the network, the call may fail with [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with the underlying error of [serverUnreachable](../../fileprovider/nsfileprovidererror/serverunreachable.md).

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](../nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [pauseSyncForUbiquitousItemAtURL:completionHandler:](pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](../nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItemAtURL:withConflictResolutionPolicy:completionHandler:](uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](../nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.
