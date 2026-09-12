> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanagerdelegate](https://developer.apple.com/documentation/backgroundassets/badownloadmanagerdelegate)

# BADownloadManagerDelegate (Swift)

**Framework:** Background Assets  
**Kind:** Protocol  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An interface for reacting to asset download events and processing concluded downloads.

## Declaration

```swift
protocol BADownloadManagerDelegate : NSObjectProtocol
```

## Topics

### Reacting to download events

- [downloadDidBegin(\_:)](badownloadmanagerdelegate/downloaddidbegin%28__%29.md): Informs the delegate about a started asset download.
- [download(\_:didReceive:completionHandler:)](badownloadmanagerdelegate/download%28__didreceive_completionhandler_%29.md): Tells the delegate to resolve the specified URL authentication challenge.
- [download(\_:didWriteBytes:totalBytesWritten:totalBytesExpectedToWrite:)](badownloadmanagerdelegate/download%28__didwritebytes_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Informs the delegate about the progress of the specified asset download.
- [downloadDidPause(\_:)](badownloadmanagerdelegate/downloaddidpause%28__%29.md): Informs the delegate about a paused asset download.

### Processing concluded downloads

- [download(\_:finishedWithFileURL:)](badownloadmanagerdelegate/download%28__finishedwithfileurl_%29.md): Informs the delegate about a finished asset download and provides the on-disk location.
- [download(\_:failedWithError:)](badownloadmanagerdelegate/download%28__failedwitherror_%29.md): Informs the delegate about a failed asset download.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Monitoring downloads

- [delegate](badownloadmanager/delegate.md): The download manager’s delegate.

# BADownloadManagerDelegate (Objective-C)

**Framework:** Background Assets  
**Kind:** Protocol  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

An interface for reacting to asset download events and processing concluded downloads.

## Declaration

```objectivec
@protocol BADownloadManagerDelegate <NSObject>
```

## Topics

### Reacting to download events

- [downloadDidBegin:](badownloadmanagerdelegate/downloaddidbegin%28__%29.md): Informs the delegate about a started asset download.
- [download:didReceiveChallenge:completionHandler:](badownloadmanagerdelegate/download%28__didreceive_completionhandler_%29.md): Tells the delegate to resolve the specified URL authentication challenge.
- [download:didWriteBytes:totalBytesWritten:totalBytesExpectedToWrite:](badownloadmanagerdelegate/download%28__didwritebytes_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Informs the delegate about the progress of the specified asset download.
- [downloadDidPause:](badownloadmanagerdelegate/downloaddidpause%28__%29.md): Informs the delegate about a paused asset download.

### Processing concluded downloads

- [download:finishedWithFileURL:](badownloadmanagerdelegate/download%28__finishedwithfileurl_%29.md): Informs the delegate about a finished asset download and provides the on-disk location.
- [download:failedWithError:](badownloadmanagerdelegate/download%28__failedwitherror_%29.md): Informs the delegate about a failed asset download.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Monitoring downloads

- [delegate](badownloadmanager/delegate.md): The download manager’s delegate.
