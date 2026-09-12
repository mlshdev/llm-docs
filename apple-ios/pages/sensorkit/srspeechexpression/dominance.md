> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechexpression/dominance](https://developer.apple.com/documentation/sensorkit/srspeechexpression/dominance)

# dominance (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The degree of how strong or meek the speaker sounds.

## Declaration

```swift
var dominance: Double { get }
```

<a id="Discussion"></a>

## Discussion

This property is a range from `-1` to `1`, where negative values indicate negative sentiment, and positive values indicate positive sentiment.

## See Also

### Getting speech analytics

- [confidence](confidence.md): The level of confidence of the speaker.
- [mood](mood.md): An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.
- [valence](valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [activation](activation.md): The level of energy or activation of the speaker.

# dominance (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The degree of how strong or meek the speaker sounds.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double dominance;
```

<a id="Discussion"></a>

## Discussion

This property is a range from `-1` to `1`, where negative values indicate negative sentiment, and positive values indicate positive sentiment.

## See Also

### Getting speech analytics

- [confidence](confidence.md): The level of confidence of the speaker.
- [mood](mood.md): An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.
- [valence](valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [activation](activation.md): The level of energy or activation of the speaker.
