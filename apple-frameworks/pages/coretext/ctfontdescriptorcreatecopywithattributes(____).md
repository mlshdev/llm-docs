> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptorcreatecopywithattributes(_:_:)](https://developer.apple.com/documentation/coretext/ctfontdescriptorcreatecopywithattributes(_:_:))

# CTFontDescriptorCreateCopyWithAttributes(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a copy of the original font descriptor with new attributes.

## Declaration

```swift
func CTFontDescriptorCreateCopyWithAttributes(_ original: CTFontDescriptor, _ attributes: CFDictionary) -> CTFontDescriptor
```

## Parameters

- `original`: The original font descriptor.
- `attributes`: A dictionary containing arbitrary attributes.

<a id="return-value"></a>

## Return Value

A new copy of the original font descriptor with attributes augmented by those specified. If there are conflicts between attributes, the new attributes replace existing ones.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize(\_:\_:)](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes(\_:)](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithVariation(\_:\_:\_:)](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature(\_:\_:\_:)](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithFamily(\_:\_:)](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateCopyWithSymbolicTraits(\_:\_:\_:)](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptors(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.

# CTFontDescriptorCreateCopyWithAttributes (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a copy of the original font descriptor with new attributes.

## Declaration

```objectivec
extern CTFontDescriptorRefCTFontDescriptorCreateCopyWithAttributes(CTFontDescriptorRef original, CFDictionaryRef attributes);
```

## Parameters

- `original`: The original font descriptor.
- `attributes`: A dictionary containing arbitrary attributes.

<a id="return-value"></a>

## Return Value

A new copy of the original font descriptor with attributes augmented by those specified. If there are conflicts between attributes, the new attributes replace existing ones.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithVariation](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithFamily](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateCopyWithSymbolicTraits](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptors](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.
