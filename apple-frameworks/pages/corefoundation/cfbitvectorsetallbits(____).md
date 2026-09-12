> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorsetallbits(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorsetallbits(_:_:))

# CFBitVectorSetAllBits(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets all bits in a bit vector to a particular value.

## Declaration

```swift
func CFBitVectorSetAllBits(_ bv: CFMutableBitVector!, _ value: CFBit)
```

## Parameters

- `bv`: The bit vector to modify.
- `value`: The bit value to which to set all bits in `bv`.

## See Also

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex(\_:\_:)](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits(\_:\_:)](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetBitAtIndex(\_:\_:\_:)](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetBits(\_:\_:\_:)](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.
- [CFBitVectorSetCount(\_:\_:)](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

# CFBitVectorSetAllBits (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets all bits in a bit vector to a particular value.

## Declaration

```objectivec
extern void CFBitVectorSetAllBits(CFMutableBitVectorRef bv, CFBit value);
```

## Parameters

- `bv`: The bit vector to modify.
- `value`: The bit value to which to set all bits in `bv`.

## See Also

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetBitAtIndex](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetBits](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.
- [CFBitVectorSetCount](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.
