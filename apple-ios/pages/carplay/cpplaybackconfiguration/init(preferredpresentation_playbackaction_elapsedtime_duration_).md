> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpplaybackconfiguration/init(preferredpresentation:playbackaction:elapsedtime:duration:)](https://developer.apple.com/documentation/carplay/cpplaybackconfiguration/init(preferredpresentation:playbackaction:elapsedtime:duration:))

# init(preferredPresentation:playbackAction:elapsedTime:duration:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a description of the playable media content that is represented by template items.

## Declaration

```swift
init(preferredPresentation: CPPlaybackConfiguration.Presentation, playbackAction: CPPlaybackConfiguration.Action, elapsedTime: CMTime, duration: CMTime)
```

## Parameters

- `preferredPresentation`: The preferred style of media presentation shown after selecting the item.
- `playbackAction`: The playback action to perform on this item, such as play, pause, or replay.
- `elapsedTime`: The elapsed playback time as a CMTime value.
- `duration`: The total duration of the media content as a CMTime value. Provide 0 if the duration of the content is unknown or unavailable, for example in live-streaming content.

<a id="discussion"></a>

## Discussion

> **Note**

> Video presentation may be unsupported for this session  (see `-[CPSessionConfiguration videoPlaybackSupported]`) or may be unavailable due to playback policy.

# initWithPreferredPresentation:playbackAction:elapsedTime:duration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a description of the playable media content that is represented by template items.

## Declaration

```objectivec
- (instancetype) initWithPreferredPresentation:(CPPlaybackPresentation) preferredPresentation playbackAction:(CPPlaybackAction) playbackAction elapsedTime:(CMTime) elapsedTime duration:(CMTime) duration;
```

## Parameters

- `preferredPresentation`: The preferred style of media presentation shown after selecting the item.
- `playbackAction`: The playback action to perform on this item, such as play, pause, or replay.
- `elapsedTime`: The elapsed playback time as a CMTime value.
- `duration`: The total duration of the media content as a CMTime value. Provide 0 if the duration of the content is unknown or unavailable, for example in live-streaming content.

<a id="discussion"></a>

## Discussion

> **Note**

> Video presentation may be unsupported for this session  (see `-[CPSessionConfiguration videoPlaybackSupported]`) or may be unavailable due to playback policy.
