> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringremoveattribute(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringremoveattribute(_:_:_:))

# CFAttributedStringRemoveAttribute(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the value of a single attribute over a specified range.

## Declaration

```swift
func CFAttributedStringRemoveAttribute(_ aStr: CFMutableAttributedString!, _ range: CFRange, _ attrName: CFString!)
```

## Parameters

- `aStr`: The mutable attributed string to modify.
- `range`: The range of `aStr` from which to remove the specified attribute. `range` must not exceed the bounds of `aStr`.
- `attrName`: The name of the attribute to remove.

<a id="Discussion"></a>

## Discussion

It is *not* an error of the specified attribute does not exist over the given range.

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing(\_:)](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing(\_:)](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString(\_:)](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringReplaceString(\_:\_:\_:)](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString(\_:\_:\_:)](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute(\_:\_:\_:\_:)](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.
- [CFAttributedStringSetAttributes(\_:\_:\_:\_:)](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.

# CFAttributedStringRemoveAttribute (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the value of a single attribute over a specified range.

## Declaration

```objectivec
extern void CFAttributedStringRemoveAttribute(CFMutableAttributedStringRef aStr, CFRange range, CFStringRef attrName);
```

## Parameters

- `aStr`: The mutable attributed string to modify.
- `range`: The range of `aStr` from which to remove the specified attribute. `range` must not exceed the bounds of `aStr`.
- `attrName`: The name of the attribute to remove.

<a id="Discussion"></a>

## Discussion

It is *not* an error of the specified attribute does not exist over the given range.

## See Also

### Modifying a CFMutableAttributedString

- [CFAttributedStringBeginEditing](cfattributedstringbeginediting%28__%29.md): Defers internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringEndEditing](cfattributedstringendediting%28__%29.md): Re-enables internal consistency-checking and coalescing for a mutable attributed string.
- [CFAttributedStringGetMutableString](cfattributedstringgetmutablestring%28__%29.md): Gets as a mutable string the string for an attributed string.
- [CFAttributedStringReplaceString](cfattributedstringreplacestring%28______%29.md): Modifies the string of an attributed string.
- [CFAttributedStringReplaceAttributedString](cfattributedstringreplaceattributedstring%28______%29.md): Replaces the attributed substring over a range with another attributed string.
- [CFAttributedStringSetAttribute](cfattributedstringsetattribute%28________%29.md): Sets the value of a single attribute over the specified range.
- [CFAttributedStringSetAttributes](cfattributedstringsetattributes%28________%29.md): Sets the value of attributes of a mutable attributed string over a specified range.
