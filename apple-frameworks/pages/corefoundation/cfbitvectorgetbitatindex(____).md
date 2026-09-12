> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorgetbitatindex(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorgetbitatindex(_:_:))

# CFBitVectorGetBitAtIndex(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the bit value at a given index in a bit vector.

## Declaration

```swift
func CFBitVectorGetBitAtIndex(_ bv: CFBitVector!, _ idx: CFIndex) -> CFBit
```

## Parameters

- `bv`: The bit vector to examine.
- `idx`: The index of the bit value in `bv` to return.

<a id="return-value"></a>

## Return Value

The bit value at index `idx` in `bv`.

## See Also

### Getting Information About a Bit Vector

- [CFBitVectorContainsBit(\_:\_:\_:)](cfbitvectorcontainsbit%28______%29.md): Returns whether a bit vector contains a particular bit value.
- [CFBitVectorGetBits(\_:\_:\_:)](cfbitvectorgetbits%28______%29.md): Returns the bit values in a range of indices in a bit vector.
- [CFBitVectorGetCount(\_:)](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.
- [CFBitVectorGetCountOfBit(\_:\_:\_:)](cfbitvectorgetcountofbit%28______%29.md): Counts the number of times a certain bit value occurs within a range of bits in a bit vector.
- [CFBitVectorGetFirstIndexOfBit(\_:\_:\_:)](cfbitvectorgetfirstindexofbit%28______%29.md): Locates the first occurrence of a certain bit value within a range of bits in a bit vector.
- [CFBitVectorGetLastIndexOfBit(\_:\_:\_:)](cfbitvectorgetlastindexofbit%28______%29.md): Locates the last occurrence of a certain bit value within a range of bits in a bit vector.

# CFBitVectorGetBitAtIndex (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the bit value at a given index in a bit vector.

## Declaration

```objectivec
extern CFBit CFBitVectorGetBitAtIndex(CFBitVectorRef bv, CFIndex idx);
```

## Parameters

- `bv`: The bit vector to examine.
- `idx`: The index of the bit value in `bv` to return.

<a id="return-value"></a>

## Return Value

The bit value at index `idx` in `bv`.

## See Also

### Getting Information About a Bit Vector

- [CFBitVectorContainsBit](cfbitvectorcontainsbit%28______%29.md): Returns whether a bit vector contains a particular bit value.
- [CFBitVectorGetBits](cfbitvectorgetbits%28______%29.md): Returns the bit values in a range of indices in a bit vector.
- [CFBitVectorGetCount](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.
- [CFBitVectorGetCountOfBit](cfbitvectorgetcountofbit%28______%29.md): Counts the number of times a certain bit value occurs within a range of bits in a bit vector.
- [CFBitVectorGetFirstIndexOfBit](cfbitvectorgetfirstindexofbit%28______%29.md): Locates the first occurrence of a certain bit value within a range of bits in a bit vector.
- [CFBitVectorGetLastIndexOfBit](cfbitvectorgetlastindexofbit%28______%29.md): Locates the last occurrence of a certain bit value within a range of bits in a bit vector.
