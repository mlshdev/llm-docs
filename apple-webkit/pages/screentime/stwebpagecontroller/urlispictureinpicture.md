> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebpagecontroller/urlispictureinpicture](https://developer.apple.com/documentation/screentime/stwebpagecontroller/urlispictureinpicture)

# urlIsPictureInPicture (Swift)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.

## Declaration

```swift
var urlIsPictureInPicture: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [NO](https://developer.apple.com/documentation/objectivec/no). Set this value when the webpage starts or stops displaying a Picture in Picture window.

> **Important**

> Set this value to [NO](https://developer.apple.com/documentation/objectivec/no) prior to changing [url](url.md) if the new webpage at that URL ends all currently displayed Picture in Picture windows, and won’t immediately display a new one.

## See Also

### Instance properties

- [suppressUsageRecording](suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [url](url.md): The URL for the webpage.
- [urlIsBlocked](urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [urlIsPlayingVideo](urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.

# URLIsPictureInPicture (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.

## Declaration

```objectivec
@property (nonatomic) BOOL URLIsPictureInPicture;
```

<a id="discussion"></a>

## Discussion

The default value is [NO](https://developer.apple.com/documentation/objectivec/no). Set this value when the webpage starts or stops displaying a Picture in Picture window.

> **Important**

> Set this value to [NO](https://developer.apple.com/documentation/objectivec/no) prior to changing [URL](url.md) if the new webpage at that URL ends all currently displayed Picture in Picture windows, and won’t immediately display a new one.

## See Also

### Instance properties

- [suppressUsageRecording](suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [URL](url.md): The URL for the webpage.
- [URLIsBlocked](urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [URLIsPlayingVideo](urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.
