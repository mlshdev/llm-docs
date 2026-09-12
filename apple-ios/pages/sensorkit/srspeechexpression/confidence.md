> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechexpression/confidence](https://developer.apple.com/documentation/sensorkit/srspeechexpression/confidence)

# confidence (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The level of confidence of the speaker.

## Declaration

```swift
var confidence: Double { get }
```

<a id="Discussion"></a>

## Discussion

This property is a range from `0` to `1`, where `1` indicates the most confident.

## See Also

### Getting speech analytics

- [mood](mood.md): An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.
- [valence](valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [activation](activation.md): The level of energy or activation of the speaker.
- [dominance](dominance.md): The degree of how strong or meek the speaker sounds.

# confidence (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The level of confidence of the speaker.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double confidence;
```

<a id="Discussion"></a>

## Discussion

This property is a range from `0` to `1`, where `1` indicates the most confident.

## See Also

### Getting speech analytics

- [mood](mood.md): An indication of how slurry, tired, or exhausted the speaker sounds compared to normal speech.
- [valence](valence.md): The degree of positive or negative emotion or sentiment of the speaker.
- [activation](activation.md): The level of energy or activation of the speaker.
- [dominance](dominance.md): The degree of how strong or meek the speaker sounds.
