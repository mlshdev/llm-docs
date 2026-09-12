> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmutablebitvector](https://developer.apple.com/documentation/corefoundation/cfmutablebitvector)

# CFMutableBitVector (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFMutableBitVector
```

<a id="Overview"></a>

## Overview

CFMutableBitVector objects manage dynamic bit vectors. The basic interface for managing bit vectors is provided by [CFBitVector](cfbitvector.md). CFMutableBitVector adds functions to modify the contents of a bit vector.

You create a mutable bit vector object using either the [CFBitVectorCreateMutable(\_:\_:)](cfbitvectorcreatemutable%28____%29.md) or [CFBitVectorCreateMutableCopy(\_:\_:\_:)](cfbitvectorcreatemutablecopy%28______%29.md) function. You add to and remove from a bit vector by altering the size of the bit vector with the [CFBitVectorSetCount(\_:\_:)](cfbitvectorsetcount%28____%29.md) function

## Topics

### Creating a CFMutableBitVector Object

- [CFBitVectorCreateMutable(\_:\_:)](cfbitvectorcreatemutable%28____%29.md): Creates a mutable bit vector.
- [CFBitVectorCreateMutableCopy(\_:\_:\_:)](cfbitvectorcreatemutablecopy%28______%29.md): Creates a new mutable bit vector from a pre-existing bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex(\_:\_:)](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits(\_:\_:)](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits(\_:\_:)](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBitAtIndex(\_:\_:\_:)](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetBits(\_:\_:\_:)](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.
- [CFBitVectorSetCount(\_:\_:)](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

## Relationships

### Inherits From

- [CFBitVector](cfbitvector.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFMutableBitVectorRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFBitVector * CFMutableBitVectorRef;
```

<a id="Overview"></a>

## Overview

CFMutableBitVector objects manage dynamic bit vectors. The basic interface for managing bit vectors is provided by [CFBitVectorRef](cfbitvector.md). CFMutableBitVector adds functions to modify the contents of a bit vector.

You create a mutable bit vector object using either the [CFBitVectorCreateMutable](cfbitvectorcreatemutable%28____%29.md) or [CFBitVectorCreateMutableCopy](cfbitvectorcreatemutablecopy%28______%29.md) function. You add to and remove from a bit vector by altering the size of the bit vector with the [CFBitVectorSetCount](cfbitvectorsetcount%28____%29.md) function

## Topics

### Creating a CFMutableBitVector Object

- [CFBitVectorCreateMutable](cfbitvectorcreatemutable%28____%29.md): Creates a mutable bit vector.
- [CFBitVectorCreateMutableCopy](cfbitvectorcreatemutablecopy%28______%29.md): Creates a new mutable bit vector from a pre-existing bit vector.

### Modifying a Bit Vector

- [CFBitVectorFlipBitAtIndex](cfbitvectorflipbitatindex%28____%29.md): Flips a bit value in a bit vector.
- [CFBitVectorFlipBits](cfbitvectorflipbits%28____%29.md): Flips a range of bit values in a bit vector.
- [CFBitVectorSetAllBits](cfbitvectorsetallbits%28____%29.md): Sets all bits in a bit vector to a particular value.
- [CFBitVectorSetBitAtIndex](cfbitvectorsetbitatindex%28______%29.md): Sets the value of a particular bit in a bit vector.
- [CFBitVectorSetBits](cfbitvectorsetbits%28______%29.md): Sets a range of bits in a bit vector to a particular value.
- [CFBitVectorSetCount](cfbitvectorsetcount%28____%29.md): Changes the size of a mutable bit vector.

## See Also

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
