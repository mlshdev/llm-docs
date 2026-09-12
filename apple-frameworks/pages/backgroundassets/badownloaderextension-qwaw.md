> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-qwaw](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw)

# BADownloaderExtension

**Framework:** Background Assets  
**Kind:** Protocol  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An interface for reacting to app life-cycle events and processing concluded asset downloads while your app isn’t running.

## Declaration

```swift
protocol BADownloaderExtension : AppExtension
```

## Topics

### Processing downloads

- [backgroundDownload(\_:didReceive:)](badownloaderextension-qwaw/backgrounddownload%28__didreceive_%29.md)
- [backgroundDownload(\_:finishedWithFileURL:)](badownloaderextension-qwaw/backgrounddownload%28__finishedwithfileurl_%29.md)
- [backgroundDownload(\_:failedWithError:)](badownloaderextension-qwaw/backgrounddownload%28__failedwitherror_%29.md)

### Checking for asset updates

- [downloads(for:manifestURL:extensionInfo:)](badownloaderextension-qwaw/downloads%28for_manifesturl_extensioninfo_%29.md)
- [BAContentRequest](bacontentrequest.md): A type that indicates the purpose of a content download request.
- [BAAppExtensionInfo](baappextensioninfo.md)

### Reacting to extension events

- [extensionWillTerminate()](badownloaderextension-qwaw/extensionwillterminate%28%29.md): Deprecated. This method may be called shortly before the extension is terminated.
- [extensionWillTerminate()](badownloaderextension-qwaw/extensionwillterminate%28%29-236ac.md)

### Instance Methods

- [extensionWillTerminate()](badownloaderextension-qwaw/extensionwillterminate%28%29.md): Deprecated. This method may be called shortly before the extension is terminated.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)

### Inherited By

- [ManagedDownloaderExtension](manageddownloaderextension.md)

## See Also

### Unmanaged asset downloads

- [Configuring an unmanaged Background Assets project](configuring-an-unmanaged-background-assets-project.md): Manage and download individual assets yourself by configuring your app and extension targets.
- [Downloading essential assets in the background](downloading-essential-assets-in-the-background.md): Fetch the assets your app requires before its first launch using an app extension and the Background Assets framework.
- [BAManifestURL](../bundleresources/information-property-list/bamanifesturl.md): The location URL of the app’s manifest file that contains the names and sizes of assets.
- [BAInitialDownloadRestrictions](../bundleresources/information-property-list/bainitialdownloadrestrictions.md): The restrictions that apply to the set of assets that download immediately after app installation.
- [BAEssentialMaxInstallSize](../bundleresources/information-property-list/baessentialmaxinstallsize.md): The combined, maximum size of the essential assets that the system downloads before it launches your app in bytes.
- [BAMaxInstallSize](../bundleresources/information-property-list/bamaxinstallsize.md): The combined, maximum size, in bytes, of the non-essential assets that download immediately after app installation.
- [BADownloadManager](badownloadmanager.md): An object that manages the queue of scheduled asset downloads.
- [BADownloaderExtensionConfiguration](badownloaderextensionconfiguration.md)
- [BAURLDownload](baurldownload.md): An object that represents a remote asset to download.
- [BADownload](badownload.md): An object that represents an in-progress or concluded asset download.
