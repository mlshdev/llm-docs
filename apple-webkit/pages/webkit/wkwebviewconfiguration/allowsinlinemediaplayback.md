> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/allowsinlinemediaplayback](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/allowsinlinemediaplayback)

# allowsInlineMediaPlayback (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether HTML5 videos play inline or use the native full-screen controller.

## Declaration

```swift
var allowsInlineMediaPlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to play videos inline, or [false](https://developer.apple.com/documentation/swift/false) to use the native full-screen controller. When adding a video element to an HTML document on iPhone, you must also include the `playsinline` attribute.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false) for iPhone and [true](https://developer.apple.com/documentation/swift/true) for iPad.

> **Important**

>  Apps created before iOS 10.0 must use the `webkit-playsinline` attribute.

## See Also

### Setting media playback preferences

- [allowsAirPlayForMediaPlayback](allowsairplayformediaplayback.md): A Boolean value that indicates whether the web view allows media playback over AirPlay.
- [allowsPictureInPictureMediaPlayback](allowspictureinpicturemediaplayback.md): A Boolean value that indicates whether HTML5 videos can play Picture in Picture.
- [mediaTypesRequiringUserActionForPlayback](mediatypesrequiringuseractionforplayback.md): The media types that require a user gesture to begin playing.
- [WKAudiovisualMediaTypes](../wkaudiovisualmediatypes.md): The media types that require a user gesture to begin playing.

# allowsInlineMediaPlayback (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether HTML5 videos play inline or use the native full-screen controller.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsInlineMediaPlayback;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to play videos inline, or [false](https://developer.apple.com/documentation/swift/false) to use the native full-screen controller. When adding a video element to an HTML document on iPhone, you must also include the `playsinline` attribute.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false) for iPhone and [true](https://developer.apple.com/documentation/swift/true) for iPad.

> **Important**

>  Apps created before iOS 10.0 must use the `webkit-playsinline` attribute.

## See Also

### Setting media playback preferences

- [allowsAirPlayForMediaPlayback](allowsairplayformediaplayback.md): A Boolean value that indicates whether the web view allows media playback over AirPlay.
- [allowsPictureInPictureMediaPlayback](allowspictureinpicturemediaplayback.md): A Boolean value that indicates whether HTML5 videos can play Picture in Picture.
- [mediaTypesRequiringUserActionForPlayback](mediatypesrequiringuseractionforplayback.md): The media types that require a user gesture to begin playing.
- [WKAudiovisualMediaTypes](../wkaudiovisualmediatypes.md): The media types that require a user gesture to begin playing.
