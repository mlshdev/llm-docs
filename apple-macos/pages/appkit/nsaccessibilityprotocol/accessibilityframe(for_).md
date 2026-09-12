> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityframe(for:)](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityframe(for:))

# accessibilityFrame(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the rectangle that encloses the specified range of characters.

## Declaration

```swift
func accessibilityFrame(for range: NSRange) -> NSRect
```

## Parameters

- `range`: The range of characters.

<a id="return-value"></a>

## Return Value

The rectangle that encloses the specified characters.

<a id="Discussion"></a>

## Discussion

If the range crosses a line boundary, the returned rectangle fully encloses all the lines of characters.

## See Also

### Configuring text elements

- [accessibilityInsertionPointLineNumber()](accessibilityinsertionpointlinenumber%28%29.md): Returns the line number that contains the insertion point.
- [setAccessibilityInsertionPointLineNumber(\_:)](setaccessibilityinsertionpointlinenumber%28__%29.md): Sets the line number that contains the insertion point.
- [accessibilityNumberOfCharacters()](accessibilitynumberofcharacters%28%29.md): Returns the number of characters in the text.
- [setAccessibilityNumberOfCharacters(\_:)](setaccessibilitynumberofcharacters%28__%29.md): Sets the number of characters in the text.
- [accessibilityPlaceholderValue()](accessibilityplaceholdervalue%28%29.md): Returns the placeholder value for the accessibility element.
- [setAccessibilityPlaceholderValue(\_:)](setaccessibilityplaceholdervalue%28__%29.md): Sets the placeholder value for the accessibility element.
- [accessibilitySelectedText()](accessibilityselectedtext%28%29.md): Returns the currently selected text.
- [setAccessibilitySelectedText(\_:)](setaccessibilityselectedtext%28__%29.md): Sets the currently selected text.
- [accessibilitySelectedTextRange()](accessibilityselectedtextrange%28%29.md): Returns the range of the currently selected text.
- [setAccessibilitySelectedTextRange(\_:)](setaccessibilityselectedtextrange%28__%29.md): Sets the range of the currently selected text.
- [accessibilitySelectedTextRanges()](accessibilityselectedtextranges%28%29.md): Returns an array of ranges for the currently selected text.
- [setAccessibilitySelectedTextRanges(\_:)](setaccessibilityselectedtextranges%28__%29.md): Sets an array of ranges for the currently selected text.
- [accessibilitySharedCharacterRange()](accessibilitysharedcharacterrange%28%29.md): Returns the range of characters that the accessibility element displays.
- [setAccessibilitySharedCharacterRange(\_:)](setaccessibilitysharedcharacterrange%28__%29.md): Sets the range of characters that the accessibility element displays.
- [accessibilitySharedTextUIElements()](accessibilitysharedtextuielements%28%29.md): Returns the other elements that share text with the accessibility element.

# accessibilityFrameForRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the rectangle that encloses the specified range of characters.

## Declaration

```objectivec
- (NSRect) accessibilityFrameForRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters.

<a id="return-value"></a>

## Return Value

The rectangle that encloses the specified characters.

<a id="Discussion"></a>

## Discussion

If the range crosses a line boundary, the returned rectangle fully encloses all the lines of characters.

## See Also

### Configuring text elements

- [accessibilityStringForRange:](accessibilitystring%28for_%29.md): Returns the substring for the specified range.
- [accessibilityAttributedStringForRange:](accessibilityattributedstring%28for_%29.md): Returns the attributed substring for the specified range of characters.
- [accessibilityRTFForRange:](accessibilityrtf%28for_%29.md): Returns the rich text format (RTF) data that describes the specified range of characters.
- [accessibilityLineForIndex:](accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityRangeForIndex:](accessibilityrange%28for_%29-6kv3.md): Returns the range of characters for the glyph that includes the specified character.
- [accessibilityStyleRangeForIndex:](accessibilitystylerange%28for_%29.md): Returns a range of characters that all have the same style as the specified character.
- [accessibilityRangeForLine:](accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
- [accessibilityRangeForPosition:](accessibilityrange%28for_%29-1iudm.md): Returns the range of characters for the glyph at the specified point.
