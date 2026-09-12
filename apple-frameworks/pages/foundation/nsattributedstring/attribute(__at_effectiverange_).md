> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/attribute(_:at:effectiverange:)](https://developer.apple.com/documentation/foundation/nsattributedstring/attribute(_:at:effectiverange:))

# attribute(\_:at:effectiveRange:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.

## Declaration

```swift
func attribute(_ attrName: NSAttributedString.Key, at location: Int, effectiveRange range: NSRangePointer?) -> Any?
```

## Parameters

- `attrName`: The name of an attribute.
- `location`: The index for which to return attributes. This value must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an [rangeException](../nsexceptionname/rangeexception.md) if `index` lies beyond the end of the receiver’s characters.
- `range`: If non-`NULL`:

  - If the named attribute exists at `index`, upon return `aRange` contains a range over which the named attribute’s value applies.
  - If the named attribute does not exist at `index`, upon return `aRange` contains the range over which the attribute does not exist.

  The range isn’t necessarily the maximum range covered by `attributeName`, and its extent is implementation-dependent. If you need the maximum range, use [attribute(\_:at:longestEffectiveRange:in:)](attribute%28__at_longesteffectiverange_in_%29.md). If you don’t need this value, pass `NULL`.

<a id="return-value"></a>

## Return Value

The value for the attribute named `attrName` of the character at `location`, or `nil` if there is no such attribute.

<a id="Discussion"></a>

## Discussion

For a list of possible attributes, see [NSAttributedString.Key](key.md).

## See Also

### Getting attributes for a range of text

- [attributes(at:effectiveRange:)](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributes(at:longestEffectiveRange:in:)](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute(\_:at:longestEffectiveRange:in:)](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute(\_:in:options:using:)](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributes(in:options:using:)](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedString.EnumerationOptions](enumerationoptions.md): Options for enumerating attributes.

# attribute:atIndex:effectiveRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.

## Declaration

```objectivec
- (id) attribute:(NSAttributedStringKey) attrName atIndex:(NSUInteger) location effectiveRange:(NSRangePointer) range;
```

## Parameters

- `attrName`: The name of an attribute.
- `location`: The index for which to return attributes. This value must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `index` lies beyond the end of the receiver’s characters.
- `range`: If non-`NULL`:

  - If the named attribute exists at `index`, upon return `aRange` contains a range over which the named attribute’s value applies.
  - If the named attribute does not exist at `index`, upon return `aRange` contains the range over which the attribute does not exist.

  The range isn’t necessarily the maximum range covered by `attributeName`, and its extent is implementation-dependent. If you need the maximum range, use [attribute:atIndex:longestEffectiveRange:inRange:](attribute%28__at_longesteffectiverange_in_%29.md). If you don’t need this value, pass `NULL`.

<a id="return-value"></a>

## Return Value

The value for the attribute named `attrName` of the character at `location`, or `nil` if there is no such attribute.

<a id="Discussion"></a>

## Discussion

For a list of possible attributes, see [NSAttributedStringKey](key.md).

## See Also

### Getting attributes for a range of text

- [attributesAtIndex:effectiveRange:](attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributesAtIndex:longestEffectiveRange:inRange:](attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute:atIndex:longestEffectiveRange:inRange:](attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute:inRange:options:usingBlock:](enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributesInRange:options:usingBlock:](enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedStringEnumerationOptions](enumerationoptions.md): Options for enumerating attributes.
