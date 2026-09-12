> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownload](https://developer.apple.com/documentation/backgroundassets/badownload)

# BADownload (Swift)

**Framework:** Background Assets  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An object that represents an in-progress or concluded asset download.

## Declaration

```swift
class BADownload
```

<a id="overview"></a>

## Overview

> **Note**

>  You don’t create instances of this object directly. Instead, use an object that inherits from [BADownload](badownload.md), such as [BAURLDownload](baurldownload.md).

## Topics

### Getting the identity

- [identifier](badownload/identifier.md): The app-specific string that uniquely identifies the downloadable asset.
- [uniqueIdentifier](badownload/uniqueidentifier.md): The system-provided string that uniquely identifies the download object.

### Determining the priority

- [isEssential](badownload/isessential.md)
- [priority](badownload/priority-swift.property.md): The download’s execution priority.
- [BADownload.Priority](badownload/priority-swift.struct.md): A type that determines the execution priority of a scheduled asset download.

### Getting the current state

- [state](badownload/state-swift.property.md): The current state of the download.
- [BADownload.State](badownload/state-swift.enum.md): Constants that indicate the state of a download.

### Downloading nonessential assets

- [removingEssential()](badownload/removingessential%28%29.md)

### Initializers

- [init(coder:)](badownload/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [BAURLDownload](baurldownload.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Unmanaged asset downloads

- [Configuring an unmanaged Background Assets project](configuring-an-unmanaged-background-assets-project.md): Manage and download individual assets yourself by configuring your app and extension targets.
- [Downloading essential assets in the background](downloading-essential-assets-in-the-background.md): Fetch the assets your app requires before its first launch using an app extension and the Background Assets framework.
- [BAManifestURL](../bundleresources/information-property-list/bamanifesturl.md): The location URL of the app’s manifest file that contains the names and sizes of assets.
- [BAInitialDownloadRestrictions](../bundleresources/information-property-list/bainitialdownloadrestrictions.md): The restrictions that apply to the set of assets that download immediately after app installation.
- [BAEssentialMaxInstallSize](../bundleresources/information-property-list/baessentialmaxinstallsize.md): The combined, maximum size of the essential assets that the system downloads before it launches your app in bytes.
- [BAMaxInstallSize](../bundleresources/information-property-list/bamaxinstallsize.md): The combined, maximum size, in bytes, of the non-essential assets that download immediately after app installation.
- [BADownloadManager](badownloadmanager.md): An object that manages the queue of scheduled asset downloads.
- [BADownloaderExtension](badownloaderextension-qwaw.md): An interface for reacting to app life-cycle events and processing concluded asset downloads while your app isn’t running.
- [BADownloaderExtensionConfiguration](badownloaderextensionconfiguration.md)
- [BAURLDownload](baurldownload.md): An object that represents a remote asset to download.

# BADownload (Objective-C)

**Framework:** Background Assets  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An object that represents an in-progress or concluded asset download.

## Declaration

```objectivec
@interface BADownload : NSObject
```

<a id="overview"></a>

## Overview

> **Note**

>  You don’t create instances of this object directly. Instead, use an object that inherits from [BADownload](badownload.md), such as [BAURLDownload](baurldownload.md).

## Topics

### Getting the identity

- [identifier](badownload/identifier.md): The app-specific string that uniquely identifies the downloadable asset.
- [uniqueIdentifier](badownload/uniqueidentifier.md): The system-provided string that uniquely identifies the download object.

### Determining the priority

- [isEssential](badownload/isessential.md)
- [priority](badownload/priority-swift.property.md): The download’s execution priority.
- [BADownloaderPriority](badownload/priority-swift.struct.md): A type that determines the execution priority of a scheduled asset download.

### Getting the current state

- [state](badownload/state-swift.property.md): The current state of the download.
- [BADownloadState](badownload/state-swift.enum.md): Constants that indicate the state of a download.

### Downloading nonessential assets

- [copyAsNonEssential](badownload/removingessential%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [BAURLDownload](baurldownload.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Unmanaged asset downloads

- [Configuring an unmanaged Background Assets project](configuring-an-unmanaged-background-assets-project.md): Manage and download individual assets yourself by configuring your app and extension targets.
- [BAManifestURL](../bundleresources/information-property-list/bamanifesturl.md): The location URL of the app’s manifest file that contains the names and sizes of assets.
- [BAInitialDownloadRestrictions](../bundleresources/information-property-list/bainitialdownloadrestrictions.md): The restrictions that apply to the set of assets that download immediately after app installation.
- [BAEssentialMaxInstallSize](../bundleresources/information-property-list/baessentialmaxinstallsize.md): The combined, maximum size of the essential assets that the system downloads before it launches your app in bytes.
- [BAMaxInstallSize](../bundleresources/information-property-list/bamaxinstallsize.md): The combined, maximum size, in bytes, of the non-essential assets that download immediately after app installation.
- [BADownloadManager](badownloadmanager.md): An object that manages the queue of scheduled asset downloads.
- [BADownloaderExtension](badownloaderextension-zuvm.md): An interface for reacting to app life-cycle events and processing concluded asset downloads while your app isn’t running.
- [BAURLDownload](baurldownload.md): An object that represents a remote asset to download.
