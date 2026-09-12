> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorsetcount(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorsetcount(_:_:))

# CFBitVectorSetCount(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Changes the size of a mutable bit vector.

## Declaration

```swift
func CFBitVectorSetCount(_ bv: CFMutableBitVector!, _ count: CFIndex)
```

## Parameters

- `bv`: The bit vector to modify.
- `count`: The new size for `bv`. If `count` is greater than the current size of `bv`, the additional bit values are set to `0`.

<a id="Discussion"></a>

## Discussion

If `bv` was created with a fixed capacity, you cannot increase its size beyond that capacity.

## See Also

### Related Documentation

- [CFBitVectorCreateMutable(\_:\_:)](cfbitvectorcreatemutable%28____%29.md): Creates a mutable bit vector.
- [CFBitVectorCreateMutableCopy(\_:\_:\_:)](cfbitvectorcreatemutablecopy%28______%29.md): Creates a new mutable bit vector from a pre-existing bit vector.
- [CFBitVectorGetCount(\_:)](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex(\_:\_:)](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits(\_:\_:)](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits(\_:\_:)](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBitAtIndex(\_:\_:\_:)](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetBits(\_:\_:\_:)](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.

# CFBitVectorSetCount (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Changes the size of a mutable bit vector.

## Declaration

```objectivec
extern void CFBitVectorSetCount(CFMutableBitVectorRef bv, CFIndex count);
```

## Parameters

- `bv`: The bit vector to modify.
- `count`: The new size for `bv`. If `count` is greater than the current size of `bv`, the additional bit values are set to `0`.

<a id="Discussion"></a>

## Discussion

If `bv` was created with a fixed capacity, you cannot increase its size beyond that capacity.

## See Also

### Related Documentation

- [CFBitVectorCreateMutable](cfbitvectorcreatemutable%28____%29.md): Creates a mutable bit vector.
- [CFBitVectorCreateMutableCopy](cfbitvectorcreatemutablecopy%28______%29.md): Creates a new mutable bit vector from a pre-existing bit vector.
- [CFBitVectorGetCount](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBitAtIndex](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetBits](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.
