> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/mediatypesrequiringuseractionforplayback](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/mediatypesrequiringuseractionforplayback)

# mediaTypesRequiringUserActionForPlayback (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The media types that require a user gesture to begin playing.

## Declaration

```swift
var mediaTypesRequiringUserActionForPlayback: WKAudiovisualMediaTypes { get set }
```

<a id="Discussion"></a>

## Discussion

Use [WKAudiovisualMediaTypeNone](../wkaudiovisualmediatypes/wkaudiovisualmediatypenone.md) to indicate that no user gestures are required to begin playing media.

## See Also

### Setting media playback preferences

- [allowsInlineMediaPlayback](allowsinlinemediaplayback.md): A Boolean value that indicates whether HTML5 videos play inline or use the native full-screen controller.
- [allowsAirPlayForMediaPlayback](allowsairplayformediaplayback.md): A Boolean value that indicates whether the web view allows media playback over AirPlay.
- [allowsPictureInPictureMediaPlayback](allowspictureinpicturemediaplayback.md): A Boolean value that indicates whether HTML5 videos can play Picture in Picture.
- [WKAudiovisualMediaTypes](../wkaudiovisualmediatypes.md): The media types that require a user gesture to begin playing.

# mediaTypesRequiringUserActionForPlayback (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The media types that require a user gesture to begin playing.

## Declaration

```objectivec
@property (nonatomic) WKAudiovisualMediaTypes mediaTypesRequiringUserActionForPlayback;
```

<a id="Discussion"></a>

## Discussion

Use [WKAudiovisualMediaTypeNone](../wkaudiovisualmediatypes/wkaudiovisualmediatypenone.md) to indicate that no user gestures are required to begin playing media.

## See Also

### Setting media playback preferences

- [allowsInlineMediaPlayback](allowsinlinemediaplayback.md): A Boolean value that indicates whether HTML5 videos play inline or use the native full-screen controller.
- [allowsAirPlayForMediaPlayback](allowsairplayformediaplayback.md): A Boolean value that indicates whether the web view allows media playback over AirPlay.
- [allowsPictureInPictureMediaPlayback](allowspictureinpicturemediaplayback.md): A Boolean value that indicates whether HTML5 videos can play Picture in Picture.
- [WKAudiovisualMediaTypes](../wkaudiovisualmediatypes.md): The media types that require a user gesture to begin playing.
