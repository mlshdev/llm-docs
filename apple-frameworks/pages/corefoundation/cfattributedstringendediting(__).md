> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringendediting(_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringendediting(_:))

# CFAttributedStringEndEditing(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Re-enables internal consistency-checking and coalescing for a mutable attributed string.

## Declaration

```swift
func CFAttributedStringEndEditing(_ aStr: CFMutableAttributedString!)
```

## Parameters

- `aStr`: A mutable attributed string, following a call to [CFAttributedStringBeginEditing(\_:)](cfattributedstringbeginediting%28__%29.md).

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing(\_:)](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString(\_:)](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute(\_:\_:\_:)](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceString(\_:\_:\_:)](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString(\_:\_:\_:)](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute(\_:\_:\_:\_:)](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.
- [CFAttributedStringSetAttributes(\_:\_:\_:\_:)](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.

# CFAttributedStringEndEditing (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Re-enables internal consistency-checking and coalescing for a mutable attributed string.

## Declaration

```objectivec
extern void CFAttributedStringEndEditing(CFMutableAttributedStringRef aStr);
```

## Parameters

- `aStr`: A mutable attributed string, following a call to [CFAttributedStringBeginEditing](cfattributedstringbeginediting%28__%29.md).

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceString](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.
- [CFAttributedStringSetAttributes](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.
