> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptor](https://developer.apple.com/documentation/coretext/ctfontdescriptor)

# CTFontDescriptor (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A font descriptor.

## Declaration

```swift
class CTFontDescriptor
```

<a id="overview"></a>

## Overview

A font descriptor is a dictionary of attributes (such as name, point size, and variation) that can completely specify a font.

A font descriptor can be an incomplete specification, in which case the system chooses the most appropriate font to match the given attributes.

## Topics

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize(\_:\_:)](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes(\_:)](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes(\_:\_:)](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation(\_:\_:\_:)](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature(\_:\_:\_:)](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithFamily(\_:\_:)](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateCopyWithSymbolicTraits(\_:\_:\_:)](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptors(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.

### Getting Attributes

- [CTFontDescriptorCopyAttributes(\_:)](ctfontdescriptorcopyattributes%28__%29.md): Returns the attributes dictionary of the font descriptor.
- [CTFontDescriptorCopyAttribute(\_:\_:)](ctfontdescriptorcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute.
- [CTFontDescriptorCopyLocalizedAttribute(\_:\_:\_:)](ctfontdescriptorcopylocalizedattribute%28______%29.md): Returns a localized value for the requested attribute, if available.

### Getting the Font Descriptor Type

- [CTFontDescriptorGetTypeID()](ctfontdescriptorgettypeid%28%29.md): Returns the type identifier for Core Text font descriptor references.

### Accessing Font Attributes

- [Font Attributes](font-attributes.md): The keys for accessing font attributes from a font descriptor.
- [CTFontOrientation](ctfontorientation.md): The intended rendering orientation of the font for obtaining glyph metrics.
- [CTFontFormat](ctfontformat.md): The recognized format of the font.
- [CTFontPriority](ctfontpriority.md): The priority of font descriptors when resolving duplicates and sorting match results.

### Accessing Font Traits

- [Font Traits](font-traits.md): The keys for accessing font traits from a font descriptor.
- [Font Class Mask Shift Constants](font-class-mask-shift-constants.md): These constants represent the font class mask shift.
- [CTFontSymbolicTraits](ctfontsymbolictraits.md): The symbolic representation of stylistic font attributes.
- [CTFontStylisticClass](ctfontstylisticclass.md): The stylistic class values of the font.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Opaque Types

- [CTFont](ctfont.md): A font object.
- [CTFontCollection](ctfontcollection.md): A font collection.
- [CTFrame](ctframe.md): A frame.
- [CTFramesetter](ctframesetter.md): Generate text frames.
- [CTGlyphInfo](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLine](ctline.md): A line of text.
- [CTParagraphStyle](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRun](ctrun.md): A glyph run.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTFontDescriptorRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A font descriptor.

## Declaration

```objectivec
typedef const struct __CTFontDescriptor * CTFontDescriptorRef;
```

<a id="overview"></a>

## Overview

A font descriptor is a dictionary of attributes (such as name, point size, and variation) that can completely specify a font.

A font descriptor can be an incomplete specification, in which case the system chooses the most appropriate font to match the given attributes.

## Topics

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithFamily](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateCopyWithSymbolicTraits](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptors](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.

### Getting Attributes

- [CTFontDescriptorCopyAttributes](ctfontdescriptorcopyattributes%28__%29.md): Returns the attributes dictionary of the font descriptor.
- [CTFontDescriptorCopyAttribute](ctfontdescriptorcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute.
- [CTFontDescriptorCopyLocalizedAttribute](ctfontdescriptorcopylocalizedattribute%28______%29.md): Returns a localized value for the requested attribute, if available.

### Getting the Font Descriptor Type

- [CTFontDescriptorGetTypeID](ctfontdescriptorgettypeid%28%29.md): Returns the type identifier for Core Text font descriptor references.

### Accessing Font Attributes

- [Font Attributes](font-attributes.md): The keys for accessing font attributes from a font descriptor.
- [CTFontOrientation](ctfontorientation.md): The intended rendering orientation of the font for obtaining glyph metrics.
- [CTFontFormat](ctfontformat.md): The recognized format of the font.
- [CTFontPriority](ctfontpriority.md): The priority of font descriptors when resolving duplicates and sorting match results.

### Accessing Font Traits

- [Font Traits](font-traits.md): The keys for accessing font traits from a font descriptor.
- [Font Class Mask Shift Constants](font-class-mask-shift-constants.md): These constants represent the font class mask shift.
- [CTFontSymbolicTraits](ctfontsymbolictraits.md): The symbolic representation of stylistic font attributes.
- [CTFontStylisticClass](ctfontstylisticclass.md): The stylistic class values of the font.

## See Also

### Opaque Types

- [CTFontRef](ctfont.md): A font object.
- [CTFontCollectionRef](ctfontcollection.md): A font collection.
- [CTFrameRef](ctframe.md): A frame.
- [CTFramesetterRef](ctframesetter.md): Generate text frames.
- [CTGlyphInfoRef](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLineRef](ctline.md): A line of text.
- [CTParagraphStyleRef](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRunRef](ctrun.md): A glyph run.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
