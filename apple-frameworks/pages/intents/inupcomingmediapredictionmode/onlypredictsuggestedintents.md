> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupcomingmediapredictionmode/onlypredictsuggestedintents](https://developer.apple.com/documentation/intents/inupcomingmediapredictionmode/onlypredictsuggestedintents)

# INUpcomingMediaPredictionMode.onlyPredictSuggestedIntents (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The mode that predicts suggested media intent shortcuts associated with your app.

## Declaration

```swift
case onlyPredictSuggestedIntents
```

<a id="Discussion"></a>

## Discussion

Use this prediction mode when you want Siri to show the user only those media intent shortcuts set in the [setSuggestedMediaIntents(\_:)](../inupcomingmediamanager/setsuggestedmediaintents%28__%29.md) method. For instance, a podcast app uses this mode when it wants to only show suggested shortcuts, rather than shortcuts it donated for media the user has already listened to or watched.

## See Also

### Prediction Modes

- [INUpcomingMediaPredictionMode.default](default.md): The mode that predicts donated and suggested media intent shortcuts associated with your app.

# INUpcomingMediaPredictionModeOnlyPredictSuggestedIntents (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The mode that predicts suggested media intent shortcuts associated with your app.

## Declaration

```objectivec
INUpcomingMediaPredictionModeOnlyPredictSuggestedIntents
```

<a id="Discussion"></a>

## Discussion

Use this prediction mode when you want Siri to show the user only those media intent shortcuts set in the [setSuggestedMediaIntents:](../inupcomingmediamanager/setsuggestedmediaintents%28__%29.md) method. For instance, a podcast app uses this mode when it wants to only show suggested shortcuts, rather than shortcuts it donated for media the user has already listened to or watched.

## See Also

### Prediction Modes

- [INUpcomingMediaPredictionModeDefault](default.md): The mode that predicts donated and suggested media intent shortcuts associated with your app.
