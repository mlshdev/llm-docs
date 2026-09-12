> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/limitslayoutforsuspiciouscontents](https://developer.apple.com/documentation/uikit/nslayoutmanager/limitslayoutforsuspiciouscontents)

# limitsLayoutForSuspiciousContents (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

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
- [backgroundLayoutEnabled](https://developer.apple.com/documentation/appkit/nslayoutmanager/backgroundlayoutenabled): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.

# limitsLayoutForSuspiciousContents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

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
- [backgroundLayoutEnabled](https://developer.apple.com/documentation/appkit/nslayoutmanager/backgroundlayoutenabled): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.
