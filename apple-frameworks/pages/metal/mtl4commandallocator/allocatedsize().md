> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandallocator/allocatedsize()](https://developer.apple.com/documentation/metal/mtl4commandallocator/allocatedsize())

# allocatedSize() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Queries the size of the internal memory heaps of this command allocator that support encoding commands into command buffers.

## Declaration

```swift
func allocatedSize() -> UInt64
```

<a id="return-value"></a>

## Return Value

A size in bytes.

# allocatedSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Queries the size of the internal memory heaps of this command allocator that support encoding commands into command buffers.

## Declaration

```objectivec
- (uint64_t) allocatedSize;
```

<a id="return-value"></a>

## Return Value

A size in bytes.
