> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorcreate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorcreate(_:_:_:))

# CFBitVectorCreate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable bit vector from a block of memory.

## Declaration

```swift
func CFBitVectorCreate(_ allocator: CFAllocator!, _ bytes: UnsafePointer<UInt8>!, _ numBits: CFIndex) -> CFBitVector!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bit vector. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bytes`: A pointer to the bit values to store in the new bit vector. The values are copied into the bit vector’s own memory. The bit indices are numbered left-to-right with `0` being the left-most, or most-significant, bit in the byte stream.
- `numBits`: The number of bits in the bit vector.

<a id="return-value"></a>

## Return Value

A new bit vector. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Bit Vector

- [CFBitVectorCreateCopy(\_:\_:)](cfbitvectorcreatecopy%28____%29.md): Creates an immutable bit vector that is a copy of another bit vector.

# CFBitVectorCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable bit vector from a block of memory.

## Declaration

```objectivec
extern CFBitVectorRefCFBitVectorCreate(CFAllocatorRef allocator, const UInt8 *bytes, CFIndex numBits);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new bit vector. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bytes`: A pointer to the bit values to store in the new bit vector. The values are copied into the bit vector’s own memory. The bit indices are numbered left-to-right with `0` being the left-most, or most-significant, bit in the byte stream.
- `numBits`: The number of bits in the bit vector.

<a id="return-value"></a>

## Return Value

A new bit vector. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Bit Vector

- [CFBitVectorCreateCopy](cfbitvectorcreatecopy%28____%29.md): Creates an immutable bit vector that is a copy of another bit vector.
