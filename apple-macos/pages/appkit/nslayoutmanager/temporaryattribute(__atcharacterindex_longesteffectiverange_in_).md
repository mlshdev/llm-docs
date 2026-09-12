> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/temporaryattribute(_:atcharacterindex:longesteffectiverange:in:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/temporaryattribute(_:atcharacterindex:longesteffectiverange:in:))

# temporaryAttribute(\_:atCharacterIndex:longestEffectiveRange:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the value for the temporary attribute of a character, and the maximum range it applies to.

## Declaration

```swift
func temporaryAttribute(_ attrName: NSAttributedString.Key, atCharacterIndex location: Int, longestEffectiveRange range: NSRangePointer?, in rangeLimit: NSRange) -> Any?
```

## Parameters

- `attrName`: The name of a temporary attribute.
- `location`: The index for which to return attributes. This value must not exceed the bounds of the receiver.
- `range`: If non-`NULL`:

  - If the named attribute exists at `location`, on output, contains the maximum range over which the named attribute’s value applies, clipped to `rangeLimit`.
  - If the named attribute does not exist at `location`, on output, contains the maximum range over which the attribute does not exist.

  If you don’t need this value, pass `NULL`.
- `rangeLimit`: The range over which to search for continuous presence of `attrName`. This value must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The value for the attribute named `attrName` of the character at `location`, or `nil` if there is no such attribute.

<a id="Discussion"></a>

## Discussion

If you don’t need the longest effective range, it’s far more efficient to use the [temporaryAttribute(\_:atCharacterIndex:effectiveRange:)](temporaryattribute%28__atcharacterindex_effectiverange_%29.md) method to retrieve the attribute value.

## See Also

### Managing temporary attribute support

- [addTemporaryAttributes(\_:forCharacterRange:)](addtemporaryattributes%28__forcharacterrange_%29.md): Appends one or more temporary attributes to the attributes dictionary of the specified character range.
- [addTemporaryAttribute(\_:value:forCharacterRange:)](addtemporaryattribute%28__value_forcharacterrange_%29.md): Adds a temporary attribute to the characters in the specified range.
- [setTemporaryAttributes(\_:forCharacterRange:)](settemporaryattributes%28__forcharacterrange_%29.md): Sets one or more temporary attributes for the specified character range.
- [removeTemporaryAttribute(\_:forCharacterRange:)](removetemporaryattribute%28__forcharacterrange_%29.md): Removes a temporary attribute from the list of attributes for the specified character range.
- [temporaryAttribute(\_:atCharacterIndex:effectiveRange:)](temporaryattribute%28__atcharacterindex_effectiverange_%29.md): Returns the value for the temporary attribute of a character, and the range it applies to.
- [temporaryAttributes(atCharacterIndex:effectiveRange:)](temporaryattributes%28atcharacterindex_effectiverange_%29.md): Returns the dictionary of temporary attributes for the specified character range.
- [temporaryAttributes(atCharacterIndex:longestEffectiveRange:in:)](temporaryattributes%28atcharacterindex_longesteffectiverange_in_%29.md): Returns the temporary attributes for a character, and the maximum range they apply to.

# temporaryAttribute:atCharacterIndex:longestEffectiveRange:inRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the value for the temporary attribute of a character, and the maximum range it applies to.

## Declaration

```objectivec
- (id) temporaryAttribute:(NSAttributedStringKey) attrName atCharacterIndex:(NSUInteger) location longestEffectiveRange:(NSRangePointer) range inRange:(NSRange) rangeLimit;
```

## Parameters

- `attrName`: The name of a temporary attribute.
- `location`: The index for which to return attributes. This value must not exceed the bounds of the receiver.
- `range`: If non-`NULL`:

  - If the named attribute exists at `location`, on output, contains the maximum range over which the named attribute’s value applies, clipped to `rangeLimit`.
  - If the named attribute does not exist at `location`, on output, contains the maximum range over which the attribute does not exist.

  If you don’t need this value, pass `NULL`.
- `rangeLimit`: The range over which to search for continuous presence of `attrName`. This value must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The value for the attribute named `attrName` of the character at `location`, or `nil` if there is no such attribute.

<a id="Discussion"></a>

## Discussion

If you don’t need the longest effective range, it’s far more efficient to use the [temporaryAttribute:atCharacterIndex:effectiveRange:](temporaryattribute%28__atcharacterindex_effectiverange_%29.md) method to retrieve the attribute value.

## See Also

### Managing temporary attribute support

- [addTemporaryAttributes:forCharacterRange:](addtemporaryattributes%28__forcharacterrange_%29.md): Appends one or more temporary attributes to the attributes dictionary of the specified character range.
- [addTemporaryAttribute:value:forCharacterRange:](addtemporaryattribute%28__value_forcharacterrange_%29.md): Adds a temporary attribute to the characters in the specified range.
- [setTemporaryAttributes:forCharacterRange:](settemporaryattributes%28__forcharacterrange_%29.md): Sets one or more temporary attributes for the specified character range.
- [removeTemporaryAttribute:forCharacterRange:](removetemporaryattribute%28__forcharacterrange_%29.md): Removes a temporary attribute from the list of attributes for the specified character range.
- [temporaryAttribute:atCharacterIndex:effectiveRange:](temporaryattribute%28__atcharacterindex_effectiverange_%29.md): Returns the value for the temporary attribute of a character, and the range it applies to.
- [temporaryAttributesAtCharacterIndex:effectiveRange:](temporaryattributes%28atcharacterindex_effectiverange_%29.md): Returns the dictionary of temporary attributes for the specified character range.
- [temporaryAttributesAtCharacterIndex:longestEffectiveRange:inRange:](temporaryattributes%28atcharacterindex_longesteffectiverange_in_%29.md): Returns the temporary attributes for a character, and the maximum range they apply to.
