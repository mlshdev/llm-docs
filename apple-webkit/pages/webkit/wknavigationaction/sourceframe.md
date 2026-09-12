> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationaction/sourceframe](https://developer.apple.com/documentation/webkit/wknavigationaction/sourceframe)

# sourceFrame (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame that requested the navigation.

## Declaration

```swift
@NSCopying var sourceFrame: WKFrameInfo { get }
```

## See Also

### Inspecting navigation information

- [request](request.md): The URL request object associated with the navigation action.
- [targetFrame](targetframe.md): The frame in which to display the new content.
- [shouldPerformDownload](shouldperformdownload.md): A Boolean value that indicates whether the web content provided an attribute that indicates a download.

# sourceFrame (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame that requested the navigation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) WKFrameInfo * sourceFrame;
```

## See Also

### Inspecting navigation information

- [request](request.md): The URL request object associated with the navigation action.
- [targetFrame](targetframe.md): The frame in which to display the new content.
- [shouldPerformDownload](shouldperformdownload.md): A Boolean value that indicates whether the web content provided an attribute that indicates a download.
