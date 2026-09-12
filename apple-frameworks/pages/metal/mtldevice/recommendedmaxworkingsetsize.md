> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/recommendedmaxworkingsetsize](https://developer.apple.com/documentation/metal/mtldevice/recommendedmaxworkingsetsize)

# recommendedMaxWorkingSetSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 16.0+ · visionOS 1.0+

An approximation of how much memory, in bytes, this GPU device can allocate without affecting its runtime performance.

## Declaration

```swift
var recommendedMaxWorkingSetSize: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

You can help the GPU maintain its performance by keeping the total memory footprint of its resources and heaps less than this threshold value.

## See Also

### Checking a GPU device’s memory

- [currentAllocatedSize](currentallocatedsize.md): The total amount of memory, in bytes, the GPU device is using for all of its resources.
- [hasUnifiedMemory](hasunifiedmemory.md): A Boolean value that indicates whether the GPU shares all of its memory with the CPU.
- [maxTransferRate](maxtransferrate.md): Deprecated. The highest theoretical rate, in bytes per second, the system can copy between system memory and the GPU’s dedicated memory (VRAM).

# recommendedMaxWorkingSetSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 16.0+ · visionOS 1.0+

An approximation of how much memory, in bytes, this GPU device can allocate without affecting its runtime performance.

## Declaration

```objectivec
@property (readonly) uint64_t recommendedMaxWorkingSetSize;
```

<a id="discussion"></a>

## Discussion

You can help the GPU maintain its performance by keeping the total memory footprint of its resources and heaps less than this threshold value.

## See Also

### Checking a GPU device’s memory

- [currentAllocatedSize](currentallocatedsize.md): The total amount of memory, in bytes, the GPU device is using for all of its resources.
- [hasUnifiedMemory](hasunifiedmemory.md): A Boolean value that indicates whether the GPU shares all of its memory with the CPU.
- [maxTransferRate](maxtransferrate.md): Deprecated. The highest theoretical rate, in bytes per second, the system can copy between system memory and the GPU’s dedicated memory (VRAM).
