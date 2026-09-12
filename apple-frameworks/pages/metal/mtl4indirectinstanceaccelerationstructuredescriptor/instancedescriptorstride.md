> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/instancedescriptorstride](https://developer.apple.com/documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/instancedescriptorstride)

# instanceDescriptorStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the stride, in bytes, between instance descriptors in the instance descriptor buffer.

## Declaration

```swift
var instanceDescriptorStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring this stride is at least the size of the structure type corresponding to the instance descriptor type and a multiple of 4 bytes.

Defaults to `0`, indicating the instance descriptors are tightly packed.

# instanceDescriptorStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the stride, in bytes, between instance descriptors in the instance descriptor buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger instanceDescriptorStride;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring this stride is at least the size of the structure type corresponding to the instance descriptor type and a multiple of 4 bytes.

Defaults to `0`, indicating the instance descriptors are tightly packed.
