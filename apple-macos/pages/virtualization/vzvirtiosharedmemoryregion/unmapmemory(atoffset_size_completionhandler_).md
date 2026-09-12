> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosharedmemoryregion/unmapmemory(atoffset:size:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzvirtiosharedmemoryregion/unmapmemory(atoffset:size:completionhandler:))

# unmapMemory(atOffset:size:completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Unmaps a chunk of host memory from the shared memory region.

## Declaration

```swift
func unmapMemory(atOffset offset: UInt64, size: UInt64, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func unmapMemory(atOffset offset: UInt64, size: UInt64) async throws
```

## Parameters

- `offset`: The offset from the start of the shared memory region where the memory should be unmapped.
- `size`: The size of the memory to be unmapped from the shared memory region.
- `completionHandler`: Block called after memory has been successfully unmapped or on error. The error parameter passed to the block is `nil` if the unmap operation is successful. The framework invokes the block on [deviceQueue](../vzcustomvirtiodevice/devicequeue.md).

# unmapMemoryAtOffset:size:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Unmaps a chunk of host memory from the shared memory region.

## Declaration

```objectivec
- (void) unmapMemoryAtOffset:(uint64_t) offset size:(uint64_t) size completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `offset`: The offset from the start of the shared memory region where the memory should be unmapped.
- `size`: The size of the memory to be unmapped from the shared memory region.
- `completionHandler`: Block called after memory has been successfully unmapped or on error. The error parameter passed to the block is `nil` if the unmap operation is successful. The framework invokes the block on [deviceQueue](../vzcustomvirtiodevice/devicequeue.md).
