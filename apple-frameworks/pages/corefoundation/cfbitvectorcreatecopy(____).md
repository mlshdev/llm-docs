> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorcreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorcreatecopy(_:_:))

# CFBitVectorCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable bit vector that is a copy of another bit vector.

## Declaration

```swift
func CFBitVectorCreateCopy(_ allocator: CFAllocator!, _ bv: CFBitVector!) -> CFBitVector!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bit vector. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bv`: The bit vector to copy.

<a id="return-value"></a>

## Return Value

A new bit vector holding the same bit values as `bv`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Bit Vector

- [CFBitVectorCreate(\_:\_:\_:)](cfbitvectorcreate%28______%29.md): Creates an immutable bit vector from a block of memory.

# CFBitVectorCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable bit vector that is a copy of another bit vector.

## Declaration

```objectivec
extern CFBitVectorRefCFBitVectorCreateCopy(CFAllocatorRef allocator, CFBitVectorRef bv);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bit vector. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bv`: The bit vector to copy.

<a id="return-value"></a>

## Return Value

A new bit vector holding the same bit values as `bv`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Bit Vector

- [CFBitVectorCreate](cfbitvectorcreate%28______%29.md): Creates an immutable bit vector from a block of memory.
