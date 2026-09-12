> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmemorypoolgetallocator(_:)](https://developer.apple.com/documentation/coremedia/cmmemorypoolgetallocator(_:))

# CMMemoryPoolGetAllocator(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the allocator for the memory pool.

## Declaration

```swift
func CMMemoryPoolGetAllocator(_ pool: CMMemoryPool) -> CFAllocator
```

## Parameters

- `pool`: The memory pool from which to retrieve its allocator.

<a id="return-value"></a>

## Return Value

The memory pool’s allocator.

## See Also

### Managing a Memory Pool

- [CMMemoryPoolFlush(\_:)](cmmemorypoolflush%28__%29.md): Deallocates all memory the pool holds.
- [CMMemoryPoolInvalidate(\_:)](cmmemorypoolinvalidate%28__%29.md): Invalidates the memory pool, which causes its allocator to stop recycling memory.

# CMMemoryPoolGetAllocator (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the allocator for the memory pool.

## Declaration

```objectivec
extern CFAllocatorRefCMMemoryPoolGetAllocator(CMMemoryPoolRef pool);
```

## Parameters

- `pool`: The memory pool from which to retrieve its allocator.

<a id="return-value"></a>

## Return Value

The memory pool’s allocator.

## See Also

### Managing a Memory Pool

- [CMMemoryPoolFlush](cmmemorypoolflush%28__%29.md): Deallocates all memory the pool holds.
- [CMMemoryPoolInvalidate](cmmemorypoolinvalidate%28__%29.md): Invalidates the memory pool, which causes its allocator to stop recycling memory.
