> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/pausesyncforubiquitousitem(at:completionhandler:)](https://developer.apple.com/documentation/foundation/filemanager/pausesyncforubiquitousitem(at:completionhandler:))

# pauseSyncForUbiquitousItem(at:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Asynchronously pauses sync of an item at the given URL.

## Declaration

```swift
func pauseSyncForUbiquitousItem(at url: URL, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func pauseSyncForUbiquitousItem(at url: URL) async throws
```

## Parameters

- `url`: The URL of the item for which to pause sync.
- `completionHandler`: A closure or block that the framework calls when the pause action completes. It receives a single [NSError](../nserror.md) parameter to indicate an error that prevented pausing; this value is `nil` if the pause succeeded. In Swift, you can omit the completion handler and catch the thrown error instead.

<a id="discussion"></a>

## Discussion

Call this when opening an item to prevent sync from altering the contents of the URL. Once paused, the file provider will not upload local changes nor download remote changes.

While paused, call [uploadLocalVersionOfUbiquitousItem(at:withConflictResolutionPolicy:completionHandler:)](uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md) when the document is in a stable state. This action keeps the server version as up-to-date as possible.

If the item is already paused, a second call to this method reports success. If the file provider is already applying changes to the item, the pause fails with an [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with an underlying error that has domain [NSPOSIXErrorDomain](../nsposixerrordomain.md) and code [EBUSY](../posixerror/ebusy.md). If the pause fails, wait for the state to stabilize before retrying. Pausing also fails with [featureUnsupported](../cocoaerror/featureunsupported.md) if `url` refers to a regular (non-package) directory.

Pausing sync is independent of the calling app’s lifecycle; sync doesn’t automatically resume if the app closes or crashes and relaunches later. To resume syncing, explicitly call [resumeSyncForUbiquitousItem(at:with:completionHandler:)](resumesyncforubiquitousitem%28at_with_completionhandler_%29.md). Always be sure to resume syncing before you close the item.

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](../nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [resumeSyncForUbiquitousItem(at:with:completionHandler:)](resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItem(at:completionHandler:)](fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](../nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItem(at:withConflictResolutionPolicy:completionHandler:)](uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](../nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

# pauseSyncForUbiquitousItemAtURL:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Asynchronously pauses sync of an item at the given URL.

## Declaration

```objectivec
- (void) pauseSyncForUbiquitousItemAtURL:(NSURL *) url completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL of the item for which to pause sync.
- `completionHandler`: A closure or block that the framework calls when the pause action completes. It receives a single [NSError](../nserror.md) parameter to indicate an error that prevented pausing; this value is `nil` if the pause succeeded. In Swift, you can omit the completion handler and catch the thrown error instead.

<a id="discussion"></a>

## Discussion

Call this when opening an item to prevent sync from altering the contents of the URL. Once paused, the file provider will not upload local changes nor download remote changes.

While paused, call [uploadLocalVersionOfUbiquitousItemAtURL:withConflictResolutionPolicy:completionHandler:](uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md) when the document is in a stable state. This action keeps the server version as up-to-date as possible.

If the item is already paused, a second call to this method reports success. If the file provider is already applying changes to the item, the pause fails with an [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with an underlying error that has domain [NSPOSIXErrorDomain](../nsposixerrordomain.md) and code [EBUSY](../posixerror/ebusy.md). If the pause fails, wait for the state to stabilize before retrying. Pausing also fails with [featureUnsupported](../cocoaerror/featureunsupported.md) if `url` refers to a regular (non-package) directory.

Pausing sync is independent of the calling app’s lifecycle; sync doesn’t automatically resume if the app closes or crashes and relaunches later. To resume syncing, explicitly call [resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler:](resumesyncforubiquitousitem%28at_with_completionhandler_%29.md). Always be sure to resume syncing before you close the item.

## See Also

### Controlling file provider synchronization

- [NSFileManagerSupportedSyncControls](../nsfilemanagersupportedsynccontrols.md): An option set of the sync controls available for an item.
- [resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler:](resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](../nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](../nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItemAtURL:withConflictResolutionPolicy:completionHandler:](uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](../nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.
