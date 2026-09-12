> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanager](https://developer.apple.com/documentation/backgroundassets/badownloadmanager)

# BADownloadManager (Swift)

**Framework:** Background Assets  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An object that manages the queue of scheduled asset downloads.

## Declaration

```swift
class BADownloadManager
```

<a id="overview"></a>

## Overview

Use [BADownloadManager](badownloadmanager.md) to schedule and cancel asset downloads, monitor their progress, and access the queue of pending downloads. You don’t create instances of this class directly; instead, use the [shared](badownloadmanager/shared.md) property to access the framework’s singleton that it shares between your app and the app’s extension. Because the download manager is a shared resource, prevent race conditions by using the `withExclusiveControl(_:)` and [withExclusiveControl(beforeDate:perform:)](badownloadmanager/withexclusivecontrol%28beforedate_perform_%29.md) methods to assume absolute control of the manager before you schedule asset downloads or manipulate those already in the manager’s queue. To respond to asset download events and process concluded downloads, create a type that conforms to the [BADownloadManagerDelegate](badownloadmanagerdelegate.md) protocol and assign an instance of it to the download manager’s [delegate](badownloadmanager/delegate.md) property.

The following example shows how to create an asset download, acquire exclusive control of the shared download manager, and then use the manager to schedule the download:

```swift
let url = URL(string: "https://cdn.example.com/level-resources.zip")!
let request = URLRequest(url: url)
let identifier = "group.com.example.my-game"

// Create an asset download.
let download = BAURLDownload(identifier: "level-resources",
                             request: request,
                             applicationGroupIdentifier: identifier)

// Access the shared download manager.
let manager = BADownloadManager.shared

// Assign the manager's delegate so the framework can notify
// the app of asset download events.
manager.delegate = self

do {
    // Attempt to acquire exclusive control of the manager.
    manager.withExclusiveControl { error in
        // Return immediately if that attempt fails.
        if let error {
            print(error.localizedDescription)
            return
        }
        
        // Use the manager to schedule the asset download.
        try manager.schedule(download)
    }
} catch {
    // Handle the error.
    print(error.localizedDescription)
}

```

## Topics

### Accessing the download manager

- [shared](badownloadmanager/shared.md): The download manager that both the app and the extension share.

### Managing downloads

- [scheduleDownload(\_:)](badownloadmanager/scheduledownload%28__%29.md): Schedules an asset download to execute in the background at a nonspecific time in the future.
- [startForegroundDownload(\_:)](badownloadmanager/startforegrounddownload%28__%29.md): Schedules an asset download that executes immediately in the foreground.
- [cancel(\_:)](badownloadmanager/cancel%28__%29.md): Cancels an asset download.

### Monitoring downloads

- [delegate](badownloadmanager/delegate.md): The download manager’s delegate.
- [BADownloadManagerDelegate](badownloadmanagerdelegate.md): An interface for reacting to asset download events and processing concluded downloads.

### Fetching in-progress downloads

- [fetchCurrentDownloads()](badownloadmanager/fetchcurrentdownloads%28%29.md)
- [fetchCurrentDownloads(completionHandler:)](badownloadmanager/fetchcurrentdownloads%28completionhandler_%29.md): Fetches the contents of the manager’s download queue.

### Synchronizing manager access

- [withExclusiveControl(beforeDate:perform:)](badownloadmanager/withexclusivecontrol%28beforedate_perform_%29.md): Deprecated.

### Instance Methods

- [withExclusiveControl(\_:)](badownloadmanager/withexclusivecontrol%28__%29-1rf9w.md): Attempts to acquire immediate, exclusive control over the download manager.
- [withExclusiveControl(\_:)](badownloadmanager/withexclusivecontrol%28__%29-2ang9.md): Deprecated.
- [withExclusiveControl(before:\_:)](badownloadmanager/withexclusivecontrol%28before___%29.md): Attempts to acquire immediate, exclusive control over the download manager before the specified date.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Unmanaged asset downloads

- [Configuring an unmanaged Background Assets project](configuring-an-unmanaged-background-assets-project.md): Manage and download individual assets yourself by configuring your app and extension targets.
- [Downloading essential assets in the background](downloading-essential-assets-in-the-background.md): Fetch the assets your app requires before its first launch using an app extension and the Background Assets framework.
- [BAManifestURL](../bundleresources/information-property-list/bamanifesturl.md): The location URL of the app’s manifest file that contains the names and sizes of assets.
- [BAInitialDownloadRestrictions](../bundleresources/information-property-list/bainitialdownloadrestrictions.md): The restrictions that apply to the set of assets that download immediately after app installation.
- [BAEssentialMaxInstallSize](../bundleresources/information-property-list/baessentialmaxinstallsize.md): The combined, maximum size of the essential assets that the system downloads before it launches your app in bytes.
- [BAMaxInstallSize](../bundleresources/information-property-list/bamaxinstallsize.md): The combined, maximum size, in bytes, of the non-essential assets that download immediately after app installation.
- [BADownloaderExtension](badownloaderextension-qwaw.md): An interface for reacting to app life-cycle events and processing concluded asset downloads while your app isn’t running.
- [BADownloaderExtensionConfiguration](badownloaderextensionconfiguration.md)
- [BAURLDownload](baurldownload.md): An object that represents a remote asset to download.
- [BADownload](badownload.md): An object that represents an in-progress or concluded asset download.

# BADownloadManager (Objective-C)

**Framework:** Background Assets  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An object that manages the queue of scheduled asset downloads.

## Declaration

```objectivec
@interface BADownloadManager : NSObject
```

<a id="overview"></a>

## Overview

Use [BADownloadManager](badownloadmanager.md) to schedule and cancel asset downloads, monitor their progress, and access the queue of pending downloads. You don’t create instances of this class directly; instead, use the [sharedManager](badownloadmanager/shared.md) property to access the framework’s singleton that it shares between your app and the app’s extension. Because the download manager is a shared resource, prevent race conditions by using the `withExclusiveControl(_:)` and [performWithExclusiveControlBeforeDate:performHandler:](badownloadmanager/withexclusivecontrol%28beforedate_perform_%29.md) methods to assume absolute control of the manager before you schedule asset downloads or manipulate those already in the manager’s queue. To respond to asset download events and process concluded downloads, create a type that conforms to the [BADownloadManagerDelegate](badownloadmanagerdelegate.md) protocol and assign an instance of it to the download manager’s [delegate](badownloadmanager/delegate.md) property.

The following example shows how to create an asset download, acquire exclusive control of the shared download manager, and then use the manager to schedule the download:

```swift
let url = URL(string: "https://cdn.example.com/level-resources.zip")!
let request = URLRequest(url: url)
let identifier = "group.com.example.my-game"

// Create an asset download.
let download = BAURLDownload(identifier: "level-resources",
                             request: request,
                             applicationGroupIdentifier: identifier)

// Access the shared download manager.
let manager = BADownloadManager.shared

// Assign the manager's delegate so the framework can notify
// the app of asset download events.
manager.delegate = self

do {
    // Attempt to acquire exclusive control of the manager.
    manager.withExclusiveControl { error in
        // Return immediately if that attempt fails.
        if let error {
            print(error.localizedDescription)
            return
        }
        
        // Use the manager to schedule the asset download.
        try manager.schedule(download)
    }
} catch {
    // Handle the error.
    print(error.localizedDescription)
}

```

## Topics

### Accessing the download manager

- [sharedManager](badownloadmanager/shared.md): The download manager that both the app and the extension share.

### Managing downloads

- [scheduleDownload:error:](badownloadmanager/scheduledownload%28__%29.md): Schedules an asset download to execute in the background at a nonspecific time in the future.
- [startForegroundDownload:error:](badownloadmanager/startforegrounddownload%28__%29.md): Schedules an asset download that executes immediately in the foreground.
- [cancelDownload:error:](badownloadmanager/cancel%28__%29.md): Cancels an asset download.

### Monitoring downloads

- [delegate](badownloadmanager/delegate.md): The download manager’s delegate.
- [BADownloadManagerDelegate](badownloadmanagerdelegate.md): An interface for reacting to asset download events and processing concluded downloads.

### Fetching in-progress downloads

- [fetchCurrentDownloads:](badownloadmanager/fetchcurrentdownloads%28%29.md)
- [fetchCurrentDownloadsWithCompletionHandler:](badownloadmanager/fetchcurrentdownloads%28completionhandler_%29.md): Fetches the contents of the manager’s download queue.

### Synchronizing manager access

- [performWithExclusiveControlBeforeDate:performHandler:](badownloadmanager/withexclusivecontrol%28beforedate_perform_%29.md): Deprecated.

### Instance Methods

- [performWithExclusiveControl:](badownloadmanager/withexclusivecontrol%28__%29-2ang9.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Unmanaged asset downloads

- [Configuring an unmanaged Background Assets project](configuring-an-unmanaged-background-assets-project.md): Manage and download individual assets yourself by configuring your app and extension targets.
- [BAManifestURL](../bundleresources/information-property-list/bamanifesturl.md): The location URL of the app’s manifest file that contains the names and sizes of assets.
- [BAInitialDownloadRestrictions](../bundleresources/information-property-list/bainitialdownloadrestrictions.md): The restrictions that apply to the set of assets that download immediately after app installation.
- [BAEssentialMaxInstallSize](../bundleresources/information-property-list/baessentialmaxinstallsize.md): The combined, maximum size of the essential assets that the system downloads before it launches your app in bytes.
- [BAMaxInstallSize](../bundleresources/information-property-list/bamaxinstallsize.md): The combined, maximum size, in bytes, of the non-essential assets that download immediately after app installation.
- [BADownloaderExtension](badownloaderextension-zuvm.md): An interface for reacting to app life-cycle events and processing concluded asset downloads while your app isn’t running.
- [BAURLDownload](baurldownload.md): An object that represents a remote asset to download.
- [BADownload](badownload.md): An object that represents an in-progress or concluded asset download.
