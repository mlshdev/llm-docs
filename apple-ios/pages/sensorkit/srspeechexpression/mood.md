> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechexpression/mood](https://developer.apple.com/documentation/sensorkit/srspeechexpression/mood)

# mood (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.

## Declaration

```swift
var mood: Double { get }
```

<a id="Discussion"></a>

## Discussion

This property is a range from `-1` to `1`, where negative values indicate negative sentiment, and positive values indicate positive sentiment.

## See Also

### Getting speech analytics

- [confidence](confidence.md): The level of confidence of the speaker.
- [valence](valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [activation](activation.md): The level of energy or activation of the speaker.
- [dominance](dominance.md): The degree of how strong or meek the speaker sounds.

# mood (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double mood;
```

<a id="Discussion"></a>

## Discussion

This property is a range from `-1` to `1`, where negative values indicate negative sentiment, and positive values indicate positive sentiment.

## See Also

### Getting speech analytics

- [confidence](confidence.md): The level of confidence of the speaker.
- [valence](valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [activation](activation.md): The level of energy or activation of the speaker.
- [dominance](dominance.md): The degree of how strong or meek the speaker sounds.
