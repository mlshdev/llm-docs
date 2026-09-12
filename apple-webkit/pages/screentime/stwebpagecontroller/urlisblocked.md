> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebpagecontroller/urlisblocked](https://developer.apple.com/documentation/screentime/stwebpagecontroller/urlisblocked)

# urlIsBlocked (Swift)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

A Boolean that indicates whether a parent or guardian has blocked the URL.

## Declaration

```swift
var urlIsBlocked: Bool { get }
```

<a id="discussion"></a>

## Discussion

When a parent or guardian blocks the webpage’s URL, the webpage controller displays a blocking UI and then sets this property to [YES](https://developer.apple.com/documentation/objectivec/yes).

## See Also

### Instance properties

- [suppressUsageRecording](suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [url](url.md): The URL for the webpage.
- [urlIsPictureInPicture](urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.
- [urlIsPlayingVideo](urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.

# URLIsBlocked (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

A Boolean that indicates whether a parent or guardian has blocked the URL.

## Declaration

```objectivec
@property (readonly) BOOL URLIsBlocked;
```

<a id="discussion"></a>

## Discussion

When a parent or guardian blocks the webpage’s URL, the webpage controller displays a blocking UI and then sets this property to [YES](https://developer.apple.com/documentation/objectivec/yes).

## See Also

### Instance properties

- [suppressUsageRecording](suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [URL](url.md): The URL for the webpage.
- [URLIsPictureInPicture](urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.
- [URLIsPlayingVideo](urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.
