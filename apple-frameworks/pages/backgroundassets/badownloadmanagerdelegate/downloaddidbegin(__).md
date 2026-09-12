> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanagerdelegate/downloaddidbegin(_:)](https://developer.apple.com/documentation/backgroundassets/badownloadmanagerdelegate/downloaddidbegin(_:))

# downloadDidBegin(\_:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Informs the delegate about a started asset download.

## Declaration

```swift
optional func downloadDidBegin(_ download: BADownload)
```

## Parameters

- `download`: The started asset download.

## See Also

### Reacting to download events

- [download(\_:didReceive:completionHandler:)](download%28__didreceive_completionhandler_%29.md): Tells the delegate to resolve the specified URL authentication challenge.
- [download(\_:didWriteBytes:totalBytesWritten:totalBytesExpectedToWrite:)](download%28__didwritebytes_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Informs the delegate about the progress of the specified asset download.
- [downloadDidPause(\_:)](downloaddidpause%28__%29.md): Informs the delegate about a paused asset download.

# downloadDidBegin: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Informs the delegate about a started asset download.

## Declaration

```objectivec
- (void) downloadDidBegin:(BADownload *) download;
```

## Parameters

- `download`: The started asset download.

## See Also

### Reacting to download events

- [download:didReceiveChallenge:completionHandler:](download%28__didreceive_completionhandler_%29.md): Tells the delegate to resolve the specified URL authentication challenge.
- [download:didWriteBytes:totalBytesWritten:totalBytesExpectedToWrite:](download%28__didwritebytes_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Informs the delegate about the progress of the specified asset download.
- [downloadDidPause:](downloaddidpause%28__%29.md): Informs the delegate about a paused asset download.
