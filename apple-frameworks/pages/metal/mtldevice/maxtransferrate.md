> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/maxtransferrate](https://developer.apple.com/documentation/metal/mtldevice/maxtransferrate)

# maxTransferRate (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

The highest theoretical rate, in bytes per second, the system can copy between system memory and the GPU’s dedicated memory (VRAM).

> Not applicable on Apple Silicon

## Declaration

```swift
var maxTransferRate: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

Metal calculates this value from the raw data-clock rate, and the GPU may not be able to reach this speed in real-world conditions.

> **Important**

>  The maximum transfer rate for built-in GPUs is `0`.

## See Also

### Checking a GPU device’s memory

- [currentAllocatedSize](currentallocatedsize.md): The total amount of memory, in bytes, the GPU device is using for all of its resources.
- [recommendedMaxWorkingSetSize](recommendedmaxworkingsetsize.md): An approximation of how much memory, in bytes, this GPU device can allocate without affecting its runtime performance.
- [hasUnifiedMemory](hasunifiedmemory.md): A Boolean value that indicates whether the GPU shares all of its memory with the CPU.

# maxTransferRate (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

The highest theoretical rate, in bytes per second, the system can copy between system memory and the GPU’s dedicated memory (VRAM).

> Not applicable on Apple Silicon

## Declaration

```objectivec
@property (readonly) uint64_t maxTransferRate;
```

<a id="discussion"></a>

## Discussion

Metal calculates this value from the raw data-clock rate, and the GPU may not be able to reach this speed in real-world conditions.

> **Important**

>  The maximum transfer rate for built-in GPUs is `0`.

## See Also

### Checking a GPU device’s memory

- [currentAllocatedSize](currentallocatedsize.md): The total amount of memory, in bytes, the GPU device is using for all of its resources.
- [recommendedMaxWorkingSetSize](recommendedmaxworkingsetsize.md): An approximation of how much memory, in bytes, this GPU device can allocate without affecting its runtime performance.
- [hasUnifiedMemory](hasunifiedmemory.md): A Boolean value that indicates whether the GPU shares all of its memory with the CPU.
