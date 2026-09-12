> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdownload](https://developer.apple.com/documentation/webkit/webdownload)

# WebDownload (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.14)

`WebDownload` objects initiate download client requests on behalf of a delegate. A download request involves loading the data, decoding it (if necessary), and saving it to a file. Instances of this class behave similar to `NSURLDownload` except delegates of `WebDownload` may implement an additional delegate method. The method allows the delegate to specify the window to be used for authentication sheets. If the delegate does not implement this method, the `WebDownload` object will prompt the user for authentication using the standard WebKit authentication panel, as either a sheet or window. There are no additional methods defined in this class. See [WebDownloadDelegate](webdownloaddelegate.md) for the delegate method.

## Declaration

```swift
class WebDownload
```

## Relationships

### Inherits From

- [NSURLDownload](https://developer.apple.com/documentation/foundation/nsurldownload)

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

### Downloading Information (Legacy)

- [WebDownloadDelegate](webdownloaddelegate.md): Deprecated. The `WebDownloadDelegate` protocol declares one additional method for delegates of [WebDownload](webdownload.md).

# WebDownload (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.14)

`WebDownload` objects initiate download client requests on behalf of a delegate. A download request involves loading the data, decoding it (if necessary), and saving it to a file. Instances of this class behave similar to `NSURLDownload` except delegates of `WebDownload` may implement an additional delegate method. The method allows the delegate to specify the window to be used for authentication sheets. If the delegate does not implement this method, the `WebDownload` object will prompt the user for authentication using the standard WebKit authentication panel, as either a sheet or window. There are no additional methods defined in this class. See [WebDownloadDelegate](webdownloaddelegate.md) for the delegate method.

## Declaration

```objectivec
@interface WebDownload : NSURLDownload
```

## Relationships

### Inherits From

- [NSURLDownload](https://developer.apple.com/documentation/foundation/nsurldownload)

## See Also

### Downloading Information (Legacy)

- [WebDownloadDelegate](webdownloaddelegate.md): Deprecated. The `WebDownloadDelegate` protocol declares one additional method for delegates of [WebDownload](webdownload.md).
