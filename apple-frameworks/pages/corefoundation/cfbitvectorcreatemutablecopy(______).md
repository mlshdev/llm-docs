> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorcreatemutablecopy(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorcreatemutablecopy(_:_:_:))

# CFBitVectorCreateMutableCopy(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable bit vector from a pre-existing bit vector.

## Declaration

```swift
func CFBitVectorCreateMutableCopy(_ allocator: CFAllocator!, _ capacity: CFIndex, _ bv: CFBitVector!) -> CFMutableBitVector!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new bit vector. The bit vector starts with the same number of values as `bv` and can grow to this number of values (it can have less).

  Pass `0` to specify that the maximum capacity is not limited. If non-`0`, `capacity` must be large enough to hold all bit values from `bv`.
- `bv`: The bit vector to copy.

<a id="return-value"></a>

## Return Value

A new bit vector holding the same bit values as `bv`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029)

## See Also

### Related Documentation

- [CFBitVectorSetCount(\_:\_:)](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

### Creating a CFMutableBitVector Object

- [CFBitVectorCreateMutable(\_:\_:)](cfbitvectorcreatemutable%28____%29.md): Creates a mutable bit vector.

# CFBitVectorCreateMutableCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable bit vector from a pre-existing bit vector.

## Declaration

```objectivec
extern CFMutableBitVectorRefCFBitVectorCreateMutableCopy(CFAllocatorRef allocator, CFIndex capacity, CFBitVectorRef bv);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new bit vector. The bit vector starts with the same number of values as `bv` and can grow to this number of values (it can have less).

  Pass `0` to specify that the maximum capacity is not limited. If non-`0`, `capacity` must be large enough to hold all bit values from `bv`.
- `bv`: The bit vector to copy.

<a id="return-value"></a>

## Return Value

A new bit vector holding the same bit values as `bv`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029)

## See Also

### Related Documentation

- [CFBitVectorSetCount](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

### Creating a CFMutableBitVector Object

- [CFBitVectorCreateMutable](cfbitvectorcreatemutable%28____%29.md): Creates a mutable bit vector.
