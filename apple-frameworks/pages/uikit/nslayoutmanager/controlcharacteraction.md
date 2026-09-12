> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/controlcharacteraction](https://developer.apple.com/documentation/uikit/nslayoutmanager/controlcharacteraction)

# NSLayoutManager.ControlCharacterAction (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that describe actions for control characters.

## Declaration

```swift
struct ControlCharacterAction
```

<a id="overview"></a>

## Overview

These constants [layoutManager(\_:shouldUse:forControlCharacterAt:)](../nslayoutmanagerdelegate/layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md) delegate method uses.

## Topics

### Actions

- [containerBreak](controlcharacteraction/containerbreak.md): An action that triggers a break in layout for the current container.
- [horizontalTab](controlcharacteraction/horizontaltab.md): An action that inserts a horizontal tab.
- [lineBreak](controlcharacteraction/linebreak.md): An action that causes a line break.
- [paragraphBreak](controlcharacteraction/paragraphbreak.md): An action that causes a paragraph break.
- [whitespace](controlcharacteraction/whitespace.md): An action that adds whitespace.
- [zeroAdvancement](controlcharacteraction/zeroadvancement.md): An action that removes the glyph from layout.

### Initializers

- [init(rawValue:)](controlcharacteraction/init%28rawvalue_%29.md): Creates a new control character action with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Invalidating glyphs and layout

- [layoutManagerDidInvalidateLayout(\_:)](../nslayoutmanagerdelegate/layoutmanagerdidinvalidatelayout%28__%29.md): Informs the delegate when the specified layout manager invalidates layout information (not glyph information).
- [layoutManager(\_:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:)](../nslayoutmanagerdelegate/layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md): Enables customization of the initial glyph generation process.
- [layoutManager(\_:shouldUse:forControlCharacterAt:)](../nslayoutmanagerdelegate/layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md): Returns the control character action for the control character at the specified character index.

# NSControlCharacterAction (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that describe actions for control characters.

## Declaration

```objectivec
enum NSControlCharacterAction : NSInteger;
```

<a id="overview"></a>

## Overview

These constants [layoutManager:shouldUseAction:forControlCharacterAtIndex:](../nslayoutmanagerdelegate/layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md) delegate method uses.

## Topics

### Actions

- [NSControlCharacterActionContainerBreak](controlcharacteraction/containerbreak.md): An action that triggers a break in layout for the current container.
- [NSControlCharacterActionHorizontalTab](controlcharacteraction/horizontaltab.md): An action that inserts a horizontal tab.
- [NSControlCharacterActionLineBreak](controlcharacteraction/linebreak.md): An action that causes a line break.
- [NSControlCharacterActionParagraphBreak](controlcharacteraction/paragraphbreak.md): An action that causes a paragraph break.
- [NSControlCharacterActionWhitespace](controlcharacteraction/whitespace.md): An action that adds whitespace.
- [NSControlCharacterActionZeroAdvancement](controlcharacteraction/zeroadvancement.md): An action that removes the glyph from layout.

## See Also

### Invalidating glyphs and layout

- [layoutManagerDidInvalidateLayout:](../nslayoutmanagerdelegate/layoutmanagerdidinvalidatelayout%28__%29.md): Informs the delegate when the specified layout manager invalidates layout information (not glyph information).
- [layoutManager:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:](../nslayoutmanagerdelegate/layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md): Enables customization of the initial glyph generation process.
- [layoutManager:shouldUseAction:forControlCharacterAtIndex:](../nslayoutmanagerdelegate/layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md): Returns the control character action for the control character at the specified character index.
