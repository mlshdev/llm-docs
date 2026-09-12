> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanageruploadlocalversionconflictpolicy/conflictpolicyfailonconflict](https://developer.apple.com/documentation/foundation/nsfilemanageruploadlocalversionconflictpolicy/conflictpolicyfailonconflict)

# NSFileManagerUploadLocalVersionConflictPolicy.conflictPolicyFailOnConflict (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Resolves the conflict by causing the upload to fail.

## Declaration

```swift
case conflictPolicyFailOnConflict
```

<a id="discussion"></a>

## Discussion

This policy causes an upload to fail if the local version of a file, with any local changes applied, doesn’t match the server version. In this scenario, call [fetchLatestRemoteVersionOfItem(at:completionHandler:)](../filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md), rebase local changes on top of the newly fetched version, and retry the upload.

This policy is only available on paused items for which the file provider supports the fail-on-conflict behavior. To check that the file provider supports the behavior, get the [ubiquitousItemSupportedSyncControlsKey](../urlresourcekey/ubiquitousitemsupportedsynccontrolskey.md) URL resource and verify that [failUploadOnConflict](../nsfilemanagersupportedsynccontrols/failuploadonconflict.md) is `true`.

## See Also

### Working with conflict policies

- [NSFileManagerUploadLocalVersionConflictPolicy.conflictPolicyDefault](conflictpolicydefault.md): Resolves the conflict using the policy defined by the file provider.

# NSFileManagerUploadConflictPolicyFailOnConflict (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Resolves the conflict by causing the upload to fail.

## Declaration

```objectivec
NSFileManagerUploadConflictPolicyFailOnConflict
```

<a id="discussion"></a>

## Discussion

This policy causes an upload to fail if the local version of a file, with any local changes applied, doesn’t match the server version. In this scenario, call [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](../filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md), rebase local changes on top of the newly fetched version, and retry the upload.

This policy is only available on paused items for which the file provider supports the fail-on-conflict behavior. To check that the file provider supports the behavior, get the [NSURLUbiquitousItemSupportedSyncControlsKey](../urlresourcekey/ubiquitousitemsupportedsynccontrolskey.md) URL resource and verify that [NSFileManagerSupportedSyncControlsFailUploadOnConflict](../nsfilemanagersupportedsynccontrols/failuploadonconflict.md) is `true`.

## See Also

### Working with conflict policies

- [NSFileManagerUploadConflictPolicyDefault](conflictpolicydefault.md): Resolves the conflict using the policy defined by the file provider.
