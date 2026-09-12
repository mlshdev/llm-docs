> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbitvectorgetcount(_:)](https://developer.apple.com/documentation/corefoundation/cfbitvectorgetcount(_:))

# CFBitVectorGetCount(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of bit values in a bit vector.

## Declaration

```swift
func CFBitVectorGetCount(_ bv: CFBitVector!) -> CFIndex
```

## Parameters

- `bv`: The bit vector to examine.

<a id="return-value"></a>

## Return Value

The current size of `bv`.

## See Also

### Getting Information About a Bit Vector

- [CFBitVectorContainsBit(\_:\_:\_:)](cfbitvectorcontainsbit%28______%29.md): Returns whether a bit vector contains a particular bit value.
- [CFBitVectorGetBitAtIndex(\_:\_:)](cfbitvectorgetbitatindex%28____%29.md): Returns the bit value at a given index in a bit vector.
- [CFBitVectorGetBits(\_:\_:\_:)](cfbitvectorgetbits%28______%29.md): Returns the bit values in a range of indices in a bit vector.
- [CFBitVectorGetCountOfBit(\_:\_:\_:)](cfbitvectorgetcountofbit%28______%29.md): Counts the number of times a certain bit value occurs within a range of bits in a bit vector.
- [CFBitVectorGetFirstIndexOfBit(\_:\_:\_:)](cfbitvectorgetfirstindexofbit%28______%29.md): Locates the first occurrence of a certain bit value within a range of bits in a bit vector.
- [CFBitVectorGetLastIndexOfBit(\_:\_:\_:)](cfbitvectorgetlastindexofbit%28______%29.md): Locates the last occurrence of a certain bit value within a range of bits in a bit vector.

# CFBitVectorGetCount (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of bit values in a bit vector.

## Declaration

```objectivec
extern CFIndex CFBitVectorGetCount(CFBitVectorRef bv);
```

## Parameters

- `bv`: The bit vector to examine.

<a id="return-value"></a>

## Return Value

The current size of `bv`.

## See Also

### Getting Information About a Bit Vector

- [CFBitVectorContainsBit](cfbitvectorcontainsbit%28______%29.md): Returns whether a bit vector contains a particular bit value.
- [CFBitVectorGetBitAtIndex](cfbitvectorgetbitatindex%28____%29.md): Returns the bit value at a given index in a bit vector.
- [CFBitVectorGetBits](cfbitvectorgetbits%28______%29.md): Returns the bit values in a range of indices in a bit vector.
- [CFBitVectorGetCountOfBit](cfbitvectorgetcountofbit%28______%29.md): Counts the number of times a certain bit value occurs within a range of bits in a bit vector.
- [CFBitVectorGetFirstIndexOfBit](cfbitvectorgetfirstindexofbit%28______%29.md): Locates the first occurrence of a certain bit value within a range of bits in a bit vector.
- [CFBitVectorGetLastIndexOfBit](cfbitvectorgetlastindexofbit%28______%29.md): Locates the last occurrence of a certain bit value within a range of bits in a bit vector.
