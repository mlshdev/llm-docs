> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/mediaplaybackrequiresuseraction](https://developer.apple.com/documentation/uikit/uiwebview/mediaplaybackrequiresuseraction)

# mediaPlaybackRequiresUserAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0) · Mac Catalyst 4.0+ (deprecated in 12.0)

A Boolean value that determines whether HTML5 videos can play automatically or require the user to start playing them.

## Declaration

```swift
var mediaPlaybackRequiresUserAction: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value on both iPad and iPhone is [true](https://developer.apple.com/documentation/swift/true). To make media play automatically when loaded, set this property to [false](https://developer.apple.com/documentation/swift/false) and ensure the `<audio>` or `<video>` element you want to play has the `autoplay` attribute set.

## See Also

### Managing media playback

- [allowsInlineMediaPlayback](allowsinlinemediaplayback.md): Deprecated. A Boolean value that determines whether HTML5 videos play inline or use the native full-screen controller.
- [mediaPlaybackAllowsAirPlay](mediaplaybackallowsairplay.md): Deprecated. A Boolean value that determines whether Air Play is allowed from this view.
- [allowsPictureInPictureMediaPlayback](allowspictureinpicturemediaplayback.md): Deprecated. A Boolean value that determines whether Picture in Picture playback is allowed from this view.

# mediaPlaybackRequiresUserAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 12.0) · iPadOS 4.0+ (deprecated in 12.0)

A Boolean value that determines whether HTML5 videos can play automatically or require the user to start playing them.

## Declaration

```objectivec
@property (nonatomic) BOOL mediaPlaybackRequiresUserAction;
```

<a id="Discussion"></a>

## Discussion

The default value on both iPad and iPhone is [true](https://developer.apple.com/documentation/swift/true). To make media play automatically when loaded, set this property to [false](https://developer.apple.com/documentation/swift/false) and ensure the `<audio>` or `<video>` element you want to play has the `autoplay` attribute set.

## See Also

### Managing media playback

- [allowsInlineMediaPlayback](allowsinlinemediaplayback.md): Deprecated. A Boolean value that determines whether HTML5 videos play inline or use the native full-screen controller.
- [mediaPlaybackAllowsAirPlay](mediaplaybackallowsairplay.md): Deprecated. A Boolean value that determines whether Air Play is allowed from this view.
- [allowsPictureInPictureMediaPlayback](allowspictureinpicturemediaplayback.md): Deprecated. A Boolean value that determines whether Picture in Picture playback is allowed from this view.
