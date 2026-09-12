> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationaction/shouldperformdownload](https://developer.apple.com/documentation/webkit/wknavigationaction/shouldperformdownload)

# shouldPerformDownload (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

A Boolean value that indicates whether the web content provided an attribute that indicates a download.

## Declaration

```swift
var shouldPerformDownload: Bool { get }
```

## See Also

### Inspecting navigation information

- [request](request.md): The URL request object associated with the navigation action.
- [sourceFrame](sourceframe.md): The frame that requested the navigation.
- [targetFrame](targetframe.md): The frame in which to display the new content.

# shouldPerformDownload (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

A Boolean value that indicates whether the web content provided an attribute that indicates a download.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldPerformDownload;
```

## See Also

### Inspecting navigation information

- [request](request.md): The URL request object associated with the navigation action.
- [sourceFrame](sourceframe.md): The frame that requested the navigation.
- [targetFrame](targetframe.md): The frame in which to display the new content.
