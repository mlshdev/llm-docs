> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetcreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetcreatecopy(_:_:))

# CFCharacterSetCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new character set with the values from a given character set.

## Declaration

```swift
func CFCharacterSetCreateCopy(_ alloc: CFAllocator!, _ theSet: CFCharacterSet!) -> CFCharacterSet!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theSet`: The character set to copy.

<a id="return-value"></a>

## Return Value

A new character set that is a copy of `theSet`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function tries to compact the backing store where applicable.

## See Also

### Creating Character Sets

- [CFCharacterSetCreateInvertedSet(\_:\_:)](cfcharactersetcreateinvertedset%28____%29.md): Creates a new immutable character set that is the invert of the specified character set.
- [CFCharacterSetCreateWithCharactersInRange(\_:\_:)](cfcharactersetcreatewithcharactersinrange%28____%29.md): Creates a new character set with the values from the given range of Unicode characters.
- [CFCharacterSetCreateWithCharactersInString(\_:\_:)](cfcharactersetcreatewithcharactersinstring%28____%29.md): Creates a new character set with the values in the given string.
- [CFCharacterSetCreateWithBitmapRepresentation(\_:\_:)](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.

# CFCharacterSetCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new character set with the values from a given character set.

## Declaration

```objectivec
extern CFCharacterSetRefCFCharacterSetCreateCopy(CFAllocatorRef alloc, CFCharacterSetRef theSet);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theSet`: The character set to copy.

<a id="return-value"></a>

## Return Value

A new character set that is a copy of `theSet`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function tries to compact the backing store where applicable.

## See Also

### Creating Character Sets

- [CFCharacterSetCreateInvertedSet](cfcharactersetcreateinvertedset%28____%29.md): Creates a new immutable character set that is the invert of the specified character set.
- [CFCharacterSetCreateWithCharactersInRange](cfcharactersetcreatewithcharactersinrange%28____%29.md): Creates a new character set with the values from the given range of Unicode characters.
- [CFCharacterSetCreateWithCharactersInString](cfcharactersetcreatewithcharactersinstring%28____%29.md): Creates a new character set with the values in the given string.
- [CFCharacterSetCreateWithBitmapRepresentation](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.
