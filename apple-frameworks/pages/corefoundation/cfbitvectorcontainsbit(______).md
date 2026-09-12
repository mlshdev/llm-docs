> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorcontainsbit(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorcontainsbit(_:_:_:))

# CFBitVectorContainsBit(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns whether a bit vector contains a particular bit value.

## Declaration

```swift
func CFBitVectorContainsBit(_ bv: CFBitVector!, _ range: CFRange, _ value: CFBit) -> Bool
```

## Parameters

- `bv`: The bit vector to search.
- `range`: The range of bits in `bv` to search.
- `value`: The bit value for which to search.

<a id="return-value"></a>

## Return Value

`true` if the specified range of bits in `bv` contains `value`, otherwise `false`.

## See Also

### Getting Information About a Bit Vector

- [CFBitVectorGetBitAtIndex(\_:\_:)](cfbitvectorgetbitatindex%28____%29.md): Returns the bit value at a given index in a bit vector.
- [CFBitVectorGetBits(\_:\_:\_:)](cfbitvectorgetbits%28______%29.md): Returns the bit values in a range of indices in a bit vector.
- [CFBitVectorGetCount(\_:)](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.
- [CFBitVectorGetCountOfBit(\_:\_:\_:)](cfbitvectorgetcountofbit%28______%29.md): Counts the number of times a certain bit value occurs within a range of bits in a bit vector.
- [CFBitVectorGetFirstIndexOfBit(\_:\_:\_:)](cfbitvectorgetfirstindexofbit%28______%29.md): Locates the first occurrence of a certain bit value within a range of bits in a bit vector.
- [CFBitVectorGetLastIndexOfBit(\_:\_:\_:)](cfbitvectorgetlastindexofbit%28______%29.md): Locates the last occurrence of a certain bit value within a range of bits in a bit vector.

# CFBitVectorContainsBit (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns whether a bit vector contains a particular bit value.

## Declaration

```objectivec
extern Boolean CFBitVectorContainsBit(CFBitVectorRef bv, CFRange range, CFBit value);
```

## Parameters

- `bv`: The bit vector to search.
- `range`: The range of bits in `bv` to search.
- `value`: The bit value for which to search.

<a id="return-value"></a>

## Return Value

`true` if the specified range of bits in `bv` contains `value`, otherwise `false`.

## See Also

### Getting Information About a Bit Vector

- [CFBitVectorGetBitAtIndex](cfbitvectorgetbitatindex%28____%29.md): Returns the bit value at a given index in a bit vector.
- [CFBitVectorGetBits](cfbitvectorgetbits%28______%29.md): Returns the bit values in a range of indices in a bit vector.
- [CFBitVectorGetCount](cfbitvectorgetcount%28__%29.md): Returns the number of bit values in a bit vector.
- [CFBitVectorGetCountOfBit](cfbitvectorgetcountofbit%28______%29.md): Counts the number of times a certain bit value occurs within a range of bits in a bit vector.
- [CFBitVectorGetFirstIndexOfBit](cfbitvectorgetfirstindexofbit%28______%29.md): Locates the first occurrence of a certain bit value within a range of bits in a bit vector.
- [CFBitVectorGetLastIndexOfBit](cfbitvectorgetlastindexofbit%28______%29.md): Locates the last occurrence of a certain bit value within a range of bits in a bit vector.
