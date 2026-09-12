> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebpagecontroller/url](https://developer.apple.com/documentation/screentime/stwebpagecontroller/url)

# url (Swift)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

The URL for the webpage.

## Declaration

```swift
var url: URL? { get set }
```

<a id="discussion"></a>

## Discussion

Set this value to the webpage’s URL when the user navigates to a new URL.

## See Also

### Instance properties

- [suppressUsageRecording](suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [urlIsBlocked](urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [urlIsPictureInPicture](urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.
- [urlIsPlayingVideo](urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.

# URL (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

The URL for the webpage.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * URL;
```

<a id="discussion"></a>

## Discussion

Set this value to the webpage’s URL when the user navigates to a new URL.

## See Also

### Instance properties

- [suppressUsageRecording](suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [URLIsBlocked](urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [URLIsPictureInPicture](urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.
- [URLIsPlayingVideo](urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.
