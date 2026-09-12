> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerasnapshotcontroldelegate](https://developer.apple.com/documentation/homekit/hmcamerasnapshotcontroldelegate)

# HMCameraSnapshotControlDelegate (Swift)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A set of methods used to observe the camera’s snapshot activity.

## Declaration

```swift
protocol HMCameraSnapshotControlDelegate : NSObjectProtocol
```

## Topics

### Observing snapshot activity

- [cameraSnapshotControl(\_:didTake:error:)](hmcamerasnapshotcontroldelegate/camerasnapshotcontrol%28__didtake_error_%29.md): Tells the delegate that the camera has taken a new snapshot.
- [cameraSnapshotControlDidUpdateMostRecentSnapshot(\_:)](hmcamerasnapshotcontroldelegate/camerasnapshotcontroldidupdatemostrecentsnapshot%28__%29.md): Tells the delegate that the most recent snapshot has been updated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Observing snapshot activity

- [delegate](hmcamerasnapshotcontrol/delegate.md): Delegate that receives updates as the camera takes snapshots.

# HMCameraSnapshotControlDelegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A set of methods used to observe the camera’s snapshot activity.

## Declaration

```objectivec
@protocol HMCameraSnapshotControlDelegate <NSObject>
```

## Topics

### Observing snapshot activity

- [cameraSnapshotControl:didTakeSnapshot:error:](hmcamerasnapshotcontroldelegate/camerasnapshotcontrol%28__didtake_error_%29.md): Tells the delegate that the camera has taken a new snapshot.
- [cameraSnapshotControlDidUpdateMostRecentSnapshot:](hmcamerasnapshotcontroldelegate/camerasnapshotcontroldidupdatemostrecentsnapshot%28__%29.md): Tells the delegate that the most recent snapshot has been updated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Observing snapshot activity

- [delegate](hmcamerasnapshotcontrol/delegate.md): Delegate that receives updates as the camera takes snapshots.
