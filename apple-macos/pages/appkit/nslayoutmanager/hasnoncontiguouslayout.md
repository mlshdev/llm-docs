> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/hasnoncontiguouslayout](https://developer.apple.com/documentation/appkit/nslayoutmanager/hasnoncontiguouslayout)

# hasNonContiguousLayout (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value that indicates whether the layout manager currently has any areas of noncontiguous layout.

## Declaration

```swift
var hasNonContiguousLayout: Bool { get }
```

<a id="Discussion"></a>

## Discussion

There may be times at which there is no noncontiguous layout, such as when layout is complete; this method enables the layout manager to report that to clients.

For more information about noncontiguous layout, see [Noncontiguous Layout](../nslayoutmanager.md#Noncontiguous-Layout).

## See Also

### Configuring the global layout manager options

- [allowsNonContiguousLayout](allowsnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager allows noncontiguous layout.
- [showsInvisibleCharacters](showsinvisiblecharacters.md): A Boolean value that indicates whether to substitute visible glyphs for whitespace and other typically invisible characters.
- [showsControlCharacters](showscontrolcharacters.md): A Boolean value that indicates whether the layout manager substitutes visible glyphs for control characters in the layout.
- [usesFontLeading](usesfontleading.md): A Boolean value that indicates whether the layout manager uses the leading of the font.
- [backgroundLayoutEnabled](backgroundlayoutenabled.md): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that indicates whether the layout manager avoids laying out unusually long or suspicious input.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.

# hasNonContiguousLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the layout manager currently has any areas of noncontiguous layout.

## Declaration

```objectivec
@property (readonly) BOOL hasNonContiguousLayout;
```

<a id="Discussion"></a>

## Discussion

There may be times at which there is no noncontiguous layout, such as when layout is complete; this method enables the layout manager to report that to clients.

For more information about noncontiguous layout, see [Noncontiguous Layout](../nslayoutmanager.md#Noncontiguous-Layout).

## See Also

### Configuring the global layout manager options

- [allowsNonContiguousLayout](allowsnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager allows noncontiguous layout.
- [showsInvisibleCharacters](showsinvisiblecharacters.md): A Boolean value that indicates whether to substitute visible glyphs for whitespace and other typically invisible characters.
- [showsControlCharacters](showscontrolcharacters.md): A Boolean value that indicates whether the layout manager substitutes visible glyphs for control characters in the layout.
- [usesFontLeading](usesfontleading.md): A Boolean value that indicates whether the layout manager uses the leading of the font.
- [backgroundLayoutEnabled](backgroundlayoutenabled.md): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that indicates whether the layout manager avoids laying out unusually long or suspicious input.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.
