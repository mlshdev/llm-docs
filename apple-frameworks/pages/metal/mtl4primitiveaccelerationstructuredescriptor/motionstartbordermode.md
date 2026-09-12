> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4primitiveaccelerationstructuredescriptor/motionstartbordermode](https://developer.apple.com/documentation/metal/mtl4primitiveaccelerationstructuredescriptor/motionstartbordermode)

# motionStartBorderMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the behavior when the ray-tracing system samples the acceleration structure before the motion start time.

## Declaration

```swift
var motionStartBorderMode: MTLMotionBorderMode { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to control the behavior when the ray-tracing system samples the acceleration structure at a time prior to the one you set for [motionStartTime](motionstarttime.md).

The default value of this property is `MTLMotionBorderModeClamp`.

# motionStartBorderMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the behavior when the ray-tracing system samples the acceleration structure before the motion start time.

## Declaration

```objectivec
@property (nonatomic) MTLMotionBorderMode motionStartBorderMode;
```

<a id="discussion"></a>

## Discussion

Use this property to control the behavior when the ray-tracing system samples the acceleration structure at a time prior to the one you set for [motionStartTime](motionstarttime.md).

The default value of this property is `MTLMotionBorderModeClamp`.
