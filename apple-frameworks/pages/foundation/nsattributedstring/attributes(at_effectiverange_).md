> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/attributes(at:effectiverange:)](https://developer.apple.com/documentation/foundation/nsattributedstring/attributes(at:effectiverange:))

# attributes(at:effectiveRange:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attributes for the character at the specified index.

## Declaration

```swift
func attributes(at location: Int, effectiveRange range: NSRangePointer?) -> [NSAttributedString.Key : Any]
```

## Parameters

- `location`: The index for which to return attributes. This value must lie within the bounds of the receiver.
- `range`: Upon return, the range over which the attributes and values are the same as those at `index`. This range isn’t necessarily the maximum range covered, and its extent is implementation-dependent. If you need the maximum range, use [attributes(at:longestEffectiveRange:in:)](attributes%28at_longesteffectiverange_in_%29.md). If you don’t need this value, pass `NULL`.

<a id="return-value"></a>

## Return Value

The attributes for the character at `index`.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if `index` lies beyond the end of the receiver’s characters.

For a list of possible attributes, see [NSAttributedString.Key](key.md).

## See Also

### Getting attributes for a range of text

- [attributes(at:longestEffectiveRange:in:)](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute(\_:at:effectiveRange:)](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute(\_:at:longestEffectiveRange:in:)](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute(\_:in:options:using:)](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributes(in:options:using:)](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedString.EnumerationOptions](enumerationoptions.md): Options for enumerating attributes.

# attributesAtIndex:effectiveRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attributes for the character at the specified index.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) attributesAtIndex:(NSUInteger) location effectiveRange:(NSRangePointer) range;
```

## Parameters

- `location`: The index for which to return attributes. This value must lie within the bounds of the receiver.
- `range`: Upon return, the range over which the attributes and values are the same as those at `index`. This range isn’t necessarily the maximum range covered, and its extent is implementation-dependent. If you need the maximum range, use [attributesAtIndex:longestEffectiveRange:inRange:](attributes%28at_longesteffectiverange_in_%29.md). If you don’t need this value, pass `NULL`.

<a id="return-value"></a>

## Return Value

The attributes for the character at `index`.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `index` lies beyond the end of the receiver’s characters.

For a list of possible attributes, see [NSAttributedStringKey](key.md).

## See Also

### Getting attributes for a range of text

- [attributesAtIndex:longestEffectiveRange:inRange:](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute:atIndex:effectiveRange:](attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute:atIndex:longestEffectiveRange:inRange:](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute:inRange:options:usingBlock:](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributesInRange:options:usingBlock:](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedStringEnumerationOptions](enumerationoptions.md): Options for enumerating attributes.
