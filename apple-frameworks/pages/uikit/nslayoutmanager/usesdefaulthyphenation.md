> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/usesdefaulthyphenation](https://developer.apple.com/documentation/uikit/nslayoutmanager/usesdefaulthyphenation)

# usesDefaultHyphenation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.

## Declaration

```swift
var usesDefaultHyphenation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the layout manager makes a best-effort attempt to hyphenate text when wrapping lines. You may override this hyphenation behavior on a per-paragraph basis using the [hyphenationFactor](../nsparagraphstyle/hyphenationfactor.md) property of [NSParagraphStyle](../nsparagraphstyle.md) The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which prevents the layout manager from hyphenating text.

## See Also

### Configuring the global layout manager options

- [allowsNonContiguousLayout](allowsnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager allows noncontiguous layout.
- [hasNonContiguousLayout](hasnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager currently has any areas of noncontiguous layout.
- [showsInvisibleCharacters](showsinvisiblecharacters.md): A Boolean value that indicates whether to substitute visible glyphs for whitespace and other typically invisible characters.
- [showsControlCharacters](showscontrolcharacters.md): A Boolean value that indicates whether the layout manager substitutes visible glyphs for control characters in the layout.
- [usesFontLeading](usesfontleading.md): A Boolean value that indicates whether the layout manager uses the leading of the font.
- [backgroundLayoutEnabled](https://developer.apple.com/documentation/appkit/nslayoutmanager/backgroundlayoutenabled): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that indicates whether the layout manager avoids laying out unusually long or suspicious input.

# usesDefaultHyphenation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.

## Declaration

```objectivec
@property BOOL usesDefaultHyphenation;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the layout manager makes a best-effort attempt to hyphenate text when wrapping lines. You may override this hyphenation behavior on a per-paragraph basis using the [hyphenationFactor](../nsparagraphstyle/hyphenationfactor.md) property of [NSParagraphStyle](../nsparagraphstyle.md) The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which prevents the layout manager from hyphenating text.

## See Also

### Configuring the global layout manager options

- [allowsNonContiguousLayout](allowsnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager allows noncontiguous layout.
- [hasNonContiguousLayout](hasnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager currently has any areas of noncontiguous layout.
- [showsInvisibleCharacters](showsinvisiblecharacters.md): A Boolean value that indicates whether to substitute visible glyphs for whitespace and other typically invisible characters.
- [showsControlCharacters](showscontrolcharacters.md): A Boolean value that indicates whether the layout manager substitutes visible glyphs for control characters in the layout.
- [usesFontLeading](usesfontleading.md): A Boolean value that indicates whether the layout manager uses the leading of the font.
- [backgroundLayoutEnabled](https://developer.apple.com/documentation/appkit/nslayoutmanager/backgroundlayoutenabled): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that indicates whether the layout manager avoids laying out unusually long or suspicious input.
