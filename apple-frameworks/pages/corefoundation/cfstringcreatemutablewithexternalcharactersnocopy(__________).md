> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcreatemutablewithexternalcharactersnocopy(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcreatemutablewithexternalcharactersnocopy(_:_:_:_:_:))

# CFStringCreateMutableWithExternalCharactersNoCopy(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFMutableString object whose Unicode character buffer is controlled externally.

## Declaration

```swift
func CFStringCreateMutableWithExternalCharactersNoCopy(_ alloc: CFAllocator!, _ chars: UnsafeMutablePointer<UniChar>!, _ numChars: CFIndex, _ capacity: CFIndex, _ externalCharactersAllocator: CFAllocator!) -> CFMutableString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the string. Pass `NULL` or `kCFAllocatorDefault` to use the current default allocator.
- `chars`: The Unicode character buffer for the new `CFMutableString`. Before calling, create this buffer on the stack or heap and optionally initialize it with Unicode character data. Upon return, the created `CFString` object keeps its own copy of the pointer to this buffer. You may pass in `NULL` if there is no initial buffer being provided.
- `numChars`: The number of characters initially in the Unicode buffer pointed to by `chars`.
- `capacity`: The capacity of the external buffer (`chars`); that is, the maximum number of Unicode characters that can be stored. This value should be `0` if no initial buffer is provided.
- `externalCharactersAllocator`: The allocator to use to reallocate the external buffer when editing takes place and for deallocating the buffer when string is deallocated. If the default allocator is suitable for these purposes, pass `NULL`.  To manage the buffer yourself, pass

  `kCFAllocatorNull`

  .

<a id="return-value"></a>

## Return Value

A new mutable string, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function permits you to create a `CFMutableString` object whose backing store is an external Unicode character buffer—that is, a buffer that you control (or can control) entirely. This function allows you to take advantage of the features of `CFString`, particularly the `CFMutableString` functions that add and modify character data. But at the same time you can directly add, delete, modify, and examine the characters in the buffer. You can even replace the buffer entirely. If, however, you directly modify or replace the character buffer, you should inform the `CFString` object of this change with the [CFStringSetExternalCharactersNoCopy(\_:\_:\_:\_:)](cfstringsetexternalcharactersnocopy%28________%29.md) function.

If you mutate the character contents with the `CFString` functions, and the buffer needs to be enlarged, the `CFString` object calls the allocation callbacks specified for the allocator `externalCharactersAllocator`,  or

the default allocator

if `kCFAllocatorNull` is specified.

This function should be used in special circumstances where you want to create a `CFString` wrapper around an existing, potentially large `UniChar` buffer you own. Using this function causes the `CFString` object to forgo some of its internal optimizations, so it should be avoided in general use. That is, if you want to create a `CFString` object from a small `UniChar` buffer, and you don’t need to continue owning the buffer, use one of the other creation functions (for instance [CFStringCreateWithCharacters(\_:\_:\_:)](cfstringcreatewithcharacters%28______%29.md)) instead.

## See Also

### CFMutableString Miscellaneous Functions

- [CFStringAppend(\_:\_:)](cfstringappend%28____%29.md): Appends the characters of a string to those of a CFMutableString object.
- [CFStringAppendCharacters(\_:\_:\_:)](cfstringappendcharacters%28______%29.md): Appends a buffer of Unicode characters to the character contents of a CFMutableString object.
- [CFStringAppendCString(\_:\_:\_:)](cfstringappendcstring%28______%29.md): Appends a C string to the character contents of a CFMutableString object.
- [CFStringAppendFormatAndArguments(\_:\_:\_:\_:)](cfstringappendformatandarguments%28________%29.md): Appends a formatted string to the character contents of a CFMutableString object.
- [CFStringAppendPascalString(\_:\_:\_:)](cfstringappendpascalstring%28______%29.md): Appends a Pascal string to the character contents of a CFMutableString object.
- [CFStringCapitalize(\_:\_:)](cfstringcapitalize%28____%29.md): Changes the first character in each word of a string to uppercase (if it is a lowercase alphabetical character).
- [CFStringCreateMutable(\_:\_:)](cfstringcreatemutable%28____%29.md): Creates an empty CFMutableString object.
- [CFStringCreateMutableCopy(\_:\_:\_:)](cfstringcreatemutablecopy%28______%29.md): Creates a mutable copy of a string.
- [CFStringDelete(\_:\_:)](cfstringdelete%28____%29.md): Deletes a range of characters in a string.
- [CFStringFindAndReplace(\_:\_:\_:\_:\_:)](cfstringfindandreplace%28__________%29.md): Replaces all occurrences of a substring within a given range.
- [CFStringFold(\_:\_:\_:)](cfstringfold%28______%29.md): Folds a given string into the form specified by optional flags.
- [CFStringInsert(\_:\_:\_:)](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase(\_:\_:)](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
- [CFStringNormalize(\_:\_:)](cfstringnormalize%28____%29.md): Normalizes the string into the specified form as described in Unicode Technical Report #15.
- [CFStringPad(\_:\_:\_:\_:)](cfstringpad%28________%29.md): Enlarges a string, padding it with specified characters, or truncates the string.

# CFStringCreateMutableWithExternalCharactersNoCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFMutableString object whose Unicode character buffer is controlled externally.

## Declaration

```objectivec
extern CFMutableStringRefCFStringCreateMutableWithExternalCharactersNoCopy(CFAllocatorRef alloc, UniChar *chars, CFIndex numChars, CFIndex capacity, CFAllocatorRef externalCharactersAllocator);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the string. Pass `NULL` or `kCFAllocatorDefault` to use the current default allocator.
- `chars`: The Unicode character buffer for the new `CFMutableString`. Before calling, create this buffer on the stack or heap and optionally initialize it with Unicode character data. Upon return, the created `CFString` object keeps its own copy of the pointer to this buffer. You may pass in `NULL` if there is no initial buffer being provided.
- `numChars`: The number of characters initially in the Unicode buffer pointed to by `chars`.
- `capacity`: The capacity of the external buffer (`chars`); that is, the maximum number of Unicode characters that can be stored. This value should be `0` if no initial buffer is provided.
- `externalCharactersAllocator`: The allocator to use to reallocate the external buffer when editing takes place and for deallocating the buffer when string is deallocated. If the default allocator is suitable for these purposes, pass `NULL`.  To manage the buffer yourself, pass

  `kCFAllocatorNull`

  .

<a id="return-value"></a>

## Return Value

A new mutable string, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function permits you to create a `CFMutableString` object whose backing store is an external Unicode character buffer—that is, a buffer that you control (or can control) entirely. This function allows you to take advantage of the features of `CFString`, particularly the `CFMutableString` functions that add and modify character data. But at the same time you can directly add, delete, modify, and examine the characters in the buffer. You can even replace the buffer entirely. If, however, you directly modify or replace the character buffer, you should inform the `CFString` object of this change with the [CFStringSetExternalCharactersNoCopy](cfstringsetexternalcharactersnocopy%28________%29.md) function.

If you mutate the character contents with the `CFString` functions, and the buffer needs to be enlarged, the `CFString` object calls the allocation callbacks specified for the allocator `externalCharactersAllocator`,  or

the default allocator

if `kCFAllocatorNull` is specified.

This function should be used in special circumstances where you want to create a `CFString` wrapper around an existing, potentially large `UniChar` buffer you own. Using this function causes the `CFString` object to forgo some of its internal optimizations, so it should be avoided in general use. That is, if you want to create a `CFString` object from a small `UniChar` buffer, and you don’t need to continue owning the buffer, use one of the other creation functions (for instance [CFStringCreateWithCharacters](cfstringcreatewithcharacters%28______%29.md)) instead.

## See Also

### CFMutableString Miscellaneous Functions

- [CFStringAppend](cfstringappend%28____%29.md): Appends the characters of a string to those of a CFMutableString object.
- [CFStringAppendCharacters](cfstringappendcharacters%28______%29.md): Appends a buffer of Unicode characters to the character contents of a CFMutableString object.
- [CFStringAppendCString](cfstringappendcstring%28______%29.md): Appends a C string to the character contents of a CFMutableString object.
- [CFStringAppendFormat](cfstringappendformat.md): Appends a formatted string to the character contents of a CFMutableString object.
- [CFStringAppendFormatAndArguments](cfstringappendformatandarguments%28________%29.md): Appends a formatted string to the character contents of a CFMutableString object.
- [CFStringAppendPascalString](cfstringappendpascalstring%28______%29.md): Appends a Pascal string to the character contents of a CFMutableString object.
- [CFStringCapitalize](cfstringcapitalize%28____%29.md): Changes the first character in each word of a string to uppercase (if it is a lowercase alphabetical character).
- [CFStringCreateMutable](cfstringcreatemutable%28____%29.md): Creates an empty CFMutableString object.
- [CFStringCreateMutableCopy](cfstringcreatemutablecopy%28______%29.md): Creates a mutable copy of a string.
- [CFStringDelete](cfstringdelete%28____%29.md): Deletes a range of characters in a string.
- [CFStringFindAndReplace](cfstringfindandreplace%28__________%29.md): Replaces all occurrences of a substring within a given range.
- [CFStringFold](cfstringfold%28______%29.md): Folds a given string into the form specified by optional flags.
- [CFStringInsert](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
- [CFStringNormalize](cfstringnormalize%28____%29.md): Normalizes the string into the specified form as described in Unicode Technical Report #15.
