> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setthreadgroupmemorylength(_:index:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setthreadgroupmemorylength(_:index:))

# setThreadgroupMemoryLength(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the size of a block of threadgroup memory.

## Declaration

```swift
func setThreadgroupMemoryLength(_ length: Int, index: Int)
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes, which needs to be a multiple of `16` bytes.
- `index`: The index in the threadgroup memory argument table using this allocation.

<a id="discussion"></a>

## Discussion

> **Important**

>  The sum of all threadgroup memory allocations (whether made using this method or directly in the shader) can’t exceed the device limits for threadgroup memory. Check threadgroup memory limits with the [staticThreadgroupMemoryLength](../mtlcomputepipelinestate/staticthreadgroupmemorylength.md) property.

The `threadgroup` memory space allows for sharing data between multiple threads in a threadgroup, which can be faster than using `device` memory in your kernels. Before using any threadgroup memory, call this method to configure the threadgroup memory argument table. Kernels accessing their arguments from threadgroup memory have the `[[threadgroup]]` attribute.

To learn more about using the threadgroup address space, see the [Metal Shading Language Specification](https://developer.apple.com/metal/metal-shading-language-specification.pdf#//apple_ref/doc/uid/TP40014364-CH4-SW5) section 4.4.

## See Also

### Configuring tile memory

- [setImageblockWidth(\_:height:)](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of imageblock data in tile memory.

# setThreadgroupMemoryLength:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the size of a block of threadgroup memory.

## Declaration

```objectivec
- (void) setThreadgroupMemoryLength:(NSUInteger) length atIndex:(NSUInteger) index;
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes, which needs to be a multiple of `16` bytes.
- `index`: The index in the threadgroup memory argument table using this allocation.

<a id="discussion"></a>

## Discussion

> **Important**

>  The sum of all threadgroup memory allocations (whether made using this method or directly in the shader) can’t exceed the device limits for threadgroup memory. Check threadgroup memory limits with the [staticThreadgroupMemoryLength](../mtlcomputepipelinestate/staticthreadgroupmemorylength.md) property.

The `threadgroup` memory space allows for sharing data between multiple threads in a threadgroup, which can be faster than using `device` memory in your kernels. Before using any threadgroup memory, call this method to configure the threadgroup memory argument table. Kernels accessing their arguments from threadgroup memory have the `[[threadgroup]]` attribute.

To learn more about using the threadgroup address space, see the [Metal Shading Language Specification](https://developer.apple.com/metal/metal-shading-language-specification.pdf#//apple_ref/doc/uid/TP40014364-CH4-SW5) section 4.4.

## See Also

### Configuring tile memory

- [setImageblockWidth:height:](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of imageblock data in tile memory.
