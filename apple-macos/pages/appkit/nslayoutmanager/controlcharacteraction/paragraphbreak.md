> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/controlcharacteraction/paragraphbreak](https://developer.apple.com/documentation/appkit/nslayoutmanager/controlcharacteraction/paragraphbreak)

# paragraphBreak (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

An action that causes a paragraph break.

## Declaration

```swift
static var paragraphBreak: NSLayoutManager.ControlCharacterAction { get }
```

<a id="Discussion"></a>

## Discussion

The value in [firstLineHeadIndent](../../nsparagraphstyle/firstlineheadindent.md) is used for the following glyph.

## See Also

### Actions

- [containerBreak](containerbreak.md): An action that triggers a break in layout for the current container.
- [horizontalTab](horizontaltab.md): An action that inserts a horizontal tab.
- [lineBreak](linebreak.md): An action that causes a line break.
- [whitespace](whitespace.md): An action that adds whitespace.
- [zeroAdvancement](zeroadvancement.md): An action that removes the glyph from layout.

# NSControlCharacterActionParagraphBreak (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

An action that causes a paragraph break.

## Declaration

```objectivec
NSControlCharacterActionParagraphBreak
```

<a id="Discussion"></a>

## Discussion

The value in [firstLineHeadIndent](../../nsparagraphstyle/firstlineheadindent.md) is used for the following glyph.

## See Also

### Actions

- [NSControlCharacterActionContainerBreak](containerbreak.md): An action that triggers a break in layout for the current container.
- [NSControlCharacterActionHorizontalTab](horizontaltab.md): An action that inserts a horizontal tab.
- [NSControlCharacterActionLineBreak](linebreak.md): An action that causes a line break.
- [NSControlCharacterActionWhitespace](whitespace.md): An action that adds whitespace.
- [NSControlCharacterActionZeroAdvancement](zeroadvancement.md): An action that removes the glyph from layout.
