> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/motiontransformstride

# motionTransformStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the stride for motion transform.

## Declaration

```swift
var motionTransformStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `0`, indicating that transforms are tightly packed according to the motion transform type.

# motionTransformStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the stride for motion transform.

## Declaration

```objectivec
@property (nonatomic) NSUInteger motionTransformStride;
```

<a id="discussion"></a>

## Discussion

Defaults to `0`, indicating that transforms are tightly packed according to the motion transform type.
