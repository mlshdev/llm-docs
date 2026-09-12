> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorcreatemutable(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorcreatemutable(_:_:))

# CFBitVectorCreateMutable(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a mutable bit vector.

## Declaration

```swift
func CFBitVectorCreateMutable(_ allocator: CFAllocator!, _ capacity: CFIndex) -> CFMutableBitVector!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new bit vector. The bit vector starts empty and can grow to this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.

<a id="return-value"></a>

## Return Value

A new bit vector. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Related Documentation

- [Collections Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFCollections/CFCollections.html#//apple_ref/doc/uid/10000124i)
- [CFBitVectorSetCount(\_:\_:)](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

### Creating a CFMutableBitVector Object

- [CFBitVectorCreateMutableCopy(\_:\_:\_:)](cfbitvectorcreatemutablecopy%28______%29.md): Creates a new mutable bit vector from a pre-existing bit vector.

# CFBitVectorCreateMutable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a mutable bit vector.

## Declaration

```objectivec
extern CFMutableBitVectorRefCFBitVectorCreateMutable(CFAllocatorRef allocator, CFIndex capacity);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new bit vector. The bit vector starts empty and can grow to this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.

<a id="return-value"></a>

## Return Value

A new bit vector. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Related Documentation

- [Collections Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFCollections/CFCollections.html#//apple_ref/doc/uid/10000124i)
- [CFBitVectorSetCount](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

### Creating a CFMutableBitVector Object

- [CFBitVectorCreateMutableCopy](cfbitvectorcreatemutablecopy%28______%29.md): Creates a new mutable bit vector from a pre-existing bit vector.
