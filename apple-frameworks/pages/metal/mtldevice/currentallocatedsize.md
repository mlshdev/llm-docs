> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/currentallocatedsize](https://developer.apple.com/documentation/metal/mtldevice/currentallocatedsize)

# currentAllocatedSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The total amount of memory, in bytes, the GPU device is using for all of its resources.

## Declaration

```swift
var currentAllocatedSize: Int { get }
```

## See Also

### Checking a GPU device’s memory

- [recommendedMaxWorkingSetSize](recommendedmaxworkingsetsize.md): An approximation of how much memory, in bytes, this GPU device can allocate without affecting its runtime performance.
- [hasUnifiedMemory](hasunifiedmemory.md): A Boolean value that indicates whether the GPU shares all of its memory with the CPU.
- [maxTransferRate](maxtransferrate.md): Deprecated. The highest theoretical rate, in bytes per second, the system can copy between system memory and the GPU’s dedicated memory (VRAM).

# currentAllocatedSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The total amount of memory, in bytes, the GPU device is using for all of its resources.

## Declaration

```objectivec
@property (readonly) NSUInteger currentAllocatedSize;
```

## See Also

### Checking a GPU device’s memory

- [recommendedMaxWorkingSetSize](recommendedmaxworkingsetsize.md): An approximation of how much memory, in bytes, this GPU device can allocate without affecting its runtime performance.
- [hasUnifiedMemory](hasunifiedmemory.md): A Boolean value that indicates whether the GPU shares all of its memory with the CPU.
- [maxTransferRate](maxtransferrate.md): Deprecated. The highest theoretical rate, in bytes per second, the system can copy between system memory and the GPU’s dedicated memory (VRAM).
