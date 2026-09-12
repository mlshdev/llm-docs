> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/hasunifiedmemory](https://developer.apple.com/documentation/metal/mtldevice/hasunifiedmemory)

# hasUnifiedMemory (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU shares all of its memory with the CPU.

## Declaration

```swift
var hasUnifiedMemory: Bool { get }
```

<a id="discussion"></a>

## Discussion

A GPU with unified memory ([true](https://developer.apple.com/documentation/swift/true)) is typically an integrated GPU. A GPU with dedicated memory ([false](https://developer.apple.com/documentation/swift/false)) may take additional time to synchronize managed resources or copy data into private GPU resources.

## See Also

### Checking a GPU device’s memory

- [currentAllocatedSize](currentallocatedsize.md): The total amount of memory, in bytes, the GPU device is using for all of its resources.
- [recommendedMaxWorkingSetSize](recommendedmaxworkingsetsize.md): An approximation of how much memory, in bytes, this GPU device can allocate without affecting its runtime performance.
- [maxTransferRate](maxtransferrate.md): Deprecated. The highest theoretical rate, in bytes per second, the system can copy between system memory and the GPU’s dedicated memory (VRAM).

# hasUnifiedMemory (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU shares all of its memory with the CPU.

## Declaration

```objectivec
@property (readonly) BOOL hasUnifiedMemory;
```

<a id="discussion"></a>

## Discussion

A GPU with unified memory ([true](https://developer.apple.com/documentation/swift/true)) is typically an integrated GPU. A GPU with dedicated memory ([false](https://developer.apple.com/documentation/swift/false)) may take additional time to synchronize managed resources or copy data into private GPU resources.

## See Also

### Checking a GPU device’s memory

- [currentAllocatedSize](currentallocatedsize.md): The total amount of memory, in bytes, the GPU device is using for all of its resources.
- [recommendedMaxWorkingSetSize](recommendedmaxworkingsetsize.md): An approximation of how much memory, in bytes, this GPU device can allocate without affecting its runtime performance.
- [maxTransferRate](maxtransferrate.md): Deprecated. The highest theoretical rate, in bytes per second, the system can copy between system memory and the GPU’s dedicated memory (VRAM).
