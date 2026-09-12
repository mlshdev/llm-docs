> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanagersupportedsynccontrols](https://developer.apple.com/documentation/foundation/nsfilemanagersupportedsynccontrols)

# NSFileManagerSupportedSyncControls (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An option set of the sync controls available for an item.

## Declaration

```swift
struct NSFileManagerSupportedSyncControls
```

<a id="overview"></a>

## Overview

Get an instance of this type by calling [resourceValues(forKeys:)](url/resourcevalues%28forkeys_%29.md) on a [URL](url.md) instance (Swift) or [getResourceValue(\_:forKey:)](nsurl/getresourcevalue%28__forkey_%29.md) on an [NSURL](nsurl.md) (Swift or Objective-C) and passing in the key [ubiquitousItemSupportedSyncControlsKey](urlresourcekey/ubiquitousitemsupportedsynccontrolskey.md).

## Topics

### Inspecting supported sync controls

- [pauseSync](nsfilemanagersupportedsynccontrols/pausesync.md): The file provider supports pausing the sync on the item.
- [failUploadOnConflict](nsfilemanagersupportedsynccontrols/failuploadonconflict.md): The file provider supports failing an upload if the local and server versions conflict.

### Working with raw values

- [init(rawValue:)](nsfilemanagersupportedsynccontrols/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Controlling file provider synchronization

- [pauseSyncForUbiquitousItem(at:completionHandler:)](filemanager/pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItem(at:with:completionHandler:)](filemanager/resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItem(at:completionHandler:)](filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItem(at:withConflictResolutionPolicy:completionHandler:)](filemanager/uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.

# NSFileManagerSupportedSyncControls (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An option set of the sync controls available for an item.

## Declaration

```objectivec
enum NSFileManagerSupportedSyncControls : NSUInteger;
```

<a id="overview"></a>

## Overview

Get an instance of this type by calling [resourceValues(forKeys:)](url/resourcevalues%28forkeys_%29.md) on a [URL](url.md) instance (Swift) or [getResourceValue:forKey:error:](nsurl/getresourcevalue%28__forkey_%29.md) on an [NSURL](nsurl.md) (Swift or Objective-C) and passing in the key [NSURLUbiquitousItemSupportedSyncControlsKey](urlresourcekey/ubiquitousitemsupportedsynccontrolskey.md).

## Topics

### Inspecting supported sync controls

- [NSFileManagerSupportedSyncControlsPauseSync](nsfilemanagersupportedsynccontrols/pausesync.md): The file provider supports pausing the sync on the item.
- [NSFileManagerSupportedSyncControlsFailUploadOnConflict](nsfilemanagersupportedsynccontrols/failuploadonconflict.md): The file provider supports failing an upload if the local and server versions conflict.

## See Also

### Controlling file provider synchronization

- [pauseSyncForUbiquitousItemAtURL:completionHandler:](filemanager/pausesyncforubiquitousitem%28at_completionhandler_%29.md): Asynchronously pauses sync of an item at the given URL.
- [resumeSyncForUbiquitousItemAtURL:withBehavior:completionHandler:](filemanager/resumesyncforubiquitousitem%28at_with_completionhandler_%29.md): Asynchronously resumes the sync on a paused item using the given resume behavior.
- [NSFileManagerResumeSyncBehavior](nsfilemanagerresumesyncbehavior.md): The behaviors the file manager can apply to resolve conflicts when resuming a sync.
- [fetchLatestRemoteVersionOfItemAtURL:completionHandler:](filemanager/fetchlatestremoteversionofitem%28at_completionhandler_%29.md): Asynchronously fetches the latest remote version of a given item from the server.
- [NSFileVersion](nsfileversion.md): A snapshot of a file at a specific point in time.
- [uploadLocalVersionOfUbiquitousItemAtURL:withConflictResolutionPolicy:completionHandler:](filemanager/uploadlocalversionofubiquitousitem%28at_withconflictresolutionpolicy_completionhandler_%29.md): Asynchronously uploads the local version of the item using the provided conflict resolution policy.
- [NSFileManagerUploadLocalVersionConflictPolicy](nsfilemanageruploadlocalversionconflictpolicy.md): The policies the file manager can apply to resolve conflicts when uploading a local version of a file.
