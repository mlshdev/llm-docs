> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorflipbitatindex(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorflipbitatindex(_:_:))

# CFBitVectorFlipBitAtIndex(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flips a bit value in a bit vector.

## Declaration

```swift
func CFBitVectorFlipBitAtIndex(_ bv: CFMutableBitVector!, _ idx: CFIndex)
```

## Parameters

- `bv`: The bit vector to modify.
- `idx`: The index of the bit value to flip. The index must be in the range `0…N-1`, where `N` is the count of the vector.

## See Also

### Related Documentation

- [CFBitVectorGetCount(\_:)](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBits(\_:\_:)](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits(\_:\_:)](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBitAtIndex(\_:\_:\_:)](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetBits(\_:\_:\_:)](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.
- [CFBitVectorSetCount(\_:\_:)](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

# CFBitVectorFlipBitAtIndex (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flips a bit value in a bit vector.

## Declaration

```objectivec
extern void CFBitVectorFlipBitAtIndex(CFMutableBitVectorRef bv, CFIndex idx);
```

## Parameters

- `bv`: The bit vector to modify.
- `idx`: The index of the bit value to flip. The index must be in the range `0…N-1`, where `N` is the count of the vector.

## See Also

### Related Documentation

- [CFBitVectorGetCount](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBits](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBitAtIndex](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetBits](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.
- [CFBitVectorSetCount](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.
