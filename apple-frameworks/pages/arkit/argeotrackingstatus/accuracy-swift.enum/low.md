> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/accuracy-swift.enum/low](https://developer.apple.com/documentation/arkit/argeotrackingstatus/accuracy-swift.enum/low)

# ARGeoTrackingStatus.Accuracy.low (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Geo-tracking accuracy is low.

## Declaration

```swift
case low
```

<a id="Discussion"></a>

## Discussion

This value indicates that visual localization is complete and geo-tracking accuracy is low.

One technique an app can use to deal with low accuracy is to render location anchors with an asset that’s more forgiving, like a large ball. If an app renders the ball further in the air, any offset that results from low accuracy will be less noticeable, and less critical to the user.

## See Also

### Accuracies

- [ARGeoTrackingStatus.Accuracy.high](high.md): Geo-tracking accuracy is high.
- [ARGeoTrackingStatus.Accuracy.undetermined](undetermined.md): Geo-tracking accuracy is undetermined.
- [ARGeoTrackingStatus.Accuracy.medium](medium.md): Geo-tracking accuracy is average.

# ARGeoTrackingAccuracyLow (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

Geo-tracking accuracy is low.

## Declaration

```objectivec
ARGeoTrackingAccuracyLow
```

<a id="Discussion"></a>

## Discussion

This value indicates that visual localization is complete and geo-tracking accuracy is low.

One technique an app can use to deal with low accuracy is to render location anchors with an asset that’s more forgiving, like a large ball. If an app renders the ball further in the air, any offset that results from low accuracy will be less noticeable, and less critical to the user.

## See Also

### Accuracies

- [ARGeoTrackingAccuracyHigh](high.md): Geo-tracking accuracy is high.
- [ARGeoTrackingAccuracyUndetermined](undetermined.md): Geo-tracking accuracy is undetermined.
- [ARGeoTrackingAccuracyMedium](medium.md): Geo-tracking accuracy is average.
