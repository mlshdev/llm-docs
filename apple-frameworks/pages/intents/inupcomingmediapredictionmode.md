> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupcomingmediapredictionmode](https://developer.apple.com/documentation/intents/inupcomingmediapredictionmode)

# INUpcomingMediaPredictionMode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Prediction modes for upcoming media intent shortcuts.

## Declaration

```swift
enum INUpcomingMediaPredictionMode
```

## Topics

### Prediction Modes

- [INUpcomingMediaPredictionMode.default](inupcomingmediapredictionmode/default.md): The mode that predicts donated and suggested media intent shortcuts associated with your app.
- [INUpcomingMediaPredictionMode.onlyPredictSuggestedIntents](inupcomingmediapredictionmode/onlypredictsuggestedintents.md): The mode that predicts suggested media intent shortcuts associated with your app.

### Initializers

- [init(rawValue:)](inupcomingmediapredictionmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting Prediction Modes

- [setPredictionMode(\_:for:)](inupcomingmediamanager/setpredictionmode%28__for_%29.md): Suggests how Siri should predict media intent shortcuts.

# INUpcomingMediaPredictionMode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Prediction modes for upcoming media intent shortcuts.

## Declaration

```objectivec
enum INUpcomingMediaPredictionMode : NSInteger;
```

## Topics

### Prediction Modes

- [INUpcomingMediaPredictionModeDefault](inupcomingmediapredictionmode/default.md): The mode that predicts donated and suggested media intent shortcuts associated with your app.
- [INUpcomingMediaPredictionModeOnlyPredictSuggestedIntents](inupcomingmediapredictionmode/onlypredictsuggestedintents.md): The mode that predicts suggested media intent shortcuts associated with your app.

## See Also

### Setting Prediction Modes

- [setPredictionMode:forType:](inupcomingmediamanager/setpredictionmode%28__for_%29.md): Suggests how Siri should predict media intent shortcuts.
