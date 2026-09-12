> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/downloading-information-legacy](https://developer.apple.com/documentation/webkit/downloading-information-legacy)

# Downloading Information (Legacy)

**Interface languages:** Swift, Objective-C

**Framework:** WebKit  
**Kind:** API Collection

## Topics

### Downloading Information (Legacy)

- [WebDownload](webdownload.md): Deprecated. `WebDownload` objects initiate download client requests on behalf of a delegate. A download request involves loading the data, decoding it (if necessary), and saving it to a file. Instances of this class behave similar to `NSURLDownload` except delegates of `WebDownload` may implement an additional delegate method. The method allows the delegate to specify the window to be used for authentication sheets. If the delegate does not implement this method, the `WebDownload` object will prompt the user for authentication using the standard WebKit authentication panel, as either a sheet or window. There are no additional methods defined in this class. See [WebDownloadDelegate](webdownloaddelegate.md) for the delegate method.
- [WebDownloadDelegate](webdownloaddelegate.md): Deprecated. The `WebDownloadDelegate` protocol declares one additional method for delegates of [WebDownload](webdownload.md).

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
- [URL Loading System](https://developer.apple.com/documentation/foundation/url-loading-system): Interact with URLs and communicate with servers using standard Internet protocols.

### WebKit Legacy APIs

- [Document Object Models API (Legacy)](document-object-models-api-legacy.md)
- [Setting Up a Web View (Legacy)](setting-up-a-web-view-legacy.md)
- [Accessing Previous Webpages (Legacy)](accessing-previous-webpages-legacy.md)
- [Archiving Webpages (Legacy)](archiving-webpages-legacy.md)
- [Loading Resources (Legacy)](loading-resources-legacy.md)
- [Working with Frames (legacy)](working-with-frames-legacy.md)
- [Opening a File (Legacy)](opening-a-file-legacy.md)
- [Setting Policies (Legacy)](setting-policies-legacy.md)
- [Implementing Plugins (Legacy)](implementing-plugins-legacy.md)
- [Incorporating Scripts (Legacy)](incorporating-scripts-legacy.md)
- [Working With Document Web Views (Legacy)](working-with-document-web-views-legacy.md)
