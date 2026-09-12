> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetcreatebitmaprepresentation(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetcreatebitmaprepresentation(_:_:))

# CFCharacterSetCreateBitmapRepresentation(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new immutable data with the bitmap representation from the given character set.

## Declaration

```swift
func CFCharacterSetCreateBitmapRepresentation(_ alloc: CFAllocator!, _ theSet: CFCharacterSet!) -> CFData!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theSet`: The set from which to create a bitmap representation. Refer to the comments for [CFCharacterSetCreateWithBitmapRepresentation(\_:\_:)](cfcharactersetcreatewithbitmaprepresentation%28____%29.md) for the detailed discussion of the bitmap representation format.

<a id="return-value"></a>

## Return Value

A new CFData object containing a bitmap representation of `theSet`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Querying Character Sets

- [CFCharacterSetHasMemberInPlane(\_:\_:)](cfcharactersethasmemberinplane%28____%29.md): Reports whether or not a character set contains at least one member character in the specified plane.
- [CFCharacterSetIsCharacterMember(\_:\_:)](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsLongCharacterMember(\_:\_:)](cfcharactersetislongcharactermember%28____%29.md): Reports whether or not a given UTF-32 character is in a character set.
- [CFCharacterSetIsSupersetOfSet(\_:\_:)](cfcharactersetissupersetofset%28____%29.md): Reports whether or not a character set is a superset of another set.

# CFCharacterSetCreateBitmapRepresentation (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new immutable data with the bitmap representation from the given character set.

## Declaration

```objectivec
extern CFDataRefCFCharacterSetCreateBitmapRepresentation(CFAllocatorRef alloc, CFCharacterSetRef theSet);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `theSet`: The set from which to create a bitmap representation. Refer to the comments for [CFCharacterSetCreateWithBitmapRepresentation](cfcharactersetcreatewithbitmaprepresentation%28____%29.md) for the detailed discussion of the bitmap representation format.

<a id="return-value"></a>

## Return Value

A new CFData object containing a bitmap representation of `theSet`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Querying Character Sets

- [CFCharacterSetHasMemberInPlane](cfcharactersethasmemberinplane%28____%29.md): Reports whether or not a character set contains at least one member character in the specified plane.
- [CFCharacterSetIsCharacterMember](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsLongCharacterMember](cfcharactersetislongcharactermember%28____%29.md): Reports whether or not a given UTF-32 character is in a character set.
- [CFCharacterSetIsSupersetOfSet](cfcharactersetissupersetofset%28____%29.md): Reports whether or not a character set is a superset of another set.
