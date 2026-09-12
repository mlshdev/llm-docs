> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus/state-swift.enum/localizing](https://developer.apple.com/documentation/arkit/argeotrackingstatus/state-swift.enum/localizing)

# ARGeoTrackingStatus.State.localizing (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Geo tracking is attempting to localize against a map.

## Declaration

```swift
case localizing
```

<a id="Discussion"></a>

## Discussion

In [ARGeoTrackingStatus.State.localizing](localizing.md), the session downloads localization imagery for the user’s geographic location and compares it with captures from the device’s camera. This process is referred to as *visual localization*. When ARKit succeeds in matching this imagery with captures from the camera, the state moves to [ARGeoTrackingStatus.State.localized](localized.md) and the app is free to create location anchors. For more information about localization imagery, see [Refine the user’s position with imagery](../../argeotrackingconfiguration.md#Refine-the-users-position-with-imagery).

<a id="Assisting-the-User-with-Visual-Localization"></a>

### Assisting the User with Visual Localization

To establish visual localization, the user must move the camera so it acquires the captures that ARKit needs. To elicit the right user movements in [ARGeoTrackingStatus.State.localizing](localizing.md), the app needs to advise the user to:

- Point the camera at buildings and other visual landmarks to help ARKit match the live camera data with its preexisting landscape-data.
- Avoid pointing the device at objects that are too general, like trees. It’s better to focus on distinct visuals, like structures, or signs.
- Avoid pointing the device at real-world objects that are transient, like parked cars, or a construction site.
- Because lighting conditions can affect visual localization, avoid geo tracking at night.

## See Also

### States

- [ARGeoTrackingStatus.State.initializing](initializing.md): The session is initializing geo tracking.
- [ARGeoTrackingStatus.State.localized](localized.md): Geo tracking is localized.
- [ARGeoTrackingStatus.State.notAvailable](notavailable.md): Geo tracking is not available.
- [ARGeoTrackingStatus.State.initializing](initializing.md): The session is initializing geo tracking.
- [ARGeoTrackingStatus.State.localized](localized.md): Geo tracking is localized.
- [ARGeoTrackingStatus.State.notAvailable](notavailable.md): Geo tracking is not available.

# ARGeoTrackingStateLocalizing (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

Geo tracking is attempting to localize against a map.

## Declaration

```objectivec
ARGeoTrackingStateLocalizing
```

<a id="Discussion"></a>

## Discussion

In [ARGeoTrackingStateLocalizing](localizing.md), the session downloads localization imagery for the user’s geographic location and compares it with captures from the device’s camera. This process is referred to as *visual localization*. When ARKit succeeds in matching this imagery with captures from the camera, the state moves to [ARGeoTrackingStateLocalized](localized.md) and the app is free to create location anchors. For more information about localization imagery, see [Refine the user’s position with imagery](../../argeotrackingconfiguration.md#Refine-the-users-position-with-imagery).

<a id="Assisting-the-User-with-Visual-Localization"></a>

### Assisting the User with Visual Localization

To establish visual localization, the user must move the camera so it acquires the captures that ARKit needs. To elicit the right user movements in [ARGeoTrackingStateLocalizing](localizing.md), the app needs to advise the user to:

- Point the camera at buildings and other visual landmarks to help ARKit match the live camera data with its preexisting landscape-data.
- Avoid pointing the device at objects that are too general, like trees. It’s better to focus on distinct visuals, like structures, or signs.
- Avoid pointing the device at real-world objects that are transient, like parked cars, or a construction site.
- Because lighting conditions can affect visual localization, avoid geo tracking at night.

## See Also

### States

- [ARGeoTrackingStateInitializing](initializing.md): The session is initializing geo tracking.
- [ARGeoTrackingStateLocalized](localized.md): Geo tracking is localized.
- [ARGeoTrackingStateNotAvailable](notavailable.md): Geo tracking is not available.
- [ARGeoTrackingStateInitializing](initializing.md): The session is initializing geo tracking.
- [ARGeoTrackingStateLocalized](localized.md): Geo tracking is localized.
- [ARGeoTrackingStateNotAvailable](notavailable.md): Geo tracking is not available.
