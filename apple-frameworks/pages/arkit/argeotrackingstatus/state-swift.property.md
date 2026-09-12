> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/state-swift.property](https://developer.apple.com/documentation/arkit/argeotrackingstatus/state-swift.property)

# state (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A value that describes the session’s current geo-tracking state.

## Declaration

```swift
var state: ARGeoTrackingStatus.State { get }
```

<a id="Discussion"></a>

## Discussion

For any [state](state-swift.property.md) in a frame’s [geoTrackingStatus](../arframe/geotrackingstatus.md), ARKit provides a [stateReason](statereason-swift.property.md). A given geo-tracking status may intermix states and reasons, so the reasons are not tied to specific states.

## See Also

### Checking State

- [ARGeoTrackingStatus.State](state-swift.enum.md): Values that are possible for the current state of geo-tracking.

# state (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A value that describes the session’s current geo-tracking state.

## Declaration

```objectivec
@property (nonatomic, readonly) ARGeoTrackingState state;
```

<a id="Discussion"></a>

## Discussion

For any [state](state-swift.property.md) in a frame’s [geoTrackingStatus](../arframe/geotrackingstatus.md), ARKit provides a [stateReason](statereason-swift.property.md). A given geo-tracking status may intermix states and reasons, so the reasons are not tied to specific states.

## See Also

### Checking State

- [ARGeoTrackingState](state-swift.enum.md): Values that are possible for the current state of geo-tracking.
