> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/attribute(_:at:longesteffectiverange:in:)](https://developer.apple.com/documentation/foundation/nsattributedstring/attribute(_:at:longesteffectiverange:in:))

# attribute(\_:at:longestEffectiveRange:in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.

## Declaration

```swift
func attribute(_ attrName: NSAttributedString.Key, at location: Int, longestEffectiveRange range: NSRangePointer?, in rangeLimit: NSRange) -> Any?
```

## Parameters

- `attrName`: The name of an attribute.
- `location`: The index at which to test for `attributeName`.
- `range`: If non-`NULL`:

  - If the named attribute exists at `index`, upon return `aRange` contains the full range over which the value of the named attribute is the same as that at `index`, clipped to `rangeLimit`.
  - If the named attribute does not exist at `index`, upon return `aRange` contains the full range over which the attribute does not exist, clipped to `rangeLimit`.

  If you don’t need this value, pass `NULL`.
- `rangeLimit`: The range over which to search for continuous presence of `attributeName`. This value must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The value for the attribute named `attributeName` of the character at `index`, or `nil` if there is no such attribute.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if `index` or any part of `rangeLimit` lies beyond the end of the receiver’s characters.

If you don’t need the longest effective range, it’s far more efficient to use the [attribute(\_:at:effectiveRange:)](attribute%28__at_effectiverange_%29.md) method to retrieve the attribute value.

For a list of possible attributes, see [NSAttributedString.Key](key.md).

## See Also

### Getting attributes for a range of text

- [attributes(at:effectiveRange:)](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributes(at:longestEffectiveRange:in:)](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute(\_:at:effectiveRange:)](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute(\_:in:options:using:)](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributes(in:options:using:)](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedString.EnumerationOptions](enumerationoptions.md): Options for enumerating attributes.

# attribute:atIndex:longestEffectiveRange:inRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.

## Declaration

```objectivec
- (id) attribute:(NSAttributedStringKey) attrName atIndex:(NSUInteger) location longestEffectiveRange:(NSRangePointer) range inRange:(NSRange) rangeLimit;
```

## Parameters

- `attrName`: The name of an attribute.
- `location`: The index at which to test for `attributeName`.
- `range`: If non-`NULL`:

  - If the named attribute exists at `index`, upon return `aRange` contains the full range over which the value of the named attribute is the same as that at `index`, clipped to `rangeLimit`.
  - If the named attribute does not exist at `index`, upon return `aRange` contains the full range over which the attribute does not exist, clipped to `rangeLimit`.

  If you don’t need this value, pass `NULL`.
- `rangeLimit`: The range over which to search for continuous presence of `attributeName`. This value must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The value for the attribute named `attributeName` of the character at `index`, or `nil` if there is no such attribute.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `index` or any part of `rangeLimit` lies beyond the end of the receiver’s characters.

If you don’t need the longest effective range, it’s far more efficient to use the [attribute:atIndex:effectiveRange:](attribute%28__at_effectiverange_%29.md) method to retrieve the attribute value.

For a list of possible attributes, see [NSAttributedStringKey](key.md).

## See Also

### Getting attributes for a range of text

- [attributesAtIndex:effectiveRange:](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributesAtIndex:longestEffectiveRange:inRange:](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute:atIndex:effectiveRange:](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute:inRange:options:usingBlock:](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributesInRange:options:usingBlock:](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedStringEnumerationOptions](enumerationoptions.md): Options for enumerating attributes.
