> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringgetstring(_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringgetstring(_:))

# CFAttributedStringGetString(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the string for an attributed string.

## Declaration

```swift
func CFAttributedStringGetString(_ aStr: CFAttributedString!) -> CFString!
```

## Parameters

- `aStr`: The attributed string to examine.

<a id="return-value"></a>

## Return Value

An immutable string containing the characters from `aStr`, or `NULL` if there was a problem creating the object. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

For performance reasons, the string returned will often be the backing store of the attributed string, and it might therefore change if the attributed string is edited. However, this is an implementation detail, and you should not rely on this behavior.

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreate(\_:\_:\_:)](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateCopy(\_:\_:)](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringCreateWithSubstring(\_:\_:\_:)](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetLength(\_:)](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.

# CFAttributedStringGetString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the string for an attributed string.

## Declaration

```objectivec
extern CFStringRefCFAttributedStringGetString(CFAttributedStringRef aStr);
```

## Parameters

- `aStr`: The attributed string to examine.

<a id="return-value"></a>

## Return Value

An immutable string containing the characters from `aStr`, or `NULL` if there was a problem creating the object. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

For performance reasons, the string returned will often be the backing store of the attributed string, and it might therefore change if the attributed string is edited. However, this is an implementation detail, and you should not rely on this behavior.

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreate](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateCopy](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringCreateWithSubstring](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetLength](cfattributedstringgetlength%28__%29.md): Returns the length of the attributed string in characters.
