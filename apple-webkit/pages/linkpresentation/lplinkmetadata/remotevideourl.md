> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lplinkmetadata/remotevideourl](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata/remotevideourl)

# remoteVideoURL (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A remote URL corresponding to a representative video for the URL.

## Declaration

```swift
var remoteVideoURL: URL? { get set }
```

<a id="discussion"></a>

## Discussion

This may reference a remote video file that [AVFoundation](https://developer.apple.com/documentation/avfoundation) can stream.

## See Also

### Getting the link’s video

- [videoProvider](videoprovider.md): An object that retrieves data corresponding to a representative video for the URL.

# remoteVideoURL (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A remote URL corresponding to a representative video for the URL.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSURL * remoteVideoURL;
```

<a id="discussion"></a>

## Discussion

This may reference a remote video file that [AVFoundation](https://developer.apple.com/documentation/avfoundation) can stream.

## See Also

### Getting the link’s video

- [videoProvider](videoprovider.md): An object that retrieves data corresponding to a representative video for the URL.
