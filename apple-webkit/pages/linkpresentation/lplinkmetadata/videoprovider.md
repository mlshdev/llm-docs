> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lplinkmetadata/videoprovider](https://developer.apple.com/documentation/linkpresentation/lplinkmetadata/videoprovider)

# videoProvider (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that retrieves data corresponding to a representative video for the URL.

## Declaration

```swift
var videoProvider: NSItemProvider? { get set }
```

<a id="discussion"></a>

## Discussion

The item provider returns a video that [AVFoundation](https://developer.apple.com/documentation/avfoundation) can play.

## See Also

### Getting the link’s video

- [remoteVideoURL](remotevideourl.md): A remote URL corresponding to a representative video for the URL.

# videoProvider (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that retrieves data corresponding to a representative video for the URL.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSItemProvider * videoProvider;
```

<a id="discussion"></a>

## Discussion

The item provider returns a video that [AVFoundation](https://developer.apple.com/documentation/avfoundation) can play.

## See Also

### Getting the link’s video

- [remoteVideoURL](remotevideourl.md): A remote URL corresponding to a representative video for the URL.
