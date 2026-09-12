> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitorlocation](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitorlocation)

# BEDownloadMonitorLocation

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A class that associates a URL with the bookmark you use to access that URL.

## Declaration

```objectivec
@interface BEDownloadMonitorLocation : NSObject
```

<a id="overview"></a>

## Overview

Pass the [bookmarkData](bedownloadmonitorlocation/bookmarkdata.md) to your browser app to resolve the URL in the app. For information on using XPC to share data between your networking extension and browser app, see [Using XPC to communicate with browser extensions](using-xpc-to-communicate-with-browser-extensions.md).

The URL bookmark in a `Location` isn’t suitable for storing on disk and resolving in subsequent launches of your app. To do this, create your own bookmark using [bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:](https://developer.apple.com/documentation/foundation/nsurl/bookmarkdata%28options:includingresourcevaluesforkeys:relativeto:%29), passing the [NSURLBookmarkCreationWithSecurityScope](https://developer.apple.com/documentation/foundation/nsurl/bookmarkcreationoptions/withsecurityscope) flag.

## Topics

### Getting information about a location

- [url](bedownloadmonitorlocation/url.md): The location of the resource.
- [bookmarkData](bedownloadmonitorlocation/bookmarkdata.md): A bookmark that resolves to the resource’s URL.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Creating a download placeholder

- [useDownloadsFolderWithPlaceholderType:finalFileCreatedHandler:](bedownloadmonitor-9y4hu/usedownloadsfolderwithplaceholdertype_finalfilecreatedhandler_.md): Asks the system to create a placeholder for the downloaded file in the person’s Downloads folder.
