> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetcreateinvertedset(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetcreateinvertedset(_:_:))

# CFCharacterSetCreateInvertedSet(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new immutable character set that is the invert of the specified character set.

## Declaration

```swift
func CFCharacterSetCreateInvertedSet(_ alloc: CFAllocator!, _ theSet: CFCharacterSet!) -> CFCharacterSet!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theSet`: The character set from which to create an inverted set.

<a id="return-value"></a>

## Return Value

A new character set that is the invert of `theSet`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Character Sets

- [CFCharacterSetCreateCopy(\_:\_:)](cfcharactersetcreatecopy%28____%29.md): Creates a new character set with the values from a given character set.
- [CFCharacterSetCreateWithCharactersInRange(\_:\_:)](cfcharactersetcreatewithcharactersinrange%28____%29.md): Creates a new character set with the values from the given range of Unicode characters.
- [CFCharacterSetCreateWithCharactersInString(\_:\_:)](cfcharactersetcreatewithcharactersinstring%28____%29.md): Creates a new character set with the values in the given string.
- [CFCharacterSetCreateWithBitmapRepresentation(\_:\_:)](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.

# CFCharacterSetCreateInvertedSet (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new immutable character set that is the invert of the specified character set.

## Declaration

```objectivec
extern CFCharacterSetRefCFCharacterSetCreateInvertedSet(CFAllocatorRef alloc, CFCharacterSetRef theSet);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theSet`: The character set from which to create an inverted set.

<a id="return-value"></a>

## Return Value

A new character set that is the invert of `theSet`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Character Sets

- [CFCharacterSetCreateCopy](cfcharactersetcreatecopy%28____%29.md): Creates a new character set with the values from a given character set.
- [CFCharacterSetCreateWithCharactersInRange](cfcharactersetcreatewithcharactersinrange%28____%29.md): Creates a new character set with the values from the given range of Unicode characters.
- [CFCharacterSetCreateWithCharactersInString](cfcharactersetcreatewithcharactersinstring%28____%29.md): Creates a new character set with the values in the given string.
- [CFCharacterSetCreateWithBitmapRepresentation](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.
