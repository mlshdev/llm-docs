> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastreamcontrol/delegate](https://developer.apple.com/documentation/homekit/hmcamerastreamcontrol/delegate)

# delegate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Delegate that receives updates as the camera stream changes.

## Declaration

```swift
weak var delegate: (any HMCameraStreamControlDelegate)? { get set }
```

## See Also

### Observing stream activity

- [HMCameraStreamControlDelegate](../hmcamerastreamcontroldelegate.md): A protocol that gives the delegate updates on the camera stream.

# delegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Delegate that receives updates as the camera stream changes.

## Declaration

```objectivec
@property (nonatomic, weak) id<HMCameraStreamControlDelegate> delegate;
```

## See Also

### Observing stream activity

- [HMCameraStreamControlDelegate](../hmcamerastreamcontroldelegate.md): A protocol that gives the delegate updates on the camera stream.
