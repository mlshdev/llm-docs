> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdownloaddelegate](https://developer.apple.com/documentation/webkit/webdownloaddelegate)

# WebDownloadDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The `WebDownloadDelegate` protocol declares one additional method for delegates of [WebDownload](webdownload.md).

## Declaration

```swift
protocol WebDownloadDelegate : NSURLDownloadDelegate
```

## Topics

### Authentication messages

- [downloadWindow(forAuthenticationSheet:)](webdownloaddelegate/downloadwindow%28forauthenticationsheet_%29.md): Deprecated. Returns the window to be used by the authentication sheet.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSURLDownloadDelegate](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate)

## See Also

### Downloading Information (Legacy)

- [WebDownload](webdownload.md): Deprecated. `WebDownload` objects initiate download client requests on behalf of a delegate. A download request involves loading the data, decoding it (if necessary), and saving it to a file. Instances of this class behave similar to `NSURLDownload` except delegates of `WebDownload` may implement an additional delegate method. The method allows the delegate to specify the window to be used for authentication sheets. If the delegate does not implement this method, the `WebDownload` object will prompt the user for authentication using the standard WebKit authentication panel, as either a sheet or window. There are no additional methods defined in this class. See [WebDownloadDelegate](webdownloaddelegate.md) for the delegate method.

# WebDownloadDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The `WebDownloadDelegate` protocol declares one additional method for delegates of [WebDownload](webdownload.md).

## Declaration

```objectivec
@protocol WebDownloadDelegate <NSURLDownloadDelegate>
```

## Topics

### Authentication messages

- [downloadWindowForAuthenticationSheet:](webdownloaddelegate/downloadwindow%28forauthenticationsheet_%29.md): Deprecated. Returns the window to be used by the authentication sheet.

## Relationships

### Inherits From

- [NSURLDownloadDelegate](https://developer.apple.com/documentation/foundation/nsurldownloaddelegate)

## See Also

### Downloading Information (Legacy)

- [WebDownload](webdownload.md): Deprecated. `WebDownload` objects initiate download client requests on behalf of a delegate. A download request involves loading the data, decoding it (if necessary), and saving it to a file. Instances of this class behave similar to `NSURLDownload` except delegates of `WebDownload` may implement an additional delegate method. The method allows the delegate to specify the window to be used for authentication sheets. If the delegate does not implement this method, the `WebDownload` object will prompt the user for authentication using the standard WebKit authentication panel, as either a sheet or window. There are no additional methods defined in this class. See [WebDownloadDelegate](webdownloaddelegate.md) for the delegate method.
