> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/controlcharacteraction/zeroadvancement](https://developer.apple.com/documentation/uikit/nslayoutmanager/controlcharacteraction/zeroadvancement)

# zeroAdvancement (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An action that removes the glyph from layout.

## Declaration

```swift
static var zeroAdvancement: NSLayoutManager.ControlCharacterAction { get }
```

<a id="Discussion"></a>

## Discussion

Glyphs with this action are filtered out from layout ([notShownAttribute(forGlyphAt:)](../notshownattribute%28forglyphat_%29.md) `== YES` for the glyph).

## See Also

### Actions

- [containerBreak](containerbreak.md): An action that triggers a break in layout for the current container.
- [horizontalTab](horizontaltab.md): An action that inserts a horizontal tab.
- [lineBreak](linebreak.md): An action that causes a line break.
- [paragraphBreak](paragraphbreak.md): An action that causes a paragraph break.
- [whitespace](whitespace.md): An action that adds whitespace.

# NSControlCharacterActionZeroAdvancement (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An action that removes the glyph from layout.

## Declaration

```objectivec
NSControlCharacterActionZeroAdvancement
```

<a id="Discussion"></a>

## Discussion

Glyphs with this action are filtered out from layout ([notShownAttributeForGlyphAtIndex:](../notshownattribute%28forglyphat_%29.md) `== YES` for the glyph).

## See Also

### Actions

- [NSControlCharacterActionContainerBreak](containerbreak.md): An action that triggers a break in layout for the current container.
- [NSControlCharacterActionHorizontalTab](horizontaltab.md): An action that inserts a horizontal tab.
- [NSControlCharacterActionLineBreak](linebreak.md): An action that causes a line break.
- [NSControlCharacterActionParagraphBreak](paragraphbreak.md): An action that causes a paragraph break.
- [NSControlCharacterActionWhitespace](whitespace.md): An action that adds whitespace.
