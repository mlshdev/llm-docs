> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerasnapshotcontroldelegate/camerasnapshotcontrol(_:didtake:error:)](https://developer.apple.com/documentation/homekit/hmcamerasnapshotcontroldelegate/camerasnapshotcontrol(_:didtake:error:))

# cameraSnapshotControl(\_:didTake:error:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the camera has taken a new snapshot.

## Declaration

```swift
optional func cameraSnapshotControl(_ cameraSnapshotControl: HMCameraSnapshotControl, didTake snapshot: HMCameraSnapshot?, error: (any Error)?)
```

## Parameters

- `cameraSnapshotControl`: The camera snapshot control responsible for the new snapshot.
- `snapshot`: The snapshot taken by the camera. `nil` if there was a problem.
- `error`: An error that is populated if there was a problem taking the snapshot; `nil` otherwise.

## See Also

### Observing snapshot activity

- [cameraSnapshotControlDidUpdateMostRecentSnapshot(\_:)](camerasnapshotcontroldidupdatemostrecentsnapshot%28__%29.md): Tells the delegate that the most recent snapshot has been updated.

# cameraSnapshotControl:didTakeSnapshot:error: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the camera has taken a new snapshot.

## Declaration

```objectivec
- (void) cameraSnapshotControl:(HMCameraSnapshotControl *) cameraSnapshotControl didTakeSnapshot:(HMCameraSnapshot *) snapshot error:(NSError *) error;
```

## Parameters

- `cameraSnapshotControl`: The camera snapshot control responsible for the new snapshot.
- `snapshot`: The snapshot taken by the camera. `nil` if there was a problem.
- `error`: An error that is populated if there was a problem taking the snapshot; `nil` otherwise.

## See Also

### Observing snapshot activity

- [cameraSnapshotControlDidUpdateMostRecentSnapshot:](camerasnapshotcontroldidupdatemostrecentsnapshot%28__%29.md): Tells the delegate that the most recent snapshot has been updated.
