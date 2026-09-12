> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerasnapshotcontrol/delegate](https://developer.apple.com/documentation/homekit/hmcamerasnapshotcontrol/delegate)

# delegate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Delegate that receives updates as the camera takes snapshots.

## Declaration

```swift
weak var delegate: (any HMCameraSnapshotControlDelegate)? { get set }
```

## See Also

### Observing snapshot activity

- [HMCameraSnapshotControlDelegate](../hmcamerasnapshotcontroldelegate.md): A set of methods used to observe the camera’s snapshot activity.

# delegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Delegate that receives updates as the camera takes snapshots.

## Declaration

```objectivec
@property (nonatomic, weak) id<HMCameraSnapshotControlDelegate> delegate;
```

## See Also

### Observing snapshot activity

- [HMCameraSnapshotControlDelegate](../hmcamerasnapshotcontroldelegate.md): A set of methods used to observe the camera’s snapshot activity.
