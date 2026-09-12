> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/addattributes(_:range:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/addattributes(_:range:))

# addAttributes(\_:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the given collection of attributes to the characters in the specified range.

## Declaration

```swift
func addAttributes(_ attrs: [NSAttributedString.Key : Any] = [:], range: NSRange)
```

## Parameters

- `attrs`: A dictionary containing the attributes to add. Attribute keys can be supplied by another framework or can be custom ones you define. For information about the system-supplied attribute keys, see the Constants section in [NSAttributedString](../nsattributedstring.md).
- `range`: The range of characters to which the specified attributes apply.

<a id="Discussion"></a>

## Discussion

You may assign any name/value pair you wish to a range of characters. Raises an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `attrs` is `nil` and an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Changing Attributes

- [setAttributes(\_:range:)](setattributes%28__range_%29.md): Sets the attributes for the characters in the specified range to the specified attributes.
- [addAttribute(\_:value:range:)](addattribute%28__value_range_%29.md): Adds an attribute with the given name and value to the characters in the specified range.
- [removeAttribute(\_:range:)](removeattribute%28__range_%29.md): Removes the named attribute from the characters in the specified range.
- [applyFontTraits(\_:range:)](applyfonttraits%28__range_%29.md): Applies the specified font-related attributes to characters in the string.
- [setAlignment(\_:range:)](setalignment%28__range_%29.md): Sets the alignment characteristic of the paragraph style attribute for the specified range of text.
- [setBaseWritingDirection(\_:range:)](setbasewritingdirection%28__range_%29.md): Sets the base writing direction for the characters to the specified direction.
- [subscriptRange(\_:)](subscriptrange%28__%29.md): Decrements the value of the superscript attribute for characters in the specified range by one.
- [superscriptRange(\_:)](superscriptrange%28__%29.md): Increments the value of the superscript attribute for characters in the specified range by one.
- [unscriptRange(\_:)](unscriptrange%28__%29.md): Removes the superscript attribute from the characters in the specified range.

# addAttributes:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the given collection of attributes to the characters in the specified range.

## Declaration

```objectivec
- (void) addAttributes:(NSDictionary<NSString *,id> *) attrs range:(NSRange) range;
```

## Parameters

- `attrs`: A dictionary containing the attributes to add. Attribute keys can be supplied by another framework or can be custom ones you define. For information about the system-supplied attribute keys, see the Constants section in [NSAttributedString](../nsattributedstring.md).
- `range`: The range of characters to which the specified attributes apply.

<a id="Discussion"></a>

## Discussion

You may assign any name/value pair you wish to a range of characters. Raises an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `attrs` is `nil` and an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Changing Attributes

- [setAttributes:range:](setattributes%28__range_%29.md): Sets the attributes for the characters in the specified range to the specified attributes.
- [addAttribute:value:range:](addattribute%28__value_range_%29.md): Adds an attribute with the given name and value to the characters in the specified range.
- [removeAttribute:range:](removeattribute%28__range_%29.md): Removes the named attribute from the characters in the specified range.
- [applyFontTraits:range:](applyfonttraits%28__range_%29.md): Applies the specified font-related attributes to characters in the string.
- [setAlignment:range:](setalignment%28__range_%29.md): Sets the alignment characteristic of the paragraph style attribute for the specified range of text.
- [setBaseWritingDirection:range:](setbasewritingdirection%28__range_%29.md): Sets the base writing direction for the characters to the specified direction.
- [subscriptRange:](subscriptrange%28__%29.md): Decrements the value of the superscript attribute for characters in the specified range by one.
- [superscriptRange:](superscriptrange%28__%29.md): Increments the value of the superscript attribute for characters in the specified range by one.
- [unscriptRange:](unscriptrange%28__%29.md): Removes the superscript attribute from the characters in the specified range.
