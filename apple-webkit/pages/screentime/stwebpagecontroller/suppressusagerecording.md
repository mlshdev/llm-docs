> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebpagecontroller/suppressusagerecording](https://developer.apple.com/documentation/screentime/stwebpagecontroller/suppressusagerecording)

# suppressUsageRecording (Swift)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

A Boolean that indicates whether the webpage controller is not recording web usage.

## Declaration

```swift
var suppressUsageRecording: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set to [YES](https://developer.apple.com/documentation/objectivec/yes) to stop recording and reporting web-usage data.

## See Also

### Instance properties

- [url](url.md): The URL for the webpage.
- [urlIsBlocked](urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [urlIsPictureInPicture](urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.
- [urlIsPlayingVideo](urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.

# suppressUsageRecording (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

A Boolean that indicates whether the webpage controller is not recording web usage.

## Declaration

```objectivec
@property (nonatomic) BOOL suppressUsageRecording;
```

<a id="discussion"></a>

## Discussion

Set to [YES](https://developer.apple.com/documentation/objectivec/yes) to stop recording and reporting web-usage data.

## See Also

### Instance properties

- [URL](url.md): The URL for the webpage.
- [URLIsBlocked](urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [URLIsPictureInPicture](urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.
- [URLIsPlayingVideo](urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.
