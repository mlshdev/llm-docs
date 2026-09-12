> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscontrolcharacterzeroadvancementaction](https://developer.apple.com/documentation/uikit/nscontrolcharacterzeroadvancementaction)

# NSControlCharacterZeroAdvancementAction (Swift)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

An action that removes the glyph from layout.

## Declaration

```swift
var NSControlCharacterZeroAdvancementAction: Int { get }
```

<a id="Discussion"></a>

## Discussion

Glyphs with this action are filtered out from layout ([notShownAttribute(forGlyphAt:)](nslayoutmanager/notshownattribute%28forglyphat_%29.md) `== YES` for the glyph).

## See Also

### Constants

- [NSControlCharacterContainerBreakAction](nscontrolcharactercontainerbreakaction.md): Deprecated. A character that causes a break in layout.
- [NSControlCharacterHorizontalTabAction](nscontrolcharacterhorizontaltabaction.md): Deprecated. An action that inserts a horizontal tab.
- [NSControlCharacterLineBreakAction](nscontrolcharacterlinebreakaction.md): Deprecated. An action that causes a line break.
- [NSControlCharacterParagraphBreakAction](nscontrolcharacterparagraphbreakaction.md): Deprecated. An action that causes a paragraph break.
- [NSControlCharacterWhitespaceAction](nscontrolcharacterwhitespaceaction.md): Deprecated. An action that programmatically changes the white space around the glyph.

# NSControlCharacterZeroAdvancementAction (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

An action that removes the glyph from layout.

## Declaration

```objectivec
NSControlCharacterZeroAdvancementAction
```

<a id="Discussion"></a>

## Discussion

Glyphs with this action are filtered out from layout ([notShownAttributeForGlyphAtIndex:](nslayoutmanager/notshownattribute%28forglyphat_%29.md) `== YES` for the glyph).

## See Also

### Constants

- [NSControlCharacterContainerBreakAction](nscontrolcharactercontainerbreakaction.md): Deprecated. A character that causes a break in layout.
- [NSControlCharacterHorizontalTabAction](nscontrolcharacterhorizontaltabaction.md): Deprecated. An action that inserts a horizontal tab.
- [NSControlCharacterLineBreakAction](nscontrolcharacterlinebreakaction.md): Deprecated. An action that causes a line break.
- [NSControlCharacterParagraphBreakAction](nscontrolcharacterparagraphbreakaction.md): Deprecated. An action that causes a paragraph break.
- [NSControlCharacterWhitespaceAction](nscontrolcharacterwhitespaceaction.md): Deprecated. An action that programmatically changes the white space around the glyph.
