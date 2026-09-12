> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/allowsinlinemediaplayback](https://developer.apple.com/documentation/uikit/uiwebview/allowsinlinemediaplayback)

# allowsInlineMediaPlayback (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0) · Mac Catalyst 4.0+ (deprecated in 12.0)

A Boolean value that determines whether HTML5 videos play inline or use the native full-screen controller.

## Declaration

```swift
var allowsInlineMediaPlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

You must set this property to play inline video. Set this property to `true` to play videos inline. Set this property to `false` to use the native full-screen controller. When adding a video element to a  HTML document on the iPhone, you must also include the `playsinline` attribute.

The default value for iPhone is `false` and the default value for iPad is `true`.

> **Important**

>  Apps created before iOS 10.0 must use the `webkit-playsinline` attribute.

## See Also

### Managing media playback

- [mediaPlaybackRequiresUserAction](mediaplaybackrequiresuseraction.md): Deprecated. A Boolean value that determines whether HTML5 videos can play automatically or require the user to start playing them.
- [mediaPlaybackAllowsAirPlay](mediaplaybackallowsairplay.md): Deprecated. A Boolean value that determines whether Air Play is allowed from this view.
- [allowsPictureInPictureMediaPlayback](allowspictureinpicturemediaplayback.md): Deprecated. A Boolean value that determines whether Picture in Picture playback is allowed from this view.

# allowsInlineMediaPlayback (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0)

A Boolean value that determines whether HTML5 videos play inline or use the native full-screen controller.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsInlineMediaPlayback;
```

<a id="Discussion"></a>

## Discussion

You must set this property to play inline video. Set this property to `true` to play videos inline. Set this property to `false` to use the native full-screen controller. When adding a video element to a  HTML document on the iPhone, you must also include the `playsinline` attribute.

The default value for iPhone is `false` and the default value for iPad is `true`.

> **Important**

>  Apps created before iOS 10.0 must use the `webkit-playsinline` attribute.

## See Also

### Managing media playback

- [mediaPlaybackRequiresUserAction](mediaplaybackrequiresuseraction.md): Deprecated. A Boolean value that determines whether HTML5 videos can play automatically or require the user to start playing them.
- [mediaPlaybackAllowsAirPlay](mediaplaybackallowsairplay.md): Deprecated. A Boolean value that determines whether Air Play is allowed from this view.
- [allowsPictureInPictureMediaPlayback](allowspictureinpicturemediaplayback.md): Deprecated. A Boolean value that determines whether Picture in Picture playback is allowed from this view.
