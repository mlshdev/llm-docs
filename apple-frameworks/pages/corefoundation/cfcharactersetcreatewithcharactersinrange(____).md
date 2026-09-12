> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetcreatewithcharactersinrange(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetcreatewithcharactersinrange(_:_:))

# CFCharacterSetCreateWithCharactersInRange(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new character set with the values from the given range of Unicode characters.

## Declaration

```swift
func CFCharacterSetCreateWithCharactersInRange(_ alloc: CFAllocator!, _ theRange: CFRange) -> CFCharacterSet!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theRange`: The Unicode range of characters of the new character set. The function accepts the range in 32-bit in the UTF-32 format. The valid character point range is from 0x00000 to 0x10FFFF.

<a id="return-value"></a>

## Return Value

A new character set that contains a contiguous range of Unicode characters. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Character Sets

- [CFCharacterSetCreateCopy(\_:\_:)](cfcharactersetcreatecopy%28____%29.md): Creates a new character set with the values from a given character set.
- [CFCharacterSetCreateInvertedSet(\_:\_:)](cfcharactersetcreateinvertedset%28____%29.md): Creates a new immutable character set that is the invert of the specified character set.
- [CFCharacterSetCreateWithCharactersInString(\_:\_:)](cfcharactersetcreatewithcharactersinstring%28____%29.md): Creates a new character set with the values in the given string.
- [CFCharacterSetCreateWithBitmapRepresentation(\_:\_:)](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.

# CFCharacterSetCreateWithCharactersInRange (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new character set with the values from the given range of Unicode characters.

## Declaration

```objectivec
extern CFCharacterSetRefCFCharacterSetCreateWithCharactersInRange(CFAllocatorRef alloc, CFRange theRange);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theRange`: The Unicode range of characters of the new character set. The function accepts the range in 32-bit in the UTF-32 format. The valid character point range is from 0x00000 to 0x10FFFF.

<a id="return-value"></a>

## Return Value

A new character set that contains a contiguous range of Unicode characters. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Character Sets

- [CFCharacterSetCreateCopy](cfcharactersetcreatecopy%28____%29.md): Creates a new character set with the values from a given character set.
- [CFCharacterSetCreateInvertedSet](cfcharactersetcreateinvertedset%28____%29.md): Creates a new immutable character set that is the invert of the specified character set.
- [CFCharacterSetCreateWithCharactersInString](cfcharactersetcreatewithcharactersinstring%28____%29.md): Creates a new character set with the values in the given string.
- [CFCharacterSetCreateWithBitmapRepresentation](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.
