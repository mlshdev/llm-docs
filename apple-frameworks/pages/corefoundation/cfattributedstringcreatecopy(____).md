> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringcreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringcreatecopy(_:_:))

# CFAttributedStringCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable copy of an attributed string.

## Declaration

```swift
func CFAttributedStringCreateCopy(_ alloc: CFAllocator!, _ aStr: CFAttributedString!) -> CFAttributedString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new attributed string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `aStr`: The attributed string to copy.

<a id="return-value"></a>

## Return Value

An immutable attributed string with characters and attributes identical to those of `aStr`. Returns `NULL` if there was a problem copying the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreate(\_:\_:\_:)](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateWithSubstring(\_:\_:\_:)](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetLength(\_:)](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.
- [CFAttributedStringGetString(\_:)](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.

# CFAttributedStringCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable copy of an attributed string.

## Declaration

```objectivec
extern CFAttributedStringRefCFAttributedStringCreateCopy(CFAllocatorRef alloc, CFAttributedStringRef aStr);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new attributed string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `aStr`: The attributed string to copy.

<a id="return-value"></a>

## Return Value

An immutable attributed string with characters and attributes identical to those of `aStr`. Returns `NULL` if there was a problem copying the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreate](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateWithSubstring](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetLength](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.
- [CFAttributedStringGetString](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.
