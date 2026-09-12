> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/enumerateattributes(in:options:using:)](https://developer.apple.com/documentation/foundation/nsattributedstring/enumerateattributes(in:options:using:))

# enumerateAttributes(in:options:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes the specified closure or block for each range of attributes in the attributed string.

## Declaration

```swift
func enumerateAttributes(in enumerationRange: NSRange, options opts: NSAttributedString.EnumerationOptions = [], using block: ([NSAttributedString.Key : Any], NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `enumerationRange`: The range over which the attributes are enumerated.
- `opts`: The options used by the enumeration. For possible values, see [NSAttributedString.EnumerationOptions](enumerationoptions.md).
- `block`: The closure or block to apply to ranges of attributes in the attributed string, taking three arguments:

  - A dictionary of attribute values keyed by name.
  - The range of the attribute values in the attributed string.
  - A reference to a Boolean value, which you can set to [true](https://developer.apple.com/documentation/swift/true) within the closure to stop further processing of the attributed string.

<a id="Discussion"></a>

## Discussion

If this method is called by an instance of [NSMutableAttributedString](../nsmutableattributedstring.md), mutation (deletion, addition, or change) is allowed only if the mutation is within the range provided to the block. After a mutation, the enumeration continues with the range immediately following the processed range, adjusting for any change in length caused by the mutation. For example, if `block` is called with a range starting at location `N`, and the block deletes all the characters in the provided range, the next call will also pass `N` as the location of the range.

## See Also

### Getting attributes for a range of text

- [attributes(at:effectiveRange:)](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributes(at:longestEffectiveRange:in:)](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute(\_:at:effectiveRange:)](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute(\_:at:longestEffectiveRange:in:)](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute(\_:in:options:using:)](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [NSAttributedString.EnumerationOptions](enumerationoptions.md): Options for enumerating attributes.

# enumerateAttributesInRange:options:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes the specified closure or block for each range of attributes in the attributed string.

## Declaration

```objectivec
- (void) enumerateAttributesInRange:(NSRange) enumerationRange options:(NSAttributedStringEnumerationOptions) opts usingBlock:(void (^)(NSDictionary<NSString *,id> *attrs, NSRange range, BOOL *stop)) block;
```

## Parameters

- `enumerationRange`: The range over which the attributes are enumerated.
- `opts`: The options used by the enumeration. For possible values, see [NSAttributedStringEnumerationOptions](enumerationoptions.md).
- `block`: The closure or block to apply to ranges of attributes in the attributed string, taking three arguments:

  - A dictionary of attribute values keyed by name.
  - The range of the attribute values in the attributed string.
  - A reference to a Boolean value, which you can set to [true](https://developer.apple.com/documentation/swift/true) within the closure to stop further processing of the attributed string.

<a id="Discussion"></a>

## Discussion

If this method is called by an instance of [NSMutableAttributedString](../nsmutableattributedstring.md), mutation (deletion, addition, or change) is allowed only if the mutation is within the range provided to the block. After a mutation, the enumeration continues with the range immediately following the processed range, adjusting for any change in length caused by the mutation. For example, if `block` is called with a range starting at location `N`, and the block deletes all the characters in the provided range, the next call will also pass `N` as the location of the range.

## See Also

### Getting attributes for a range of text

- [attributesAtIndex:effectiveRange:](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributesAtIndex:longestEffectiveRange:inRange:](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute:atIndex:effectiveRange:](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute:atIndex:longestEffectiveRange:inRange:](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute:inRange:options:usingBlock:](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [NSAttributedStringEnumerationOptions](enumerationoptions.md): Options for enumerating attributes.
