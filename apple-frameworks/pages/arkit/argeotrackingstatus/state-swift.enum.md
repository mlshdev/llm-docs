> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/state-swift.enum](https://developer.apple.com/documentation/arkit/argeotrackingstatus/state-swift.enum)

# ARGeoTrackingStatus.State (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Values that are possible for the current state of geo-tracking.

## Declaration

```swift
enum State
```

<a id="Discussion"></a>

## Discussion

For any [state](state-swift.property.md) in a frame’s [geoTrackingStatus](../arframe/geotrackingstatus.md), ARKit provides a [stateReason](statereason-swift.property.md). A given geo-tracking status may intermix states and reasons, so the reasons are not tied to specific states.

## Topics

### States

- [ARGeoTrackingStatus.State.initializing](state-swift.enum/initializing.md): The session is initializing geo tracking.
- [ARGeoTrackingStatus.State.localized](state-swift.enum/localized.md): Geo tracking is localized.
- [ARGeoTrackingStatus.State.localizing](state-swift.enum/localizing.md): Geo tracking is attempting to localize against a map.
- [ARGeoTrackingStatus.State.notAvailable](state-swift.enum/notavailable.md): Geo tracking is not available.
- [ARGeoTrackingStatus.State.initializing](state-swift.enum/initializing.md): The session is initializing geo tracking.
- [ARGeoTrackingStatus.State.localized](state-swift.enum/localized.md): Geo tracking is localized.
- [ARGeoTrackingStatus.State.localizing](state-swift.enum/localizing.md): Geo tracking is attempting to localize against a map.
- [ARGeoTrackingStatus.State.notAvailable](state-swift.enum/notavailable.md): Geo tracking is not available.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking State

- [state](state-swift.property.md): A value that describes the session’s current geo-tracking state.

# ARGeoTrackingState (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Values that are possible for the current state of geo-tracking.

## Declaration

```objectivec
enum ARGeoTrackingState : NSInteger;
```

<a id="Discussion"></a>

## Discussion

For any [state](state-swift.property.md) in a frame’s [geoTrackingStatus](../arframe/geotrackingstatus.md), ARKit provides a [stateReason](statereason-swift.property.md). A given geo-tracking status may intermix states and reasons, so the reasons are not tied to specific states.

## Topics

### States

- [ARGeoTrackingStateInitializing](state-swift.enum/initializing.md): The session is initializing geo tracking.
- [ARGeoTrackingStateLocalized](state-swift.enum/localized.md): Geo tracking is localized.
- [ARGeoTrackingStateLocalizing](state-swift.enum/localizing.md): Geo tracking is attempting to localize against a map.
- [ARGeoTrackingStateNotAvailable](state-swift.enum/notavailable.md): Geo tracking is not available.
- [ARGeoTrackingStateInitializing](state-swift.enum/initializing.md): The session is initializing geo tracking.
- [ARGeoTrackingStateLocalized](state-swift.enum/localized.md): Geo tracking is localized.
- [ARGeoTrackingStateLocalizing](state-swift.enum/localizing.md): Geo tracking is attempting to localize against a map.
- [ARGeoTrackingStateNotAvailable](state-swift.enum/notavailable.md): Geo tracking is not available.

## See Also

### Checking State

- [state](state-swift.property.md): A value that describes the session’s current geo-tracking state.
