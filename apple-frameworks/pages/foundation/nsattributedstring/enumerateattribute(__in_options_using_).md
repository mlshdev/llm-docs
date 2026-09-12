> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/enumerateattribute(_:in:options:using:)](https://developer.apple.com/documentation/foundation/nsattributedstring/enumerateattribute(_:in:options:using:))

# enumerateAttribute(\_:in:options:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes the specified closure or block for each range of a particular attribute in the attributed string.

## Declaration

```swift
func enumerateAttribute(_ attrName: NSAttributedString.Key, in enumerationRange: NSRange, options opts: NSAttributedString.EnumerationOptions = [], using block: (Any?, NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `attrName`: The name of the attribute to enumerate.
- `enumerationRange`: The range over which the attribute values are enumerated.
- `opts`: The options used by the enumeration. For possible values, see [NSAttributedString.EnumerationOptions](enumerationoptions.md).
- `block`: A closure or block to apply to ranges of the specified attribute in the attributed string, taking three arguments:

  - The value for the specified attribute.
  - The range of the attribute value in the attributed string.
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
- [enumerateAttributes(in:options:using:)](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedString.EnumerationOptions](enumerationoptions.md): Options for enumerating attributes.

# enumerateAttribute:inRange:options:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes the specified closure or block for each range of a particular attribute in the attributed string.

## Declaration

```objectivec
- (void) enumerateAttribute:(NSAttributedStringKey) attrName inRange:(NSRange) enumerationRange options:(NSAttributedStringEnumerationOptions) opts usingBlock:(void (^)(id value, NSRange range, BOOL *stop)) block;
```

## Parameters

- `attrName`: The name of the attribute to enumerate.
- `enumerationRange`: The range over which the attribute values are enumerated.
- `opts`: The options used by the enumeration. For possible values, see [NSAttributedStringEnumerationOptions](enumerationoptions.md).
- `block`: A closure or block to apply to ranges of the specified attribute in the attributed string, taking three arguments:

  - The value for the specified attribute.
  - The range of the attribute value in the attributed string.
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
- [enumerateAttributesInRange:options:usingBlock:](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedStringEnumerationOptions](enumerationoptions.md): Options for enumerating attributes.
