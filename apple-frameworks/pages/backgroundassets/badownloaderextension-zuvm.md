> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-zuvm](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-zuvm)

# BADownloaderExtension

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Protocol  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An interface for reacting to app life-cycle events and processing concluded asset downloads while your app isn’t running.

## Declaration

```objectivec
@protocol BADownloaderExtension <NSObject>
```

## Topics

### Processing downloads

- [backgroundDownload:didReceiveChallenge:completionHandler:](badownloaderextension-zuvm/backgrounddownload_didreceivechallenge_completionhandler_.md)
- [backgroundDownload:finishedWithFileURL:](badownloaderextension-zuvm/backgrounddownload_finishedwithfileurl_.md)
- [backgroundDownload:failedWithError:](badownloaderextension-zuvm/backgrounddownload_failedwitherror_.md)

### Checking for asset updates

- [downloadsForRequest:manifestURL:extensionInfo:](badownloaderextension-zuvm/downloadsforrequest_manifesturl_extensioninfo_.md)
- [BAContentRequest](bacontentrequest.md): A type that indicates the purpose of a content download request.
- [BAAppExtensionInfo](baappextensioninfo.md)

### Reacting to extension events

- [extensionWillTerminate](badownloaderextension-zuvm/extensionwillterminate.md): Deprecated. Informs the extension that its allotted execution time is over and the system is about to stop the process.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [BAManagedDownloaderExtension](bamanageddownloaderextension.md)

## See Also

### Unmanaged asset downloads

- [Configuring an unmanaged Background Assets project](configuring-an-unmanaged-background-assets-project.md): Manage and download individual assets yourself by configuring your app and extension targets.
- [BAManifestURL](../bundleresources/information-property-list/bamanifesturl.md): The location URL of the app’s manifest file that contains the names and sizes of assets.
- [BAInitialDownloadRestrictions](../bundleresources/information-property-list/bainitialdownloadrestrictions.md): The restrictions that apply to the set of assets that download immediately after app installation.
- [BAEssentialMaxInstallSize](../bundleresources/information-property-list/baessentialmaxinstallsize.md): The combined, maximum size of the essential assets that the system downloads before it launches your app in bytes.
- [BAMaxInstallSize](../bundleresources/information-property-list/bamaxinstallsize.md): The combined, maximum size, in bytes, of the non-essential assets that download immediately after app installation.
- [BADownloadManager](badownloadmanager.md): An object that manages the queue of scheduled asset downloads.
- [BAURLDownload](baurldownload.md): An object that represents a remote asset to download.
- [BADownload](badownload.md): An object that represents an in-progress or concluded asset download.
