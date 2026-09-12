> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/supportargumentbuffers](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/supportargumentbuffers)

# supportArgumentBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether you can reference a sampler, that you make with this descriptor, by its resource ID from an argument buffer.

## Declaration

```swift
var supportArgumentBuffers: Bool { get set }
```

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

The default value is  [false](https://developer.apple.com/documentation/swift/false), which means that you can only encode the samplers you make with this descriptor as individual resources in the sampler state argument table.

Your app can encode samplers into an argument buffer if you create them with an [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) instance that has this property equal to [true](https://developer.apple.com/documentation/swift/true).

> **Tip**

> Check [maxArgumentBufferSamplerCount](../mtldevice/maxargumentbuffersamplercount.md) at runtime to query the number of samplers your app can encode into an argument buffer.

Each unique configuration of an [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) instance’s properties creates a unique [MTLSamplerState](../mtlsamplerstate.md) instance. For example, you can create unique samplers with the same [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) instance by changing one or more values of its properties, such as [minFilter](minfilter.md) or [magFilter](magfilter.md) before creating another instance.

Conversely, creating secondary sampler instances with the same descriptor property values doesn’t create any additional, unique samplers. Instead, they refer to the same underlying sampler, even if you create it with a difference descriptor instance because the configuration is the same.

# supportArgumentBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether you can reference a sampler, that you make with this descriptor, by its resource ID from an argument buffer.

## Declaration

```objectivec
@property (nonatomic) BOOL supportArgumentBuffers;
```

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

The default value is  [false](https://developer.apple.com/documentation/swift/false), which means that you can only encode the samplers you make with this descriptor as individual resources in the sampler state argument table.

Your app can encode samplers into an argument buffer if you create them with an [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) instance that has this property equal to [true](https://developer.apple.com/documentation/swift/true).

> **Tip**

> Check [maxArgumentBufferSamplerCount](../mtldevice/maxargumentbuffersamplercount.md) at runtime to query the number of samplers your app can encode into an argument buffer.

Each unique configuration of an [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) instance’s properties creates a unique [MTLSamplerState](../mtlsamplerstate.md) instance. For example, you can create unique samplers with the same [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) instance by changing one or more values of its properties, such as [minFilter](minfilter.md) or [magFilter](magfilter.md) before creating another instance.

Conversely, creating secondary sampler instances with the same descriptor property values doesn’t create any additional, unique samplers. Instead, they refer to the same underlying sampler, even if you create it with a difference descriptor instance because the configuration is the same.
