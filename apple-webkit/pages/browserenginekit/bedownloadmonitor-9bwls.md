> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedownloadmonitor-9bwls](https://developer.apple.com/documentation/browserenginekit/bedownloadmonitor-9bwls)

# BEDownloadMonitor

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+

An object that reports the status of web downloads to the system.

## Declaration

```swift
@objc(BEDownloadMonitor) class BEDownloadMonitor
```

## Mentioned In

- [Downloading files in a web browser with an alternative browser engine](downloading-files-in-a-web-browser.md)

<a id="overview"></a>

## Overview

When someone downloads a file in your web browser, create an instance of this class to report progress to the system, and optionally create a placeholder file in the person’s Downloads folder. For more information, see [Downloading files in a web browser with an alternative browser engine](downloading-files-in-a-web-browser.md).

## Topics

### Creating a download monitor

- [init(sourceURL:destinationURL:observedProgress:liveActivityAccessToken:)](bedownloadmonitor-9bwls/init%28sourceurl_destinationurl_observedprogress_liveactivityaccesstoken_%29.md): Initializes a download monitor to report progress for the specified download.
- [createAccessToken()](bedownloadmonitor-9bwls/createaccesstoken%28%29.md): Generates an opaque token that the system uses to keep your networking extension active in the background.

### Creating a download placeholder

- [useDownloadsFolder(placeholderType:finalFileCreatedHandler:)](bedownloadmonitor-9bwls/usedownloadsfolder%28placeholdertype_finalfilecreatedhandler_%29.md): Asks the system to create a placeholder for the downloaded file in the person’s Downloads folder.
- [BEDownloadMonitor.Location](bedownloadmonitor-9bwls/location.md): A class that associates a URL with the bookmark you use to access that URL.

### Reporting progress to the system

- [beginMonitoring()](bedownloadmonitor-9bwls/beginmonitoring%28%29.md): Informs the system to start monitoring the download.
- [resumeMonitoring(placeholderURL:)](bedownloadmonitor-9bwls/resumemonitoring%28placeholderurl_%29.md): Informs the system that it needs to resume monitoring the download.

### Getting information about a download

- [sourceURL](bedownloadmonitor-9bwls/sourceurl.md): A URL to a remote file to download.
- [destinationURL](bedownloadmonitor-9bwls/destinationurl.md): A local file path to the downloaded file.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Downloads

- [Downloading files in a web browser with an alternative browser engine](downloading-files-in-a-web-browser.md): Report download progress to the system to keep your networking extension active.
