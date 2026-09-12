> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanagerdelegate/download(_:didwritebytes:totalbyteswritten:totalbytesexpectedtowrite:)](https://developer.apple.com/documentation/backgroundassets/badownloadmanagerdelegate/download(_:didwritebytes:totalbyteswritten:totalbytesexpectedtowrite:))

# download(\_:didWriteBytes:totalBytesWritten:totalBytesExpectedToWrite:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Informs the delegate about the progress of the specified asset download.

## Declaration

```swift
optional func download(_ download: BADownload, didWriteBytes bytesWritten: Int64, totalBytesWritten: Int64, totalBytesExpectedToWrite totalExpectedBytes: Int64)
```

## Parameters

- `download`: The associated asset download.
- `bytesWritten`: The number of bytes the system writes to disk for the asset download since the previous execution of this method.
- `totalBytesWritten`: The total number of bytes the system writes to disk for the asset download.
- `totalExpectedBytes`: The total size, in bytes, that the framework expects to receive for the asset download.

<a id="Discussion"></a>

## Discussion

Because the framework may be processing several asset downloads at once, it may call this method frequently and for different downloads. Cache an asset download’s [uniqueIdentifier](../badownload/uniqueidentifier.md) when you first schedule it, and then match the identifier against the same property on `download` so you can track the individual progress of all in-progress downloads.

## See Also

### Reacting to download events

- [downloadDidBegin(\_:)](downloaddidbegin%28__%29.md): Informs the delegate about a started asset download.
- [download(\_:didReceive:completionHandler:)](download%28__didreceive_completionhandler_%29.md): Tells the delegate to resolve the specified URL authentication challenge.
- [downloadDidPause(\_:)](downloaddidpause%28__%29.md): Informs the delegate about a paused asset download.

# download:didWriteBytes:totalBytesWritten:totalBytesExpectedToWrite: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

Informs the delegate about the progress of the specified asset download.

## Declaration

```objectivec
- (void) download:(BADownload *) download didWriteBytes:(int64_t) bytesWritten totalBytesWritten:(int64_t) totalBytesWritten totalBytesExpectedToWrite:(int64_t) totalExpectedBytes;
```

## Parameters

- `download`: The associated asset download.
- `bytesWritten`: The number of bytes the system writes to disk for the asset download since the previous execution of this method.
- `totalBytesWritten`: The total number of bytes the system writes to disk for the asset download.
- `totalExpectedBytes`: The total size, in bytes, that the framework expects to receive for the asset download.

<a id="Discussion"></a>

## Discussion

Because the framework may be processing several asset downloads at once, it may call this method frequently and for different downloads. Cache an asset download’s [uniqueIdentifier](../badownload/uniqueidentifier.md) when you first schedule it, and then match the identifier against the same property on `download` so you can track the individual progress of all in-progress downloads.

## See Also

### Reacting to download events

- [downloadDidBegin:](downloaddidbegin%28__%29.md): Informs the delegate about a started asset download.
- [download:didReceiveChallenge:completionHandler:](download%28__didreceive_completionhandler_%29.md): Tells the delegate to resolve the specified URL authentication challenge.
- [downloadDidPause:](downloaddidpause%28__%29.md): Informs the delegate about a paused asset download.
