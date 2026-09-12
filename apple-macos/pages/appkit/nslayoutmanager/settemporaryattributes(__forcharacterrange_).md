> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/settemporaryattributes(_:forcharacterrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/settemporaryattributes(_:forcharacterrange:))

# setTemporaryAttributes(\_:forCharacterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets one or more temporary attributes for the specified character range.

## Declaration

```swift
func setTemporaryAttributes(_ attrs: [NSAttributedString.Key : Any], forCharacterRange charRange: NSRange)
```

## Parameters

- `attrs`: Attributes dictionary containing the temporary attributes to set.
- `charRange`: The range of characters to which the specified attributes apply.

<a id="Discussion"></a>

## Discussion

Temporary attributes are used only for onscreen drawing and are not persistent in any way. `NSTextView` uses them to color misspelled words when continuous spell checking is enabled. Currently the only temporary attributes recognized are those that do not affect layout (colors, underlines, and so on).

## See Also

### Managing temporary attribute support

- [addTemporaryAttributes(\_:forCharacterRange:)](addtemporaryattributes%28__forcharacterrange_%29.md): Appends one or more temporary attributes to the attributes dictionary of the specified character range.
- [addTemporaryAttribute(\_:value:forCharacterRange:)](addtemporaryattribute%28__value_forcharacterrange_%29.md): Adds a temporary attribute to the characters in the specified range.
- [removeTemporaryAttribute(\_:forCharacterRange:)](removetemporaryattribute%28__forcharacterrange_%29.md): Removes a temporary attribute from the list of attributes for the specified character range.
- [temporaryAttribute(\_:atCharacterIndex:effectiveRange:)](temporaryattribute%28__atcharacterindex_effectiverange_%29.md): Returns the value for the temporary attribute of a character, and the range it applies to.
- [temporaryAttribute(\_:atCharacterIndex:longestEffectiveRange:in:)](temporaryattribute%28__atcharacterindex_longesteffectiverange_in_%29.md): Returns the value for the temporary attribute of a character, and the maximum range it applies to.
- [temporaryAttributes(atCharacterIndex:effectiveRange:)](temporaryattributes%28atcharacterindex_effectiverange_%29.md): Returns the dictionary of temporary attributes for the specified character range.
- [temporaryAttributes(atCharacterIndex:longestEffectiveRange:in:)](temporaryattributes%28atcharacterindex_longesteffectiverange_in_%29.md): Returns the temporary attributes for a character, and the maximum range they apply to.

# setTemporaryAttributes:forCharacterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets one or more temporary attributes for the specified character range.

## Declaration

```objectivec
- (void) setTemporaryAttributes:(NSDictionary<NSString *,id> *) attrs forCharacterRange:(NSRange) charRange;
```

## Parameters

- `attrs`: Attributes dictionary containing the temporary attributes to set.
- `charRange`: The range of characters to which the specified attributes apply.

<a id="Discussion"></a>

## Discussion

Temporary attributes are used only for onscreen drawing and are not persistent in any way. `NSTextView` uses them to color misspelled words when continuous spell checking is enabled. Currently the only temporary attributes recognized are those that do not affect layout (colors, underlines, and so on).

## See Also

### Managing temporary attribute support

- [addTemporaryAttributes:forCharacterRange:](addtemporaryattributes%28__forcharacterrange_%29.md): Appends one or more temporary attributes to the attributes dictionary of the specified character range.
- [addTemporaryAttribute:value:forCharacterRange:](addtemporaryattribute%28__value_forcharacterrange_%29.md): Adds a temporary attribute to the characters in the specified range.
- [removeTemporaryAttribute:forCharacterRange:](removetemporaryattribute%28__forcharacterrange_%29.md): Removes a temporary attribute from the list of attributes for the specified character range.
- [temporaryAttribute:atCharacterIndex:effectiveRange:](temporaryattribute%28__atcharacterindex_effectiverange_%29.md): Returns the value for the temporary attribute of a character, and the range it applies to.
- [temporaryAttribute:atCharacterIndex:longestEffectiveRange:inRange:](temporaryattribute%28__atcharacterindex_longesteffectiverange_in_%29.md): Returns the value for the temporary attribute of a character, and the maximum range it applies to.
- [temporaryAttributesAtCharacterIndex:effectiveRange:](temporaryattributes%28atcharacterindex_effectiverange_%29.md): Returns the dictionary of temporary attributes for the specified character range.
- [temporaryAttributesAtCharacterIndex:longestEffectiveRange:inRange:](temporaryattributes%28atcharacterindex_longesteffectiverange_in_%29.md): Returns the temporary attributes for a character, and the maximum range they apply to.
