> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollection](https://developer.apple.com/documentation/coretext/ctfontcollection)

# CTFontCollection (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A font collection.

## Declaration

```swift
class CTFontCollection
```

<a id="overview"></a>

## Overview

A font collection represents a group of font descriptors taken together as a single object.

Font collections provide the capabilities of font enumeration, access to global and custom font collections, and access to the font descriptors comprising the collection.

## Topics

### Creating Font Collections

- [CTFontCollectionCreateFromAvailableFonts(\_:)](ctfontcollectioncreatefromavailablefonts%28__%29.md): Returns a new font collection containing all available fonts.
- [CTFontCollectionCreateWithFontDescriptors(\_:\_:)](ctfontcollectioncreatewithfontdescriptors%28____%29.md): Returns a new font collection based on the given array of font descriptors.
- [CTFontCollectionCreateCopyWithFontDescriptors(\_:\_:\_:)](ctfontcollectioncreatecopywithfontdescriptors%28______%29.md): Returns a copy of the original collection augmented with the given new font descriptors.
- [CTFontCollectionCreateMutableCopy(\_:)](ctfontcollectioncreatemutablecopy%28__%29.md): Creates a mutable copy of the original collection.

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyExclusionDescriptors(\_:)](ctfontcollectioncopyexclusiondescriptors%28__%29.md): Retrieves the array of descriptors to exclude from the match.
- [CTFontCollectionCopyQueryDescriptors(\_:)](ctfontcollectioncopyquerydescriptors%28__%29.md): Retrieves the array of descriptors for font matching.
- [CTFontCollectionSetExclusionDescriptors(\_:\_:)](ctfontcollectionsetexclusiondescriptors%28____%29.md): Replaces the array of descriptors to exclude from the match.
- [CTFontCollectionSetQueryDescriptors(\_:\_:)](ctfontcollectionsetquerydescriptors%28____%29.md): Replaces the array of descriptors for font matching.

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors(\_:)](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions(\_:\_:)](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.

### Get Font Descriptor Attributes

- [CTFontCollectionCopyFontAttribute(\_:\_:\_:)](ctfontcollectioncopyfontattribute%28______%29.md): Retrieves an array of font descriptor attribute values.
- [CTFontCollectionCopyFontAttributes(\_:\_:\_:)](ctfontcollectioncopyfontattributes%28______%29.md): Retrieves an array of dictionaries containing font descriptor attribute values.

### Getting the Type Identifier

- [CTFontCollectionGetTypeID()](ctfontcollectiongettypeid%28%29.md): Returns the type identifier for Core Text font collection references.

### Data Types

- [CTMutableFontCollection](ctmutablefontcollection.md): A reference to a mutable font collection.

### Constants

- [kCTFontCollectionRemoveDuplicatesOption](kctfontcollectionremoveduplicatesoption.md)
- [CTFontCollectionCopyOptions](ctfontcollectioncopyoptions.md): Option bits for use with CTFontCollectionCopyFontAttribute(s).

## Relationships

### Inherited By

- [CTMutableFontCollection](ctmutablefontcollection.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Opaque Types

- [CTFont](ctfont.md): A font object.
- [CTFontDescriptor](ctfontdescriptor.md): A font descriptor.
- [CTFrame](ctframe.md): A frame.
- [CTFramesetter](ctframesetter.md): Generate text frames.
- [CTGlyphInfo](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLine](ctline.md): A line of text.
- [CTParagraphStyle](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRun](ctrun.md): A glyph run.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTFontCollectionRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A font collection.

## Declaration

```objectivec
typedef const struct __CTFontCollection * CTFontCollectionRef;
```

<a id="overview"></a>

## Overview

A font collection represents a group of font descriptors taken together as a single object.

Font collections provide the capabilities of font enumeration, access to global and custom font collections, and access to the font descriptors comprising the collection.

## Topics

### Creating Font Collections

- [CTFontCollectionCreateFromAvailableFonts](ctfontcollectioncreatefromavailablefonts%28__%29.md): Returns a new font collection containing all available fonts.
- [CTFontCollectionCreateWithFontDescriptors](ctfontcollectioncreatewithfontdescriptors%28____%29.md): Returns a new font collection based on the given array of font descriptors.
- [CTFontCollectionCreateCopyWithFontDescriptors](ctfontcollectioncreatecopywithfontdescriptors%28______%29.md): Returns a copy of the original collection augmented with the given new font descriptors.
- [CTFontCollectionCreateMutableCopy](ctfontcollectioncreatemutablecopy%28__%29.md): Creates a mutable copy of the original collection.

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyExclusionDescriptors](ctfontcollectioncopyexclusiondescriptors%28__%29.md): Retrieves the array of descriptors to exclude from the match.
- [CTFontCollectionCopyQueryDescriptors](ctfontcollectioncopyquerydescriptors%28__%29.md): Retrieves the array of descriptors for font matching.
- [CTFontCollectionSetExclusionDescriptors](ctfontcollectionsetexclusiondescriptors%28____%29.md): Replaces the array of descriptors to exclude from the match.
- [CTFontCollectionSetQueryDescriptors](ctfontcollectionsetquerydescriptors%28____%29.md): Replaces the array of descriptors for font matching.

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.

### Get Font Descriptor Attributes

- [CTFontCollectionCopyFontAttribute](ctfontcollectioncopyfontattribute%28______%29.md): Retrieves an array of font descriptor attribute values.
- [CTFontCollectionCopyFontAttributes](ctfontcollectioncopyfontattributes%28______%29.md): Retrieves an array of dictionaries containing font descriptor attribute values.

### Getting the Type Identifier

- [CTFontCollectionGetTypeID](ctfontcollectiongettypeid%28%29.md): Returns the type identifier for Core Text font collection references.

### Data Types

- [CTMutableFontCollectionRef](ctmutablefontcollection.md): A reference to a mutable font collection.

### Constants

- [kCTFontCollectionRemoveDuplicatesOption](kctfontcollectionremoveduplicatesoption.md)
- [CTFontCollectionCopyOptions](ctfontcollectioncopyoptions.md): Option bits for use with CTFontCollectionCopyFontAttribute(s).

## See Also

### Opaque Types

- [CTFontRef](ctfont.md): A font object.
- [CTFontDescriptorRef](ctfontdescriptor.md): A font descriptor.
- [CTFrameRef](ctframe.md): A frame.
- [CTFramesetterRef](ctframesetter.md): Generate text frames.
- [CTGlyphInfoRef](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLineRef](ctline.md): A line of text.
- [CTParagraphStyleRef](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRunRef](ctrun.md): A glyph run.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
