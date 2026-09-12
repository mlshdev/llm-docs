> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringcreatewithsubstring(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringcreatewithsubstring(_:_:_:))

# CFAttributedStringCreateWithSubstring(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a sub-attributed string from the specified range.

## Declaration

```swift
func CFAttributedStringCreateWithSubstring(_ alloc: CFAllocator!, _ aStr: CFAttributedString!, _ range: CFRange) -> CFAttributedString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new attributed string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `aStr`: The attributed string to copy.
- `range`: The range of the attributed string to copy. `range` must not exceed the bounds of `aStr`.

<a id="return-value"></a>

## Return Value

A new attributed string whose string and attributes are copied from the specified range of the supplied attributed string. Returns `NULL` if there was a problem copying the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreate(\_:\_:\_:)](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateCopy(\_:\_:)](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringGetLength(\_:)](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.
- [CFAttributedStringGetString(\_:)](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.

# CFAttributedStringCreateWithSubstring (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a sub-attributed string from the specified range.

## Declaration

```objectivec
extern CFAttributedStringRefCFAttributedStringCreateWithSubstring(CFAllocatorRef alloc, CFAttributedStringRef aStr, CFRange range);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new attributed string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `aStr`: The attributed string to copy.
- `range`: The range of the attributed string to copy. `range` must not exceed the bounds of `aStr`.

<a id="return-value"></a>

## Return Value

A new attributed string whose string and attributes are copied from the specified range of the supplied attributed string. Returns `NULL` if there was a problem copying the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreate](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateCopy](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringGetLength](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.
- [CFAttributedStringGetString](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.
