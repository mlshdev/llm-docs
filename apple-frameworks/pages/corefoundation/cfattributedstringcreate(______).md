> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringcreate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringcreate(_:_:_:))

# CFAttributedStringCreate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an attributed string with specified string and attributes.

## Declaration

```swift
func CFAttributedStringCreate(_ alloc: CFAllocator!, _ str: CFString!, _ attributes: CFDictionary!) -> CFAttributedString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new attributed string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `str`: A string that specifies the characters to use in the new attributed string. This value is copied.
- `attributes`: A dictionary that contains the attributes to apply to the new attributed string. This value is copied.

<a id="return-value"></a>

## Return Value

An attributed string that contains the characters from `str` and the attributes specified by `attributes`. The result is `NULL` if there was a problem in creating the attributed string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that both the string and the attributes dictionary are copied. The specified attributes are applied to the whole string. If you want to apply different attributes to different ranges of the string, you should use a mutable attributed string.

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreateCopy(\_:\_:)](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringCreateWithSubstring(\_:\_:\_:)](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetLength(\_:)](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.
- [CFAttributedStringGetString(\_:)](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.

# CFAttributedStringCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an attributed string with specified string and attributes.

## Declaration

```objectivec
extern CFAttributedStringRefCFAttributedStringCreate(CFAllocatorRef alloc, CFStringRef str, CFDictionaryRef attributes);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new attributed string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `str`: A string that specifies the characters to use in the new attributed string. This value is copied.
- `attributes`: A dictionary that contains the attributes to apply to the new attributed string. This value is copied.

<a id="return-value"></a>

## Return Value

An attributed string that contains the characters from `str` and the attributes specified by `attributes`. The result is `NULL` if there was a problem in creating the attributed string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that both the string and the attributes dictionary are copied. The specified attributes are applied to the whole string. If you want to apply different attributes to different ranges of the string, you should use a mutable attributed string.

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreateCopy](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringCreateWithSubstring](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetLength](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.
- [CFAttributedStringGetString](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.
