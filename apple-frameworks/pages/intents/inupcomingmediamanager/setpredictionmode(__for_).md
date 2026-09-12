> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupcomingmediamanager/setpredictionmode(_:for:)](https://developer.apple.com/documentation/intents/inupcomingmediamanager/setpredictionmode(_:for:))

# setPredictionMode(\_:for:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Suggests how Siri should predict media intent shortcuts.

## Declaration

```swift
func setPredictionMode(_ mode: INUpcomingMediaPredictionMode, for type: INMediaItemType)
```

## Parameters

- `mode`: The prediction mode that Siri should use for your media intent shortcuts.
- `type`: The media type for this prediction mode.

<a id="Discussion"></a>

## Discussion

Apps such as podcast apps that want Siri to show only the suggested shortcuts—those set in the [setSuggestedMediaIntents(\_:)](setsuggestedmediaintents%28__%29.md) method and not media intents donated by your app for media the user has listened to or watched—should use the [INUpcomingMediaPredictionMode.onlyPredictSuggestedIntents](../inupcomingmediapredictionmode/onlypredictsuggestedintents.md) prediction mode. To tell Siri to show both donated and suggested media intent shortcuts associated with your app, use the [INUpcomingMediaPredictionMode.default](../inupcomingmediapredictionmode/default.md) mode or don’t set any prediction mode for the media type.

## See Also

### Setting Prediction Modes

- [INUpcomingMediaPredictionMode](../inupcomingmediapredictionmode.md): Prediction modes for upcoming media intent shortcuts.

# setPredictionMode:forType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Suggests how Siri should predict media intent shortcuts.

## Declaration

```objectivec
- (void) setPredictionMode:(INUpcomingMediaPredictionMode) mode forType:(INMediaItemType) type;
```

## Parameters

- `mode`: The prediction mode that Siri should use for your media intent shortcuts.
- `type`: The media type for this prediction mode.

<a id="Discussion"></a>

## Discussion

Apps such as podcast apps that want Siri to show only the suggested shortcuts—those set in the [setSuggestedMediaIntents:](setsuggestedmediaintents%28__%29.md) method and not media intents donated by your app for media the user has listened to or watched—should use the [INUpcomingMediaPredictionModeOnlyPredictSuggestedIntents](../inupcomingmediapredictionmode/onlypredictsuggestedintents.md) prediction mode. To tell Siri to show both donated and suggested media intent shortcuts associated with your app, use the [INUpcomingMediaPredictionModeDefault](../inupcomingmediapredictionmode/default.md) mode or don’t set any prediction mode for the media type.

## See Also

### Setting Prediction Modes

- [INUpcomingMediaPredictionMode](../inupcomingmediapredictionmode.md): Prediction modes for upcoming media intent shortcuts.
