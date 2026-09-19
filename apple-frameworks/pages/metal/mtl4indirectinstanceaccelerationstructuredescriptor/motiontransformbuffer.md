> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/motiontransformbuffer

# motionTransformBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A buffer containing transformation information for instance motion keyframes, formatted according to the motion transform type.

## Declaration

```swift
var motionTransformBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

Each instance can have a different number of keyframes that you configure via individual instance descriptors.

You are responsible for ensuring the buffer address the range references is not zero when using motion instance descriptors.

# motionTransformBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A buffer containing transformation information for instance motion keyframes, formatted according to the motion transform type.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange motionTransformBuffer;
```

<a id="discussion"></a>

## Discussion

Each instance can have a different number of keyframes that you configure via individual instance descriptors.

You are responsible for ensuring the buffer address the range references is not zero when using motion instance descriptors.
