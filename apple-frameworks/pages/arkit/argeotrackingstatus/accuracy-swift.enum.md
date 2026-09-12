> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/accuracy-swift.enum](https://developer.apple.com/documentation/arkit/argeotrackingstatus/accuracy-swift.enum)

# ARGeoTrackingStatus.Accuracy (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Values that are possible for the current accuracy of geo tracking.

## Declaration

```swift
enum Accuracy
```

<a id="Discussion"></a>

## Discussion

To ensure the best possible user experience, an app must monitor and react to the geo-tracking accuracy. When accuracy is [ARGeoTrackingStatus.Accuracy.low](accuracy-swift.enum/low.md), the app needs to show content that’s more forgiving if ARKit is off by a small distance. For example, if accuracy is [ARGeoTrackingStatus.Accuracy.low](accuracy-swift.enum/low.md), rendering a location anchor as a large ball several meters in the air is more appropriate than rendering an arrow that rests its point on a real-world surface. Because a larger ball isn’t meant to mark a precise location, any offset that results from low accuracy will be less noticeable to the user. Apps that need higher-precision location anchors need to wait for [ARGeoTrackingStatus.Accuracy.medium](accuracy-swift.enum/medium.md) or [ARGeoTrackingStatus.Accuracy.high](accuracy-swift.enum/high.md) accuracy before revealing rendered location-anchors, or dismissing user instructions.

## Topics

### Accuracies

- [ARGeoTrackingStatus.Accuracy.high](accuracy-swift.enum/high.md): Geo-tracking accuracy is high.
- [ARGeoTrackingStatus.Accuracy.undetermined](accuracy-swift.enum/undetermined.md): Geo-tracking accuracy is undetermined.
- [ARGeoTrackingStatus.Accuracy.low](accuracy-swift.enum/low.md): Geo-tracking accuracy is low.
- [ARGeoTrackingStatus.Accuracy.medium](accuracy-swift.enum/medium.md): Geo-tracking accuracy is average.

### Initializers

- [init(rawValue:)](accuracy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Judging Accuracy

- [accuracy](accuracy-swift.property.md): The accuracy of geo tracking at the time the session captured the frame.

# ARGeoTrackingAccuracy (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Values that are possible for the current accuracy of geo tracking.

## Declaration

```objectivec
enum ARGeoTrackingAccuracy : NSInteger;
```

<a id="Discussion"></a>

## Discussion

To ensure the best possible user experience, an app must monitor and react to the geo-tracking accuracy. When accuracy is [ARGeoTrackingAccuracyLow](accuracy-swift.enum/low.md), the app needs to show content that’s more forgiving if ARKit is off by a small distance. For example, if accuracy is [ARGeoTrackingAccuracyLow](accuracy-swift.enum/low.md), rendering a location anchor as a large ball several meters in the air is more appropriate than rendering an arrow that rests its point on a real-world surface. Because a larger ball isn’t meant to mark a precise location, any offset that results from low accuracy will be less noticeable to the user. Apps that need higher-precision location anchors need to wait for [ARGeoTrackingAccuracyMedium](accuracy-swift.enum/medium.md) or [ARGeoTrackingAccuracyHigh](accuracy-swift.enum/high.md) accuracy before revealing rendered location-anchors, or dismissing user instructions.

## Topics

### Accuracies

- [ARGeoTrackingAccuracyHigh](accuracy-swift.enum/high.md): Geo-tracking accuracy is high.
- [ARGeoTrackingAccuracyUndetermined](accuracy-swift.enum/undetermined.md): Geo-tracking accuracy is undetermined.
- [ARGeoTrackingAccuracyLow](accuracy-swift.enum/low.md): Geo-tracking accuracy is low.
- [ARGeoTrackingAccuracyMedium](accuracy-swift.enum/medium.md): Geo-tracking accuracy is average.

## See Also

### Judging Accuracy

- [accuracy](accuracy-swift.property.md): The accuracy of geo tracking at the time the session captured the frame.
