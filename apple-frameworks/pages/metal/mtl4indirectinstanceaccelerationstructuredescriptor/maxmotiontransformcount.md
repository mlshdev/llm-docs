> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/maxmotiontransformcount](https://developer.apple.com/documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/maxmotiontransformcount)

# maxMotionTransformCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the maximum number of motion transforms in the motion transform buffer.

## Declaration

```swift
var maxMotionTransformCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that final number of motion transforms at build time that the buffer [motionTransformCountBuffer](motiontransformcountbuffer.md) references is less than or equal to this number.

# maxMotionTransformCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the maximum number of motion transforms in the motion transform buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger maxMotionTransformCount;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that final number of motion transforms at build time that the buffer [motionTransformCountBuffer](motiontransformcountbuffer.md) references is less than or equal to this number.
