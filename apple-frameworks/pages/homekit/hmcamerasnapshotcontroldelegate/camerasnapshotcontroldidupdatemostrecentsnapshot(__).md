> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerasnapshotcontroldelegate/camerasnapshotcontroldidupdatemostrecentsnapshot(_:)](https://developer.apple.com/documentation/homekit/hmcamerasnapshotcontroldelegate/camerasnapshotcontroldidupdatemostrecentsnapshot(_:))

# cameraSnapshotControlDidUpdateMostRecentSnapshot(\_:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the most recent snapshot has been updated.

## Declaration

```swift
optional func cameraSnapshotControlDidUpdateMostRecentSnapshot(_ cameraSnapshotControl: HMCameraSnapshotControl)
```

## Parameters

- `cameraSnapshotControl`: The camera snapshot control responsible for the updated snapshot.

## See Also

### Observing snapshot activity

- [cameraSnapshotControl(\_:didTake:error:)](camerasnapshotcontrol%28__didtake_error_%29.md): Tells the delegate that the camera has taken a new snapshot.

# cameraSnapshotControlDidUpdateMostRecentSnapshot: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the most recent snapshot has been updated.

## Declaration

```objectivec
- (void) cameraSnapshotControlDidUpdateMostRecentSnapshot:(HMCameraSnapshotControl *) cameraSnapshotControl;
```

## Parameters

- `cameraSnapshotControl`: The camera snapshot control responsible for the updated snapshot.

## See Also

### Observing snapshot activity

- [cameraSnapshotControl:didTakeSnapshot:error:](camerasnapshotcontrol%28__didtake_error_%29.md): Tells the delegate that the camera has taken a new snapshot.
