> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/symbolictraits-swift.struct/expanded](https://developer.apple.com/documentation/appkit/nsfontdescriptor/symbolictraits-swift.struct/expanded)

# expanded (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The font’s characters have an expanded width.

## Declaration

```swift
static var expanded: NSFontDescriptor.SymbolicTraits { get }
```

<a id="Discussion"></a>

## Discussion

Expanded and condensed traits are mutually exclusive.

## See Also

### Symbolic Traits

- [italic](italic.md): The font’s style is italic.
- [bold](bold.md): The font’s style is boldface.
- [condensed](condensed.md): The font’s characters have a condensed width.
- [monoSpace](monospace.md): The font’s characters all have the same width.
- [vertical](vertical.md): The font uses vertical glyph variants and metrics.
- [UIOptimized](uioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as in control titles, if necessary.
- [tightLeading](tightleading.md): The font uses a leading value that’s less than the default.
- [looseLeading](looseleading.md): The font uses a leading value that’s greater than the default.
- [classMask](classmask.md): The font family class mask that you use to access font descriptor values.
- [classOldStyleSerifs](classoldstyleserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 15th to 17th centuries.
- [classTransitionalSerifs](classtransitionalserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 18th to 19th centuries.
- [classModernSerifs](classmodernserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 20th century.
- [classClarendonSerifs](classclarendonserifs.md): The font’s characters include variations of old style and transitional serifs.
- [classSlabSerifs](classslabserifs.md): The font’s characters use square transitions, without brackets, between strokes and serifs.
- [classFreeformSerifs](classfreeformserifs.md): The font’s characters include serifs, and don’t generally fit within other serif design classifications.

# NSFontDescriptorTraitExpanded (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The font’s characters have an expanded width.

## Declaration

```objectivec
NSFontDescriptorTraitExpanded
```

<a id="Discussion"></a>

## Discussion

Expanded and condensed traits are mutually exclusive.

## See Also

### Symbolic Traits

- [NSFontDescriptorTraitItalic](italic.md): The font’s style is italic.
- [NSFontDescriptorTraitBold](bold.md): The font’s style is boldface.
- [NSFontDescriptorTraitCondensed](condensed.md): The font’s characters have a condensed width.
- [NSFontDescriptorTraitMonoSpace](monospace.md): The font’s characters all have the same width.
- [NSFontDescriptorTraitVertical](vertical.md): The font uses vertical glyph variants and metrics.
- [NSFontDescriptorTraitUIOptimized](uioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as in control titles, if necessary.
- [NSFontDescriptorTraitTightLeading](tightleading.md): The font uses a leading value that’s less than the default.
- [NSFontDescriptorTraitLooseLeading](looseleading.md): The font uses a leading value that’s greater than the default.
- [NSFontDescriptorClassMask](classmask.md): The font family class mask that you use to access font descriptor values.
- [NSFontDescriptorClassUnknown](../../nsfontdescriptorsymbolictraits/nsfontdescriptorclassunknown.md): The font has no design classification.
- [NSFontDescriptorClassOldStyleSerifs](classoldstyleserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 15th to 17th centuries.
- [NSFontDescriptorClassTransitionalSerifs](classtransitionalserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 18th to 19th centuries.
- [NSFontDescriptorClassModernSerifs](classmodernserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 20th century.
- [NSFontDescriptorClassClarendonSerifs](classclarendonserifs.md): The font’s characters include variations of old style and transitional serifs.
- [NSFontDescriptorClassSlabSerifs](classslabserifs.md): The font’s characters use square transitions, without brackets, between strokes and serifs.
