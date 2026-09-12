> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4instanceaccelerationstructuredescriptor/instancedescriptorbuffer](https://developer.apple.com/documentation/metal/mtl4instanceaccelerationstructuredescriptor/instancedescriptorbuffer)

# instanceDescriptorBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a reference to a buffer containing instance descriptors for acceleration structures to reference.

## Declaration

```swift
var instanceDescriptorBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

This buffer conceptually represents an array of instance data. The specific format for the structs that comprise each entry depends on the value of the  [instanceDescriptorType](instancedescriptortype.md) property.

You are responsible for ensuring the buffer address the range contains is not zero.

# instanceDescriptorBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a reference to a buffer containing instance descriptors for acceleration structures to reference.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange instanceDescriptorBuffer;
```

<a id="discussion"></a>

## Discussion

This buffer conceptually represents an array of instance data. The specific format for the structs that comprise each entry depends on the value of the  [instanceDescriptorType](instancedescriptortype.md) property.

You are responsible for ensuring the buffer address the range contains is not zero.
