> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/accuracy-swift.property](https://developer.apple.com/documentation/arkit/argeotrackingstatus/accuracy-swift.property)

# accuracy (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The accuracy of geo tracking at the time the session captured the frame.

## Declaration

```swift
var accuracy: ARGeoTrackingStatus.Accuracy { get }
```

<a id="Discussion"></a>

## Discussion

ARKit populates this property after reaching [ARGeoTrackingStatus.State.localized](state-swift.enum/localized.md). To ensure the best possible user experience, an app must monitor and react to the geo-tracking accuracy. For more information, see [ARGeoTrackingStatus.Accuracy](accuracy-swift.enum.md).

## See Also

### Judging Accuracy

- [ARGeoTrackingStatus.Accuracy](accuracy-swift.enum.md): Values that are possible for the current accuracy of geo tracking.

# accuracy (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The accuracy of geo tracking at the time the session captured the frame.

## Declaration

```objectivec
@property (nonatomic, readonly) ARGeoTrackingAccuracy accuracy;
```

<a id="Discussion"></a>

## Discussion

ARKit populates this property after reaching [ARGeoTrackingStateLocalized](state-swift.enum/localized.md). To ensure the best possible user experience, an app must monitor and react to the geo-tracking accuracy. For more information, see [ARGeoTrackingAccuracy](accuracy-swift.enum.md).

## See Also

### Judging Accuracy

- [ARGeoTrackingAccuracy](accuracy-swift.enum.md): Values that are possible for the current accuracy of geo tracking.
