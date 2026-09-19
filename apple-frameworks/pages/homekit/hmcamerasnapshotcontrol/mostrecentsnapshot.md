> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmcamerasnapshotcontrol/mostrecentsnapshot

# mostRecentSnapshot (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The camera’s most recent snapshot.

## Declaration

```swift
var mostRecentSnapshot: HMCameraSnapshot? { get }
```

## See Also

### Taking snapshots

- [takeSnapshot()](takesnapshot%28%29.md): Takes an image snapshot.
- [HMCameraSnapshot](../hmcamerasnapshot.md): An object that represents a snapshot taken from a camera.

# mostRecentSnapshot (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The camera’s most recent snapshot.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) HMCameraSnapshot * mostRecentSnapshot;
```

## See Also

### Taking snapshots

- [takeSnapshot](takesnapshot%28%29.md): Takes an image snapshot.
- [HMCameraSnapshot](../hmcamerasnapshot.md): An object that represents a snapshot taken from a camera.
