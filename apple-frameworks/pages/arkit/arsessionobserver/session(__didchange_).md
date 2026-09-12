> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionobserver/session(_:didchange:)](https://developer.apple.com/documentation/arkit/arsessionobserver/session(_:didchange:))

# session(\_:didChange:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Listen and react to geo-tracking state changes.

## Declaration

```swift
optional func session(_ session: ARSession, didChange geoTrackingStatus: ARGeoTrackingStatus)
```

## Parameters

- `session`: The geo-tracking session.
- `geoTrackingStatus`: The new status.

<a id="Discussion"></a>

## Discussion

To create and maintain an effective geo-tracking session, an app must react promptly when ARKit changes the geo-tracking status. For more information, see [ARGeoTrackingStatus](../argeotrackingstatus.md).

ARKit invokes this callback only for [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md) sessions.

## See Also

### Responding to Tracking Quality Changes

- [session(\_:cameraDidChangeTrackingState:)](session%28__cameradidchangetrackingstate_%29.md): Informs the delegate of changes to the quality of ARKit’s device position tracking.

# session:didChangeGeoTrackingStatus: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Listen and react to geo-tracking state changes.

## Declaration

```objectivec
- (void) session:(ARSession *) session didChangeGeoTrackingStatus:(ARGeoTrackingStatus *) geoTrackingStatus;
```

## Parameters

- `session`: The geo-tracking session.
- `geoTrackingStatus`: The new status.

<a id="Discussion"></a>

## Discussion

To create and maintain an effective geo-tracking session, an app must react promptly when ARKit changes the geo-tracking status. For more information, see [ARGeoTrackingStatus](../argeotrackingstatus.md).

ARKit invokes this callback only for [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md) sessions.

## See Also

### Responding to Tracking Quality Changes

- [session:cameraDidChangeTrackingState:](session%28__cameradidchangetrackingstate_%29.md): Informs the delegate of changes to the quality of ARKit’s device position tracking.
