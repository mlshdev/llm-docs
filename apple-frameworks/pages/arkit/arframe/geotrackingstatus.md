> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/geotrackingstatus](https://developer.apple.com/documentation/arkit/arframe/geotrackingstatus)

# geoTrackingStatus (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The session’s condition with respect to geographic tracking at the time the session captured the frame.

## Declaration

```swift
var geoTrackingStatus: ARGeoTrackingStatus? { get }
```

<a id="Discussion"></a>

## Discussion

For the current geo-tracking status, check the value of this property on the session’s [currentFrame](../arsession/currentframe.md). ARKit populates this property only for [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md) sessions.

## See Also

### Assessing geo-tracking condition

- [ARGeoTrackingStatus](../argeotrackingstatus.md): The state, accuracy, and reason that are possible for geo-tracking’s current condition.

# geoTrackingStatus (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The session’s condition with respect to geographic tracking at the time the session captured the frame.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) ARGeoTrackingStatus * geoTrackingStatus;
```

<a id="Discussion"></a>

## Discussion

For the current geo-tracking status, check the value of this property on the session’s [currentFrame](../arsession/currentframe.md). ARKit populates this property only for [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md) sessions.

## See Also

### Assessing geo-tracking condition

- [ARGeoTrackingStatus](../argeotrackingstatus.md): The state, accuracy, and reason that are possible for geo-tracking’s current condition.
