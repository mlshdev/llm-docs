> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/motiontransformcountbuffer](https://developer.apple.com/documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/motiontransformcountbuffer)

# motionTransformCountBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates a buffer reference containing the number of motion transforms in the motion transform buffer, formatted as a 32-bit unsigned integer.

## Declaration

```swift
var motionTransformCountBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that the final number of motion transforms at build time in the buffer this property references is less than or equal to the value of property [maxMotionTransformCount](maxmotiontransformcount.md).

# motionTransformCountBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates a buffer reference containing the number of motion transforms in the motion transform buffer, formatted as a 32-bit unsigned integer.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange motionTransformCountBuffer;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that the final number of motion transforms at build time in the buffer this property references is less than or equal to the value of property [maxMotionTransformCount](maxmotiontransformcount.md).
