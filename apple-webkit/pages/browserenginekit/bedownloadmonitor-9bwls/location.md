> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9bwls/location](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9bwls/location)

# BEDownloadMonitor.Location

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A class that associates a URL with the bookmark you use to access that URL.

## Declaration

```swift
@objc(BEDownloadMonitorLocation) class Location
```

<a id="overview"></a>

## Overview

Pass the [bookmarkData](location/bookmarkdata.md) to your browser app to resolve the URL in the app. For information on using XPC to share data between your networking extension and browser app, see [Using XPC to communicate with browser extensions](../using-xpc-to-communicate-with-browser-extensions.md).

The URL bookmark in a `Location` isn’t suitable for storing on disk and resolving in subsequent launches of your app. To do this, create your own bookmark using [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](https://developer.apple.com/documentation/foundation/nsurl/bookmarkdata%28options:includingresourcevaluesforkeys:relativeto:%29), passing the [withSecurityScope](https://developer.apple.com/documentation/foundation/nsurl/bookmarkcreationoptions/withsecurityscope) flag.

## Topics

### Getting information about a location

- [url](location/url.md): The location of the resource.
- [bookmarkData](location/bookmarkdata.md): A bookmark that resolves to the resource’s URL.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a download placeholder

- [useDownloadsFolder(placeholderType:finalFileCreatedHandler:)](usedownloadsfolder%28placeholdertype_finalfilecreatedhandler_%29.md): Asks the system to create a placeholder for the downloaded file in the person’s Downloads folder.
