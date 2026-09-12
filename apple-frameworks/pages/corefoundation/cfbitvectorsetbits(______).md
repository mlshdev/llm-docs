> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorsetbits(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorsetbits(_:_:_:))

# CFBitVectorSetBits(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a range of bits in a bit vector to a particular value.

## Declaration

```swift
func CFBitVectorSetBits(_ bv: CFMutableBitVector!, _ range: CFRange, _ value: CFBit)
```

## Parameters

- `bv`: The bit vector to modify.
- `range`: The range of bits to set. The range must not exceed `0…N-1`, where `N` is the count of the vector.
- `value`: The bit value to which to set the range of bits.

## See Also

### Related Documentation

- [CFBitVectorGetCount(\_:)](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex(\_:\_:)](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits(\_:\_:)](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits(\_:\_:)](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBitAtIndex(\_:\_:\_:)](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetCount(\_:\_:)](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

# CFBitVectorSetBits (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a range of bits in a bit vector to a particular value.

## Declaration

```objectivec
extern void CFBitVectorSetBits(CFMutableBitVectorRef bv, CFRange range, CFBit value);
```

## Parameters

- `bv`: The bit vector to modify.
- `range`: The range of bits to set. The range must not exceed `0…N-1`, where `N` is the count of the vector.
- `value`: The bit value to which to set the range of bits.

## See Also

### Related Documentation

- [CFBitVectorGetCount](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBitAtIndex](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetCount](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.
