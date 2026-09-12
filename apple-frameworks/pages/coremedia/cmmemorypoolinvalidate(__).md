> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmemorypoolinvalidate(_:)](https://developer.apple.com/documentation/coremedia/cmmemorypoolinvalidate(_:))

# CMMemoryPoolInvalidate(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Invalidates the memory pool, which causes its allocator to stop recycling memory.

## Declaration

```swift
func CMMemoryPoolInvalidate(_ pool: CMMemoryPool)
```

## Parameters

- `pool`: The memory pool to invalidate.

## See Also

### Managing a Memory Pool

- [CMMemoryPoolGetAllocator(\_:)](cmmemorypoolgetallocator%28__%29.md): Returns the allocator for the memory pool.
- [CMMemoryPoolFlush(\_:)](cmmemorypoolflush%28__%29.md): Deallocates all memory the pool holds.

# CMMemoryPoolInvalidate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Invalidates the memory pool, which causes its allocator to stop recycling memory.

## Declaration

```objectivec
extern void CMMemoryPoolInvalidate(CMMemoryPoolRef pool);
```

## Parameters

- `pool`: The memory pool to invalidate.

## See Also

### Managing a Memory Pool

- [CMMemoryPoolGetAllocator](cmmemorypoolgetallocator%28__%29.md): Returns the allocator for the memory pool.
- [CMMemoryPoolFlush](cmmemorypoolflush%28__%29.md): Deallocates all memory the pool holds.
