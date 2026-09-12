> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechexpression/activation](https://developer.apple.com/documentation/sensorkit/srspeechexpression/activation)

# activation (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The level of energy or activation of the speaker.

## Declaration

```swift
var activation: Double { get }
```

<a id="Discussion"></a>

## Discussion

This property is a range from `-1` to `1`, where negative values indicate negative sentiment, and positive values indicate positive sentiment.

## See Also

### Getting speech analytics

- [confidence](confidence.md): The level of confidence of the speaker.
- [mood](mood.md): An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.
- [valence](valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [dominance](dominance.md): The degree of how strong or meek the speaker sounds.

# activation (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The level of energy or activation of the speaker.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double activation;
```

<a id="Discussion"></a>

## Discussion

This property is a range from `-1` to `1`, where negative values indicate negative sentiment, and positive values indicate positive sentiment.

## See Also

### Getting speech analytics

- [confidence](confidence.md): The level of confidence of the speaker.
- [mood](mood.md): An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.
- [valence](valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [dominance](dominance.md): The degree of how strong or meek the speaker sounds.
