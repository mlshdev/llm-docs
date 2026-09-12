> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/allowspictureinpicturemediaplayback](https://developer.apple.com/documentation/uikit/uiwebview/allowspictureinpicturemediaplayback)

# allowsPictureInPictureMediaPlayback (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 12.0) · iPadOS 9.0+ (deprecated in 12.0) · Mac Catalyst 9.0+ (deprecated in 12.0)

A Boolean value that determines whether Picture in Picture playback is allowed from this view.

## Declaration

```swift
var allowsPictureInPictureMediaPlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true) on devices that support Picture in Picture (PiP) mode and [false](https://developer.apple.com/documentation/swift/false) on all other devices.

## See Also

### Managing media playback

- [allowsInlineMediaPlayback](allowsinlinemediaplayback.md): Deprecated. A Boolean value that determines whether HTML5 videos play inline or use the native full-screen controller.
- [mediaPlaybackRequiresUserAction](mediaplaybackrequiresuseraction.md): Deprecated. A Boolean value that determines whether HTML5 videos can play automatically or require the user to start playing them.
- [mediaPlaybackAllowsAirPlay](mediaplaybackallowsairplay.md): Deprecated. A Boolean value that determines whether Air Play is allowed from this view.

# allowsPictureInPictureMediaPlayback (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 12.0) · iPadOS 9.0+ (deprecated in 12.0)

A Boolean value that determines whether Picture in Picture playback is allowed from this view.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsPictureInPictureMediaPlayback;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true) on devices that support Picture in Picture (PiP) mode and [false](https://developer.apple.com/documentation/swift/false) on all other devices.

## See Also

### Managing media playback

- [allowsInlineMediaPlayback](allowsinlinemediaplayback.md): Deprecated. A Boolean value that determines whether HTML5 videos play inline or use the native full-screen controller.
- [mediaPlaybackRequiresUserAction](mediaplaybackrequiresuseraction.md): Deprecated. A Boolean value that determines whether HTML5 videos can play automatically or require the user to start playing them.
- [mediaPlaybackAllowsAirPlay](mediaplaybackallowsairplay.md): Deprecated. A Boolean value that determines whether Air Play is allowed from this view.
