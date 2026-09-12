> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4argumenttable/setaddress(_:index:)](https://developer.apple.com/documentation/metal/mtl4argumenttable/setaddress(_:index:))

# setAddress(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Binds a GPU address to a buffer binding slot.

## Declaration

```swift
func setAddress(_ gpuAddress: MTLGPUAddress, index bindingIndex: Int)
```

## Parameters

- `gpuAddress`: The GPU address of a [MTLBuffer](../mtlbuffer.md) to set.
- `bindingIndex`: A valid binding index in the buffer binding range. It is an error for this value to match or exceed the value of property [maxBufferBindCount](../mtl4argumenttabledescriptor/maxbufferbindcount.md) on the descriptor from which you created this argument table.

# setAddress:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Binds a GPU address to a buffer binding slot.

## Declaration

```objectivec
- (void) setAddress:(MTLGPUAddress) gpuAddress atIndex:(NSUInteger) bindingIndex;
```

## Parameters

- `gpuAddress`: The GPU address of a [MTLBuffer](../mtlbuffer.md) to set.
- `bindingIndex`: A valid binding index in the buffer binding range. It is an error for this value to match or exceed the value of property [maxBufferBindCount](../mtl4argumenttabledescriptor/maxbufferbindcount.md) on the descriptor from which you created this argument table.
