> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionobserver/session(_:cameradidchangetrackingstate:)](https://developer.apple.com/documentation/arkit/arsessionobserver/session(_:cameradidchangetrackingstate:))

# session(\_:cameraDidChangeTrackingState:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Informs the delegate of changes to the quality of ARKit’s device position tracking.

## Declaration

```swift
optional func session(_ session: ARSession, cameraDidChangeTrackingState camera: ARCamera)
```

## Parameters

- `session`: The session providing information.
- `camera`: The camera whose tracking parameters have changed. (Equivalent to [currentFrame](../arsession/currentframe.md).[camera](../arframe/camera.md).)

<a id="Discussion"></a>

## Discussion

ARKit tracks the position and orientation of the device relative to a virtual scene through a combination of motion sensing and image processing. As such, factors that affect signal quality from the device’s motion sensing hardware or that interfere with scene detection in the camera image can result in poor estimates of the device position relative to the virtual scene.

## See Also

### Responding to Tracking Quality Changes

- [session(\_:didChange:)](session%28__didchange_%29.md): Listen and react to geo-tracking state changes.

# session:cameraDidChangeTrackingState: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Informs the delegate of changes to the quality of ARKit’s device position tracking.

## Declaration

```objectivec
- (void) session:(ARSession *) session cameraDidChangeTrackingState:(ARCamera *) camera;
```

## Parameters

- `session`: The session providing information.
- `camera`: The camera whose tracking parameters have changed. (Equivalent to [currentFrame](../arsession/currentframe.md).[camera](../arframe/camera.md).)

<a id="Discussion"></a>

## Discussion

ARKit tracks the position and orientation of the device relative to a virtual scene through a combination of motion sensing and image processing. As such, factors that affect signal quality from the device’s motion sensing hardware or that interfere with scene detection in the camera image can result in poor estimates of the device position relative to the virtual scene.

## See Also

### Responding to Tracking Quality Changes

- [session:didChangeGeoTrackingStatus:](session%28__didchange_%29.md): Listen and react to geo-tracking state changes.
