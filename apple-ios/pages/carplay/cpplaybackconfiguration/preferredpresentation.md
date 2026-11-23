> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpplaybackconfiguration/preferredpresentation

# preferredPresentation (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The preferred presentation behavior when someone selects the media item.

## Declaration

```swift
var preferredPresentation: CPPlaybackConfiguration.Presentation { get }
```

<a id="discussion"></a>

## Discussion

When someone selects a media item, this property tells the system whether to update the app’s interface automatically to reflect the selection. For example, when someone selects an audio file, the system can display the app’s shared [CPNowPlayingTemplate](../cpnowplayingtemplate.md) interface automatically. If the value of this property is [CPPlaybackConfiguration.Presentation.none](presentation/none.md), the system doesn’t provide any automatic behavior and your app is responsible for updating its interface.

# preferredPresentation (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The preferred presentation behavior when someone selects the media item.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CPPlaybackPresentation preferredPresentation;
```

<a id="discussion"></a>

## Discussion

When someone selects a media item, this property tells the system whether to update the app’s interface automatically to reflect the selection. For example, when someone selects an audio file, the system can display the app’s shared [CPNowPlayingTemplate](../cpnowplayingtemplate.md) interface automatically. If the value of this property is [CPPlaybackPresentationNone](presentation/none.md), the system doesn’t provide any automatic behavior and your app is responsible for updating its interface.
