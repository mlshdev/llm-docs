> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/controlcharacteraction/whitespace](https://developer.apple.com/documentation/appkit/nslayoutmanager/controlcharacteraction/whitespace)

# whitespace (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

An action that adds whitespace.

## Declaration

```swift
static var whitespace: NSLayoutManager.ControlCharacterAction { get }
```

<a id="Discussion"></a>

## Discussion

The width for a glyph with this action is determined by the delegate method [layoutManager(\_:shouldUse:forControlCharacterAt:)](../../nslayoutmanagerdelegate/layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md) if the method is implemented; otherwise, same as `NSControlCharacterZeroAdvancementAction`.

## See Also

### Actions

- [containerBreak](containerbreak.md): An action that triggers a break in layout for the current container.
- [horizontalTab](horizontaltab.md): An action that inserts a horizontal tab.
- [lineBreak](linebreak.md): An action that causes a line break.
- [paragraphBreak](paragraphbreak.md): An action that causes a paragraph break.
- [zeroAdvancement](zeroadvancement.md): An action that removes the glyph from layout.

# NSControlCharacterActionWhitespace (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

An action that adds whitespace.

## Declaration

```objectivec
NSControlCharacterActionWhitespace
```

<a id="Discussion"></a>

## Discussion

The width for a glyph with this action is determined by the delegate method [layoutManager:shouldUseAction:forControlCharacterAtIndex:](../../nslayoutmanagerdelegate/layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md) if the method is implemented; otherwise, same as `NSControlCharacterZeroAdvancementAction`.

## See Also

### Actions

- [NSControlCharacterActionContainerBreak](containerbreak.md): An action that triggers a break in layout for the current container.
- [NSControlCharacterActionHorizontalTab](horizontaltab.md): An action that inserts a horizontal tab.
- [NSControlCharacterActionLineBreak](linebreak.md): An action that causes a line break.
- [NSControlCharacterActionParagraphBreak](paragraphbreak.md): An action that causes a paragraph break.
- [NSControlCharacterActionZeroAdvancement](zeroadvancement.md): An action that removes the glyph from layout.
