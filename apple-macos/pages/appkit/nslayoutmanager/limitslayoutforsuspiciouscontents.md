> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/limitslayoutforsuspiciouscontents](https://developer.apple.com/documentation/appkit/nslayoutmanager/limitslayoutforsuspiciouscontents)

# limitsLayoutForSuspiciousContents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A Boolean value that indicates whether the layout manager avoids laying out unusually long or suspicious input.

## Declaration

```swift
var limitsLayoutForSuspiciousContents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the layout manager to lay out whatever text you give it. Changing the value to [true](https://developer.apple.com/documentation/swift/true) causes the layout manager to generate invalid layout information when it detects potentially suspicious content.

## See Also

### Configuring the global layout manager options

- [allowsNonContiguousLayout](allowsnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager allows noncontiguous layout.
- [hasNonContiguousLayout](hasnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager currently has any areas of noncontiguous layout.
- [showsInvisibleCharacters](showsinvisiblecharacters.md): A Boolean value that indicates whether to substitute visible glyphs for whitespace and other typically invisible characters.
- [showsControlCharacters](showscontrolcharacters.md): A Boolean value that indicates whether the layout manager substitutes visible glyphs for control characters in the layout.
- [usesFontLeading](usesfontleading.md): A Boolean value that indicates whether the layout manager uses the leading of the font.
- [backgroundLayoutEnabled](backgroundlayoutenabled.md): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.

# limitsLayoutForSuspiciousContents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A Boolean value that indicates whether the layout manager avoids laying out unusually long or suspicious input.

## Declaration

```objectivec
@property BOOL limitsLayoutForSuspiciousContents;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the layout manager to lay out whatever text you give it. Changing the value to [true](https://developer.apple.com/documentation/swift/true) causes the layout manager to generate invalid layout information when it detects potentially suspicious content.

## See Also

### Configuring the global layout manager options

- [allowsNonContiguousLayout](allowsnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager allows noncontiguous layout.
- [hasNonContiguousLayout](hasnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager currently has any areas of noncontiguous layout.
- [showsInvisibleCharacters](showsinvisiblecharacters.md): A Boolean value that indicates whether to substitute visible glyphs for whitespace and other typically invisible characters.
- [showsControlCharacters](showscontrolcharacters.md): A Boolean value that indicates whether the layout manager substitutes visible glyphs for control characters in the layout.
- [usesFontLeading](usesfontleading.md): A Boolean value that indicates whether the layout manager uses the leading of the font.
- [backgroundLayoutEnabled](backgroundlayoutenabled.md): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.
