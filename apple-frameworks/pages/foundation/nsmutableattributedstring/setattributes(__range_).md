> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/setattributes(_:range:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/setattributes(_:range:))

# setAttributes(\_:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the attributes for the characters in the specified range to the specified attributes.

## Declaration

```swift
func setAttributes(_ attrs: [NSAttributedString.Key : Any]?, range: NSRange)
```

## Parameters

- `attrs`: A dictionary containing the attributes to set. Attribute keys can be supplied by another framework or can be custom ones you define. For information about the system-supplied attribute keys, see the Constants section in [NSAttributedString](../nsattributedstring.md).
- `range`: The range of characters whose attributes are set.

<a id="Discussion"></a>

## Discussion

These new attributes replace any attributes previously associated with the characters in `range`. Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

To set attributes for a zero-length `NSMutableAttributedString` displayed in a text view, use the `NSTextView` method [typingAttributes](https://developer.apple.com/documentation/appkit/nstextview/typingattributes).

## See Also

### Changing Attributes

- [addAttribute(\_:value:range:)](addattribute%28__value_range_%29.md): Adds an attribute with the given name and value to the characters in the specified range.
- [addAttributes(\_:range:)](addattributes%28__range_%29.md): Adds the given collection of attributes to the characters in the specified range.
- [removeAttribute(\_:range:)](removeattribute%28__range_%29.md): Removes the named attribute from the characters in the specified range.
- [applyFontTraits(\_:range:)](applyfonttraits%28__range_%29.md): Applies the specified font-related attributes to characters in the string.
- [setAlignment(\_:range:)](setalignment%28__range_%29.md): Sets the alignment characteristic of the paragraph style attribute for the specified range of text.
- [setBaseWritingDirection(\_:range:)](setbasewritingdirection%28__range_%29.md): Sets the base writing direction for the characters to the specified direction.
- [subscriptRange(\_:)](subscriptrange%28__%29.md): Decrements the value of the superscript attribute for characters in the specified range by one.
- [superscriptRange(\_:)](superscriptrange%28__%29.md): Increments the value of the superscript attribute for characters in the specified range by one.
- [unscriptRange(\_:)](unscriptrange%28__%29.md): Removes the superscript attribute from the characters in the specified range.

# setAttributes:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the attributes for the characters in the specified range to the specified attributes.

## Declaration

```objectivec
- (void) setAttributes:(NSDictionary<NSString *,id> *) attrs range:(NSRange) range;
```

## Parameters

- `attrs`: A dictionary containing the attributes to set. Attribute keys can be supplied by another framework or can be custom ones you define. For information about the system-supplied attribute keys, see the Constants section in [NSAttributedString](../nsattributedstring.md).
- `range`: The range of characters whose attributes are set.

<a id="Discussion"></a>

## Discussion

These new attributes replace any attributes previously associated with the characters in `range`. Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

To set attributes for a zero-length `NSMutableAttributedString` displayed in a text view, use the `NSTextView` method [typingAttributes](https://developer.apple.com/documentation/appkit/nstextview/typingattributes).

## See Also

### Changing Attributes

- [addAttribute:value:range:](addattribute%28__value_range_%29.md): Adds an attribute with the given name and value to the characters in the specified range.
- [addAttributes:range:](addattributes%28__range_%29.md): Adds the given collection of attributes to the characters in the specified range.
- [removeAttribute:range:](removeattribute%28__range_%29.md): Removes the named attribute from the characters in the specified range.
- [applyFontTraits:range:](applyfonttraits%28__range_%29.md): Applies the specified font-related attributes to characters in the string.
- [setAlignment:range:](setalignment%28__range_%29.md): Sets the alignment characteristic of the paragraph style attribute for the specified range of text.
- [setBaseWritingDirection:range:](setbasewritingdirection%28__range_%29.md): Sets the base writing direction for the characters to the specified direction.
- [subscriptRange:](subscriptrange%28__%29.md): Decrements the value of the superscript attribute for characters in the specified range by one.
- [superscriptRange:](superscriptrange%28__%29.md): Increments the value of the superscript attribute for characters in the specified range by one.
- [unscriptRange:](unscriptrange%28__%29.md): Removes the superscript attribute from the characters in the specified range.
