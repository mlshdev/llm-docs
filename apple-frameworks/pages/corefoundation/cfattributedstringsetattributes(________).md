> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringsetattributes(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringsetattributes(_:_:_:_:))

# CFAttributedStringSetAttributes(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value of attributes of a mutable attributed string over a specified range.

## Declaration

```swift
func CFAttributedStringSetAttributes(_ aStr: CFMutableAttributedString!, _ range: CFRange, _ replacement: CFDictionary!, _ clearOtherAttributes: Bool)
```

## Parameters

- `aStr`: The mutable attributed string to modify.
- `range`: The range of aStr over to which the new attributes apply. `range` must not exceed the bounds of `aStr`.
- `replacement`: A dictionary that contains key-value pairs that specify the new attributes to apply to `range`. The keys must be CFString objects, and the corresponding values must be CFType objects.
- `clearOtherAttributes`: If `false`, existing attributes (that aren’t being replaced) are left alone; otherwise they are cleared.

<a id="Discussion"></a>

## Discussion

Note that after this call, if it is mutable, changes to `replacement` will not affect the contents of the attributed string.

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing(\_:)](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing(\_:)](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString(\_:)](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute(\_:\_:\_:)](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceString(\_:\_:\_:)](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString(\_:\_:\_:)](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute(\_:\_:\_:\_:)](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.

# CFAttributedStringSetAttributes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value of attributes of a mutable attributed string over a specified range.

## Declaration

```objectivec
extern void CFAttributedStringSetAttributes(CFMutableAttributedStringRef aStr, CFRange range, CFDictionaryRef replacement, Boolean clearOtherAttributes);
```

## Parameters

- `aStr`: The mutable attributed string to modify.
- `range`: The range of aStr over to which the new attributes apply. `range` must not exceed the bounds of `aStr`.
- `replacement`: A dictionary that contains key-value pairs that specify the new attributes to apply to `range`. The keys must be CFString objects, and the corresponding values must be CFType objects.
- `clearOtherAttributes`: If `false`, existing attributes (that aren’t being replaced) are left alone; otherwise they are cleared.

<a id="Discussion"></a>

## Discussion

Note that after this call, if it is mutable, changes to `replacement` will not affect the contents of the attributed string.

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringRemoveAttribute](cfattributedstringremoveattribute%28______%29.md): Removes the value of a single attribute over a specified range.
- [CFAttributedStringReplaceString](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.
