> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baurldownload](https://developer.apple.com/documentation/backgroundassets/baurldownload)

# BAURLDownload (Swift)

**Framework:** Background Assets  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An object that represents a remote asset to download.

## Declaration

```swift
class BAURLDownload
```

## Topics

### Creating a download

- [init(identifier:request:essential:fileSize:applicationGroupIdentifier:priority:)](baurldownload/init%28identifier_request_essential_filesize_applicationgroupidentifier_priority_%29.md)
- [init(identifier:request:fileSize:applicationGroupIdentifier:)](baurldownload/init%28identifier_request_filesize_applicationgroupidentifier_%29.md)
- [init(identifier:request:applicationGroupIdentifier:)](baurldownload/init%28identifier_request_applicationgroupidentifier_%29.md): Deprecated. Creates a download that uses the specified identifier and App Group.
- [init(identifier:request:applicationGroupIdentifier:priority:)](baurldownload/init%28identifier_request_applicationgroupidentifier_priority_%29.md): Deprecated. Creates a prioritized download that uses the specified identifier and App Group.

## Relationships

### Inherits From

- [BADownload](badownload.md)

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
- [BADownload](badownload.md): An object that represents an in-progress or concluded asset download.

# BAURLDownload (Objective-C)

**Framework:** Background Assets  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An object that represents a remote asset to download.

## Declaration

```objectivec
@interface BAURLDownload : BADownload
```

## Topics

### Creating a download

- [initWithIdentifier:request:essential:fileSize:applicationGroupIdentifier:priority:](baurldownload/init%28identifier_request_essential_filesize_applicationgroupidentifier_priority_%29.md)
- [initWithIdentifier:request:fileSize:applicationGroupIdentifier:](baurldownload/init%28identifier_request_filesize_applicationgroupidentifier_%29.md)
- [initWithIdentifier:request:applicationGroupIdentifier:](baurldownload/init%28identifier_request_applicationgroupidentifier_%29.md): Deprecated. Creates a download that uses the specified identifier and App Group.
- [initWithIdentifier:request:applicationGroupIdentifier:priority:](baurldownload/init%28identifier_request_applicationgroupidentifier_priority_%29.md): Deprecated. Creates a prioritized download that uses the specified identifier and App Group.

## Relationships

### Inherits From

- [BADownload](badownload.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Unmanaged asset downloads

- [Configuring an unmanaged Background Assets project](configuring-an-unmanaged-background-assets-project.md): Manage and download individual assets yourself by configuring your app and extension targets.
- [BAManifestURL](../bundleresources/information-property-list/bamanifesturl.md): The location URL of the app’s manifest file that contains the names and sizes of assets.
- [BAInitialDownloadRestrictions](../bundleresources/information-property-list/bainitialdownloadrestrictions.md): The restrictions that apply to the set of assets that download immediately after app installation.
- [BAEssentialMaxInstallSize](../bundleresources/information-property-list/baessentialmaxinstallsize.md): The combined, maximum size of the essential assets that the system downloads before it launches your app in bytes.
- [BAMaxInstallSize](../bundleresources/information-property-list/bamaxinstallsize.md): The combined, maximum size, in bytes, of the non-essential assets that download immediately after app installation.
- [BADownloadManager](badownloadmanager.md): An object that manages the queue of scheduled asset downloads.
- [BADownloaderExtension](badownloaderextension-zuvm.md): An interface for reacting to app life-cycle events and processing concluded asset downloads while your app isn’t running.
- [BADownload](badownload.md): An object that represents an in-progress or concluded asset download.
