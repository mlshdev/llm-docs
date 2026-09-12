> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationaction/targetframe](https://developer.apple.com/documentation/webkit/wknavigationaction/targetframe)

# targetFrame (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame in which to display the new content.

## Declaration

```swift
@NSCopying var targetFrame: WKFrameInfo? { get }
```

<a id="Discussion"></a>

## Discussion

If the target of the navigation is a new window, this property is `nil`.

## See Also

### Inspecting navigation information

- [request](request.md): The URL request object associated with the navigation action.
- [sourceFrame](sourceframe.md): The frame that requested the navigation.
- [shouldPerformDownload](shouldperformdownload.md): A Boolean value that indicates whether the web content provided an attribute that indicates a download.

# targetFrame (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame in which to display the new content.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) WKFrameInfo * targetFrame;
```

<a id="Discussion"></a>

## Discussion

If the target of the navigation is a new window, this property is `nil`.

## See Also

### Inspecting navigation information

- [request](request.md): The URL request object associated with the navigation action.
- [sourceFrame](sourceframe.md): The frame that requested the navigation.
- [shouldPerformDownload](shouldperformdownload.md): A Boolean value that indicates whether the web content provided an attribute that indicates a download.
