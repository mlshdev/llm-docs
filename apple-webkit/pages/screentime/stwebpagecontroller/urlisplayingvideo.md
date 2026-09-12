> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebpagecontroller/urlisplayingvideo](https://developer.apple.com/documentation/screentime/stwebpagecontroller/urlisplayingvideo)

# urlIsPlayingVideo (Swift)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

A Boolean that indicates whether there are one or more videos currently playing in the webpage.

## Declaration

```swift
var urlIsPlayingVideo: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [NO](https://developer.apple.com/documentation/objectivec/no). Set this value when the webpage starts or stops playing video.

> **Important**

> Set this value to [NO](https://developer.apple.com/documentation/objectivec/no) prior to changing [url](url.md) if the new webpage at that URL stops currently playing media and won’t immediately start playing new media.

## See Also

### Instance properties

- [suppressUsageRecording](suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [url](url.md): The URL for the webpage.
- [urlIsBlocked](urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [urlIsPictureInPicture](urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.

# URLIsPlayingVideo (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

A Boolean that indicates whether there are one or more videos currently playing in the webpage.

## Declaration

```objectivec
@property (nonatomic) BOOL URLIsPlayingVideo;
```

<a id="discussion"></a>

## Discussion

The default value is [NO](https://developer.apple.com/documentation/objectivec/no). Set this value when the webpage starts or stops playing video.

> **Important**

> Set this value to [NO](https://developer.apple.com/documentation/objectivec/no) prior to changing [URL](url.md) if the new webpage at that URL stops currently playing media and won’t immediately start playing new media.

## See Also

### Instance properties

- [suppressUsageRecording](suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [URL](url.md): The URL for the webpage.
- [URLIsBlocked](urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [URLIsPictureInPicture](urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.
