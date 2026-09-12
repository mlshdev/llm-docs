> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringreplacestring(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringreplacestring(_:_:_:))

# CFAttributedStringReplaceString(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Modifies the string of an attributed string.

## Declaration

```swift
func CFAttributedStringReplaceString(_ aStr: CFMutableAttributedString!, _ range: CFRange, _ replacement: CFString!)
```

## Parameters

- `aStr`: The mutable attributed string to modify.
- `range`: The range of `aStr` to be modified. `range` must not specify characters outside the bounds of `aStr`.
- `replacement`: The string to replace the existing string in `range`.

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing(\_:)](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing(\_:)](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString(\_:)](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute(\_:\_:\_:)](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceAttributedString(\_:\_:\_:)](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute(\_:\_:\_:\_:)](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.
- [CFAttributedStringSetAttributes(\_:\_:\_:\_:)](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.

# CFAttributedStringReplaceString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Modifies the string of an attributed string.

## Declaration

```objectivec
extern void CFAttributedStringReplaceString(CFMutableAttributedStringRef aStr, CFRange range, CFStringRef replacement);
```

## Parameters

- `aStr`: The mutable attributed string to modify.
- `range`: The range of `aStr` to be modified. `range` must not specify characters outside the bounds of `aStr`.
- `replacement`: The string to replace the existing string in `range`.

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceAttributedString](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.
- [CFAttributedStringSetAttributes](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.
