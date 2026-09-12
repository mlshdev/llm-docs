> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscontrolcharacterwhitespaceaction](https://developer.apple.com/documentation/uikit/nscontrolcharacterwhitespaceaction)

# NSControlCharacterWhitespaceAction (Swift)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

An action that programmatically changes the white space around the glyph.

## Declaration

```swift
var NSControlCharacterWhitespaceAction: Int { get }
```

<a id="Discussion"></a>

## Discussion

The width for a glyph with this action is determined by the delegate method [layoutManager(\_:boundingBoxForControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](nslayoutmanagerdelegate/layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md) if the method is implemented; otherwise, it’s the same as `NSControlCharacterZeroAdvancementAction`.

## See Also

### Constants

- [NSControlCharacterContainerBreakAction](nscontrolcharactercontainerbreakaction.md): Deprecated. A character that causes a break in layout.
- [NSControlCharacterHorizontalTabAction](nscontrolcharacterhorizontaltabaction.md): Deprecated. An action that inserts a horizontal tab.
- [NSControlCharacterLineBreakAction](nscontrolcharacterlinebreakaction.md): Deprecated. An action that causes a line break.
- [NSControlCharacterParagraphBreakAction](nscontrolcharacterparagraphbreakaction.md): Deprecated. An action that causes a paragraph break.
- [NSControlCharacterZeroAdvancementAction](nscontrolcharacterzeroadvancementaction.md): Deprecated. An action that removes the glyph from layout.

# NSControlCharacterWhitespaceAction (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

An action that programmatically changes the white space around the glyph.

## Declaration

```objectivec
NSControlCharacterWhitespaceAction
```

<a id="Discussion"></a>

## Discussion

The width for a glyph with this action is determined by the delegate method [layoutManager:boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](nslayoutmanagerdelegate/layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md) if the method is implemented; otherwise, it’s the same as `NSControlCharacterZeroAdvancementAction`.

## See Also

### Constants

- [NSControlCharacterContainerBreakAction](nscontrolcharactercontainerbreakaction.md): Deprecated. A character that causes a break in layout.
- [NSControlCharacterHorizontalTabAction](nscontrolcharacterhorizontaltabaction.md): Deprecated. An action that inserts a horizontal tab.
- [NSControlCharacterLineBreakAction](nscontrolcharacterlinebreakaction.md): Deprecated. An action that causes a line break.
- [NSControlCharacterParagraphBreakAction](nscontrolcharacterparagraphbreakaction.md): Deprecated. An action that causes a paragraph break.
- [NSControlCharacterZeroAdvancementAction](nscontrolcharacterzeroadvancementaction.md): Deprecated. An action that removes the glyph from layout.
