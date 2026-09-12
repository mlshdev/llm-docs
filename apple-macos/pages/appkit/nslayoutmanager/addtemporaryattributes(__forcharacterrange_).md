> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/addtemporaryattributes(_:forcharacterrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/addtemporaryattributes(_:forcharacterrange:))

# addTemporaryAttributes(\_:forCharacterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Appends one or more temporary attributes to the attributes dictionary of the specified character range.

## Declaration

```swift
func addTemporaryAttributes(_ attrs: [NSAttributedString.Key : Any] = [:], forCharacterRange charRange: NSRange)
```

## Parameters

- `attrs`: Attributes dictionary containing the temporary attributes to add.
- `charRange`: The range of characters to which the specified attributes apply.

<a id="Discussion"></a>

## Discussion

Temporary attributes are used only for onscreen drawing and are not persistent in any way. `NSTextView` uses them to color misspelled words when continuous spell checking is enabled. Currently the only temporary attributes recognized are those that do not affect layout (colors, underlines, and so on).

## See Also

### Managing temporary attribute support

- [addTemporaryAttribute(\_:value:forCharacterRange:)](addtemporaryattribute%28__value_forcharacterrange_%29.md): Adds a temporary attribute to the characters in the specified range.
- [setTemporaryAttributes(\_:forCharacterRange:)](settemporaryattributes%28__forcharacterrange_%29.md): Sets one or more temporary attributes for the specified character range.
- [removeTemporaryAttribute(\_:forCharacterRange:)](removetemporaryattribute%28__forcharacterrange_%29.md): Removes a temporary attribute from the list of attributes for the specified character range.
- [temporaryAttribute(\_:atCharacterIndex:effectiveRange:)](temporaryattribute%28__atcharacterindex_effectiverange_%29.md): Returns the value for the temporary attribute of a character, and the range it applies to.
- [temporaryAttribute(\_:atCharacterIndex:longestEffectiveRange:in:)](temporaryattribute%28__atcharacterindex_longesteffectiverange_in_%29.md): Returns the value for the temporary attribute of a character, and the maximum range it applies to.
- [temporaryAttributes(atCharacterIndex:effectiveRange:)](temporaryattributes%28atcharacterindex_effectiverange_%29.md): Returns the dictionary of temporary attributes for the specified character range.
- [temporaryAttributes(atCharacterIndex:longestEffectiveRange:in:)](temporaryattributes%28atcharacterindex_longesteffectiverange_in_%29.md): Returns the temporary attributes for a character, and the maximum range they apply to.

# addTemporaryAttributes:forCharacterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Appends one or more temporary attributes to the attributes dictionary of the specified character range.

## Declaration

```objectivec
- (void) addTemporaryAttributes:(NSDictionary<NSString *,id> *) attrs forCharacterRange:(NSRange) charRange;
```

## Parameters

- `attrs`: Attributes dictionary containing the temporary attributes to add.
- `charRange`: The range of characters to which the specified attributes apply.

<a id="Discussion"></a>

## Discussion

Temporary attributes are used only for onscreen drawing and are not persistent in any way. `NSTextView` uses them to color misspelled words when continuous spell checking is enabled. Currently the only temporary attributes recognized are those that do not affect layout (colors, underlines, and so on).

## See Also

### Managing temporary attribute support

- [addTemporaryAttribute:value:forCharacterRange:](addtemporaryattribute%28__value_forcharacterrange_%29.md): Adds a temporary attribute to the characters in the specified range.
- [setTemporaryAttributes:forCharacterRange:](settemporaryattributes%28__forcharacterrange_%29.md): Sets one or more temporary attributes for the specified character range.
- [removeTemporaryAttribute:forCharacterRange:](removetemporaryattribute%28__forcharacterrange_%29.md): Removes a temporary attribute from the list of attributes for the specified character range.
- [temporaryAttribute:atCharacterIndex:effectiveRange:](temporaryattribute%28__atcharacterindex_effectiverange_%29.md): Returns the value for the temporary attribute of a character, and the range it applies to.
- [temporaryAttribute:atCharacterIndex:longestEffectiveRange:inRange:](temporaryattribute%28__atcharacterindex_longesteffectiverange_in_%29.md): Returns the value for the temporary attribute of a character, and the maximum range it applies to.
- [temporaryAttributesAtCharacterIndex:effectiveRange:](temporaryattributes%28atcharacterindex_effectiverange_%29.md): Returns the dictionary of temporary attributes for the specified character range.
- [temporaryAttributesAtCharacterIndex:longestEffectiveRange:inRange:](temporaryattributes%28atcharacterindex_longesteffectiverange_in_%29.md): Returns the temporary attributes for a character, and the maximum range they apply to.
