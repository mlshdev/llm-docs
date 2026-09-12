> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorsetbitatindex(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorsetbitatindex(_:_:_:))

# CFBitVectorSetBitAtIndex(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value of a particular bit in a bit vector.

## Declaration

```swift
func CFBitVectorSetBitAtIndex(_ bv: CFMutableBitVector!, _ idx: CFIndex, _ value: CFBit)
```

## Parameters

- `bv`: The bit vector to modify.
- `idx`: The index of the bit value to set. The index must be in the range `0…N-1`, where `N` is the count of the vector.
- `value`: The bit value to which to set the bit at index `idx`.

## See Also

### Related Documentation

- [CFBitVectorGetCount(\_:)](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex(\_:\_:)](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits(\_:\_:)](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits(\_:\_:)](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBits(\_:\_:\_:)](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.
- [CFBitVectorSetCount(\_:\_:)](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

# CFBitVectorSetBitAtIndex (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value of a particular bit in a bit vector.

## Declaration

```objectivec
extern void CFBitVectorSetBitAtIndex(CFMutableBitVectorRef bv, CFIndex idx, CFBit value);
```

## Parameters

- `bv`: The bit vector to modify.
- `idx`: The index of the bit value to set. The index must be in the range `0…N-1`, where `N` is the count of the vector.
- `value`: The bit value to which to set the bit at index `idx`.

## See Also

### Related Documentation

- [CFBitVectorGetCount](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBits](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.
- [CFBitVectorSetCount](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.
