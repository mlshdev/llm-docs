> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetcreatewithcharactersinstring(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetcreatewithcharactersinstring(_:_:))

# CFCharacterSetCreateWithCharactersInString(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new character set with the values in the given string.

## Declaration

```swift
func CFCharacterSetCreateWithCharactersInString(_ alloc: CFAllocator!, _ theString: CFString!) -> CFCharacterSet!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theString`: A string containing the characters for the new set.

<a id="return-value"></a>

## Return Value

A new character set containing the characters from `theString`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Character Sets

- [CFCharacterSetCreateCopy(\_:\_:)](cfcharactersetcreatecopy%28____%29.md): Creates a new character set with the values from a given character set.
- [CFCharacterSetCreateInvertedSet(\_:\_:)](cfcharactersetcreateinvertedset%28____%29.md): Creates a new immutable character set that is the invert of the specified character set.
- [CFCharacterSetCreateWithCharactersInRange(\_:\_:)](cfcharactersetcreatewithcharactersinrange%28____%29.md): Creates a new character set with the values from the given range of Unicode characters.
- [CFCharacterSetCreateWithBitmapRepresentation(\_:\_:)](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.

# CFCharacterSetCreateWithCharactersInString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new character set with the values in the given string.

## Declaration

```objectivec
extern CFCharacterSetRefCFCharacterSetCreateWithCharactersInString(CFAllocatorRef alloc, CFStringRef theString);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theString`: A string containing the characters for the new set.

<a id="return-value"></a>

## Return Value

A new character set containing the characters from `theString`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Character Sets

- [CFCharacterSetCreateCopy](cfcharactersetcreatecopy%28____%29.md): Creates a new character set with the values from a given character set.
- [CFCharacterSetCreateInvertedSet](cfcharactersetcreateinvertedset%28____%29.md): Creates a new immutable character set that is the invert of the specified character set.
- [CFCharacterSetCreateWithCharactersInRange](cfcharactersetcreatewithcharactersinrange%28____%29.md): Creates a new character set with the values from the given range of Unicode characters.
- [CFCharacterSetCreateWithBitmapRepresentation](cfcharactersetcreatewithbitmaprepresentation%28____%29.md): Creates a new immutable character set with the bitmap representation specified by given data.
