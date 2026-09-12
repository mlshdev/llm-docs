> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanagerresumesyncbehavior/afteruploadwithfailonconflict](https://developer.apple.com/documentation/foundation/nsfilemanagerresumesyncbehavior/afteruploadwithfailonconflict)

# NSFileManagerResumeSyncBehavior.afterUploadWithFailOnConflict (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Resumes sync by first uploading the local version of the file, failing if the provider detects a conflict.

## Declaration

```swift
case afterUploadWithFailOnConflict
```

<a id="discussion"></a>

## Discussion

If the upload succeeds, the sync resumes with the [NSFileManagerResumeSyncBehavior.preserveLocalChanges](preservelocalchanges.md) behavior.

If the provider detects a conflict, the upload fails with an  [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with the underlying error of [localVersionConflictingWithServer](../../fileprovider/nsfileprovidererror/localversionconflictingwithserver.md). In this case, the app needs to call [fetchLatestRemoteVersionOfItem(at:completionHandler:)](../filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md), rebase local changes on top of the newly fetched version to resolve the conflict, and try again to resume sync. This scenario is only available on paused items for which the file provider supports the fail-on-conflict behavior. To check that the file provider supports the behavior, get the [ubiquitousItemSupportedSyncControlsKey](../urlresourcekey/ubiquitousitemsupportedsynccontrolskey.md) URL resource and verify that [failUploadOnConflict](../nsfilemanagersupportedsynccontrols/failuploadonconflict.md) is `true`.

## See Also

### Identifying sync behaviors

- [NSFileManagerResumeSyncBehavior.preserveLocalChanges](preservelocalchanges.md): Resumes synchronizing by uploading the local version of the file.
- [NSFileManagerResumeSyncBehavior.dropLocalChanges](droplocalchanges.md): Resumes synchronizing by overwriting any local changes with the remote version of the file.

# NSFileManagerResumeSyncBehaviorAfterUploadWithFailOnConflict (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Resumes sync by first uploading the local version of the file, failing if the provider detects a conflict.

## Declaration

```objectivec
NSFileManagerResumeSyncBehaviorAfterUploadWithFailOnConflict
```

<a id="discussion"></a>

## Discussion

If the upload succeeds, the sync resumes with the [NSFileManagerResumeSyncBehaviorPreserveLocalChanges](preservelocalchanges.md) behavior.

If the provider detects a conflict, the upload fails with an  [NSFileWriteUnknownError](../nsfilewriteunknownerror-c.enum.case.md), with the underlying error of [localVersionConflictingWithServer](../../fileprovider/nsfileprovidererror/localversionconflictingwithserver.md). In this case, the app needs to call [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](../filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md), rebase local changes on top of the newly fetched version to resolve the conflict, and try again to resume sync. This scenario is only available on paused items for which the file provider supports the fail-on-conflict behavior. To check that the file provider supports the behavior, get the [NSURLUbiquitousItemSupportedSyncControlsKey](../urlresourcekey/ubiquitousitemsupportedsynccontrolskey.md) URL resource and verify that [NSFileManagerSupportedSyncControlsFailUploadOnConflict](../nsfilemanagersupportedsynccontrols/failuploadonconflict.md) is `true`.

## See Also

### Identifying sync behaviors

- [NSFileManagerResumeSyncBehaviorPreserveLocalChanges](preservelocalchanges.md): Resumes synchronizing by uploading the local version of the file.
- [NSFileManagerResumeSyncBehaviorDropLocalChanges](droplocalchanges.md): Resumes synchronizing by overwriting any local changes with the remote version of the file.
