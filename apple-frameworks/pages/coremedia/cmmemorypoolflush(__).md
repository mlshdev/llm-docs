> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmemorypoolflush(_:)](https://developer.apple.com/documentation/coremedia/cmmemorypoolflush(_:))

# CMMemoryPoolFlush(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Deallocates all memory the pool holds.

## Declaration

```swift
func CMMemoryPoolFlush(_ pool: CMMemoryPool)
```

## Parameters

- `pool`: The memory pool to flush.

## See Also

### Managing a Memory Pool

- [CMMemoryPoolGetAllocator(\_:)](cmmemorypoolgetallocator%28__%29.md): Returns the allocator for the memory pool.
- [CMMemoryPoolInvalidate(\_:)](cmmemorypoolinvalidate%28__%29.md): Invalidates the memory pool, which causes its allocator to stop recycling memory.

# CMMemoryPoolFlush (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Deallocates all memory the pool holds.

## Declaration

```objectivec
extern void CMMemoryPoolFlush(CMMemoryPoolRef pool);
```

## Parameters

- `pool`: The memory pool to flush.

## See Also

### Managing a Memory Pool

- [CMMemoryPoolGetAllocator](cmmemorypoolgetallocator%28__%29.md): Returns the allocator for the memory pool.
- [CMMemoryPoolInvalidate](cmmemorypoolinvalidate%28__%29.md): Invalidates the memory pool, which causes its allocator to stop recycling memory.
