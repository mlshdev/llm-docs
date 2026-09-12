> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4primitiveaccelerationstructuredescriptor/motionendbordermode](https://developer.apple.com/documentation/metal/mtl4primitiveaccelerationstructuredescriptor/motionendbordermode)

# motionEndBorderMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the motion border mode.

## Declaration

```swift
var motionEndBorderMode: MTLMotionBorderMode { get set }
```

<a id="discussion"></a>

## Discussion

This property controls what happens if Metal samples the acceleration structure after [motionEndTime](motionendtime.md).

Its default value is `MTLMotionBorderModeClamp`.

# motionEndBorderMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the motion border mode.

## Declaration

```objectivec
@property (nonatomic) MTLMotionBorderMode motionEndBorderMode;
```

<a id="discussion"></a>

## Discussion

This property controls what happens if Metal samples the acceleration structure after [motionEndTime](motionendtime.md).

Its default value is `MTLMotionBorderModeClamp`.
