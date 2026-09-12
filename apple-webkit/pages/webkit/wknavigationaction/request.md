> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationaction/request](https://developer.apple.com/documentation/webkit/wknavigationaction/request)

# request (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The URL request object associated with the navigation action.

## Declaration

```swift
var request: URLRequest { get }
```

## See Also

### Inspecting navigation information

- [sourceFrame](sourceframe.md): The frame that requested the navigation.
- [targetFrame](targetframe.md): The frame in which to display the new content.
- [shouldPerformDownload](shouldperformdownload.md): A Boolean value that indicates whether the web content provided an attribute that indicates a download.

# request (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The URL request object associated with the navigation action.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSURLRequest * request;
```

## See Also

### Inspecting navigation information

- [sourceFrame](sourceframe.md): The frame that requested the navigation.
- [targetFrame](targetframe.md): The frame in which to display the new content.
- [shouldPerformDownload](shouldperformdownload.md): A Boolean value that indicates whether the web content provided an attribute that indicates a download.
