> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/superscriptrange(_:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/superscriptrange(_:))

# superscriptRange(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Increments the value of the superscript attribute for characters in the specified range by one.

## Declaration

```swift
func superscriptRange(_ range: NSRange)
```

## Parameters

- `range`: The range of characters.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Changing Attributes

- [setAttributes(\_:range:)](setattributes%28__range_%29.md): Sets the attributes for the characters in the specified range to the specified attributes.
- [addAttribute(\_:value:range:)](addattribute%28__value_range_%29.md): Adds an attribute with the given name and value to the characters in the specified range.
- [addAttributes(\_:range:)](addattributes%28__range_%29.md): Adds the given collection of attributes to the characters in the specified range.
- [removeAttribute(\_:range:)](removeattribute%28__range_%29.md): Removes the named attribute from the characters in the specified range.
- [applyFontTraits(\_:range:)](applyfonttraits%28__range_%29.md): Applies the specified font-related attributes to characters in the string.
- [setAlignment(\_:range:)](setalignment%28__range_%29.md): Sets the alignment characteristic of the paragraph style attribute for the specified range of text.
- [setBaseWritingDirection(\_:range:)](setbasewritingdirection%28__range_%29.md): Sets the base writing direction for the characters to the specified direction.
- [subscriptRange(\_:)](subscriptrange%28__%29.md): Decrements the value of the superscript attribute for characters in the specified range by one.
- [unscriptRange(\_:)](unscriptrange%28__%29.md): Removes the superscript attribute from the characters in the specified range.

# superscriptRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Increments the value of the superscript attribute for characters in the specified range by one.

## Declaration

```objectivec
- (void) superscriptRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Changing Attributes

- [setAttributes:range:](setattributes%28__range_%29.md): Sets the attributes for the characters in the specified range to the specified attributes.
- [addAttribute:value:range:](addattribute%28__value_range_%29.md): Adds an attribute with the given name and value to the characters in the specified range.
- [addAttributes:range:](addattributes%28__range_%29.md): Adds the given collection of attributes to the characters in the specified range.
- [removeAttribute:range:](removeattribute%28__range_%29.md): Removes the named attribute from the characters in the specified range.
- [applyFontTraits:range:](applyfonttraits%28__range_%29.md): Applies the specified font-related attributes to characters in the string.
- [setAlignment:range:](setalignment%28__range_%29.md): Sets the alignment characteristic of the paragraph style attribute for the specified range of text.
- [setBaseWritingDirection:range:](setbasewritingdirection%28__range_%29.md): Sets the base writing direction for the characters to the specified direction.
- [subscriptRange:](subscriptrange%28__%29.md): Decrements the value of the superscript attribute for characters in the specified range by one.
- [unscriptRange:](unscriptrange%28__%29.md): Removes the superscript attribute from the characters in the specified range.
