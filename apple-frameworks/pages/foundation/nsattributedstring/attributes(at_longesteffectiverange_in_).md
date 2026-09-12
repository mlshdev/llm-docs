> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/attributes(at:longesteffectiverange:in:)](https://developer.apple.com/documentation/foundation/nsattributedstring/attributes(at:longesteffectiverange:in:))

# attributes(at:longestEffectiveRange:in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.

## Declaration

```swift
func attributes(at location: Int, longestEffectiveRange range: NSRangePointer?, in rangeLimit: NSRange) -> [NSAttributedString.Key : Any]
```

## Parameters

- `location`: The index for which to return attributes. This value must not exceed the bounds of the receiver.
- `range`: If non-`NULL`, upon return contains the maximum range over which the attributes and values are the same as those at `index`, clipped to `rangeLimit`.
- `rangeLimit`: The range over which to search for continuous presence of the attributes at `index`. This value must not exceed the bounds of the receiver.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if `index` or any part of `rangeLimit` lies beyond the end of the receiver’s characters.

If you don’t need the range information, it’s far more efficient to use the [attributes(at:effectiveRange:)](attributes%28at_effectiverange_%29.md) method to retrieve the attribute value.

For a list of possible attributes, see [NSAttributedString.Key](key.md).

## See Also

### Getting attributes for a range of text

- [attributes(at:effectiveRange:)](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attribute(\_:at:effectiveRange:)](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute(\_:at:longestEffectiveRange:in:)](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute(\_:in:options:using:)](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributes(in:options:using:)](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedString.EnumerationOptions](enumerationoptions.md): Options for enumerating attributes.

# attributesAtIndex:longestEffectiveRange:inRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) attributesAtIndex:(NSUInteger) location longestEffectiveRange:(NSRangePointer) range inRange:(NSRange) rangeLimit;
```

## Parameters

- `location`: The index for which to return attributes. This value must not exceed the bounds of the receiver.
- `range`: If non-`NULL`, upon return contains the maximum range over which the attributes and values are the same as those at `index`, clipped to `rangeLimit`.
- `rangeLimit`: The range over which to search for continuous presence of the attributes at `index`. This value must not exceed the bounds of the receiver.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `index` or any part of `rangeLimit` lies beyond the end of the receiver’s characters.

If you don’t need the range information, it’s far more efficient to use the [attributesAtIndex:effectiveRange:](attributes%28at_effectiverange_%29.md) method to retrieve the attribute value.

For a list of possible attributes, see [NSAttributedStringKey](key.md).

## See Also

### Getting attributes for a range of text

- [attributesAtIndex:effectiveRange:](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attribute:atIndex:effectiveRange:](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute:atIndex:longestEffectiveRange:inRange:](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute:inRange:options:usingBlock:](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributesInRange:options:usingBlock:](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedStringEnumerationOptions](enumerationoptions.md): Options for enumerating attributes.
