> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringsetattribute(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringsetattribute(_:_:_:_:))

# CFAttributedStringSetAttribute(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value of a single attribute over the specified range.

## Declaration

```swift
func CFAttributedStringSetAttribute(_ aStr: CFMutableAttributedString!, _ range: CFRange, _ attrName: CFString!, _ value: CFTypeRef!)
```

## Parameters

- `aStr`: The mutable attributed string to modify.
- `range`: The range of `aStr` over to which the new attributes apply. `range` must not exceed the bounds of `aStr`.
- `attrName`: The name of the attribute whose value to set.
- `value`: The value of the attribute `attrName` to apply over `range`. This value may not be `NULL`. If you want to remove an attribute, use [CFAttributedStringRemoveAttribute(\_:\_:\_:)](cfattributedstringremoveattribute%28______%29.md).

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing(\_:)](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing(\_:)](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString(\_:)](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute(\_:\_:\_:)](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceString(\_:\_:\_:)](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString(\_:\_:\_:)](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttributes(\_:\_:\_:\_:)](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.

# CFAttributedStringSetAttribute (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value of a single attribute over the specified range.

## Declaration

```objectivec
extern void CFAttributedStringSetAttribute(CFMutableAttributedStringRef aStr, CFRange range, CFStringRef attrName, CFTypeRef value);
```

## Parameters

- `aStr`: The mutable attributed string to modify.
- `range`: The range of `aStr` over to which the new attributes apply. `range` must not exceed the bounds of `aStr`.
- `attrName`: The name of the attribute whose value to set.
- `value`: The value of the attribute `attrName` to apply over `range`. This value may not be `NULL`. If you want to remove an attribute, use [CFAttributedStringRemoveAttribute](cfattributedstringremoveattribute%28______%29.md).

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceString](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttributes](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.
