> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/state-swift.enum/initializing](https://developer.apple.com/documentation/arkit/argeotrackingstatus/state-swift.enum/initializing)

# ARGeoTrackingStatus.State.initializing (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The session is initializing geo tracking.

## Declaration

```swift
case initializing
```

<a id="Discussion"></a>

## Discussion

In this state, the session is preparing tracking and an app has the opportunity to onboard users to the experience. The app watches for changes in [stateReason](../statereason-swift.property.md) and coaches the user accordingly to expedite initialization.

## See Also

### States

- [ARGeoTrackingStatus.State.localized](localized.md): Geo tracking is localized.
- [ARGeoTrackingStatus.State.localizing](localizing.md): Geo tracking is attempting to localize against a map.
- [ARGeoTrackingStatus.State.notAvailable](notavailable.md): Geo tracking is not available.
- [ARGeoTrackingStatus.State.localized](localized.md): Geo tracking is localized.
- [ARGeoTrackingStatus.State.localizing](localizing.md): Geo tracking is attempting to localize against a map.
- [ARGeoTrackingStatus.State.notAvailable](notavailable.md): Geo tracking is not available.

# ARGeoTrackingStateInitializing (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The session is initializing geo tracking.

## Declaration

```objectivec
ARGeoTrackingStateInitializing
```

<a id="Discussion"></a>

## Discussion

In this state, the session is preparing tracking and an app has the opportunity to onboard users to the experience. The app watches for changes in [stateReason](../statereason-swift.property.md) and coaches the user accordingly to expedite initialization.

## See Also

### States

- [ARGeoTrackingStateLocalized](localized.md): Geo tracking is localized.
- [ARGeoTrackingStateLocalizing](localizing.md): Geo tracking is attempting to localize against a map.
- [ARGeoTrackingStateNotAvailable](notavailable.md): Geo tracking is not available.
- [ARGeoTrackingStateLocalized](localized.md): Geo tracking is localized.
- [ARGeoTrackingStateLocalizing](localizing.md): Geo tracking is attempting to localize against a map.
- [ARGeoTrackingStateNotAvailable](notavailable.md): Geo tracking is not available.
