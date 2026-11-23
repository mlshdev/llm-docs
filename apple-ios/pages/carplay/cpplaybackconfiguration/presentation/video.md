> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpplaybackconfiguration/presentation/video

# CPPlaybackConfiguration.Presentation.video (Swift)

**Framework:** CarPlay  
**Kind:** Case  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An option to display the system video player automatically if it’s available and supported.

## Declaration

```swift
case video
```

<a id="discussion"></a>

## Discussion

If video playback isn’t available, the system displays your app’s shared [CPNowPlayingTemplate](../../cpnowplayingtemplate.md) instead. You don’t need to push the [CPNowPlayingTemplate](../../cpnowplayingtemplate.md) object programmatically from your app in response to the item’s selection.

# CPPlaybackPresentationVideo (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

An option to display the system video player automatically if it’s available and supported.

## Declaration

```objectivec
CPPlaybackPresentationVideo
```

<a id="discussion"></a>

## Discussion

If video playback isn’t available, the system displays your app’s shared [CPNowPlayingTemplate](../../cpnowplayingtemplate.md) instead. You don’t need to push the [CPNowPlayingTemplate](../../cpnowplayingtemplate.md) object programmatically from your app in response to the item’s selection.
