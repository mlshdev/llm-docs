> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosharedmemoryregion/mapmemory(_:atoffset:size:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzvirtiosharedmemoryregion/mapmemory(_:atoffset:size:completionhandler:))

# mapMemory(\_:atOffset:size:completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Maps a chunk of host memory into the shared memory region.

## Declaration

```swift
func mapMemory(_ memory: UnsafeMutableRawPointer, atOffset offset: UInt64, size: UInt64, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func mapMemory(_ memory: UnsafeMutableRawPointer, atOffset offset: UInt64, size: UInt64) async throws
```

## Parameters

- `memory`: A pointer to host memory to map into the shared memory region.
- `offset`: The offset from the start of the shared memory region where the memory should map to.
- `size`: The size of the memory to map into the shared memory region.
- `completionHandler`: A block the framework calls after successfully mapping the memory, or on an error. The error parameter passed to the block is `nil` if the map operation is successful. The framework invokes the block on [deviceQueue](../vzcustomvirtiodevice/devicequeue.md).

# mapMemory:atOffset:size:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Maps a chunk of host memory into the shared memory region.

## Declaration

```objectivec
- (void) mapMemory:(void *) memory atOffset:(uint64_t) offset size:(uint64_t) size completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `memory`: A pointer to host memory to map into the shared memory region.
- `offset`: The offset from the start of the shared memory region where the memory should map to.
- `size`: The size of the memory to map into the shared memory region.
- `completionHandler`: A block the framework calls after successfully mapping the memory, or on an error. The error parameter passed to the block is `nil` if the map operation is successful. The framework invokes the block on [deviceQueue](../vzcustomvirtiodevice/devicequeue.md).
