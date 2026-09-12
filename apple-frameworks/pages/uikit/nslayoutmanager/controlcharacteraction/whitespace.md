> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/controlcharacteraction/whitespace](https://developer.apple.com/documentation/uikit/nslayoutmanager/controlcharacteraction/whitespace)

# whitespace (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An action that adds whitespace.

## Declaration

```swift
static var whitespace: NSLayoutManager.ControlCharacterAction { get }
```

<a id="Discussion"></a>

## Discussion

The width for a glyph with this action is determined by the delegate method [layoutManager(\_:boundingBoxForControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](../../nslayoutmanagerdelegate/layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md) if the method is implemented; otherwise, same as `NSControlCharacterZeroAdvancementAction`.

## See Also

### Actions

- [containerBreak](containerbreak.md): An action that triggers a break in layout for the current container.
- [horizontalTab](horizontaltab.md): An action that inserts a horizontal tab.
- [lineBreak](linebreak.md): An action that causes a line break.
- [paragraphBreak](paragraphbreak.md): An action that causes a paragraph break.
- [zeroAdvancement](zeroadvancement.md): An action that removes the glyph from layout.

# NSControlCharacterActionWhitespace (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An action that adds whitespace.

## Declaration

```objectivec
NSControlCharacterActionWhitespace
```

<a id="Discussion"></a>

## Discussion

The width for a glyph with this action is determined by the delegate method [layoutManager:boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](../../nslayoutmanagerdelegate/layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md) if the method is implemented; otherwise, same as `NSControlCharacterZeroAdvancementAction`.

## See Also

### Actions

- [NSControlCharacterActionContainerBreak](containerbreak.md): An action that triggers a break in layout for the current container.
- [NSControlCharacterActionHorizontalTab](horizontaltab.md): An action that inserts a horizontal tab.
- [NSControlCharacterActionLineBreak](linebreak.md): An action that causes a line break.
- [NSControlCharacterActionParagraphBreak](paragraphbreak.md): An action that causes a paragraph break.
- [NSControlCharacterActionZeroAdvancement](zeroadvancement.md): An action that removes the glyph from layout.
